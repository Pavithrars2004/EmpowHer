
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ChevronRight, 
  Wallet, 
  ShoppingCart, 
  Receipt, 
  CheckCircle,
  HelpCircle,
  BarChart2
} from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const CreditEvaluationDemo = () => {
  const { toast } = useToast();
  const [evaluationStep, setEvaluationStep] = useState(0);
  const [dataConnected, setDataConnected] = useState<Record<string, boolean>>({
    utilities: false,
    ecommerce: false,
    digitalWallet: false
  });
  const [creditScore, setCreditScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const factors = [
    { name: "Payment History", score: 87, impact: "High", description: "Consistent utility bill payments" },
    { name: "E-commerce Activity", score: 92, impact: "Medium", description: "Regular business transactions" },
    { name: "Digital Payments", score: 78, impact: "Medium", description: "Consistent revenue patterns" },
    { name: "Business Growth", score: 73, impact: "Low", description: "Steady increase in transactions" }
  ];

  const handleConnectData = (type: string) => {
    setLoading(true);
    
    setTimeout(() => {
      setDataConnected(prev => ({
        ...prev,
        [type]: true
      }));
      setLoading(false);
      
      toast({
        title: "Data Connected Successfully",
        description: `Your ${type} data has been securely connected.`,
      });
      
      // If all data sources are connected, automatically move to next step
      if (Object.values({...dataConnected, [type]: true}).every(value => value)) {
        setTimeout(() => {
          setEvaluationStep(1);
        }, 500);
      }
    }, 1500);
  };

  const handleRunEvaluation = () => {
    if (evaluationStep !== 1) return;
    
    setLoading(true);
    setEvaluationStep(2);
    
    // Simulate AI processing time
    setTimeout(() => {
      const generatedScore = Math.floor(Math.random() * (850 - 650) + 650);
      setCreditScore(generatedScore);
      setLoading(false);
      setEvaluationStep(3);
      
      toast({
        title: "Credit Evaluation Complete",
        description: "Your alternative credit score has been generated.",
      });
    }, 3000);
  };

  const getScoreColor = () => {
    if (!creditScore) return "text-gray-500";
    if (creditScore >= 750) return "text-green-500";
    if (creditScore >= 700) return "text-blue-500";
    return "text-orange-500";
  };

  const getScoreCategory = () => {
    if (!creditScore) return "";
    if (creditScore >= 750) return "Excellent";
    if (creditScore >= 700) return "Good";
    if (creditScore >= 650) return "Fair";
    return "Needs Improvement";
  };

  return (
    <div className="glass-card rounded-xl p-8 shadow-lg">
      <h3 className="text-xl font-bold mb-6">AI Credit Evaluation Demo</h3>
      
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium">Evaluation Progress</span>
          <span className="text-sm font-medium">{Math.min(evaluationStep * 33, 100)}%</span>
        </div>
        <Progress value={Math.min(evaluationStep * 33, 100)} className="h-2" />
      </div>
      
      <Tabs defaultValue="connect" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger 
            value="connect" 
            className={evaluationStep >= 0 ? "" : "opacity-50 cursor-not-allowed"}
            disabled={evaluationStep < 0}
          >
            Connect Data
          </TabsTrigger>
          <TabsTrigger 
            value="analyze" 
            className={evaluationStep >= 1 ? "" : "opacity-50 cursor-not-allowed"}
            disabled={evaluationStep < 1}
          >
            Analysis
          </TabsTrigger>
          <TabsTrigger 
            value="results" 
            className={evaluationStep >= 3 ? "" : "opacity-50 cursor-not-allowed"}
            disabled={evaluationStep < 3}
          >
            Results
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="connect" className="p-4">
          <div className="text-sm text-gray-600 mb-6">
            Connect your alternative financial data sources to build your credit profile:
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Receipt size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Utility Payments</h4>
                  <p className="text-sm text-gray-500">Connect your utility bill payment history</p>
                </div>
              </div>
              <Button 
                variant={dataConnected.utilities ? "outline" : "default"}
                size="sm"
                onClick={() => handleConnectData('utilities')}
                disabled={dataConnected.utilities || loading}
              >
                {dataConnected.utilities ? (
                  <span className="flex items-center space-x-1">
                    <CheckCircle size={16} />
                    <span>Connected</span>
                  </span>
                ) : "Connect"}
              </Button>
            </div>
            
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <ShoppingCart size={20} />
                </div>
                <div>
                  <h4 className="font-medium">E-commerce Activity</h4>
                  <p className="text-sm text-gray-500">Connect your business e-commerce data</p>
                </div>
              </div>
              <Button 
                variant={dataConnected.ecommerce ? "outline" : "default"}
                size="sm"
                onClick={() => handleConnectData('ecommerce')}
                disabled={dataConnected.ecommerce || loading}
              >
                {dataConnected.ecommerce ? (
                  <span className="flex items-center space-x-1">
                    <CheckCircle size={16} />
                    <span>Connected</span>
                  </span>
                ) : "Connect"}
              </Button>
            </div>
            
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Wallet size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Digital Wallet</h4>
                  <p className="text-sm text-gray-500">Connect your digital payment history</p>
                </div>
              </div>
              <Button 
                variant={dataConnected.digitalWallet ? "outline" : "default"}
                size="sm"
                onClick={() => handleConnectData('digitalWallet')}
                disabled={dataConnected.digitalWallet || loading}
              >
                {dataConnected.digitalWallet ? (
                  <span className="flex items-center space-x-1">
                    <CheckCircle size={16} />
                    <span>Connected</span>
                  </span>
                ) : "Connect"}
              </Button>
            </div>
          </div>
          
          {Object.values(dataConnected).every(v => v) && (
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-4">All data sources connected successfully!</p>
              <Button onClick={() => setEvaluationStep(1)} className="px-8">
                Continue to Analysis <ChevronRight size={16} />
              </Button>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="analyze" className="p-4">
          <div className="text-center py-8">
            {evaluationStep === 1 ? (
              <>
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                  <BarChart2 size={32} />
                </div>
                <h4 className="text-lg font-semibold mb-2">Ready to analyze your data</h4>
                <p className="text-sm text-gray-600 mb-6">
                  Our AI will analyze your connected financial data to generate an alternative credit score
                </p>
                <Button 
                  onClick={handleRunEvaluation}
                  size="lg"
                  className="px-8"
                >
                  Run Credit Evaluation
                </Button>
              </>
            ) : evaluationStep === 2 ? (
              <>
                <div className="w-20 h-20 border-4 border-t-primary border-r-primary/30 border-b-primary/10 border-l-primary/30 rounded-full animate-spin mx-auto mb-6"></div>
                <h4 className="text-lg font-semibold mb-2">Analyzing your data...</h4>
                <p className="text-sm text-gray-600">
                  Our AI model is processing your information. This typically takes 20-30 seconds.
                </p>
              </>
            ) : null}
          </div>
        </TabsContent>
        
        <TabsContent value="results" className="p-4">
          {creditScore && (
            <>
              <div className="text-center mb-8">
                <div className="relative w-40 h-40 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full border-8 border-gray-100"></div>
                  <div className="absolute inset-4 rounded-full border-t-8 border-r-8 border-primary"></div>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className={`text-4xl font-bold ${getScoreColor()}`}>{creditScore}</span>
                    <span className="text-sm text-gray-500">{getScoreCategory()}</span>
                  </div>
                </div>
                <h4 className="text-lg font-semibold">Your Alternative Credit Score</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Based on your alternative financial data
                </p>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setShowExplanation(!showExplanation)}
                  className="mt-2"
                >
                  <HelpCircle size={16} className="mr-1" />
                  {showExplanation ? "Hide Explanation" : "How was this calculated?"}
                </Button>
              </div>
              
              {showExplanation && (
                <div className="border rounded-lg p-4 bg-gray-50 mb-6">
                  <h5 className="text-sm font-semibold mb-4">Explainable AI Breakdown</h5>
                  
                  <div className="space-y-4">
                    {factors.map((factor, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">{factor.name}</span>
                          <div className="flex items-center">
                            <span className="text-sm mr-2">{factor.score}</span>
                            <span className={`text-xs px-2 py-0.5 rounded ${
                              factor.impact === "High" ? "bg-green-100 text-green-800" :
                              factor.impact === "Medium" ? "bg-blue-100 text-blue-800" :
                              "bg-gray-100 text-gray-800"
                            }`}>
                              {factor.impact} Impact
                            </span>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                          <div 
                            className="bg-primary rounded-full h-2" 
                            style={{ width: `${factor.score}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-gray-500">{factor.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex flex-col space-y-3">
                <Button>Apply for Funding Options</Button>
                <Button variant="outline">Download Credit Report</Button>
              </div>
            </>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CreditEvaluationDemo;


import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import {
  Building,
  ExternalLink,
  Globe,
  PackageOpen,
  ShoppingBag,
  Star,
  TrendingUp,
  Users,
  Check,
  MapPin,
  Clock,
  BarChart4,
  Truck
} from 'lucide-react';

interface Marketplace {
  id: number;
  name: string;
  type: 'B2B' | 'B2C' | 'Government';
  logo: string;
  description: string;
  categories: string[];
  sellerCount: number;
  rating: number;
  fees: string;
  requirements: string[];
  compatibility: number;
}

interface Opportunity {
  id: number;
  title: string;
  organization: string;
  location: string;
  deadline: string;
  value: string;
  category: string;
  status: 'open' | 'closing_soon' | 'closed';
  description: string;
}

const MarketLinkageDemo = () => {
  const { toast } = useToast();
  const [profileCompletion, setProfileCompletion] = useState(65);
  const [visibilityScore, setVisibilityScore] = useState(58);
  const [showCompatibility, setShowCompatibility] = useState(false);
  
  const marketplaces: Marketplace[] = [
    {
      id: 1,
      name: "GlobalMarket",
      type: 'B2B',
      logo: "https://placehold.co/200x100/6A1B9A/FFFFFF?text=GlobalMarket",
      description: "Leading B2B platform connecting businesses with international buyers",
      categories: ["Handicrafts", "Textiles", "Organic Products"],
      sellerCount: 15000,
      rating: 4.7,
      fees: "5-10% commission per sale",
      requirements: ["Business registration", "Product certification", "Quality standards"],
      compatibility: 92
    },
    {
      id: 2,
      name: "LocalCraft",
      type: 'B2C',
      logo: "https://placehold.co/200x100/FF6F61/FFFFFF?text=LocalCraft",
      description: "Marketplace for handmade and artisanal products with focus on local crafts",
      categories: ["Handmade Goods", "Artwork", "Jewelry"],
      sellerCount: 8500,
      rating: 4.5,
      fees: "8% commission per sale",
      requirements: ["Product photos", "Seller profile", "Shipping options"],
      compatibility: 85
    },
    {
      id: 3,
      name: "ProcureGov",
      type: 'Government',
      logo: "https://placehold.co/200x100/333333/FFFFFF?text=ProcureGov",
      description: "Government procurement platform for public sector opportunities",
      categories: ["Services", "Supplies", "Construction"],
      sellerCount: 5200,
      rating: 4.2,
      fees: "Annual subscription $300",
      requirements: ["Business registration", "Tax compliance", "Certifications"],
      compatibility: 78
    },
    {
      id: 4,
      name: "EcoMarket",
      type: 'B2C',
      logo: "https://placehold.co/200x100/8BC34A/FFFFFF?text=EcoMarket",
      description: "Platform for sustainable and eco-friendly products and services",
      categories: ["Sustainable Products", "Organic Goods", "Green Services"],
      sellerCount: 6800,
      rating: 4.6,
      fees: "7% commission + $15 monthly",
      requirements: ["Sustainability certification", "Product verification", "Eco-standards"],
      compatibility: 89
    }
  ];
  
  const opportunities: Opportunity[] = [
    {
      id: 1,
      title: "Textile Supply for Corporate Uniforms",
      organization: "TechCorp Industries",
      location: "Multiple Locations",
      deadline: "15 days remaining",
      value: "$25,000 - $50,000",
      category: "Textiles",
      status: 'open',
      description: "Supply of high-quality textile materials for corporate uniforms across multiple locations."
    },
    {
      id: 2,
      title: "Handcrafted Corporate Gifts",
      organization: "Global Finance Group",
      location: "National",
      deadline: "7 days remaining",
      value: "$10,000 - $15,000",
      category: "Handicrafts",
      status: 'closing_soon',
      description: "Seeking handcrafted corporate gift items for annual client appreciation program."
    },
    {
      id: 3,
      title: "Organic Food Products Supply",
      organization: "WellBeing Hotel Chain",
      location: "Regional",
      deadline: "30 days remaining",
      value: "$30,000 - $45,000",
      category: "Organic Products",
      status: 'open',
      description: "Regular supply of certified organic food products for hotel chain restaurants."
    },
    {
      id: 4,
      title: "Artisanal Jewelry for Retail",
      organization: "LuxeStyle Boutiques",
      location: "Metropolitan Areas",
      deadline: "Expired",
      value: "$5,000 - $12,000",
      category: "Jewelry",
      status: 'closed',
      description: "Collection of artisanal jewelry pieces for premium boutique retail locations."
    }
  ];

  const handleCompleteProfile = () => {
    setProfileCompletion(Math.min(profileCompletion + 15, 100));
    
    toast({
      title: "Profile Updated",
      description: "Your business profile has been updated and visibility score improved.",
    });
    
    setTimeout(() => {
      setVisibilityScore(Math.min(visibilityScore + 12, 100));
    }, 500);
  };

  const handleApplyToMarketplace = (marketplace: Marketplace) => {
    toast({
      title: `Application Initiated`,
      description: `Your application to join ${marketplace.name} has been started. Complete all requirements to finalize.`,
    });
  };

  const handleExploreOpportunity = (opportunity: Opportunity) => {
    if (opportunity.status === 'closed') {
      toast({
        title: "Opportunity Expired",
        description: "This procurement opportunity is no longer available.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Opportunity Details",
      description: `Detailed information and application form for "${opportunity.title}" has been opened.`,
    });
  };

  return (
    <div className="glass-card rounded-xl p-8 shadow-lg">
      <h3 className="text-xl font-bold mb-6">Market Linkage Hub Demo</h3>
      
      <Tabs defaultValue="profile">
        <TabsList className="mb-6 grid grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="profile">Business Profile</TabsTrigger>
          <TabsTrigger value="marketplaces">Marketplaces</TabsTrigger>
          <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Digital Visibility</CardTitle>
                <CardDescription>
                  Optimize your business profile to improve market discoverability
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Profile Completion</span>
                      <span className="text-sm font-medium">{profileCompletion}%</span>
                    </div>
                    <Progress value={profileCompletion} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Marketplace Visibility Score</span>
                      <span className="text-sm font-medium">{visibilityScore}%</span>
                    </div>
                    <Progress value={visibilityScore} className="h-2" />
                  </div>
                  
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h5 className="font-medium mb-2 text-sm">Improvement Recommendations</h5>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <div className={`w-5 h-5 rounded-full ${profileCompletion >= 85 ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'} flex items-center justify-center mr-2 flex-shrink-0 mt-0.5`}>
                          {profileCompletion >= 85 ? <Check size={12} /> : <span className="text-xs">+</span>}
                        </div>
                        <span className="text-gray-600">Add product certifications and quality standards</span>
                      </li>
                      <li className="flex items-start">
                        <div className={`w-5 h-5 rounded-full ${profileCompletion >= 100 ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'} flex items-center justify-center mr-2 flex-shrink-0 mt-0.5`}>
                          {profileCompletion >= 100 ? <Check size={12} /> : <span className="text-xs">+</span>}
                        </div>
                        <span className="text-gray-600">Upload professional business photos</span>
                      </li>
                      <li className="flex items-start">
                        <div className={`w-5 h-5 rounded-full ${visibilityScore >= 80 ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'} flex items-center justify-center mr-2 flex-shrink-0 mt-0.5`}>
                          {visibilityScore >= 80 ? <Check size={12} /> : <span className="text-xs">+</span>}
                        </div>
                        <span className="text-gray-600">Complete your business story and values</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleCompleteProfile} className="w-full">
                  Complete Profile
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Business Insights</CardTitle>
                <CardDescription>
                  Data-driven recommendations for market opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-3">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="text-primary mr-2 h-5 w-5" />
                      <h5 className="font-medium">Market Trend Alert</h5>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Rising demand for handmade textile products in the export market. Consider expanding your production.
                    </p>
                    <div className="text-xs text-gray-500">Based on 3-month market analysis</div>
                  </div>
                  
                  <div className="border rounded-lg p-3">
                    <div className="flex items-center mb-2">
                      <Users className="text-primary mr-2 h-5 w-5" />
                      <h5 className="font-medium">Buyer Match</h5>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      5 new potential buyers have searched for products like yours in the past week.
                    </p>
                    <Button size="sm" variant="outline" className="w-full">
                      View Potential Matches
                    </Button>
                  </div>
                  
                  <div className="border rounded-lg p-3">
                    <div className="flex items-center mb-2">
                      <Globe className="text-primary mr-2 h-5 w-5" />
                      <h5 className="font-medium">Regional Opportunity</h5>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Growing market for your products in neighboring states. Consider expanding your logistics network.
                    </p>
                    <div className="text-xs text-gray-500">Based on geospatial analysis</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Insights
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="marketplaces">
          <div className="flex flex-col space-y-2 mb-6">
            <div className="flex justify-between items-center">
              <h4 className="font-semibold">Recommended Marketplaces</h4>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowCompatibility(!showCompatibility)}
              >
                {showCompatibility ? "Hide Compatibility" : "Show Compatibility"}
              </Button>
            </div>
            <p className="text-sm text-gray-600">
              Marketplaces that match your business profile and products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {marketplaces.map((marketplace) => (
              <Card key={marketplace.id} className="overflow-hidden">
                <div className="h-12 bg-gray-100 flex items-center justify-center">
                  <img 
                    src={marketplace.logo} 
                    alt={marketplace.name} 
                    className="max-h-full p-1"
                  />
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{marketplace.name}</CardTitle>
                    <Badge variant={
                      marketplace.type === 'B2B' ? 'outline' : 
                      marketplace.type === 'B2C' ? 'secondary' : 'default'
                    }>
                      {marketplace.type}
                    </Badge>
                  </div>
                  <CardDescription>{marketplace.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="pb-4">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {marketplace.categories.map((category, index) => (
                      <Badge key={index} variant="secondary" className="font-normal text-xs">
                        {category}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm mb-3">
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{marketplace.sellerCount.toLocaleString()} sellers</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" />
                      <span>{marketplace.rating} rating</span>
                    </div>
                  </div>
                  
                  {showCompatibility && (
                    <div className="mb-3">
                      <div className="flex justify-between mb-1 text-xs">
                        <span>Business Compatibility</span>
                        <span>{marketplace.compatibility}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div 
                          className="bg-primary rounded-full h-1.5" 
                          style={{ width: `${marketplace.compatibility}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <div className="text-xs text-gray-600 space-y-1">
                    <div className="flex items-start">
                      <PackageOpen className="w-3.5 h-3.5 mr-1 mt-0.5 flex-shrink-0" />
                      <span>Fees: {marketplace.fees}</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-3.5 h-3.5 mr-1 mt-0.5 flex-shrink-0" />
                      <span>Requirements: {marketplace.requirements.join(", ")}</span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="pt-0">
                  <div className="grid grid-cols-2 gap-2 w-full">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex items-center justify-center"
                    >
                      <ExternalLink className="w-3.5 h-3.5 mr-1" />
                      <span>View Details</span>
                    </Button>
                    <Button 
                      size="sm"
                      className="flex items-center justify-center"
                      onClick={() => handleApplyToMarketplace(marketplace)}
                    >
                      Apply Now
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="opportunities">
          <div className="mb-6">
            <h4 className="font-semibold mb-2">Procurement Opportunities</h4>
            <p className="text-sm text-gray-600">
              Tender opportunities and procurement contracts matching your business
            </p>
          </div>
          
          <div className="space-y-4">
            {opportunities.map((opportunity) => (
              <div 
                key={opportunity.id}
                className={`border rounded-lg p-4 ${
                  opportunity.status === 'closed' ? 'opacity-70' : 'hover:border-primary/30 transition-all'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h5 className="font-medium">{opportunity.title}</h5>
                    <p className="text-sm text-gray-600">{opportunity.description}</p>
                  </div>
                  <Badge variant={
                    opportunity.status === 'open' ? 'outline' :
                    opportunity.status === 'closing_soon' ? 'secondary' : 'default'
                  } className={
                    opportunity.status === 'open' ? 'bg-green-50 text-green-700 border-green-200' :
                    opportunity.status === 'closing_soon' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                    'bg-gray-100 text-gray-700'
                  }>
                    {opportunity.status === 'open' ? 'Open' :
                     opportunity.status === 'closing_soon' ? 'Closing Soon' : 'Closed'}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Building className="w-4 h-4 mr-2" />
                    <span>{opportunity.organization}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{opportunity.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{opportunity.deadline}</span>
                  </div>
                  <div className="flex items-center">
                    <BarChart4 className="w-4 h-4 mr-2" />
                    <span>{opportunity.value}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <Badge variant="secondary" className="flex items-center">
                    <ShoppingBag className="w-3 h-3 mr-1" />
                    {opportunity.category}
                  </Badge>
                  
                  <Button 
                    variant={opportunity.status === 'closed' ? "outline" : "default"}
                    size="sm"
                    disabled={opportunity.status === 'closed'}
                    onClick={() => handleExploreOpportunity(opportunity)}
                  >
                    {opportunity.status === 'closed' ? 'Expired' : 'Explore Opportunity'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 border rounded-lg bg-gray-50">
            <div className="flex items-center mb-3">
              <Truck className="w-5 h-5 text-primary mr-2" />
              <h5 className="font-medium">Logistics Support Available</h5>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Need help fulfilling large orders? NariNiti provides logistics support and supply chain optimization for women entrepreneurs.
            </p>
            <Button variant="outline" className="w-full">
              View Logistics Services
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MarketLinkageDemo;

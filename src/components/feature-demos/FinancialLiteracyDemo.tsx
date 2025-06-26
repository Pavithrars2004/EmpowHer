
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Award,
  BarChart,
  Check,
  Clock,
  Landmark,
  TrendingUp,
  Users,
  ChevronRight,
  Play
} from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

interface Module {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  progress: number;
  badge?: {
    name: string;
    icon: React.ReactNode;
  };
  completed: boolean;
  lessons: {
    id: number;
    title: string;
    completed: boolean;
    duration: string;
  }[];
}

const FinancialLiteracyDemo = () => {
  const { toast } = useToast();
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [activeLesson, setActiveLesson] = useState<number | null>(null);
  const [showLesson, setShowLesson] = useState(false);
  
  const modules: Module[] = [
    {
      id: 1,
      title: "Financial Basics",
      description: "Learn fundamental business financial concepts",
      icon: <Landmark size={20} />,
      duration: "45 min",
      progress: 100,
      badge: {
        name: "Financial Foundation",
        icon: <Award size={16} />
      },
      completed: true,
      lessons: [
        { id: 101, title: "Understanding Business Cash Flow", completed: true, duration: "15 min" },
        { id: 102, title: "Separating Personal & Business Finances", completed: true, duration: "15 min" },
        { id: 103, title: "Basic Financial Statements", completed: true, duration: "15 min" }
      ]
    },
    {
      id: 2,
      title: "Budgeting Mastery",
      description: "Create and manage effective business budgets",
      icon: <BarChart size={20} />,
      duration: "60 min",
      progress: 66,
      completed: false,
      lessons: [
        { id: 201, title: "Creating a Business Budget", completed: true, duration: "20 min" },
        { id: 202, title: "Expense Tracking Strategies", completed: true, duration: "20 min" },
        { id: 203, title: "Budget Review & Adaptation", completed: false, duration: "20 min" }
      ]
    },
    {
      id: 3,
      title: "Growth & Investment",
      description: "Strategies for sustainable business growth",
      icon: <TrendingUp size={20} />,
      duration: "75 min",
      progress: 33,
      completed: false,
      lessons: [
        { id: 301, title: "Identifying Growth Opportunities", completed: true, duration: "25 min" },
        { id: 302, title: "Evaluating Investment Options", completed: false, duration: "25 min" },
        { id: 303, title: "Creating a Growth Plan", completed: false, duration: "25 min" }
      ]
    },
    {
      id: 4,
      title: "Business Networking",
      description: "Build valuable connections for your business",
      icon: <Users size={20} />,
      duration: "50 min",
      progress: 0,
      completed: false,
      lessons: [
        { id: 401, title: "Networking Basics", completed: false, duration: "15 min" },
        { id: 402, title: "Finding the Right Communities", completed: false, duration: "15 min" },
        { id: 403, title: "Leveraging Connections for Growth", completed: false, duration: "20 min" }
      ]
    }
  ];

  const handleStartLesson = (moduleId: number, lessonId: number) => {
    setActiveLesson(lessonId);
    setShowLesson(true);
    
    // Simulate tracking user progress
    toast({
      title: "Lesson Started",
      description: "Your progress is being tracked automatically.",
    });
  };

  const handleCompleteLesson = () => {
    if (!selectedModule || activeLesson === null) return;
    
    // Here we would normally update the database with completion status
    setShowLesson(false);
    
    toast({
      title: "Congratulations!",
      description: "You've completed this lesson. Your progress has been saved.",
    });

    // If this was the last incomplete lesson in the module, award badge
    const currentModule = modules.find(m => m.id === selectedModule.id);
    if (currentModule && !currentModule.completed) {
      const allLessonsComplete = currentModule.lessons.every(
        lesson => lesson.id === activeLesson || lesson.completed
      );
      
      if (allLessonsComplete) {
        setTimeout(() => {
          toast({
            title: "🏆 Badge Earned!",
            description: `You've earned the ${currentModule.badge?.name || 'Module Completion'} badge!`,
            duration: 5000,
          });
        }, 1000);
      }
    }
  };

  return (
    <div className="glass-card rounded-xl p-8 shadow-lg">
      <h3 className="text-xl font-bold mb-6">Financial Literacy Demo</h3>
      
      {!selectedModule ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {modules.map((module) => (
              <div 
                key={module.id}
                className="border rounded-lg p-4 hover:shadow-md transition-all cursor-pointer"
                onClick={() => setSelectedModule(module)}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                      {module.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{module.title}</h4>
                      <p className="text-sm text-gray-500">{module.description}</p>
                    </div>
                  </div>
                  {module.completed && (
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      <Check size={12} className="mr-1" /> Complete
                    </Badge>
                  )}
                </div>
                
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Progress</span>
                    <span>{module.progress}%</span>
                  </div>
                  <Progress value={module.progress} className="h-2" />
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock size={12} className="mr-1" />
                    {module.duration}
                  </div>
                  {module.badge && module.completed && (
                    <Badge className="bg-primary/10 text-primary border-0 flex items-center">
                      {module.badge.icon}
                      <span className="ml-1">{module.badge.name}</span>
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center p-4 bg-primary/5 rounded-lg">
            <h4 className="font-medium mb-2">Your Learning Stats</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1</div>
                <div className="text-xs text-gray-500">Modules Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5</div>
                <div className="text-xs text-gray-500">Lessons Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1</div>
                <div className="text-xs text-gray-500">Badges Earned</div>
              </div>
            </div>
          </div>
        </>
      ) : showLesson ? (
        <div className="p-4">
          <div className="flex items-center mb-6">
            <Button variant="outline" size="sm" onClick={() => setShowLesson(false)} className="mr-2">
              Back to module
            </Button>
            <h4 className="font-medium">
              {selectedModule.lessons.find(l => l.id === activeLesson)?.title}
            </h4>
          </div>
          
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-6">
            <div className="text-center">
              <Play size={40} className="mx-auto text-primary mb-2" />
              <p className="text-sm text-gray-500">Lesson video would play here</p>
            </div>
          </div>
          
          <div className="border p-4 rounded-lg mb-6">
            <h5 className="font-medium mb-2">Lesson Content</h5>
            <p className="text-sm text-gray-600 mb-4">
              This is where the lesson content would appear. In a real implementation, 
              this would include interactive content, videos, quizzes, and other learning materials.
            </p>
            
            <div className="bg-primary/5 p-3 rounded-lg text-sm">
              <div className="font-medium mb-1">Key Takeaways:</div>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Understanding important financial concepts</li>
                <li>Practical application in your business</li>
                <li>Tools and resources for implementation</li>
              </ul>
            </div>
          </div>
          
          <Button onClick={handleCompleteLesson} className="w-full">
            Mark as Completed
          </Button>
        </div>
      ) : (
        <div className="p-4">
          <div className="flex items-center mb-6">
            <Button variant="outline" size="sm" onClick={() => setSelectedModule(null)} className="mr-2">
              Back to modules
            </Button>
            <h4 className="font-medium">{selectedModule.title}</h4>
            {selectedModule.badge && (
              <Badge className="ml-auto bg-primary/10 text-primary border-0">
                {selectedModule.badge.icon}
                <span className="ml-1">{selectedModule.badge.name}</span>
              </Badge>
            )}
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-1">
              <span>Module Progress</span>
              <span>{selectedModule.progress}%</span>
            </div>
            <Progress value={selectedModule.progress} className="h-2" />
          </div>
          
          <div className="space-y-4 mb-6">
            {selectedModule.lessons.map((lesson) => (
              <div 
                key={lesson.id}
                className="border rounded-lg p-4 hover:border-primary/30 transition-all cursor-pointer"
                onClick={() => handleStartLesson(selectedModule.id, lesson.id)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 
                      ${lesson.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                      {lesson.completed ? <Check size={16} /> : <BookOpen size={16} />}
                    </div>
                    <div>
                      <h5 className="font-medium">{lesson.title}</h5>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock size={12} className="mr-1" />
                        {lesson.duration}
                      </div>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-gray-400" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between">
            <Button variant="outline">View Resources</Button>
            <Button variant="default" disabled={selectedModule.completed}>
              {selectedModule.completed ? 'Module Completed' : 'Continue Learning'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinancialLiteracyDemo;

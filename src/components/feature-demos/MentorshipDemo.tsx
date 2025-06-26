
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Star, 
  MessageCircle, 
  Users, 
  Award, 
  Video,
  CheckCircle,
  User
} from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

interface Mentor {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  bio: string;
  expertise: string[];
  rating: number;
  tier: 'peer' | 'expert' | 'coach';
  available: boolean;
}

const MentorshipDemo = () => {
  const { toast } = useToast();
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [showScheduleDialog, setShowScheduleDialog] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("mentors");
  const [activeMentorship, setActiveMentorship] = useState<{
    mentor: Mentor;
    date: string;
    time: string;
    topic: string;
  } | null>(null);

  const mentors: Mentor[] = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Business Coach",
      company: "Growth Ventures",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      bio: "Business coach with 15+ years experience helping women entrepreneurs scale their businesses.",
      expertise: ["Business Strategy", "Scaling", "Leadership"],
      rating: 4.9,
      tier: 'coach',
      available: true,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Financial Expert",
      company: "FinSmart Advisors",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Finance specialist focused on helping small businesses optimize cash flow and secure funding.",
      expertise: ["Financial Planning", "Investment", "Funding"],
      rating: 4.7,
      tier: 'expert',
      available: true,
    },
    {
      id: 3,
      name: "Maya Patel",
      role: "Marketing Specialist",
      company: "Digital Reach",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      bio: "Digital marketing expert specializing in helping women-owned businesses increase online visibility.",
      expertise: ["Digital Marketing", "SEO", "Social Media"],
      rating: 4.8,
      tier: 'expert',
      available: false,
    },
    {
      id: 4,
      name: "Leila Chen",
      role: "Entrepreneur",
      company: "EcoFriendly Products",
      avatar: "https://randomuser.me/api/portraits/women/75.jpg",
      bio: "Fellow entrepreneur who can share insights from her journey building a sustainable products business.",
      expertise: ["Entrepreneurship", "Sustainability", "Product Development"],
      rating: 4.5,
      tier: 'peer',
      available: true,
    }
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", 
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  const handleScheduleSession = () => {
    if (!selectedMentor || !selectedDate || !selectedTime) return;
    
    const formattedDate = selectedDate.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
    
    setActiveMentorship({
      mentor: selectedMentor,
      date: formattedDate,
      time: selectedTime,
      topic: "Business Growth Strategy"
    });
    
    setShowScheduleDialog(false);
    setActiveTab("active");
    
    toast({
      title: "Mentorship Session Scheduled",
      description: `Your session with ${selectedMentor.name} is confirmed for ${formattedDate} at ${selectedTime}.`,
    });
  };

  const getMentorTierBadge = (tier: string) => {
    switch (tier) {
      case 'peer':
        return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Peer Mentor</Badge>;
      case 'expert':
        return <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Subject Expert</Badge>;
      case 'coach':
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Business Coach</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="glass-card rounded-xl p-8 shadow-lg">
      <h3 className="text-xl font-bold mb-6">Mentorship Program Demo</h3>
      
      <Tabs defaultValue="mentors" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="mentors">Find Mentors</TabsTrigger>
          <TabsTrigger value="active">Active Mentorship</TabsTrigger>
          <TabsTrigger value="chat">AI Advisor</TabsTrigger>
        </TabsList>
        
        <TabsContent value="mentors">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mentors.map((mentor) => (
              <Card key={mentor.id} className={`overflow-hidden transition-all ${!mentor.available ? 'opacity-70' : 'hover:shadow-md'}`}>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-12 w-12 border-2 border-white shadow">
                        <AvatarImage src={mentor.avatar} />
                        <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-base">{mentor.name}</CardTitle>
                        <CardDescription className="text-sm">
                          {mentor.role} at {mentor.company}
                        </CardDescription>
                      </div>
                    </div>
                    {getMentorTierBadge(mentor.tier)}
                  </div>
                </CardHeader>
                
                <CardContent className="pb-4">
                  <p className="text-sm text-gray-600 mb-4">{mentor.bio}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {mentor.expertise.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="font-normal">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" />
                    <span>{mentor.rating} rating</span>
                  </div>
                </CardContent>
                
                <CardFooter className="pt-0">
                  <Button 
                    variant="default" 
                    className="w-full"
                    disabled={!mentor.available}
                    onClick={() => {
                      setSelectedMentor(mentor);
                      setShowScheduleDialog(true);
                    }}
                  >
                    {mentor.available ? 'Schedule Session' : 'Currently Unavailable'}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="active">
          {activeMentorship ? (
            <div className="p-6 border rounded-lg bg-gray-50">
              <div className="flex items-start mb-6">
                <Avatar className="h-16 w-16 mr-4 border-2 border-white shadow">
                  <AvatarImage src={activeMentorship.mentor.avatar} />
                  <AvatarFallback>{activeMentorship.mentor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                
                <div>
                  <h4 className="text-lg font-bold mb-1">Upcoming Session with {activeMentorship.mentor.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    {activeMentorship.mentor.role} at {activeMentorship.mentor.company}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-1 text-primary" />
                      <span>{activeMentorship.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-primary" />
                      <span>{activeMentorship.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1 text-primary" />
                      <span>{activeMentorship.topic}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Button className="flex items-center justify-center">
                  <Video className="mr-2 h-4 w-4" />
                  Join Video Call
                </Button>
                <Button variant="outline" className="flex items-center justify-center">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
                <Button variant="outline" className="flex items-center justify-center">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  Reschedule
                </Button>
              </div>
              
              <div className="border rounded-lg bg-white p-4">
                <h5 className="font-semibold mb-3">Session Preparation</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                    <span>Review your business goals and challenges before the session</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                    <span>Prepare specific questions related to your business growth strategy</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                    <span>Have your recent business metrics available for discussion</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <User className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">No Active Mentorship</h4>
              <p className="text-gray-500 mb-6">You don't have any scheduled mentorship sessions yet.</p>
              <Button onClick={() => setActiveTab("mentors")}>
                Find a Mentor
              </Button>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="chat">
          <div className="border rounded-lg p-4 mb-6">
            <div className="flex items-center mb-4">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold">NariNiti AI Advisor</h4>
                <p className="text-xs text-gray-500">Available 24/7 for business guidance</p>
              </div>
            </div>
            
            <ScrollArea className="h-64 border rounded-lg p-3 mb-4 bg-gray-50">
              <div className="space-y-4">
                <div className="flex items-start">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <div className="bg-primary/10 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                    <p className="text-sm">
                      Hello! I'm your AI business advisor. How can I help you with your business today?
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start justify-end">
                  <div className="bg-gray-200 p-3 rounded-lg rounded-tr-none max-w-[80%]">
                    <p className="text-sm">
                      I'm struggling with pricing my products. Any advice?
                    </p>
                  </div>
                  <Avatar className="h-8 w-8 ml-2">
                    <AvatarFallback>YO</AvatarFallback>
                  </Avatar>
                </div>
                
                <div className="flex items-start">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <div className="bg-primary/10 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                    <p className="text-sm">
                      Pricing is crucial for your business success. Here are some strategies to consider:
                    </p>
                    <ol className="list-decimal text-sm pl-5 mt-2 space-y-1">
                      <li>Research your competitors to understand market rates</li>
                      <li>Calculate your costs thoroughly (materials, labor, overhead)</li>
                      <li>Consider value-based pricing instead of cost-plus pricing</li>
                      <li>Test different price points with small customer segments</li>
                    </ol>
                    <p className="text-sm mt-2">
                      Would you like me to elaborate on any of these strategies?
                    </p>
                  </div>
                </div>
              </div>
            </ScrollArea>
            
            <div className="relative">
              <input 
                type="text" 
                placeholder="Type your business question..." 
                className="w-full border rounded-full py-2 px-4 pr-16"
              />
              <Button 
                size="sm" 
                className="absolute right-1 top-1 rounded-full w-8 h-8 p-0"
                onClick={() => {
                  toast({
                    title: "AI Advisor",
                    description: "In a real implementation, this would send your message to our AI advisor."
                  });
                }}
              >
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h5 className="font-medium mb-3">Popular Topics</h5>
            <div className="grid grid-cols-2 gap-2">
              {["Business planning", "Marketing strategy", "Financial management", "Work-life balance"].map((topic, i) => (
                <Button key={i} variant="outline" size="sm" className="justify-start">
                  {topic}
                </Button>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <Dialog open={showScheduleDialog} onOpenChange={setShowScheduleDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Schedule Mentorship Session</DialogTitle>
            <DialogDescription>
              {selectedMentor && `Choose a date and time to meet with ${selectedMentor.name}.`}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="flex items-start space-x-4 mb-4">
              {selectedMentor && (
                <>
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={selectedMentor.avatar} />
                    <AvatarFallback>{selectedMentor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{selectedMentor.name}</h4>
                    <p className="text-sm text-gray-500">{selectedMentor.role} at {selectedMentor.company}</p>
                  </div>
                </>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Select Date</label>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => 
                    date < new Date() || 
                    date > new Date(new Date().setDate(new Date().getDate() + 30))
                  }
                  className="border rounded-md"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Select Time</label>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      className={`w-full justify-start ${selectedTime === time ? "" : "text-gray-700"}`}
                      onClick={() => setSelectedTime(time)}
                    >
                      <Clock className="mr-2 h-4 w-4" />
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Session Topic</label>
              <select className="w-full border rounded-md p-2">
                <option>Business Growth Strategy</option>
                <option>Financial Planning</option>
                <option>Marketing & Sales</option>
                <option>Operations & Scaling</option>
                <option>Other (specify in notes)</option>
              </select>
            </div>
          </div>
          
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setShowScheduleDialog(false)}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleScheduleSession}
              disabled={!selectedDate || !selectedTime}
            >
              Schedule Session
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MentorshipDemo;

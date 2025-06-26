
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { supabase } from '@/integrations/supabase/client';
import { 
  LineChart, BarChart, PieChart, 
  CreditCard, Users, BookOpen, 
  BarChart3, Building, Award
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface ProfileData {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
}

interface LoanApplication {
  id: string;
  business_name: string;
  loan_amount: number;
  status: string;
  created_at: string;
}

interface MentorshipSession {
  id: string;
  mentor_name: string;
  session_date: string;
  topic: string;
  status: string;
}

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  progress?: number;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loanApplications, setLoanApplications] = useState<LoanApplication[]>([]);
  const [mentorshipSessions, setMentorshipSessions] = useState<MentorshipSession[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }

    const fetchDashboardData = async () => {
      setLoading(true);
      try {
        // Fetch profile data
        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
        
        if (profileError) throw profileError;
        setProfile(profileData);
        
        // Fetch loan applications
        const { data: loanData, error: loanError } = await supabase
          .from('loan_applications')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });
        
        if (loanError) throw loanError;
        setLoanApplications(loanData || []);
        
        // Fetch mentorship sessions
        const { data: mentorshipData, error: mentorshipError } = await supabase
          .from('mentorship_sessions')
          .select('*')
          .eq('user_id', user.id)
          .order('session_date', { ascending: true });
        
        if (mentorshipError) throw mentorshipError;
        setMentorshipSessions(mentorshipData || []);
        
        // Fetch enrolled courses with progress
        const { data: coursesData, error: coursesError } = await supabase
          .from('user_courses')
          .select(`
            course_id,
            progress,
            courses (
              id,
              title,
              description,
              duration,
              level
            )
          `)
          .eq('user_id', user.id);
        
        if (coursesError) throw coursesError;
        
        // Format courses data
        const formattedCourses = coursesData?.map(item => ({
          id: item.courses.id,
          title: item.courses.title,
          description: item.courses.description,
          duration: item.courses.duration,
          level: item.courses.level,
          progress: item.progress
        })) || [];
        
        setCourses(formattedCourses);
        
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        toast({
          title: 'Error',
          description: 'Failed to load your dashboard data. Please try again.',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [user, navigate, toast]);

  if (!user) return null;

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome, {profile?.full_name || user.email}</h1>
          <p className="text-gray-600">
            Your personalized dashboard for financial empowerment
          </p>
        </div>

        {/* Dashboard Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl mb-1">Loan Applications</CardTitle>
              <p className="text-3xl font-bold">{loanApplications.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <div className="bg-accent/10 p-3 rounded-full mb-4">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="text-xl mb-1">Mentorship Sessions</CardTitle>
              <p className="text-3xl font-bold">{mentorshipSessions.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <div className="bg-secondary/10 p-3 rounded-full mb-4">
                <BookOpen className="h-6 w-6 text-secondary" />
              </div>
              <CardTitle className="text-xl mb-1">Enrolled Courses</CardTitle>
              <p className="text-3xl font-bold">{courses.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <BarChart3 className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-xl mb-1">Financial Score</CardTitle>
              <p className="text-3xl font-bold">720</p>
            </CardContent>
          </Card>
        </div>

        {/* Dashboard Tabs */}
        <Tabs defaultValue="loans" className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="loans">Loan Applications</TabsTrigger>
            <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
            <TabsTrigger value="learning">Learning</TabsTrigger>
          </TabsList>
          
          <TabsContent value="loans" className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Your Loan Applications</h2>
              <Button onClick={() => navigate('/credit-evaluation')}>
                New Application
              </Button>
            </div>
            
            {loanApplications.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-8">
                  <CreditCard className="h-10 w-10 text-gray-400 mb-4" />
                  <p className="text-gray-500 mb-4">You haven't submitted any loan applications yet</p>
                  <Button onClick={() => navigate('/credit-evaluation')}>
                    Apply for Credit
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {loanApplications.map((application) => (
                  <Card key={application.id}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">{application.business_name}</CardTitle>
                      <CardDescription>
                        Amount: ${application.loan_amount.toLocaleString()}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-500">
                            Applied: {new Date(application.created_at).toLocaleDateString()}
                          </p>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm ${
                          application.status === 'approved' ? 'bg-green-100 text-green-800' :
                          application.status === 'rejected' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="mentorship" className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Your Mentorship Sessions</h2>
              <Button onClick={() => navigate('/mentorship')}>
                Schedule Session
              </Button>
            </div>
            
            {mentorshipSessions.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-8">
                  <Users className="h-10 w-10 text-gray-400 mb-4" />
                  <p className="text-gray-500 mb-4">You haven't scheduled any mentorship sessions yet</p>
                  <Button onClick={() => navigate('/mentorship')}>
                    Find a Mentor
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mentorshipSessions.map((session) => (
                  <Card key={session.id}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">Session with {session.mentor_name}</CardTitle>
                      <CardDescription>
                        Topic: {session.topic}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-500">
                            {new Date(session.session_date).toLocaleDateString()} at {new Date(session.session_date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                          </p>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm ${
                          session.status === 'completed' ? 'bg-green-100 text-green-800' :
                          session.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="learning" className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Your Learning Path</h2>
              <Button onClick={() => navigate('/financial-literacy')}>
                Explore Courses
              </Button>
            </div>
            
            {courses.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-8">
                  <BookOpen className="h-10 w-10 text-gray-400 mb-4" />
                  <p className="text-gray-500 mb-4">You haven't enrolled in any courses yet</p>
                  <Button onClick={() => navigate('/financial-literacy')}>
                    Browse Courses
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courses.map((course) => (
                  <Card key={course.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <CardTitle className="text-xl">{course.title}</CardTitle>
                        <div className="bg-gray-100 px-2 py-1 rounded text-xs">
                          {course.level}
                        </div>
                      </div>
                      <CardDescription>
                        Duration: {course.duration}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{course.progress || 0}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-primary rounded-full h-2"
                            style={{ width: `${course.progress || 0}%` }}
                          />
                        </div>
                      </div>
                      <Button variant="outline" className="w-full mt-2" onClick={() => navigate('/financial-literacy')}>
                        Continue Learning
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle>Financial Growth</CardTitle>
              <CardDescription>Your business performance over time</CardDescription>
            </CardHeader>
            <CardContent className="h-80 flex items-center justify-center">
              <div className="text-center text-gray-500 flex flex-col items-center">
                <LineChart className="h-16 w-16 mb-2 text-gray-300" />
                <p>Financial growth data will appear here as you use the platform</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start" onClick={() => navigate('/credit-evaluation')}>
                  <CreditCard className="mr-2 h-4 w-4" />
                  Apply for Credit
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => navigate('/mentorship')}>
                  <Users className="mr-2 h-4 w-4" />
                  Find a Mentor
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => navigate('/financial-literacy')}>
                  <BookOpen className="mr-2 h-4 w-4" />
                  Financial Courses
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => navigate('/market-linkages')}>
                  <Building className="mr-2 h-4 w-4" />
                  Market Opportunities
                </Button>
                <div className="pt-4 border-t mt-4">
                  <Button variant="destructive" className="w-full" onClick={signOut}>
                    Sign Out
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

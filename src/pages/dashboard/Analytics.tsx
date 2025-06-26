
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import CreditScoreChart from '@/components/dashboard/CreditScoreChart';
import LoanApprovalChart from '@/components/dashboard/LoanApprovalChart';
import FundingOpportunities from '@/components/dashboard/FundingOpportunities';
import DemographicInsights from '@/components/dashboard/DemographicInsights';
import { Filter } from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Analytics = () => {
  const { user } = useAuth();
  const [region, setRegion] = useState<string>('all');
  const [businessSize, setBusinessSize] = useState<string>('all');
  const [industry, setIndustry] = useState<string>('all');

  const { data: loanData, isLoading: loanLoading } = useQuery({
    queryKey: ['loanApplications', user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('loan_applications')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    },
    enabled: !!user
  });

  return (
    <div className="container-custom pt-28 pb-16">
      <DashboardHeader title="Analytics Dashboard" description="Key insights for women entrepreneurs" />
      
      <div className="mb-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <h2 className="text-2xl font-semibold">Performance Metrics</h2>
        
        <div className="flex flex-wrap gap-3 items-center">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Filters:</span>
          </div>
          
          <Select value={region} onValueChange={setRegion}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Regions</SelectItem>
              <SelectItem value="north">North</SelectItem>
              <SelectItem value="south">South</SelectItem>
              <SelectItem value="east">East</SelectItem>
              <SelectItem value="west">West</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={businessSize} onValueChange={setBusinessSize}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Business Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sizes</SelectItem>
              <SelectItem value="micro">Micro</SelectItem>
              <SelectItem value="small">Small</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={industry} onValueChange={setIndustry}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Industries</SelectItem>
              <SelectItem value="retail">Retail</SelectItem>
              <SelectItem value="service">Service</SelectItem>
              <SelectItem value="manufacturing">Manufacturing</SelectItem>
              <SelectItem value="agriculture">Agriculture</SelectItem>
              <SelectItem value="technology">Technology</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="credit">Credit</TabsTrigger>
          <TabsTrigger value="funding">Funding</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Loan Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {loanLoading ? <Skeleton className="h-8 w-20" /> : loanData?.filter(loan => loan.status === 'pending').length || 0}
                </div>
                <p className="text-xs text-muted-foreground">
                  Current pending applications
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Approval Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {loanLoading ? <Skeleton className="h-8 w-20" /> : `${loanData?.length ? Math.round((loanData.filter(loan => loan.status === 'approved').length / loanData.length) * 100) : 0}%`}
                </div>
                <p className="text-xs text-muted-foreground">
                  +5.1% from last month
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Loan Amount</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {loanLoading ? <Skeleton className="h-8 w-20" /> : `₹${loanData?.length ? Math.round(loanData.reduce((sum, loan) => sum + Number(loan.loan_amount), 0) / loanData.length).toLocaleString() : 0}`}
                </div>
                <p className="text-xs text-muted-foreground">
                  +12% from last month
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Loan Approval Rate</CardTitle>
                <CardDescription>Monthly trend of loan approvals</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <LoanApprovalChart data={loanData || []} isLoading={loanLoading} />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Credit Score Distribution</CardTitle>
                <CardDescription>By credit score category</CardDescription>
              </CardHeader>
              <CardContent>
                <CreditScoreChart data={loanData || []} isLoading={loanLoading} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="credit" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Credit Score Analysis</CardTitle>
              <CardDescription>Detailed breakdown of credit scores</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <CreditScoreChart data={loanData || []} isLoading={loanLoading} detailed />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="funding" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Funding Opportunities</CardTitle>
              <CardDescription>Available funding schemes by region</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[500px]">
                <FundingOpportunities region={region} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="demographics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Demographic Insights</CardTitle>
              <CardDescription>Age groups, education levels, and business types</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[500px]">
                <DemographicInsights />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;

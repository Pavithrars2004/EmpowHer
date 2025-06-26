
import React, { useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Skeleton } from '@/components/ui/skeleton';
import { format, subMonths, startOfMonth, parseISO } from 'date-fns';

interface LoanApprovalChartProps {
  data: any[];
  isLoading: boolean;
}

const LoanApprovalChart: React.FC<LoanApprovalChartProps> = ({ data, isLoading }) => {
  // Process data for monthly loan approval rate
  const chartData = useMemo(() => {
    if (!data || data.length === 0) return [];
    
    // Generate last 6 months
    const today = new Date();
    const months = Array.from({ length: 6 }, (_, i) => {
      const month = subMonths(today, i);
      return {
        month: startOfMonth(month),
        name: format(month, 'MMM yy'),
        total: 0,
        approved: 0,
        rejected: 0,
        pending: 0,
        approvalRate: 0
      };
    }).reverse();
    
    // Fill in the data
    data.forEach(loan => {
      const loanDate = parseISO(loan.created_at);
      const monthIndex = months.findIndex(m => format(m.month, 'MMM yy') === format(loanDate, 'MMM yy'));
      
      if (monthIndex !== -1) {
        months[monthIndex].total += 1;
        
        if (loan.status === 'approved') {
          months[monthIndex].approved += 1;
        } else if (loan.status === 'rejected') {
          months[monthIndex].rejected += 1;
        } else {
          months[monthIndex].pending += 1;
        }
      }
    });
    
    // Calculate approval rates
    return months.map(month => ({
      ...month,
      approvalRate: month.total > 0 ? Math.round((month.approved / month.total) * 100) : 0
    }));
  }, [data]);

  if (isLoading) {
    return <Skeleton className="h-[300px] w-full" />;
  }

  if (data.length === 0) {
    return (
      <div className="flex h-[300px] w-full items-center justify-center border border-dashed rounded-md">
        <p className="text-sm text-muted-foreground">No loan application data available</p>
      </div>
    );
  }

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorApproved" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#9b87f5" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPending" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6E59A5" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#6E59A5" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="approved"
            name="Approved"
            stroke="#9b87f5"
            fillOpacity={1}
            fill="url(#colorApproved)"
          />
          <Area
            type="monotone"
            dataKey="pending"
            name="Pending"
            stroke="#6E59A5"
            fillOpacity={1}
            fill="url(#colorPending)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LoanApprovalChart;

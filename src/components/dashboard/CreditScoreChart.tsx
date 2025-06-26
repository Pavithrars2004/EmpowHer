
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

interface CreditScoreChartProps {
  data: any[];
  isLoading: boolean;
  detailed?: boolean;
}

const CreditScoreChart: React.FC<CreditScoreChartProps> = ({ data, isLoading, detailed = false }) => {
  // Process data for credit score distribution
  const getCreditScoreData = () => {
    if (!data || data.length === 0) return [];
    
    const highCount = data.filter(item => item.credit_score && item.credit_score >= 700).length;
    const mediumCount = data.filter(item => item.credit_score && item.credit_score >= 600 && item.credit_score < 700).length;
    const lowCount = data.filter(item => item.credit_score && item.credit_score < 600).length;
    const unknownCount = data.filter(item => !item.credit_score).length;
    
    return [
      { name: 'High (700+)', value: highCount, color: '#9b87f5' },
      { name: 'Medium (600-699)', value: mediumCount, color: '#6E59A5' },
      { name: 'Low (<600)', value: lowCount, color: '#D946EF' },
      { name: 'Not Available', value: unknownCount, color: '#8E9196' }
    ].filter(item => item.value > 0);
  };

  const chartData = getCreditScoreData();

  if (isLoading) {
    return <Skeleton className="h-[250px] w-full" />;
  }

  if (data.length === 0) {
    return (
      <div className="flex h-[250px] w-full items-center justify-center border border-dashed rounded-md">
        <p className="text-sm text-muted-foreground">No credit score data available</p>
      </div>
    );
  }

  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height={detailed ? 350 : 250}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={detailed ? 120 : 80}
            dataKey="value"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value} users`, 'Count']} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CreditScoreChart;

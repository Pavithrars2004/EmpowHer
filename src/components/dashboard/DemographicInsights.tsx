
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const DemographicInsights: React.FC = () => {
  // Mock data for demographic insights
  const ageData = [
    { name: '18-24', value: 15, color: '#9b87f5' },
    { name: '25-34', value: 35, color: '#7E69AB' },
    { name: '35-44', value: 30, color: '#D946EF' },
    { name: '45-54', value: 15, color: '#8E9196' },
    { name: '55+', value: 5, color: '#F97316' }
  ];
  
  const educationData = [
    { name: 'High School', value: 10, color: '#9b87f5' },
    { name: 'College', value: 25, color: '#7E69AB' },
    { name: 'Bachelor\'s', value: 40, color: '#D946EF' },
    { name: 'Master\'s', value: 20, color: '#8E9196' },
    { name: 'Ph.D.', value: 5, color: '#F97316' }
  ];
  
  const businessTypeData = [
    { name: 'Retail', value: 25, color: '#9b87f5' },
    { name: 'Service', value: 30, color: '#7E69AB' },
    { name: 'Manufacturing', value: 15, color: '#D946EF' },
    { name: 'Agriculture', value: 20, color: '#8E9196' },
    { name: 'Technology', value: 10, color: '#F97316' }
  ];
  
  return (
    <div className="h-full w-full">
      <Tabs defaultValue="age">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="age">Age Distribution</TabsTrigger>
          <TabsTrigger value="education">Education Level</TabsTrigger>
          <TabsTrigger value="business">Business Type</TabsTrigger>
        </TabsList>
        
        <TabsContent value="age" className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={ageData}
                cx="50%"
                cy="50%"
                labelLine={true}
                outerRadius={150}
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {ageData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </TabsContent>
        
        <TabsContent value="education" className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={educationData}
                cx="50%"
                cy="50%"
                labelLine={true}
                outerRadius={150}
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {educationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </TabsContent>
        
        <TabsContent value="business" className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={businessTypeData}
                cx="50%"
                cy="50%"
                labelLine={true}
                outerRadius={150}
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {businessTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DemographicInsights;

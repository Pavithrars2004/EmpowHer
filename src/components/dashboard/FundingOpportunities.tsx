
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface FundingScheme {
  id: string;
  name: string;
  description: string;
  region: string;
  amount: string;
  tags: string[];
}

interface FundingOpportunitiesProps {
  region?: string;
}

const FundingOpportunities: React.FC<FundingOpportunitiesProps> = ({ region = 'all' }) => {
  // Mock data for funding schemes
  const fundingSchemes: FundingScheme[] = [
    {
      id: '1',
      name: 'Women Entrepreneur Fund',
      description: 'Special funding for women-led startups and small businesses.',
      region: 'north',
      amount: '₹2,00,000 - ₹10,00,000',
      tags: ['startup', 'small business']
    },
    {
      id: '2',
      name: 'Rural Enterprise Development Program',
      description: 'Support for rural women entrepreneurs in agriculture and handicrafts.',
      region: 'south',
      amount: '₹50,000 - ₹3,00,000',
      tags: ['rural', 'agriculture', 'handicrafts']
    },
    {
      id: '3',
      name: 'Tech Startup Accelerator',
      description: 'Funding and mentorship for women in technology startups.',
      region: 'west',
      amount: '₹5,00,000 - ₹20,00,000',
      tags: ['technology', 'startup']
    },
    {
      id: '4',
      name: 'Manufacturing Support Scheme',
      description: 'Capital assistance for women entrepreneurs in manufacturing sector.',
      region: 'east',
      amount: '₹1,00,000 - ₹15,00,000',
      tags: ['manufacturing']
    },
    {
      id: '5',
      name: 'Micro Enterprise Development',
      description: 'Microfinance options for very small businesses run by women.',
      region: 'north',
      amount: '₹25,000 - ₹2,00,000',
      tags: ['micro', 'retail']
    },
    {
      id: '6',
      name: 'Service Industry Growth Fund',
      description: 'Support for women entrepreneurs in service industries.',
      region: 'south',
      amount: '₹1,00,000 - ₹7,00,000',
      tags: ['service']
    }
  ];

  // Filter funding schemes by region if specified
  const filteredSchemes = region === 'all' 
    ? fundingSchemes 
    : fundingSchemes.filter(scheme => scheme.region === region);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredSchemes.map(scheme => (
          <Card key={scheme.id}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{scheme.name}</CardTitle>
                <Badge variant="outline" className="capitalize">{scheme.region}</Badge>
              </div>
              <CardDescription>{scheme.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Funding Range:</span>
                  <span className="text-sm">{scheme.amount}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {scheme.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredSchemes.length === 0 && (
        <div className="flex h-40 w-full items-center justify-center border border-dashed rounded-md">
          <p className="text-sm text-muted-foreground">No funding schemes available for the selected region</p>
        </div>
      )}
    </div>
  );
};

export default FundingOpportunities;

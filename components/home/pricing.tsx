import { describe } from 'node:test';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Badge } from '../ui/badge';
import { Check, Database } from 'lucide-react';
import { features } from 'process';
import { Button } from '../ui/button';

const data = [
  {
    index: 0,
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'Perfect for small teams getting',
    features: [
      'Up to 5 team members',
      '100 workflows execution/month',
      'Basic integrations',
      'Email support',
      'Dashboard analytics',
    ],
  },
  {
    index: 1,
    name: 'Professional',
    price: '$79',
    period: '/month',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 25 team members',
      '1,000 workflows execution/month',
      'Advance integrations',
      'Priority support',
      'Advance analytics',
      'API access',
      'Custom workflows',
    ],
    popular: true,
  },
  {
    index: 2,
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with specific needs',
    features: [
      'Unlimited team members',
      'Unlimited execution',
      'All integrations integrations',
      '24/7 dedicated support',
      'Advance security',
      'Custom solutions',
      'SLA gurantee',
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 bg-gradient-to-br from-slate-50 to-white"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 ">
          Simple, transparent pricing
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose the plan that's right for your Testimonials
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {data.map((data) => (
          <Card
            key={data.index}
            className={`relative ${
              data.popular
                ? 'border-2 border-blue-500 shadow-lg'
                : 'border-0 shadow-md'
            }`}
          >
            {data.popular && (
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                Most Popular
              </Badge>
            )}
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold">{data.name}</CardTitle>
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-4xl font-bold text-gray-900">
                  {data.price}
                </span>
                <span className="text-gray-600 ml-1">{data.period}</span>
              </div>
              <CardDescription>{data.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                {data.features.map((features, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center"
                  >
                    <Check className="w-5 h-5 text-green-500 mr-3 flex shrink-0" />
                    <span className="text-gray-700">{features}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  data.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                    : 'bg-gray-700 hover:bg-gray-800 text-white '
                }`}
              >
                {data.name === 'Enterprise'
                  ? 'Contact Sales'
                  : 'Start Free Trial'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

import { BarChart3, Globe, Shield, Target, Users, Zap } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

const data = [
  {
    index: 0,
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    title: 'Lightning Fast',
    description:
      'Process Workflows 10x faster with our optimized automatiom engine',
  },
  {
    index: 1,
    icon: <Shield className="w-8 h-8 text-green-500" />,
    title: 'Enterprise Security',
    description:
      'Bank-level security with end to end encryptions and compliance certifications',
  },
  {
    index: 2,
    icon: <Users className="w-8 h-8 text-blue-500" />,
    title: 'Team Collaboration',
    description:
      'Work togeather seamlessly with real-time collaborations and sharing features',
  },
  {
    index: 3,
    icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
    title: 'Advance Analytics',
    description:
      'Get deep insights into your processes with comprehensive reporting and analytics',
  },
  {
    index: 4,
    icon: <Globe className="w-8 h-8 text-teal-500" />,
    title: 'Global Scale',
    description:
      'Deploy worldwide with our global infrastructure and 99.9% uptime guarantee',
  },
  {
    index: 5,
    icon: <Target className="w-8 h-8 text-rose-500" />,
    title: 'Smart Automation',
    description:
      'AI-powered automation that learns and adapts to your business processes',
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help you work smarter, not harder
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((data) => (
            <Card key={data.index}>
              <CardHeader>
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-50 transition-colors">
                  {data.icon}
                </div>
                <CardTitle className="text-xl font-semibold">
                  {data.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {data.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

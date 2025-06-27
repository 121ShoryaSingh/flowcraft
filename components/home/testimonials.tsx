import { Star } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const data = [
  {
    index: 0,
    name: 'Sarah Johnson',
    role: 'VP of Operations',
    company: 'TechFlow Inc.',
    content:
      "FlowCraft has revolutionized how we handle our workflows. We've reduced processing time by 80% and eliminated manual errors completely",
    rating: 5,
  },
  {
    index: 1,
    name: 'Michael Chen',
    role: 'CTO',
    company: 'StartupXYZ',
    content:
      "FlowCraft has revolutionized how we handle our workflows. We've reduced processing time by 80% and eliminated manual errors completely",
    rating: 5,
  },
  {
    index: 3,
    name: 'Emily Rodriguez',
    role: 'Project Manager',
    company: 'GlobalCorp',
    content:
      'Integration was seamless, and the results were immediate. Our team productivity increased by 150% in the first month alone',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 ">
            Trusted by thousands of teams
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what ourr customers have to say about their experience
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((data) => (
            <Card
              key={data.index}
              className="border-0 shadow-md"
            >
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(data.rating)].map((_, index) => (
                    <Star
                      key={index}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {data.content}
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{data.name}</p>
                  <p className="text-sm text-gray-600">
                    {data.role} at {data.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

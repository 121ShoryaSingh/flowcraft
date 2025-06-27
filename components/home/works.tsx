import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

const data = [
  {
    index: 0,
    step: '01',
    title: 'Connect Your Tools',
    description:
      'Integrate with your exusting  apps and services in just a few clicks',
  },
  {
    index: 1,
    step: '02',
    title: 'Build Workflows',
    description:
      'Create powerful automation workflows using our visual drag-and-drop builder',
  },
  {
    index: 2,
    step: '03',
    title: 'Scale & Optimize',
    description:
      'Watch your productivity soar as workflow run automatically and efficiently',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in minutes with our simple three-step process
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 relative">
          {data.map((data) => (
            <div
              className="relative"
              key={data.index}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6 mx-auto">
                  {data.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{data.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {data.description}
                </p>
              </div>
              {data.index < 2 && (
                <div className="hidden md:block absolute top-8 left-full w-full">
                  <ChevronRight className="w-6 h-6 text-gray-300 mx-auto" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, Check, Play, PlayCircle, Rocket } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

export default function Hero() {
  return (
    <section className="pt-16 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <Badge
          variant="secondary"
          className="mb-6 px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full"
        >
          🚀 New: AI-Powered Workflows Now Available
        </Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Tranfrom your Workflow
          <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            Intelligent Automation
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Streamline your business processes with our cutting-edge platform.
          Save time, reduce errors, and boost productivity with AI-powered
          automation that adapts to your needs.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg"
          >
            Start Free Trial <ArrowRight className="text-white ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-50 border border-black/10 px-8 py-4 text-lg"
          >
            <PlayCircle className="ml-2 w-5 h-5" /> Watch Demo
          </Button>
        </div>
        <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
          <div className="flex  items-center">
            <Check className="w-4 h-4 text-green-500 mr-2" />
            No credit card required
          </div>
          <div className="flex  items-center">
            <Check className="w-4 h-4 text-green-500 mr-2" />
            14-day free trial
          </div>
          <div className="flex  items-center">
            <Check className="w-4 h-4 text-green-500 mr-2" />
            Cancel any time
          </div>
        </div>
      </div>
    </section>
  );
}

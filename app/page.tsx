import Hero from '@/components/home/hero';
import Header from '../components/layout/header';
import Features from '@/components/home/feature';
import HowItWorks from '@/components/home/works';
import Testimonials from '@/components/home/testimonials';
import Pricing from '@/components/home/pricing';
import CTA from '@/components/home/CTA';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

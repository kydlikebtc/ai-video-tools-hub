import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
import FeaturedTools from '@/components/FeaturedTools';
import ComparisonTable from '@/components/ComparisonTable';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CategorySection />
      <FeaturedTools />
      <ComparisonTable />
      <FAQ />
      <Footer />
    </main>
  );
}

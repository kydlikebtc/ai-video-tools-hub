import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ComparisonTable from '@/components/ComparisonTable';

export const metadata = {
  title: 'Compare AI Video Tools - Side by Side Comparison',
  description: 'Compare the best AI video tools side by side. Find the perfect tool for your needs with our detailed comparison.',
};

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <div className="container-lg py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Compare AI Video Tools
          </h1>
          <p className="text-gray-500 mb-8">
            Find the perfect AI video tool by comparing features, pricing, and capabilities side by side.
          </p>
        </div>
        <ComparisonTable />
      </div>
      <Footer />
    </main>
  );
}

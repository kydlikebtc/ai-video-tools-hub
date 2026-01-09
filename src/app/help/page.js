import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Help Center - AI Video Tools',
  description: 'Get help and support for AI Video Tools.',
};

export default function HelpPage() {
  const faqs = [
    {
      question: 'How do I find the right AI video tool?',
      answer: 'Use our comparison feature to compare different tools side by side, or browse by category to find tools that match your specific needs.',
    },
    {
      question: 'Are the tool reviews unbiased?',
      answer: 'Yes, we provide honest reviews based on actual testing and user feedback. We clearly disclose any affiliate relationships.',
    },
    {
      question: 'How can I submit my AI video tool?',
      answer: 'Visit our Submit page to add your tool to our directory. We review all submissions to ensure quality.',
    },
    {
      question: 'Do you offer any discounts?',
      answer: 'Some tools offer exclusive discounts through our links. Check individual tool pages for any available offers.',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Help Center</h1>
          <p className="text-gray-500 text-center mb-12">Find answers to common questions</p>

          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-dribbble-50 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Still need help?</h2>
            <p className="text-gray-600 mb-6">Our team is here to assist you with any questions.</p>
            <Link
              href="/contact"
              className="inline-flex px-6 py-3 bg-dribbble-500 text-white rounded-xl font-medium hover:bg-dribbble-600 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

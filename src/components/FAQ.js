'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What is an AI video generator?',
    answer: 'An AI video generator is a tool that uses artificial intelligence to create videos automatically. You can generate videos from text prompts, create AI avatar presentations, or use AI to edit and enhance existing footage. These tools make video creation accessible to everyone, even without video editing experience.'
  },
  {
    question: 'Which AI video tool is best for beginners?',
    answer: 'For beginners, we recommend VEED.io or Canva Video for general editing, and InVideo AI for creating videos from text. These tools have intuitive interfaces and require no prior video editing experience. For AI avatar videos, Synthesia offers the most user-friendly experience.'
  },
  {
    question: 'Are AI-generated videos good enough for professional use?',
    answer: 'Yes! Tools like Synthesia are used by over 90% of Fortune 100 companies for training videos. Runway is used in Hollywood productions. HeyGen and Synthesia produce broadcast-quality AI avatar videos suitable for marketing, training, and corporate communications.'
  },
  {
    question: 'How much do AI video tools cost?',
    answer: 'Prices vary widely. Free options like Canva include basic AI features. Professional tools start around $10-30/month (Pika, Runway Basic, VEED). Business-focused tools like Synthesia and HeyGen range from $22-89/month. Most offer free trials so you can test before committing.'
  },
  {
    question: 'Can AI video tools create videos from just text?',
    answer: 'Yes! Several tools specialize in text-to-video generation. InVideo AI and OpenArt can create complete videos from a text prompt including visuals and voiceover. Runway and Pika generate cinematic footage from text descriptions. For avatar videos, you type a script and the AI presenter speaks it.'
  },
  {
    question: 'What are affiliate links and how do they affect my purchase?',
    answer: 'Some links on this site are affiliate links, meaning we may earn a commission if you sign up through them. This costs you nothing extra - the price is the same whether you use our link or not. These commissions help us maintain this free resource. We only recommend tools we genuinely believe are valuable.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 mb-4">
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-medium">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about AI video tools
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Structured Data for FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map(faq => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer
                }
              }))
            })
          }}
        />
      </div>
    </section>
  );
}

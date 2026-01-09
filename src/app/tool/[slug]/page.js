import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolsGrid from '@/components/ToolsGrid';
import CTAButton from '@/components/CTAButton';
import { tools, getToolBySlug } from '@/data/tools';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Star,
  ExternalLink,
  Check,
  X,
  ArrowLeft,
  DollarSign,
  Users,
  Zap,
  Shield,
  Clock,
  Globe
} from 'lucide-react';

// 生成静态路径
export async function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

// 生成动态 metadata
export async function generateMetadata({ params }) {
  const tool = getToolBySlug(params.slug);
  if (!tool) return {};

  return {
    title: `${tool.name} Review 2025 - Pricing, Features & Alternatives`,
    description: `${tool.name} review: ${tool.description} Compare pricing, features, pros & cons. ${tool.pricing.freeTrial ? 'Free trial available.' : ''}`,
    openGraph: {
      title: `${tool.name} Review - AI Video Tool`,
      description: tool.description,
    },
  };
}

export default function ToolDetailPage({ params }) {
  const tool = getToolBySlug(params.slug);

  if (!tool) {
    notFound();
  }

  // 获取相关工具（同类别）
  const relatedTools = tools
    .filter(t => t.category === tool.category && t.id !== tool.id)
    .slice(0, 3);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < Math.floor(rating)
              ? 'fill-yellow-400 text-yellow-400'
              : 'text-slate-300'
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-slate-500 hover:text-primary-600">Home</Link>
            <span className="text-slate-300">/</span>
            <Link href="/tools" className="text-slate-500 hover:text-primary-600">Tools</Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 font-medium">{tool.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Info */}
            <div className="flex-1">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center text-3xl font-bold text-primary-600">
                  {tool.name.charAt(0)}
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                    {tool.name}
                  </h1>
                  <p className="text-lg text-slate-600">{tool.tagline}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {renderStars(tool.rating)}
                </div>
                <span className="text-xl font-semibold text-slate-900">{tool.rating}</span>
                <span className="text-slate-500">({tool.reviews.toLocaleString()} reviews)</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {tool.tags.map((tag) => (
                  <span key={tag} className="badge badge-primary">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed mb-6">
                {tool.description}
              </p>

              {/* Best For */}
              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl mb-6">
                <Check className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <span className="font-semibold text-green-800">Best for: </span>
                  <span className="text-green-700">{tool.bestFor}</span>
                </div>
              </div>
            </div>

            {/* Right: CTA Card */}
            <div className="lg:w-96">
              <div className="bg-white rounded-2xl border-2 border-primary-200 shadow-xl p-6 sticky top-24">
                {/* Price */}
                <div className="text-center mb-6">
                  <span className="text-sm text-slate-500">Starting at</span>
                  <div className="text-4xl font-bold text-slate-900">
                    {tool.pricing.startingPrice === 0 ? (
                      'Free'
                    ) : (
                      <>
                        ${tool.pricing.startingPrice}
                        <span className="text-lg text-slate-500">/mo</span>
                      </>
                    )}
                  </div>
                  {tool.pricing.freeTrial && (
                    <span className="inline-block mt-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                      {tool.pricing.freeTrialDays > 0
                        ? `${tool.pricing.freeTrialDays}-day free trial`
                        : 'Free credits available'}
                    </span>
                  )}
                </div>

                {/* CTA Button */}
                <CTAButton tool={tool} />

                <a
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full btn-secondary text-center"
                >
                  Visit Website
                </a>

                {/* Quick Stats */}
                <div className="mt-6 pt-6 border-t border-slate-200 grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900">
                      {tool.commission.rate}
                    </div>
                    <div className="text-xs text-slate-500">Affiliate Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900">
                      {tool.commission.cookieDays}d
                    </div>
                    <div className="text-xs text-slate-500">Cookie Duration</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Sections */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  About {tool.name}
                </h2>
                <div className="prose prose-slate max-w-none">
                  <p className="whitespace-pre-line text-slate-600 leading-relaxed">
                    {tool.longDescription}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Key Features
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {tool.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary-600" />
                      </div>
                      <span className="font-medium text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pros & Cons */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Pros & Cons
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                      <Check className="w-5 h-5" />
                      Pros
                    </h3>
                    <ul className="space-y-2">
                      {tool.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600">
                          <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                      <X className="w-5 h-5" />
                      Cons
                    </h3>
                    <ul className="space-y-2">
                      {tool.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600">
                          <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Pricing Table */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Pricing Plans
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {tool.pricing.plans.map((plan, index) => (
                    <div
                      key={plan.name}
                      className={`p-6 rounded-xl border-2 ${
                        index === 1
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-slate-200'
                      }`}
                    >
                      {index === 1 && (
                        <span className="inline-block px-3 py-1 rounded-full bg-primary-500 text-white text-xs font-medium mb-3">
                          Most Popular
                        </span>
                      )}
                      <h3 className="font-bold text-lg text-slate-900 mb-2">
                        {plan.name}
                      </h3>
                      <div className="text-2xl font-bold text-slate-900 mb-4">
                        {typeof plan.price === 'number' ? (
                          <>
                            ${plan.price}
                            <span className="text-sm text-slate-500">/mo</span>
                          </>
                        ) : (
                          plan.price
                        )}
                      </div>
                      <ul className="space-y-2">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                            <Check className="w-4 h-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Use Cases
                </h2>
                <div className="flex flex-wrap gap-3">
                  {tool.useCases.map((useCase) => (
                    <span
                      key={useCase}
                      className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-medium"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-4">Quick Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-slate-400" />
                    <div>
                      <div className="text-sm text-slate-500">Pricing</div>
                      <div className="font-medium text-slate-900">
                        {tool.pricing.type}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-slate-400" />
                    <div>
                      <div className="text-sm text-slate-500">Best For</div>
                      <div className="font-medium text-slate-900">
                        {tool.category.replace(/-/g, ' ')}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-slate-400" />
                    <div>
                      <div className="text-sm text-slate-500">Last Updated</div>
                      <div className="font-medium text-slate-900">
                        {tool.lastUpdated}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Affiliate Info */}
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-4">
                  Affiliate Program
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Commission Rate</span>
                    <span className="font-semibold text-slate-900">{tool.commission.rate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Commission Type</span>
                    <span className="font-semibold text-slate-900">{tool.commission.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Cookie Duration</span>
                    <span className="font-semibold text-slate-900">{tool.commission.cookieDays} days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Avg. Earning</span>
                    <span className="font-semibold text-green-600">{tool.commission.averageEarning}</span>
                  </div>
                </div>
                <a
                  href={tool.affiliateProgram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full mt-4 btn-secondary text-center text-sm"
                >
                  Join Affiliate Program
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      {relatedTools.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Similar Tools
            </h2>
            <ToolsGrid tools={relatedTools} />
          </div>
        </section>
      )}

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: tool.name,
            description: tool.description,
            applicationCategory: 'Multimedia',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: tool.pricing.startingPrice,
              priceCurrency: tool.pricing.currency
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: tool.rating,
              reviewCount: tool.reviews
            }
          })
        }}
      />

      <Footer />
    </main>
  );
}

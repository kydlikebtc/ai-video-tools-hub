'use client';

import { ExternalLink } from 'lucide-react';

export default function CTAButton({ tool }) {
  const trackClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'tool_cta_click', {
        tool_name: tool.name,
        tool_slug: tool.slug
      });
    }
  };

  return (
    <a
      href={tool.affiliateLink}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={trackClick}
      data-affiliate="true"
      className="block w-full btn-primary text-center text-lg py-4 mb-4"
    >
      Try {tool.name} Free
      <ExternalLink className="w-5 h-5 inline ml-2" />
    </a>
  );
}

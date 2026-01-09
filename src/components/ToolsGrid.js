'use client';

import ToolCard from './ToolCard';

export default function ToolsGrid({ tools }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
}

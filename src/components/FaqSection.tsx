import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "../lib/utils";

type FaqItem = {
  q: string;
  a: string;
};

export function FaqSection({ 
  title, 
  items 
}: { 
  title: string; 
  items: FaqItem[]; 
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const renderColumn = (colItems: FaqItem[], startIndex: number) => (
    <div className="flex flex-col gap-4">
      {colItems.map((item, index) => {
        const actualIndex = startIndex + index;
        const isOpen = openIndex === actualIndex;
        
        return (
          <div 
            key={actualIndex} 
            className="border-b border-brand-ink/10 pb-4"
          >
            <button
              onClick={() => toggle(actualIndex)}
              className="w-full text-left py-2 flex justify-between items-center gap-4 focus:outline-none group"
              aria-expanded={isOpen}
            >
              <h3 className="font-sans font-medium text-brand-ink/80 pr-4 text-xs md:text-sm tracking-wide leading-snug group-hover:text-brand-ink transition-colors">
                {item.q}
              </h3>
              <div className="text-brand-ink/40 group-hover:text-brand-ink/60 transition-colors flex-shrink-0">
                 {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>
            <div 
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
              )}
            >
              <div className="text-brand-ink/60 text-xs md:text-sm leading-relaxed font-sans font-light">
                {item.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  const midpoint = Math.ceil(items.length / 2);
  const col1 = items.slice(0, midpoint);
  const col2 = items.slice(midpoint);

  return (
    <section className="py-20 px-6 md:px-12 bg-brand-bg/80 border-y border-brand-ink/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-brand-ink mb-10 text-center letter-spacing-tight">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {renderColumn(col1, 0)}
          {renderColumn(col2, midpoint)}
        </div>
      </div>
    </section>
  );
}

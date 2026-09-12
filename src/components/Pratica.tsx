import { CheckCircle2 } from 'lucide-react';
import { SKILLS_PRACTICED } from '../data';

export default function Pratica() {
  return (
    <section id="pratica-section" className="py-12 sm:py-16 bg-white border-b border-neutral-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2
          id="pratica-title"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-tight"
        >
          O que a criança{' '}
          <span className="bg-sky-100 text-sky-900 px-2 sm:px-2.5 py-0.5 rounded-lg inline-block font-bold">
            pratica?
          </span>
        </h2>

        {/* Lista visual dos tópicos */}
        <div className="mt-6 sm:mt-8 flex flex-wrap justify-center items-center gap-2.5 sm:gap-3">
          {SKILLS_PRACTICED.items.map((skill, index) => (
            <div
              key={skill}
              id={`pratica-item-${index + 1}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50/70 text-sky-900 border border-sky-100/90 rounded-xl font-bold text-sm sm:text-base shadow-2xs"
            >
              <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
              <span>{skill}</span>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs sm:text-sm text-neutral-500 font-medium">
          {SKILLS_PRACTICED.items.join(' • ')}
        </p>
      </div>
    </section>
  );
}

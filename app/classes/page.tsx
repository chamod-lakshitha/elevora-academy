import { ArrowRight, BookOpenCheck, MessageCircle, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { Reveal, Stagger } from '@/components/Reveal';
import PageHero from '@/components/PageHero';
import ClassesCatalog from '@/components/ClassesCatalog';
import SectionHeading from '@/components/SectionHeading';

export default function ClassesPage() {
  return (
    <main className="overflow-x-clip">
      <PageHero
        variant="classes"
        eyebrow="Your classroom, wherever you are"
        title="Find your next class"
        highlight="start learning today."
        description={'Explore supportive classes in languages and technology.\nLearn step by step with clear explanations, guided practice\nand lessons designed to help you build confidence.'}
        primaryLabel="Explore subjects"
        primaryHref="#class-filters"
        secondaryLabel="How we teach"
        secondaryHref="/about"
        proofs={["Learn online", "Guidance as you grow"]}
      />
      <ClassesCatalog />

      <section className="section-space relative overflow-hidden bg-[#f7f5ff]">
        <div aria-hidden="true" className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-sky-100/70 blur-3xl" />
        <div className="container-shell relative">
          <SectionHeading
            eyebrow="How learning works"
            title="More than just watching a lesson"
            description="Our approach is built around understanding, practising and using your new skills with confidence."
            centered
          />
          <Stagger className="mt-10 grid gap-5 md:grid-cols-3" delayChildren={0.06}>
            {[
              { number: '01', icon: BookOpenCheck, title: 'Understand the basics', text: 'Start with clear explanations and a structured introduction to your chosen subject.' },
              { number: '02', icon: MessageCircle, title: 'Take part and practise', text: 'Strengthen your learning through activities, examples and opportunities to ask questions.' },
              { number: '03', icon: TrendingUp, title: 'Build your skills', text: 'Use what you learn step by step and keep moving towards your personal learning goals.' },
            ].map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.number} className="group relative overflow-hidden rounded-[1.7rem] border border-violet-100 bg-white p-6 shadow-[0_8px_28px_rgba(40,30,95,0.05)] transition duration-300 hover:-translate-y-2 hover:border-violet-200 hover:shadow-[0_22px_50px_rgba(49,35,122,0.12)] sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-brand-violet transition duration-300 group-hover:scale-105 group-hover:rotate-3"><Icon size={25} /></span>
                    <span className="text-sm font-black tracking-[0.18em] text-violet-200">{step.number}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-extrabold tracking-tight text-brand-navy">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
                  <div className="mt-6 h-1 w-10 rounded-full bg-amber-300 transition-all duration-300 group-hover:w-16" />
                </article>
              );
            })}
          </Stagger>
          <Reveal className="mt-8 text-center">
            <Link href="/about" className="inline-flex items-center gap-2 rounded-full bg-brand-violet px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-violet-900/15 transition hover:-translate-y-0.5 hover:bg-brand-navy">
              Discover our teaching approach <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

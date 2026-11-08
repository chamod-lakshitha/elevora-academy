import type { Metadata } from 'next';
import Link from 'next/link';
import { courses } from '@/lib/data';
import { courseSlug } from '@/lib/seo';
import PageHero from '@/components/PageHero';
import ClassesCatalog from '@/components/ClassesCatalog';

export const metadata: Metadata = {
  title: 'Online Language & Programming Courses | French, German, English',
  description: 'Browse Elevora Academy online French, German and English classes, DELF and school examination preparation, and programming courses in Java and Python.',
  alternates: { canonical: '/classes' },
  openGraph: { title: 'Online Classes & Courses | Elevora Academy', description: 'Explore online language classes and programming courses at Elevora Academy.', type: 'website' },
};

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
      <section className="section-space bg-slate-50/70">
        <div className="container-shell">
          <h2 className="text-2xl font-black tracking-tight text-brand-navy sm:text-3xl">Explore online language and programming classes</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">Elevora Academy offers online classes for learners who want to develop language skills or build practical technology knowledge. Explore each subject below to find course information and the relevant teacher.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-extrabold text-brand-navy">Online French classes</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">Study French with lessons covering language foundations, grammar, vocabulary and communication. Elevora Academy also offers French examination support, including DELF preparation and Sri Lankan G.C.E. O/L and A/L French classes.</p>
              <Link className="mt-4 inline-flex font-bold text-brand-violet underline underline-offset-4" href={'/classes/' + courseSlug(courses.find(c => c.icon === 'FR')?.title || 'French for Everyday Life')}>Explore French classes</Link>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-extrabold text-brand-navy">Online German classes</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">Build German language skills through structured learning, grammar, vocabulary and practical communication. Learn with guidance from a teacher with a Goethe-Zertifikat B1 qualification.</p>
              <Link className="mt-4 inline-flex font-bold text-brand-violet underline underline-offset-4" href={'/classes/' + courseSlug(courses.find(c => c.icon === 'DE')?.title || 'German Foundations')}>Explore German classes</Link>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-extrabold text-brand-navy">Online English classes</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">Develop English language proficiency with learning focused on grammar, vocabulary, reading, writing, speaking and effective communication.</p>
              <Link className="mt-4 inline-flex font-bold text-brand-violet underline underline-offset-4" href={'/classes/' + courseSlug(courses.find(c => c.icon === 'EN')?.title || 'English Communication')}>Explore English classes</Link>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-extrabold text-brand-navy">Online programming classes</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">Learn programming and software development through Java and Python courses. Develop coding fundamentals, logical thinking and problem-solving skills with guidance from a software engineering professional.</p>
              <div className="mt-4 flex flex-wrap gap-4">
                {courses.filter(c => c.icon === 'JAVA' || c.icon === 'Py').map(course => <Link key={course.id} className="font-bold text-brand-violet underline underline-offset-4" href={'/classes/' + courseSlug(course.title)}>{course.title}</Link>)}
              </div>
            </article>
          </div>
        </div>
      </section>


    </main>
  );
}

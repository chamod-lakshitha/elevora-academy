import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Clock3, GraduationCap, Star, Users } from 'lucide-react';
import { notFound } from 'next/navigation';
import { courses } from '@/lib/data';
import { absoluteUrl, courseSlug } from '@/lib/seo';
import CourseIcon from '@/components/CourseIcon';

const backgroundByIcon: Record<string, string> = {
  FR: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1100&q=80',
  EN: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1100&q=80',
  DE: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1100&q=80',
  JAVA: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=80',
  Py: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1100&q=80',
};

type CoursePageProps = { params: Promise<{ slug: string }> };

function getCourse(slug: string) {
  return courses.find((course) => courseSlug(course.title) === slug);
}

export function generateStaticParams() {
  return courses.map((course) => ({ slug: courseSlug(course.title) }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return { title: 'Class not found', robots: { index: false, follow: false } };

  const title = `${course.title} | Online ${course.category} Class`;
  const description = `${course.description} Explore the ${course.level.toLowerCase()} ${course.title} class at Elevora Academy. Course duration: ${course.duration}.`;
  const canonical = `/classes/${courseSlug(course.title)}`;

  return {
    title,
    description,
    alternates: { canonical },
    keywords: [
      course.title,
      `online ${course.title.toLowerCase()}`,
      `${course.title.toLowerCase()} course`,
      `${course.level.toLowerCase()} ${course.category.toLowerCase()} class`,
      'Elevora Academy',
    ],
    openGraph: {
      title: `${course.title} | Elevora Academy`,
      description,
      type: 'website',
      ...(absoluteUrl(canonical) ? { url: absoluteUrl(canonical) } : {}),
      images: [{ url: '/logo.png', alt: 'Elevora Academy logo' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${course.title} | Elevora Academy`,
      description,
      images: ['/logo.png'],
    },
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const pageUrl = absoluteUrl(`/classes/${courseSlug(course.title)}`);
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    courseCode: `ELEVORA-${course.id}`,
    educationalLevel: course.level,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Elevora Academy',
      ...(absoluteUrl('/') ? { url: absoluteUrl('/') } : {}),
    },
    ...(pageUrl ? { url: pageUrl } : {}),
    inLanguage: 'en',
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') || '/' },
      { '@type': 'ListItem', position: 2, name: 'Classes', item: absoluteUrl('/classes') || '/classes' },
      { '@type': 'ListItem', position: 3, name: course.title, ...(pageUrl ? { item: pageUrl } : {}) },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50/70">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="relative overflow-hidden bg-white pb-12 pt-8 sm:pb-16 sm:pt-12">
        <div aria-hidden="true" className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-violet-100/70 blur-3xl" />
        <div aria-hidden="true" className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-sky-100/70 blur-3xl" />
        <div className="container-shell relative">
          <Link href="/classes#class-catalog" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-600 transition hover:border-violet-200 hover:text-brand-violet">
            <ArrowLeft size={16} /> All classes
          </Link>
          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.72fr)] lg:gap-14">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-violet-50 px-3 py-1.5 text-xs font-extrabold text-brand-violet">{course.category}</span>
                <span className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-extrabold text-amber-800">{course.level}</span>
              </div>
              <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-[-0.04em] text-brand-navy sm:text-5xl lg:text-6xl">{course.title}</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">{course.description}</p>
              <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <span className="inline-flex items-center gap-2"><Clock3 size={17} className="text-brand-violet" /> {course.duration}</span>
                <span className="inline-flex items-center gap-2"><GraduationCap size={17} className="text-brand-violet" /> {course.level}</span>
                <span className="inline-flex items-center gap-2"><Star size={16} className="fill-brand-gold text-brand-gold" /> {course.rating} illustrative rating</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/classes#class-catalog" className="button-primary">Explore all classes <ArrowRight size={17} /></Link>
                <Link href="/about" className="button-secondary">About Elevora <ArrowUpRight size={16} /></Link>
              </div>
            </div>
            <div className={'relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br p-8 shadow-[0_25px_70px_rgba(25,35,80,0.18)] sm:p-10 ' + course.color}>
              <div
                aria-hidden="true"
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: backgroundByIcon[course.icon] ? `url('${backgroundByIcon[course.icon]}')` : undefined }}
              />
              <div aria-hidden="true" className="absolute inset-0 z-0 bg-gradient-to-br from-[#13113d]/75 via-[#33206b]/65 to-[#0b2e4e]/75" />
              <div aria-hidden="true" className="absolute -right-10 -top-12 z-[1] h-56 w-56 rounded-full border border-white/25" />
              <div aria-hidden="true" className="absolute -bottom-16 -left-10 z-[1] h-48 w-48 rounded-full border border-white/25" />
              <div className="relative z-10">
                <CourseIcon icon={course.icon} size="hero" />
                <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.2em] text-white/70">Learn with Elevora</p>
                <p className="mt-2 text-2xl font-black leading-tight text-white sm:text-3xl">Build skills one lesson at a time.</p>
                <div className="mt-8 flex items-center gap-3 border-t border-white/20 pt-5 text-sm font-semibold text-white/85">
                  <BookOpen size={18} /> Clear, practical learning
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container-shell grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="rounded-[1.75rem] border border-slate-200/70 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-black tracking-tight text-brand-navy">About this class</h2>
            <p className="mt-4 leading-8 text-slate-600">{course.description} This course is listed as part of Elevora Academy’s online learning catalogue. Review the class details and contact the academy to confirm current availability, lesson format and enrolment information.</p>
            <h2 className="mt-8 text-xl font-black tracking-tight text-brand-navy">Class overview</h2>
            <dl className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4"><dt className="text-xs font-semibold text-slate-500">Subject area</dt><dd className="mt-1 font-bold text-brand-navy">{course.category}</dd></div>
              <div className="rounded-2xl bg-slate-50 p-4"><dt className="text-xs font-semibold text-slate-500">Level</dt><dd className="mt-1 font-bold text-brand-navy">{course.level}</dd></div>
              <div className="rounded-2xl bg-slate-50 p-4"><dt className="text-xs font-semibold text-slate-500">Listed duration</dt><dd className="mt-1 font-bold text-brand-navy">{course.duration}</dd></div>
              <div className="rounded-2xl bg-slate-50 p-4"><dt className="text-xs font-semibold text-slate-500">Instructor</dt><dd className="mt-1 font-bold text-brand-navy">{course.instructor}</dd></div>
            </dl>
          </article>
          <aside className="h-fit rounded-[1.75rem] border border-slate-200/70 bg-white p-6 shadow-sm sm:p-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1.5 text-xs font-extrabold text-brand-violet"><Users size={14} /> Your next step</span>
            <h2 className="mt-4 text-xl font-black text-brand-navy">Interested in this class?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-500">Browse the class catalogue or learn more about the academy before deciding what fits your goals.</p>
            <Link href="/classes#class-catalog" className="button-primary mt-5 w-full">Browse classes <ArrowRight size={16} /></Link>
            <Link href="/about" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-3 text-sm font-bold text-slate-600 transition hover:border-violet-200 hover:text-brand-violet">About Elevora <ArrowUpRight size={16} /></Link>
          </aside>
        </div>
      </section>
    </main>
  );
}

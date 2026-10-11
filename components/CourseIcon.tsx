import Image from 'next/image';
import type { CSSProperties } from 'react';

const iconSources: Record<string, { src: string; alt: string; className: string }> = {
  FR: { src: '/course-icons/french-flag.svg', alt: 'French flag', className: 'h-9 w-9 rounded-md object-cover shadow-sm' },
  EN: { src: '/course-icons/english-flag.svg', alt: 'Flag of the United Kingdom', className: 'h-9 w-9 rounded-md object-cover shadow-sm' },
  DE: { src: '/course-icons/german-flag.svg', alt: 'German flag', className: 'h-9 w-9 rounded-md object-cover shadow-sm' },
  Py: { src: '/course-icons/python.svg', alt: 'Python logo', className: 'h-11 w-11 object-contain' },
  JAVA: { src: '/course-icons/java.svg', alt: 'Java logo', className: 'h-11 w-11 object-contain' },
};

type CourseIconProps = {
  icon: string;
  size?: 'card' | 'hero';
};

export default function CourseIcon({ icon, size = 'card' }: CourseIconProps) {
  const source = iconSources[icon] ?? iconSources.Py;
  const container = size === 'hero' ? 'h-24 w-24 rounded-[1.5rem]' : 'h-16 w-16 rounded-[1.25rem]';
  const imageSize = size === 'hero' ? 52 : 42;
  return (
    <span
      role="img"
      aria-label={source.alt}
      className={'relative flex shrink-0 items-center justify-center border border-white/35 bg-white/95 shadow-lg ' + container}
    >
      <Image src={source.src} alt="" width={imageSize} height={imageSize} className={source.className} />
    </span>
  );
}

import { Reveal } from './Reveal';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <Reveal className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      <span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />{eyebrow}</span>
      <h2 className="section-title mt-5">{title}</h2>
      <div className={'mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-brand-blue via-brand-violet to-brand-gold transition-all duration-500 hover:w-24 ' + (centered ? 'mx-auto' : '')} />
      {description && <p className={'muted-copy mt-5 max-w-2xl ' + (centered ? 'mx-auto' : '')}>{description}</p>}
    </Reveal>
  );
}

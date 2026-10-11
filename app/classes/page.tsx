import PageHero from '@/components/PageHero';
import ClassesCatalog from '@/components/ClassesCatalog';

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
    </main>
  );
}

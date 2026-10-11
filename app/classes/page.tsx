import PageHero from '@/components/PageHero';
import ClassesCatalog from '@/components/ClassesCatalog';

export default function ClassesPage() {
  return (
    <main className="overflow-x-clip">
      <PageHero
        variant="classes"
        eyebrow="Discover your next skill"
        title="Find your next"
        highlight="big opportunity."
        description={'Explore welcoming classes in languages, technology\nand academics. Find a learning path that fits your goals\nand start making progress with greater confidence.'}
        primaryLabel="Browse classes"
        primaryHref="#class-filters"
        secondaryLabel="Our approach"
        secondaryHref="/about"
        proofs={["Learn from anywhere", "Guided at every step"]}
      />
      <ClassesCatalog />
    </main>
  );
}

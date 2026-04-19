import { FadeIn } from "./FadeIn";

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <FadeIn>
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {children}
      </h2>
    </FadeIn>
  );
}

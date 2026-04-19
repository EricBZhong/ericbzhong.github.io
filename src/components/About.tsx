import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="bg-card px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading>About</SectionHeading>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
          <FadeIn>
            <p>
              I&apos;m a founding engineer who lives at the intersection of
              shipping fast and building right. After studying Engineering
              Physics at Berkeley, I cut my teeth at Coinbase and Arta
              Finance&mdash;learning how to build at startup speed while
              operating in regulated industries. Then I co-founded Colby, where
              I built the entire technical platform from scratch: AI agents,
              Chrome extensions, cloud infrastructure, enterprise
              security&mdash;the full stack.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p>
              I&apos;m drawn to early-stage companies where I can own the
              technical vision end-to-end. I&apos;ve operated across every part
              of the development cycle&mdash;architecture, frontend, backend,
              AI/ML, infrastructure, security, compliance, and testing. I thrive
              in ambiguity, move quickly, and care deeply about the craft.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p>
              Outside of work, you&apos;ll find me powerlifting, playing piano,
              cooking, or hiking.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

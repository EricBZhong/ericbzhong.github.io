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
              I studied Engineering Physics at Berkeley, which is a fancy way of
              saying I liked math but also wanted to build things. After school I
              went to Coinbase and then Arta Finance, where I got to work on
              real systems in regulated industries&mdash;the kind where if your
              code is wrong, someone&apos;s money is wrong. Then I co-founded
              Colby and built the whole platform myself: the AI agents, the
              Chrome extension, the cloud infra, the security layer, everything.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p>
              I like being early. Early-stage companies where there&apos;s no
              playbook and you have to figure it out as you go. I&apos;ve ended
              up touching every part of the stack out of necessity&mdash;frontend,
              backend, AI, infra, security, compliance, testing. Not because I
              set out to be a generalist, but because when you&apos;re employee
              one, there&apos;s nobody else to do it.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p>
              When I&apos;m not coding I&apos;m usually powerlifting, playing
              piano, cooking, or somewhere on a trail.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

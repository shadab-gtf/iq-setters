import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

export function ContactSection() {
  return (
    <section className="home-contact" id="contact" aria-labelledby="contact-title">
      <Reveal className="home-contact-inner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/iq-mark.svg" width={40} height={34} loading="lazy" alt="" />
        <div>
          <h2 id="contact-title">
            Let&rsquo;s move your
            <br />
            next step forward.
          </h2>
          <p>
            Find the right products for your team.
            <br />
            Start with a conversation.
          </p>
        </div>
        <Button href="https://iqsetters.com/contact-us" label="Book a demo" variant="white" />
      </Reveal>
    </section>
  );
}

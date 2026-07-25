export default function NewsletterForm() {
  return (
    <section className="bg-charcoal px-6 py-[52px] md:px-[60px] md:py-[64px] text-white">
      <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-sans font-normal mb-[10px]">
        Stay in the loop
      </p>
      <h2 className="font-display uppercase tracking-tight font-semibold text-[34px] md:text-[42px] leading-[1.05] mb-2">
        Join our mailing list
      </h2>
      <p className="font-sans font-light text-[18px] text-white/55 mb-8">
        Be the first to hear about events, new menus and special offers
      </p>
      <div id="sr-subscription-root" data-button-id="4" data-color="#09223A">
        Stay in touch
      </div>
    </section>
  )
}

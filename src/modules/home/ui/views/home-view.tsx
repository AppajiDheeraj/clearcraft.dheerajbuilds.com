import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import { FiCheck, FiPhone } from "react-icons/fi";
import { offers, type Offer } from "../../data/offers";
import { ClosingFooter } from "../components/closing-footer";
import { Preloader } from "../components/preloader";

export function HomeView() {
  return (
    <>
      <main className="relative min-h-svh overflow-hidden bg-white" id="home">
        <header className="relative z-10 flex items-center justify-center px-4 py-4 md:px-8">
          <a className="fixed left-4 top-4 z-50 flex w-fit items-center gap-2 text-xs font-medium text-neutral-950 no-underline md:left-8 md:gap-2.5 md:text-sm" href="#home" aria-label="Dheeraj builds home">
            <Image className="size-5 brightness-0 md:size-6" src="/favicon.svg" alt="" width={24} height={24} priority />
            <span>Dheeraj builds</span>
          </a>
          <nav className="hidden items-center rounded-full border border-neutral-200 bg-white p-1.5 text-sm shadow-sm md:flex" aria-label="Main navigation">
            <a className="rounded-full px-4 py-2 text-neutral-950 no-underline transition-colors hover:bg-neutral-100" href="#home">Home</a>
            <a className="rounded-full px-4 py-2 text-neutral-950 no-underline transition-colors hover:bg-neutral-100" href="#pricing">Pricing</a>
            <a className="rounded-full bg-neutral-950 px-4 py-2 text-white no-underline transition-colors hover:bg-neutral-800" href="https://t.me/AppajiDheeraj">Get Noticed!</a>
          </nav>
          <a className="fixed right-4 top-3.5 z-50 flex h-9 w-32 items-center justify-center gap-1.5 rounded-full border border-[#303030] bg-[linear-gradient(180deg,#242424_0%,#101010_100%)] px-4 text-xs font-medium text-white no-underline shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_8px_20px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 md:right-8 md:top-4 md:h-10 md:w-44 md:gap-2 md:px-7 md:text-sm" href="https://t.me/AppajiDheeraj">
            <FaTelegramPlane className="size-3.5 md:size-4" aria-hidden="true" /><span>Let&apos;s Chat</span>
          </a>
        </header>

        <section className="grid min-h-[calc(100svh-68px)] content-center justify-items-center px-5 pb-[4svh] text-center md:min-h-[calc(100svh-77px)] md:px-6 md:pb-0" aria-labelledby="hero-title">
          <h1 className="m-0 max-w-[22rem] text-[clamp(2.35rem,6vw,5.45rem)] font-medium leading-[1.04] tracking-[-0.055em] text-neutral-950 sm:max-w-none md:leading-[1.02]" id="hero-title">
            <span className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 md:flex-nowrap md:gap-x-5 md:gap-y-3">
              <span>Hello</span>
              <span className="relative h-16 w-28 overflow-hidden rounded-full bg-[#fff3dc] sm:h-20 sm:w-36 md:h-24 md:w-48">
                <Image className="h-full w-full object-contain" src="/profile-photo.png" alt="" width={1254} height={1254} priority />
              </span>
              <span>I&apos;m <span className="ml-[0.12em] inline-block translate-y-[0.04em] -rotate-2 font-[family-name:var(--font-hand)] text-[1.17em] font-normal tracking-normal no-underline">Dheeraj</span></span>
            </span>
            <span className="mt-[0.22em] block text-[0.88em] sm:text-[1.05em]">Product <em className="mx-[0.18em] font-normal">designer</em> &amp; developer</span>
          </h1>

          <div className="mt-10 grid justify-items-center gap-4 md:mt-16">
            <p className="m-0 flex items-center gap-2.5 text-sm font-medium text-neutral-600">
              <span className="relative flex size-3 items-center justify-center" aria-hidden="true">
                <span className="absolute size-full rounded-full bg-emerald-400/45 motion-safe:animate-ping" />
                <span className="relative size-2 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.12)]" />
              </span>
              Available for New Projects
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a className="flex h-12 w-fit min-w-44 items-center justify-center gap-2 rounded-full border border-[#0088cc] bg-[#0088cc] px-6 text-sm font-medium text-white no-underline transition-colors duration-300 hover:border-[#0077b5] hover:bg-[#0077b5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0088cc]" href="https://t.me/AppajiDheeraj"><FaTelegramPlane size={16} aria-hidden="true" /><span>Let&apos;s Chat</span></a>
              <a className="flex h-12 w-fit min-w-44 cursor-pointer items-center gap-3 rounded-full border border-neutral-950 bg-neutral-950 p-1 pe-6 text-sm font-medium text-white no-underline transition-colors duration-300 hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950" href="https://cal.com/appajidheeraj/project-discovery"><span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-neutral-950" aria-hidden="true"><FiPhone size={16} /></span><span>Book a Call</span></a>
            </div>
          </div>
        </section>
      </main>

      <PricingSection />
      <ClosingFooter />
      <Preloader />
    </>
  );
}

function PricingSection() {
  return (
    <section className="grid bg-white px-5 py-14 text-[#10131d] lg:min-h-svh lg:content-center lg:py-16" id="pricing" aria-labelledby="pricing-title">
      <div className="mx-auto w-full max-w-[1120px]">
        <h2 className="mb-8 text-center text-[clamp(2.65rem,5vw,3.35rem)] font-medium leading-none tracking-[-0.055em] text-black" id="pricing-title">What package fits you?</h2>
        <div className="grid gap-4 rounded-[28px] bg-[#e8e7e4] p-4 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => <PricingCard {...offer} key={offer.title} />)}
          <article className="relative flex min-h-[430px] flex-col overflow-hidden rounded-xl bg-white p-8 shadow-[0_3px_12px_rgba(18,18,18,0.12)] md:col-span-2 lg:col-span-1">
            <CardCorners />
            <h3 className="m-0 text-[1.65rem] font-medium tracking-[-0.035em]">Unique Request</h3>
            <p className="mt-5 max-w-[31rem] border-t border-neutral-100 pt-6 text-sm leading-relaxed text-neutral-700">Are you looking for something custom?<br />Don&apos;t hesitate to contact us, and we&apos;ll help brainstorm your product to success.</p>
            <ContactLink />
          </article>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ title, previousPrice, price, qualifier, features }: Offer) {
  return (
    <article className="relative flex min-h-[430px] flex-col overflow-hidden rounded-xl bg-white p-8 shadow-[0_3px_12px_rgba(18,18,18,0.12)]">
      <CardCorners />
      <h3 className="m-0 text-[1.65rem] font-medium tracking-[-0.035em]">{title}</h3>
      <p className="mt-5 flex items-end gap-3 border-b border-neutral-100 pb-6">
        <span className="pb-1 text-lg text-neutral-400 line-through">{previousPrice}</span>
        <span className="text-[2.75rem] font-medium leading-none tracking-[-0.04em] text-black">{price}</span>
        <span className="ml-auto pb-1 text-xs text-neutral-500">{qualifier}</span>
      </p>
      <FeatureList items={features} />
      <ContactLink />
    </article>
  );
}

function ContactLink() {
  return <a className="relative z-10 mt-auto w-fit rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white no-underline transition hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" href="https://t.me/AppajiDheeraj">Contact Us</a>;
}

function FeatureList({ items }: { items: readonly string[] }) {
  return (
    <ul className="relative z-10 mt-6 grid list-none gap-3.5 p-0 text-sm">
      {items.map((item) => <li className="flex items-center gap-3" key={item}><span className="grid size-5 shrink-0 place-items-center rounded-full border border-neutral-300 text-neutral-400" aria-hidden="true"><FiCheck size={13} /></span>{item}</li>)}
    </ul>
  );
}

function CardCorners() {
  return <>{["left-3 top-3", "right-3 top-3", "bottom-3 left-3", "bottom-3 right-3"].map((position) => <span className={`absolute size-1.5 rounded-full bg-[#e5e7e5] ${position}`} aria-hidden="true" key={position} />)}</>;
}

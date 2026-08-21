"use client";

import Image from "next/image";
import { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { Switch } from "@/components/ui/switch";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import ClosingFooter from "./Footer";

export default function Home() {
  return (
    <>
      <main className="relative min-h-svh overflow-hidden bg-white" id="home">
        <header className="relative z-10 grid grid-cols-[1fr_auto] items-center px-5 py-4 md:grid-cols-[1fr_auto_1fr] md:px-8">
          <a className="flex w-fit items-center gap-2.5 text-sm font-medium text-neutral-950 no-underline" href="#home" aria-label="Dheeraj builds home">
            <Image className="size-6 brightness-0" src="/favicon.svg" alt="" width={24} height={24} priority />
            <span>Dheeraj builds</span>
          </a>

          <nav className="hidden items-center rounded-full border border-neutral-200 bg-white p-1 text-xs shadow-sm md:flex" aria-label="Main navigation">
            <a className="rounded-full px-4 py-2 text-neutral-950 no-underline transition-colors hover:bg-neutral-100" href="#home">Home</a>
            <a className="rounded-full px-4 py-2 text-neutral-950 no-underline transition-colors hover:bg-neutral-100" href="#pricing">Pricing</a>
            <a className="rounded-full bg-neutral-950 px-4 py-2 text-white no-underline transition-colors hover:bg-neutral-800" href="https://t.me/AppajiDheeraj">Get Noticed!</a>
          </nav>

          <a className="flex h-10 w-40 items-center justify-center justify-self-end gap-2 rounded-full border border-[#303030] bg-[linear-gradient(180deg,#242424_0%,#101010_100%)] px-7 text-sm font-medium text-white no-underline shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_8px_20px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 md:w-44" href="https://t.me/AppajiDheeraj">
            <FaTelegramPlane size={16} aria-hidden="true" />
            <span>Let&apos;s Chat</span>
          </a>
        </header>

        <section className="grid min-h-[calc(100svh-77px)] content-center justify-items-center px-4 pb-[8svh] text-center md:px-6 md:pb-0" aria-labelledby="hero-title">
          <h1 className="m-0 text-[clamp(2.7rem,6vw,5.45rem)] font-medium leading-[1.02] tracking-[-0.055em] text-neutral-950" id="hero-title">
            <span className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 md:flex-nowrap">
              <span>Hello</span>
              <span className="relative order-3 h-24 w-40 overflow-hidden rounded-full bg-[#fff3dc] sm:order-none md:w-48">
                <Image
                  className="h-full w-full object-contain"
                  src="/profile-photo.png"
                  alt=""
                  width={1254}
                  height={1254}
                  priority
                />
              </span>
              <span>I&apos;m <span className="ml-[0.12em] inline-block translate-y-[0.04em] -rotate-2 font-[family-name:var(--font-hand)] text-[1.17em] font-normal tracking-normal no-underline">Dheeraj</span></span>
            </span>
            <span className="mt-[0.15em] flex flex-wrap items-center justify-center text-[1.05em] sm:flex-nowrap">
              Product <em className="mx-[0.18em] font-normal">designer</em> &amp; developer
            </span>
          </h1>

          <div className="mt-14 grid justify-items-center gap-4 md:mt-16">
            <p className="m-0 flex items-center gap-2.5 text-sm font-medium text-neutral-600">
              <span className="relative flex size-3 items-center justify-center" aria-hidden="true">
                <span className="absolute size-full rounded-full bg-emerald-400/45 motion-safe:animate-ping" />
                <span className="relative size-2 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.12)]" />
              </span>
              Available for New Projects
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a className="flex h-12 w-fit min-w-44 items-center justify-center gap-2 rounded-full border border-[#0088cc] bg-[#0088cc] px-6 text-sm font-medium text-white no-underline transition-colors duration-300 hover:border-[#0077b5] hover:bg-[#0077b5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0088cc]" href="https://t.me/AppajiDheeraj">
                <FaTelegramPlane size={16} aria-hidden="true" />
                <span>Let&apos;s Chat</span>
              </a>
              <a className="flex h-12 w-fit min-w-44 cursor-pointer items-center gap-3 rounded-full border border-neutral-950 bg-neutral-950 p-1 pe-6 text-sm font-medium text-white no-underline transition-colors duration-300 hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950" href="https://cal.com/appajidheeraj/project-discovery">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#f3e9d8] text-neutral-950" aria-hidden="true"><FiPhone size={16} /></span>
                <span>Book a Call</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <PricingSection />

      <ClosingFooter />

      <div className="preloader" role="status" aria-label="Loading website">
        <div className="brand">
          <Image src="/favicon.svg" alt="" width={24} height={24} priority />
          <span>Dheeraj Builds</span>
        </div>
        <div className="preloader-media">
          <video autoPlay muted playsInline preload="auto" aria-label="Dheeraj Builds loading animation" width={1920} height={1080}
            onEnded={(event) => event.currentTarget.closest(".preloader")?.classList.add("preloader--leaving")}
          >
            <source src="/preloader.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}

const webFeatures = ["Custom Web Design", "Responsive Development", "Fast Delivery", "Secure Payments"];
const productFeatures = ["Apps & Dashboards", "Tailored Product Design", "Scalable Design Systems", "Page-based Project Scope"];

function PricingSection() {
  const [pageType, setPageType] = useState<"landing" | "web-app">("landing");
  const [development, setDevelopment] = useState(false);

  return (
    <section className="bg-white px-5 py-20 text-[#10131d] md:py-28" id="pricing" aria-labelledby="pricing-title">
      <div className="mx-auto max-w-[800px]">
        <h2 className="mb-12 text-center text-[clamp(2.65rem,5vw,3.35rem)] font-medium leading-none tracking-[-0.055em] text-black" id="pricing-title">
          What package fits you?
        </h2>

        <div className="grid gap-4 rounded-[28px] bg-[#e8e7e4] p-4 md:grid-cols-2">
          <article className="relative flex min-h-[530px] flex-col overflow-hidden rounded-xl bg-white p-8 shadow-[0_3px_12px_rgba(18,18,18,0.12)]">
            <CardCorners />
            <h3 className="m-0 text-[1.65rem] font-medium tracking-[-0.035em]">Web Design</h3>
            <p className="mt-4 flex items-end gap-2 border-b border-neutral-100 pb-6">
              <span className="text-[2.45rem] font-medium leading-none tracking-[-0.04em] text-black">$220</span>
              <span className="pb-1 text-xs text-neutral-400">One-time</span>
            </p>
            <ToggleGroup className="mt-5 rounded-full bg-muted p-1" value={[pageType]} onValueChange={(value) => value[0] && setPageType(value[0] as typeof pageType)} spacing={0} aria-label="Web design package">
              <ToggleGroupItem className="rounded-full px-3 text-xs data-pressed:bg-white data-pressed:shadow-sm" value="landing">Landing Page</ToggleGroupItem>
              <ToggleGroupItem className="rounded-full px-3 text-xs data-pressed:bg-white data-pressed:shadow-sm" value="web-app">Web App</ToggleGroupItem>
            </ToggleGroup>
            <div className="mt-4 flex items-center gap-3 border-b border-neutral-100 pb-5 text-sm">
              <span>NextJS Development</span>
              <Switch checked={development} onCheckedChange={setDevelopment} aria-label="NextJS Development" />
            </div>
            <FeatureList items={webFeatures} />
            <p className="relative z-10 mt-5 border-t border-neutral-100 pt-5 text-[0.82rem] leading-[1.55] text-neutral-700">A focused landing page or custom web experience, designed and developed as a one-time project.</p>
            <div className="mt-auto border-t border-neutral-100 pt-6">
              <a className="relative z-10 inline-block rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white no-underline transition hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" href="https://t.me/AppajiDheeraj">Contact Us</a>
            </div>
            <Image className="pointer-events-none absolute -bottom-4 -right-2 h-auto w-40" src="/pricing-tree-pink.png" alt="" width={384} height={384} />
          </article>

          <article className="relative flex min-h-[530px] flex-col overflow-hidden rounded-xl bg-white p-8 shadow-[0_3px_12px_rgba(18,18,18,0.12)]">
            <CardCorners />
            <h3 className="m-0 text-[1.65rem] font-medium tracking-[-0.035em]">Product Design</h3>
            <p className="mt-4 flex items-end gap-2 border-b border-neutral-100 pb-6">
              <span className="text-[2.45rem] font-medium leading-none tracking-[-0.04em] text-black">$400</span>
              <span className="pb-1 text-xs text-neutral-400">Minimum</span>
            </p>
            <FeatureList items={productFeatures} />
            <p className="relative z-10 mt-6 max-w-[17rem] border-t border-neutral-100 pt-6 text-[0.82rem] leading-[1.55] text-neutral-700">
              For apps, dashboards, and digital products. Additional screens or pages are quoted based on the final scope.
            </p>
            <a className="relative z-10 mt-auto w-fit rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white no-underline transition hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" href="https://t.me/AppajiDheeraj">Contact Us</a>
            <Image className="pointer-events-none absolute -bottom-4 -right-2 h-auto w-40" src="/pricing-tree-gold.png" alt="" width={384} height={384} />
          </article>
        </div>

        <article className="relative mt-5 min-h-[220px] overflow-hidden rounded-[24px] bg-[#e3e2df] p-8 md:p-9">
          <div className="relative z-10 max-w-[34rem]">
            <h3 className="m-0 text-[1.65rem] font-medium tracking-[-0.035em]">Unique Request</h3>
            <p className="mt-3 max-w-[31rem] text-sm leading-relaxed text-neutral-700">Are you looking for something custom?<br />Don&apos;t hesitate to contact us, and we&apos;ll help brainstorming your product to success.</p>
            <a className="mt-7 inline-block rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white no-underline transition hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" href="https://t.me/AppajiDheeraj">Contact Us</a>
          </div>
          <Image className="pointer-events-none absolute bottom-0 right-0 h-auto w-[72%] max-w-none" src="/pricing-platform.png" alt="" width={1200} height={400} />
        </article>
      </div>
    </section>
  );
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="relative z-10 mt-5 grid list-none gap-3 p-0 text-sm">
      {items.map((item) => <li className="flex items-center gap-3" key={item}><span className="text-[0.72rem] text-[#c3c5c2]" aria-hidden="true">❖</span>{item}</li>)}
    </ul>
  );
}

function CardCorners() {
  return <>{["left-3 top-3", "right-3 top-3", "bottom-3 left-3", "bottom-3 right-3"].map((position) => <span className={`absolute size-1.5 rounded-full bg-[#e5e7e5] ${position}`} aria-hidden="true" key={position} />)}</>;
}

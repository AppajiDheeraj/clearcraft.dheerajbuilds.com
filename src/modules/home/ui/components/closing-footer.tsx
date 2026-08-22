import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/appaji-dheeraj", Icon: FaLinkedinIn },
  { label: "X (Twitter)", href: "https://x.com/AppajiDheeraj", Icon: FaXTwitter },
  { label: "Instagram", href: "https://www.instagram.com/dheeraj.builds", Icon: FaInstagram },
  { label: "GitHub", href: "https://github.com/AppajiDheeraj", Icon: FaGithub },
];

export function ClosingFooter() {
  return (
    <section className="relative grid min-h-[125svh] grid-rows-[50svh_75svh] overflow-hidden bg-[#0f0f0f] sm:h-svh sm:min-h-0 sm:grid-rows-2" aria-label="Thank you and contact">
      <div className="relative grid h-full grid-cols-2 content-between bg-white px-5 pb-6 pt-8 md:px-8 md:pb-7 md:pt-10">
        <h2 className="relative z-20 col-span-2 m-0 text-center font-sans text-[clamp(3.5rem,8vw,7rem)] font-medium leading-none tracking-[-0.05em] text-neutral-950">Thank You</h2>
        <p className="relative z-20 m-0 text-base text-neutral-600 md:text-xl">(Creative)</p>
        <p className="relative z-20 m-0 text-right text-base text-neutral-600 md:text-xl">(Design)</p>
      </div>

      <video className="absolute left-1/2 top-[50svh] z-10 h-[70svh] w-auto -translate-x-1/2 -translate-y-[56.5625%] scale-110 sm:h-[72svh]" autoPlay loop muted playsInline preload="metadata" poster="/waving-goodbye-alpha-v2.png" width={1080} height={1920} aria-label="Animated illustration of Dheeraj waving goodbye">
        <source src="/waving-goodbye-alpha-v2.mp4" type='video/mp4; codecs="hvc1"' />
        <source src="/waving-goodbye-alpha-v2.webm" type='video/webm; codecs="vp9"' />
        Your browser does not support embedded video.
      </video>

      <footer className="relative z-20 grid h-full grid-cols-1 content-end justify-end gap-6 px-6 pb-8 pt-[30svh] text-neutral-50 sm:grid-cols-2 sm:content-center sm:items-center sm:gap-0 sm:px-10 sm:py-8 md:px-12">
        <div className="justify-self-center text-center sm:justify-self-start sm:text-left">
          <address className="grid w-max max-w-full not-italic">
            <span className="mb-1 text-sm">Email:</span>
            <a className="text-sm text-neutral-400 no-underline transition-colors hover:text-white" href="mailto:buildbydheeraj@gmail.com">buildbydheeraj@gmail.com</a>
            <span className="mb-1 mt-4 text-sm">Location:</span>
            <a className="text-sm text-neutral-400 no-underline transition-colors hover:text-white" href="https://www.google.com/maps/search/?api=1&query=Bengaluru%2C%20Karnataka%2C%20India" target="_blank" rel="noreferrer">Bengaluru, Karnataka, India</a>
          </address>

          <nav className="mt-6 flex items-center justify-center gap-5 sm:justify-start" aria-label="Social profiles">
            {socials.map(({ label, href, Icon }) => (
              <a className="grid size-6 place-items-center text-white transition hover:text-neutral-300 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                <Icon className="size-full" aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>

        <div className="justify-self-center text-center sm:justify-self-end">
          <p className="m-0 text-lg">Warm Regards,</p>
          <p className="mt-8 whitespace-nowrap text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-none" style={{ fontFamily: '"Brittany Signature", cursive' }}>Appaji Dheeraj</p>
        </div>
      </footer>
    </section>
  );
}

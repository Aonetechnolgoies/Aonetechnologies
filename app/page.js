"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./styles.module.css";
import { useReveal, useSmoothScroll } from "./animation";
import Head from "next/head";

// Project list
const projects = [
  {
    title: "Cafe Website",
    tag: "Web • Management",
    images: [
      "/images/projects/coffee-web/Screenshot 2025-11-01 192526.png",
      "/images/projects/coffee-web/Screenshot 2025-11-01 192933.png",
      "/images/projects/coffee-web/Screenshot 2025-11-01 193155.png",
      "/images/projects/coffee-web/Screenshot 2025-11-01 193328.png",
      "/images/projects/coffee-web/Screenshot 2025-11-01 193417.png",
    ],
  },
  {
    title: "Cosmetics Website",
    tag: "Web",
    images: [
      "/images/projects/cosmetics-site/Screenshot 2025-11-01 194546.png",
      "/images/projects/cosmetics-site/Screenshot 2025-11-01 195435.png",
      "/images/projects/cosmetics-site/Screenshot 2025-11-01 194652.png",
      "/images/projects/cosmetics-site/Screenshot 2025-11-01 195346.png",
      "/images/projects/cosmetics-site/Screenshot 2025-11-01 194756.png",
      "/images/projects/cosmetics-site/Screenshot 2025-11-01 194942.png",
      "/images/projects/cosmetics-site/Screenshot 2025-11-01 194128.png",
    ],
  },
  {
    title: "Spa & cosmetic Website",
    tag: "Web • Management",
    images: [
      "/images/projects/spa-web/WhatsApp Image 2025-11-01 at 20.40.41_7ffea914.jpg",
      "/images/projects/spa-web/WhatsApp Image 2025-11-01 at 20.40.44_f45d76a0.jpg",
      "/images/projects/spa-web/WhatsApp Image 2025-11-01 at 20.40.51_41fb37e3.jpg",
    ],
  },
  {
    title: "Movie day post",
    tag: "Social Media",
    images: [
      "/images/projects/movie-day/WhatsApp Image 2025-11-01 at 21.29.59_bfceded9.jpg",
      "/images/projects/movie-day/WhatsApp Image 2025-11-01 at 21.30.02_7a0f4e1c.jpg",
    ],
  },
  {
    title: "Restaurant Branding",
    tag: "Brand • Design",
    images: [
      "/images/projects/Restaurant/urban_toast.jpg",
    ],
  },
  {
    title: "Gaming Event",
    tag: "Brand • Design",
    images: [
      "/images/projects/gaming-event/WhatsApp Image 2025-11-01 at 22.33.21_5f6c6cd2.jpg",
      "/images/projects/gaming-event/WhatsApp Image 2025-11-01 at 22.33.20_a42f0088.jpg",
    ],
  },
];

function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 ${className}`}>{children}</div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        {/*logo */}
<div className="flex items-center gap-3">
  <div className="h-12 w-12 flex items-center justify-center overflow-hidden rounded-xl bg-transparent">
    <Image
      src="/images/static/logo.jpeg"
      alt="Aone Technologies Logo"
      width={100}
      height={100}
      className="h-auto w-auto object-contain scale-125"
      priority
    />
  </div>
  <span className="text-xl font-semibold tracking-tight text-gray-900">
    Aone Technologies
  </span>
</div>




        <nav className="hidden items-center gap-8 md:flex">
          {[
            ["Home", "#hero"],
            ["Services", "#services"],
            ["Projects", "#projects"],
            ["About", "#about"],
            ["Contact", "#footer"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              data-scroll
              className="text-sm font-medium text-gray-700 transition hover:text-[#5600F4]"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            data-scroll
            className="rounded-full bg-[#5600F4] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90"
          >
            Get Started
          </a>
        </nav>

        <button
          onClick={() => setOpen((s) => !s)}
          className="md:hidden rounded-lg border p-2"
          aria-label="Toggle Menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" />
          </svg>
        </button>
      </Container>

      {open && (
        <div className="border-t bg-white md:hidden">
          <Container className="flex flex-col py-3">
            {[
              ["Home", "#hero"],
              ["Services", "#services"],
              ["Projects", "#projects"],
              ["About", "#about"],
              ["Contact", "#footer"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                data-scroll
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              data-scroll
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[#5600F4] px-4 py-2 text-center text-sm font-semibold text-white"
            >
              Get Started
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[92svh] items-center">
      <Container className="grid items-center gap-10 md:grid-cols-2" data-reveal>
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold text-gray-600">
            Elevate your brand • Build smarter
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
            We craft{" "}
            <span className="relative inline-block">
              high-performance
              <span className="absolute -bottom-1 left-0 h-2 w-full bg-[#5600F4]/30"></span>
            </span>{" "}
            digital experiences.
          </h1>
          <p className="mt-5 max-w-xl text-gray-600">
            Websites that convert, software that scales, and design that
            stands out. Built with strategy, engineered for speed.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              data-scroll
              className="rounded-full bg-[#5600F4] px-5 py-3 text-sm font-semibold text-white shadow hover:opacity-90"
            >
              See Recent Work
            </a>
            <a
              href="#services"
              data-scroll
              className="rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50"
            >
              Explore Services
            </a>
          </div>
        </div>

        <div className="relative">
          <div className={`${styles.heroBlob}`} />
          <div className="relative mx-auto aspect-[4/3] w-full max-w-[540px] overflow-hidden rounded-2xl border bg-white shadow-lg">
            <Image
              src="/images/static/small-hero-img.webp"
              alt="Showcase"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-gray-600">
            <div className="rounded-xl border p-3">Web Dev</div>
            <div className="rounded-xl border p-3">Branding</div>
            <div className="rounded-xl border p-3">Software</div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Services() {
  const cards = [
    {
      title: "Web Development",
      desc: "Blazing-fast, SEO-ready, conversion-focused websites & web apps.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 5h18v14H3z" stroke="currentColor" />
          <path d="M3 9h18" stroke="currentColor" />
        </svg>
      ),
    },
    {
      title: "Graphic Design",
      desc: "Visual identities, social content, ads & packaging that pop.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 4h16v10H4z" stroke="currentColor" />
          <path d="M12 14v6M9 20h6" stroke="currentColor" />
        </svg>
      ),
    },
    {
      title: "Software Development",
      desc: "Custom systems, dashboards, and integrations to automate work.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" />
        </svg>
      ),
    },
  ];
  return (
    <section id="services" className="py-20">
      <Container>
        <h2 className="text-3xl font-extrabold tracking-tight" data-reveal>
          Our Services
        </h2>
        <p className="mt-2 max-w-2xl text-gray-600" data-reveal>
          Strategy-led design and engineering to grow your business.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              data-reveal
              className={`${styles.cardShine} rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md`}
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#5600F4]/10 text-[#5600F4]">
                {c.icon}
              </div>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{c.desc}</p>
              <div className="mt-4 text-sm font-semibold text-[#5600F4]">
                Learn more →
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function WhyUs() {
  const bullets = [
    ["Performance first", "Lighthouse-friendly sites that fly."],
    ["Design that converts", "Modern, accessible UI/UX."],
    ["Battle-tested stack", "Next.js, Tailwind, and robust tooling."],
    ["Transparent process", "Roadmaps, milestones, and updates."],
    ["Scalable systems", "From MVPs to enterprise dashboards."],
    ["Full-service partner", "Web, design, and custom software."],
  ];
  return (
    <section id="why" className="bg-gray-50 py-20">
      <Container>
        <h2 className="text-3xl font-extrabold tracking-tight" data-reveal>
          Why choose Aone?
        </h2>
        <p className="mt-2 max-w-2xl text-gray-600" data-reveal>
          We blend creativity with engineering rigour to deliver results.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {bullets.map(([t, d]) => (
            <div
              key={t}
              data-reveal
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <div className="mb-3 h-2 w-10 rounded-full bg-[#5600F4]"></div>
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-gray-600">{d}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProjectModal({ open, onClose, images, title }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-4xl rounded-2xl bg-white p-4 shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 rounded-full border p-2 hover:bg-gray-50"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" />
          </svg>
        </button>
        <h3 className="mb-3 pl-1 text-lg font-semibold">{title}</h3>
        <div className={`${styles.embla}`} ref={emblaRef}>
          <div className={styles.embla__container}>
            {images.map((src, i) => (
              <div className={styles.embla__slide} key={i}>
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border bg-gray-100">
                  
                  <img src={src} alt={`${title} ${i + 1}`} className="h-full w-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-3">
          <button
            onClick={() => emblaApi && emblaApi.scrollPrev()}
            className="rounded-full border px-4 py-2 text-sm font-semibold hover:bg-gray-50"
          >
            ← Prev
          </button>
          <button
            onClick={() => emblaApi && emblaApi.scrollNext()}
            className="rounded-full bg-[#5600F4] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [modal, setModal] = useState({ open: false, images: [], title: "" });

  return (
    <section id="projects" className="py-20">
      <Container>
        <h2 className="text-3xl font-extrabold tracking-tight" data-reveal>
          Recent Projects
        </h2>
        <p className="mt-2 max-w-2xl text-gray-600" data-reveal>
          A snapshot of work across web, apps, design, and software.
        </p>

        
        <div
          className="mt-10 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))] md:grid-cols-3"
        >
          {projects.map((p, idx) => (
            <button
              key={idx}
              data-reveal
              onClick={() => setModal({ open: true, images: p.images, title: p.title })}
              className="group relative overflow-hidden rounded-2xl border bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] w-full">
                <img
                  src={p.images[0]}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-4">
                <div className="text-xs font-bold text-[#5600F4]">{p.tag}</div>
                <div className="mt-1 text-base font-semibold text-gray-900">
                  {p.title}
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  View gallery →
                </div>
              </div>
            </button>
          ))}
        </div>

        
        <div className="mt-3 text-xs text-gray-500 md:hidden">
          Tip: swipe sideways to see more.
        </div>

        
        <style jsx>{`
          @media (max-width: 767px) {
            #projects .grid {
              grid-auto-flow: column;
              grid-auto-columns: calc(50% - 12px);
              overflow-x: auto;
              scroll-snap-type: x mandatory;
              padding-bottom: 6px;
            }
            #projects .grid > * {
              scroll-snap-align: start;
            }
          }
        `}</style>
      </Container>

      <ProjectModal
        open={modal.open}
        onClose={() => setModal((m) => ({ ...m, open: false }))}
        images={modal.images}
        title={modal.title}
      />
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div data-reveal>
            <h2 className="text-3xl font-extrabold tracking-tight">
              About Aone Technologies
            </h2>
            <p className="mt-3 text-gray-600">
              We’re a Sri Lanka–based team building meaningful, performant
              products. From brand-new startups to established companies,
              we partner long-term to ship, learn, and scale.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li>• Founded by builders who love clean, maintainable code.</li>
              <li>• Obsessed with UX, accessibility, and real business outcomes.</li>
              <li>• Transparent estimates, weekly updates, and clear roadmaps.</li>
            </ul>
            <a
              href="#footer"
              data-scroll
              className="mt-6 inline-block rounded-full bg-[#5600F4] px-5 py-3 text-sm font-semibold text-white"
            >
              Let’s collaborate
            </a>
          </div>

          <div className="relative" data-reveal>
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[520px] overflow-hidden rounded-2xl border bg-white shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600"
                alt="Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Banner() {
  return (
    <section id="banner" className="py-20">
      <Container data-reveal>
        {/* ===== Main Banner ===== */}
        <div className="relative overflow-hidden rounded-3xl bg-[#5600F4] px-10 py-16 text-white shadow-2xl">
          {/* Glow accent */}
          <div className="absolute -right-12 -top-12 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

          {/* Top heading */}
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Build a website that <span className="opacity-90">ROARS</span> authority.
          </h3>

          <p className="mt-4 max-w-2xl text-white/80 text-lg">
            Don’t blend in with the herd. Let’s craft a compelling digital presence that
            stands tall—fast, modern, and unforgettable.
          </p>

          <div className="mt-8 mb-16">
            <a
              href="#footer"
              data-scroll
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#5600F4] hover:opacity-90 transition-all"
            >
              Start your project →
            </a>
          </div>

          {/* ===== Contact Section ===== */}
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-white/80 mb-6 text-base">
              Feel free to reach out to us anytime — we’ll get back to you as soon as we can.
              Whether you’re starting a project or just exploring ideas, we’re here to help.
            </p>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-[#FDD835] text-lg">📧</span>
                <a
                  href="mailto:aonetechnologies24@gmail.com"
                  className="hover:underline"
                >
                  aonetechnologies24@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#FDD835] text-lg">📞</span>
                <a
                  href="tel:+94752077292"
                  className="hover:underline"
                >
                  +94 75 207 7292
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#FDD835] text-lg">💬</span>
                <a
                  href="https://wa.me/94752077292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}


function Footer() {
  return (
    <footer id="footer" className="border-t bg-white py-16">
      <Container>
        <div id="contact" className="grid gap-10 md:grid-cols-2">
          <div>
             <Image
    src="/images/static/logo.jpeg"
    alt="Aone Technologies Logo"
    width={100}
    height={50}
    className="rounded-xl object-cover"
  />
  <span className="text-lg font-semibold tracking-tight">
    Aone Technologies
  </span>
            <p className="mt-3 max-w-md text-gray-600">
              Partner with us to create a compelling narrative for your brand.
              We convert ideas into fast, beautiful products.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-gray-800">Contact</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                @ Aone Technologies
              </li>
              <li>


                <a className="text-[#5600F4] hover:underline" href="mailto:kaviduhansaka05@gmail.com">
                  Email
                </a>{" "}
                •{" "}
                <a className="text-[#5600F4] hover:underline" href="tel:+94775170725">
                  Phone
                </a>{" "}
                •{" "}
                <a className="text-[#5600F4] hover:underline" href="https://wa.me/94775170725" target="_blank">
                  WhatsApp
                </a>
              </li>
              <li className="flex flex-wrap gap-3 pt-2">
                <a className="text-sm text-gray-700 hover:text-[#5600F4]" href="https://www.instagram.com/aone.technologies?igsh=NDltbW82dXFmYnls" target="_blank">Instagram</a>
                <a className="text-sm text-gray-700 hover:text-[#5600F4]" href="https://facebook.com/" target="_blank">Facebook</a>
                <a className="text-sm text-gray-700 hover:text-[#5600F4]" href="https://linkedin.com/" target="_blank">LinkedIn</a>
                <a className="text-sm text-gray-700 hover:text-[#5600F4]" href="https://x.com/" target="_blank">X</a>
                <a className="text-sm text-gray-700 hover:text-[#5600F4]" href="https://tiktok.com/" target="_blank">TikTok</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} Aone Technologies. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default function Page() {
 
  useReveal();
  useSmoothScroll(72);

  return (
    <>
    <Head>
      <title>Home | Aone Technologies</title>
    </Head>
    <main className="bg-white text-gray-900">
      <Nav />
      <Hero />
      <Services />
      <WhyUs />
      <Projects />
      <About />
      <Banner />
      <Footer />
    </main>
    </>
  );
}

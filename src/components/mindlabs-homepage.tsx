import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Check,
  ChevronDown,
  Compass,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Menu,
  Sparkles,
  Store,
  Target,
  UsersRound,
  X,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import collaborationArt from "@/assets/mindlabs-collaboration.png.asset.json";
import digitalLearningImage from "@/assets/mindlabs-digital-learning.jpg.asset.json";
import founderPortrait from "@/assets/siddhartha-ray.jpg.asset.json";
import learningPathArt from "@/assets/mindlabs-learning-path.png.asset.json";
import learningStrategyImage from "@/assets/mindlabs-learning-strategy.jpg.asset.json";
import leadershipConversationImage from "@/assets/mindlabs-leadership-conversation.jpg.asset.json";
import logo from "@/assets/mindlabs-logo.png.asset.json";
import neuralBrainArt from "@/assets/mindlabs-neural-brain.png.asset.json";
import peopleInPracticeImage from "@/assets/mindlabs-people-in-practice.jpg.asset.json";
import salesEffectivenessImage from "@/assets/mindlabs-sales-effectiveness.jpg.asset.json";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Expertise", href: "#expertise" },
  { label: "Organisations", href: "#organisations" },
  { label: "Gallery", href: "#gallery" },
  { label: "Why MINDLABS", href: "#values" },
  { label: "Contact", href: "#contact" },
];

type Service = {
  title: string;
  description: string;
  focusAreas: string[];
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "Leadership Coaching & Behavioural Transformation",
    description:
      "Develop self-awareness, emotional intelligence, communication and decision-making through structured coaching and practical learning.",
    focusAreas: [
      "Leadership development",
      "Emotional intelligence",
      "Behavioural transformation",
      "Executive coaching",
      "Communication & influence",
      "Conflict management",
      "Team effectiveness",
      "Personal effectiveness",
    ],
    icon: BrainCircuit,
  },
  {
    title: "Sales Training & Capability Building",
    description:
      "Build practical selling skills, strengthen customer relationships and help sales teams communicate value, handle objections and negotiate confidently.",
    focusAreas: [
      "Sales effectiveness & performance",
      "Customer engagement & relationship management",
      "Communication, persuasion & influencing",
      "Objection handling & closing skills",
      "Sales leadership & team capability",
      "Professional & behavioural capabilities",
    ],
    icon: Target,
  },
  {
    title: "Learning & Development Strategy",
    description:
      "Design learning strategies aligned with business goals, assess capability gaps and create learning ecosystems that support continuous development.",
    focusAreas: [
      "L&D strategy design",
      "Capability-gap assessment",
      "Learning-programme design",
      "Learning & development execution",
      "Learning effectiveness & evaluation",
      "Organisational learning & development",
    ],
    icon: GraduationCap,
  },
  {
    title: "Dress for Success / Power Dressing",
    description:
      "Help professionals build a confident personal image, understand workplace dressing and create a polished professional presence.",
    focusAreas: [
      "Understanding power dressing",
      "Professional grooming & personal presentation",
      "Corporate dressing & style",
      "Colour coordination & style selection",
      "Personal branding & executive presence",
      "Dressing for professional occasions",
    ],
    icon: BriefcaseBusiness,
  },
  {
    title: "Sales Effectiveness & Operations Planning",
    description:
      "Align sales strategies with operational capabilities through structured planning, process improvement and performance management.",
    focusAreas: [
      "Sales strategy & effectiveness",
      "Sales operations planning",
      "Sales performance management",
      "Sales process & workflow optimisation",
      "Sales and operations alignment",
      "Sales-team development & capability building",
    ],
    icon: ChartNoAxesCombined,
  },
  {
    title: "Luxury Retail Excellence",
    description:
      "Strengthen luxury retail capabilities through personalised service, meaningful customer relationships and confident product presentation.",
    focusAreas: [
      "Luxury customer experience excellence",
      "Luxury sales & client engagement",
      "Personal grooming & professional image",
      "Communication & relationship management",
      "Service excellence & complaint management",
      "Retail-team leadership & performance",
    ],
    icon: Store,
  },
  {
    title: "Soft Skills & Employee Wellbeing",
    description:
      "Build behavioural capabilities, healthier workplace relationships and practical wellbeing habits that support confident performance.",
    focusAreas: [
      "Communication & interpersonal skills",
      "Emotional intelligence & self-awareness",
      "Stress management & workplace wellbeing",
      "Time management & personal effectiveness",
      "Teamwork & workplace collaboration",
      "Adaptability & professional resilience",
      "Employee engagement & positive workplace culture",
    ],
    icon: HeartHandshake,
  },
];

const approach = [
  { title: "Discover", text: "Understand business objectives, organisational priorities and workforce requirements." },
  { title: "Assess", text: "Identify existing capabilities, learning needs and skill gaps." },
  { title: "Design", text: "Develop a customised learning strategy and implementation roadmap." },
  { title: "Execute", text: "Implement programmes through relevant training and development interventions." },
  { title: "Evaluate", text: "Measure learning effectiveness and assess development outcomes." },
  { title: "Optimise", text: "Improve learning strategies based on feedback and organisational needs." },
];

const expertise = [
  "Leadership development",
  "Communication & business influence",
  "Sales effectiveness",
  "Customer service",
  "Collaboration",
  "Personal effectiveness",
];

const values = [
  { title: "Integrity", text: "Maintaining honesty, transparency and professionalism.", icon: Check },
  { title: "Excellence", text: "Striving for quality in every learning experience.", icon: Award },
  { title: "Growth", text: "Encouraging continuous learning and development.", icon: ArrowUpRight },
  { title: "Collaboration", text: "Building strong relationships through teamwork.", icon: UsersRound },
  { title: "Innovation", text: "Promoting fresh thinking and practical solutions.", icon: Lightbulb },
  { title: "Commitment", text: "Staying focused on meaningful development outcomes.", icon: Compass },
];

const organisations = [
  "Fidelity Investments",
  "Mindtree",
  "Blue Dart",
  "Tata Steel",
  "Akzo Nobel",
  "Mahindra Comviva",
  "Citibank",
  "Wyndham Worldwide",
  "Swiss Re",
  "PwC",
  "Genpact",
  "Textron",
  "Axis Bank",
  "LG Electronics",
  "VMware",
  "World Bank",
  "Ernst & Young",
  "Texas Instruments",
];

const galleryItems = [
  {
    image: peopleInPracticeImage.url,
    category: "Shared learning",
    title: "People in practice",
    alt: "Colleagues sharing ideas around a conference table",
  },
  {
    image: learningStrategyImage.url,
    category: "Learning strategy",
    title: "Planning for growth",
    alt: "A professional planning a learning strategy beside a whiteboard",
  },
  {
    image: leadershipConversationImage.url,
    category: "Leadership",
    title: "Conversations that move teams forward",
    alt: "Two colleagues in a focused leadership conversation",
  },
  {
    image: digitalLearningImage.url,
    category: "Digital learning",
    title: "New ways to learn at work",
    alt: "A team member exploring digital learning tools in a modern workplace",
  },
  {
    image: salesEffectivenessImage.url,
    category: "Sales effectiveness",
    title: "Making progress visible",
    alt: "Colleagues reviewing sales performance data together",
  },
];

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="site-brand" href="#home" aria-label="MINDLABS Consulting home">
          <img className="site-brand-logo" src={logo.url} alt="MINDLABS Consulting logo" />
          <span className="site-brand-copy">
            <span className="site-brand-name">MINDLABS</span>
            <span className="site-brand-tagline">Consulting</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <Button asChild className="header-cta" size="default" variant="hero">
          <a href="#contact">Contact us <ArrowUpRight aria-hidden="true" /></a>
        </Button>
        <Button
          className="menu-toggle"
          type="button"
          size="icon"
          variant="ghost"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>
      <nav className={`mobile-nav${menuOpen ? " is-open" : ""}`} aria-label="Mobile navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
        ))}
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="site-hero" id="home" aria-labelledby="hero-title">
      <div className="hero-art" aria-hidden="true">
        <img className="hero-art-image" src={neuralBrainArt.url} alt="" />
      </div>
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-mark" /> People & organisation development</div>
          <h1 className="hero-title" id="hero-title">
            Transforming People.<br />Empowering Leaders.<br /><span>Building Better Organisations.</span>
          </h1>
          <p className="hero-description">
            We help individuals, leaders and organisations unlock their potential through impactful corporate training, leadership development and professional coaching.
          </p>
          <div className="hero-actions">
            <Button asChild className="hero-action" size="xl" variant="hero">
              <a href="#services">Explore our services <ArrowRight aria-hidden="true" /></a>
            </Button>
            <Button asChild className="hero-action" size="xl" variant="heroOutline">
              <a href="#contact">Contact us <ArrowUpRight aria-hidden="true" /></a>
            </Button>
          </div>
          <div className="hero-note">
            <Sparkles size={16} aria-hidden="true" /> Established in Bengaluru in 2013
            <span className="hero-note-separator" aria-hidden="true" />
            <span>Customised learning solutions</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="section-shell section-about" id="about" aria-labelledby="about-title">
      <div className="section-inner">
        <div className="section-intro-row">
          <div>
            <span className="eyebrow"><span className="eyebrow-mark" /> About MINDLABS</span>
            <h2 className="section-title" id="about-title">Empowering people.<br /><span>Enabling organisational excellence.</span></h2>
          </div>
          <p className="section-intro">
            Established in Bengaluru in 2013, MindLabs Consulting develops people and strengthens organisational capabilities through corporate training, professional development, leadership programmes and coaching.
          </p>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p>
              We believe people are the most valuable asset of every organisation. When individuals develop the right professional skills, leadership abilities and mindset, organisations become more productive, collaborative and successful.
            </p>
            <p>
              Our learning experiences address real workplace challenges and encourage individuals to think better, communicate effectively, lead confidently and perform at their best.
            </p>
            <div className="mission-vision">
              <article>
                <h3>Our mission</h3>
                <p>To empower individuals and organisations through meaningful learning, professional development and leadership training that enhance workplace effectiveness and support sustainable growth.</p>
              </article>
              <article>
                <h3>Our vision</h3>
                <p>To become a trusted learning and development partner by inspiring people, developing future-ready leaders and creating a culture of continuous improvement.</p>
              </article>
            </div>
          </div>
          <figure className="about-visual">
            <img src={collaborationArt.url} alt="Three connected glass forms representing people learning and working together" />
            <figcaption>People first. Progress together.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function LeadershipSection() {
  return (
    <section className="section-shell founder-section" aria-labelledby="founder-title">
      <div className="section-inner">
        <div className="founder-layout">
          <figure className="founder-photo-wrap">
            <img className="founder-photo" src={founderPortrait.url} alt="Siddhartha Ray, founder of MINDLABS Consulting, speaking at an event" />
            <figcaption className="founder-caption">
              <strong>Siddhartha Ray</strong>
              <span>Founder & Chief Strategist</span>
            </figcaption>
          </figure>
          <div className="founder-content">
            <span className="eyebrow"><span className="eyebrow-mark" /> Our leadership</span>
            <h2 className="section-title" id="founder-title">People development,<br /><span>led with purpose.</span></h2>
            <p>
              Founded by Siddhartha Ray, MindLabs Consulting began its journey in Bengaluru in 2013 to help professionals and organisations realise their full potential. As founder and chief strategist, he shapes learning programmes, consulting work and client engagement.
            </p>
            <ul className="founder-experience">
              <li><Check size={16} aria-hidden="true" /> Revenue enablement and L&D leadership at Freshworks, Ethos and TATA Business Hub</li>
              <li><Check size={16} aria-hidden="true" /> Global sales leadership development at Wipro</li>
              <li><Check size={16} aria-hidden="true" /> Training and development consulting with Dale Carnegie Training</li>
              <li><Check size={16} aria-hidden="true" /> Experience across McKinsey, Larsen & Toubro, Oracle India and IBM</li>
            </ul>
            <details className="credentials-details">
              <summary>Education & credentials <ChevronDown size={17} aria-hidden="true" /></summary>
              <ul className="credentials-list">
                <li>M.Sc. Supply Chain Management, Aston University, Birmingham (2010–2011)</li>
                <li>Bachelor of Engineering, Computer Science, Bangalore Institute of Technology (2000–2004)</li>
                <li>ICF Coach, Level 1 Certified (2025)</li>
                <li>Certified NLP Practitioner, American Board of NLP (2026)</li>
                <li>Certificate in Organisational Behaviour, London School of Economics (2017)</li>
                <li>Lean Six Sigma Green Belt, KPMG (2018)</li>
                <li>Certified Trainer, NABET; Soft Skills Certification, SQA (2015)</li>
                <li>ISO Certified Training Consultant, Dale Carnegie Training (2017)</li>
              </ul>
            </details>
          </div>
        </div>
        <div className="leadership-team">
          <h3>People who strengthen the work</h3>
          <div className="leadership-grid">
            <article className="leader-profile">
              <h4>Navin Krishnan</h4>
              <div className="leader-role">Advisor & Strategist</div>
              <p>
                An MBA from SPJIMR, Navin specialises in product-market fit, go-to-market strategies and business operations. He has led work in market expansion, sales operations and inventory management, and mentors emerging professionals.
              </p>
            </article>
            <article className="leader-profile">
              <h4>Sonia Pardesi</h4>
              <div className="leader-role">Chief Training Strategist & Image Consultant</div>
              <p>
                Founder of Sonia Pardesi Image Consulting, Sonia brings more than 17 years of experience in personal branding, grooming, communication and corporate communications. Her work includes customised coaching and corporate workshops; her recognitions include Corporate Stylist of the Year 2020 and the Global Outstanding Leadership Award.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="section-shell services-section" id="services" aria-labelledby="services-title">
      <div className="section-inner">
        <div className="section-heading-block">
          <span className="eyebrow"><span className="eyebrow-mark" /> What we do</span>
          <h2 className="section-title" id="services-title">Practical learning.<br /><span>Meaningful workplace change.</span></h2>
          <p className="section-intro">
            Customised learning and development solutions build essential professional skills, transform workplace behaviours and support a culture of continuous improvement.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.title}>
                <div className="service-card-top">
                  <span className="service-number">0{index + 1}</span>
                  <span className="service-icon"><Icon size={21} aria-hidden="true" /></span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <details className="service-details">
                  <summary>Explore focus areas <ChevronDown size={16} aria-hidden="true" /></summary>
                  <ul className="service-area-list">
                    {service.focusAreas.map((area) => (
                      <li key={area}><Check size={14} aria-hidden="true" /> {area}</li>
                    ))}
                  </ul>
                </details>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section className="section-shell process-section" aria-labelledby="approach-title">
      <div className="section-inner process-layout">
        <div className="process-content">
          <span className="eyebrow"><span className="eyebrow-mark" /> Our approach</span>
          <h2 className="section-title" id="approach-title">Learning built around<br /><span>real organisational needs.</span></h2>
          <p>We align learning initiatives with business priorities and organisational development needs, then keep improving them through feedback and evaluation.</p>
          <ol className="process-steps">
            {approach.map((step, index) => (
              <li className="process-step" key={step.title}>
                <div className="process-step-head">
                  <span className="process-step-index">0{index + 1}</span>
                  <h3>{step.title}</h3>
                </div>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
        <figure className="process-artwork">
          <img src={learningPathArt.url} alt="A rising path of connected glass forms representing continuous learning" />
        </figure>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="section-shell gallery-section" id="gallery" aria-labelledby="gallery-title">
      <div className="section-inner">
        <div className="gallery-heading">
          <div>
            <span className="eyebrow"><span className="eyebrow-mark" /> A closer look</span>
            <h2 className="section-title" id="gallery-title">Learning happens<br /><span>in every conversation.</span></h2>
          </div>
          <p>
            From shared problem-solving to leadership conversations, explore the people-first world of learning and development.
          </p>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <figure className={`gallery-card${index === 0 ? " gallery-card-featured" : ""}`} key={item.title}>
              <img src={item.image} alt={item.alt} loading="lazy" />
              <figcaption className="gallery-caption">
                <span>{item.category}</span>
                <strong>{item.title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  return (
    <section className="section-shell expertise-section" id="expertise" aria-labelledby="expertise-title">
      <div className="section-inner">
        <div className="expertise-layout">
          <div className="expertise-copy">
            <span className="eyebrow"><span className="eyebrow-mark" /> Our expertise</span>
            <h2 className="section-title" id="expertise-title">Capabilities for<br /><span>people and organisations.</span></h2>
            <p>Our engagements span professional development areas that help people communicate, lead, collaborate and perform with confidence.</p>
          </div>
          <div className="expertise-list">
            {expertise.map((item) => (
              <div className="expertise-item" key={item}><ArrowUpRight size={17} aria-hidden="true" /> {item}</div>
            ))}
          </div>
        </div>
        <div className="organisation-band" id="organisations" aria-labelledby="organisations-title">
          <h3 id="organisations-title">Organisations</h3>
          <div className="organisation-list">
            {organisations.map((name) => <span key={name}>{name}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="section-shell values-section" id="values" aria-labelledby="values-title">
      <div className="section-inner">
        <div className="section-heading-block">
          <span className="eyebrow"><span className="eyebrow-mark" /> Why MINDLABS</span>
          <h2 className="section-title" id="values-title">A people-first philosophy.<br /><span>Grounded in what matters.</span></h2>
          <p className="section-intro">Our work is guided by the principles in our company profile and a commitment to meaningful development outcomes.</p>
        </div>
        <div className="values-grid">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <article className="value-item" key={value.title}>
                <span className="value-item-icon"><Icon size={19} aria-hidden="true" /></span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="section-shell contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section-inner contact-inner">
        <div>
          <span className="eyebrow"><span className="eyebrow-mark" /> Contact MINDLABS</span>
          <h2 className="section-title" id="contact-title">Let’s transform potential<br /><span>into performance.</span></h2>
          <p className="contact-copy">
            Developing people is the foundation of organisational success. Connect with us to discuss your requirements and explore customised learning and development solutions.
          </p>
        </div>
        <div className="contact-action">
          <Button asChild size="xl" variant="hero">
            <a href="#services">Explore our programmes <ArrowRight aria-hidden="true" /></a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a className="footer-brand" href="#home" aria-label="MINDLABS Consulting home">
          <img src={logo.url} alt="" />
          <span><strong>MINDLABS Consulting</strong><span>Transforming people. Empowering leaders.</span></span>
        </a>
        <nav className="footer-nav" aria-label="Footer navigation">
          {navigation.slice(1).map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <p className="footer-copyright">© {new Date().getFullYear()} MINDLABS Consulting. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function MindlabsHomepage() {
  return (
    <div className="site-root">
      <SiteHeader />
      <main>
        <HeroSection />
        <div className="proof-strip" aria-label="MINDLABS areas of work">
          <div className="proof-strip-inner">
            <span className="proof-strip-label">People. Leadership. Organisations.</span>
            <div className="proof-strip-items">
              <span>Corporate training</span>
              <span>Leadership development</span>
              <span>Professional coaching</span>
              <span>Learning strategy</span>
            </div>
          </div>
        </div>
        <AboutSection />
        <LeadershipSection />
        <ServicesSection />
        <ApproachSection />
        <GallerySection />
        <ExpertiseSection />
        <ValuesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
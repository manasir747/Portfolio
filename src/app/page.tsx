import { PageContainer } from "@/components/layout/PageContainer";
import { buttonVariants } from "@/components/ui/button";
import { Mail, MapPin, ArrowRight, Code2, Monitor, Database, Trophy, Wrench, Bot, BookOpen, ExternalLink, GraduationCap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/fade-in";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function LeetCodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114l5.727-5.678c.537-.534.537-1.404 0-1.938a1.36 1.36 0 0 0-.96-.405zM20.247 5.425a1.375 1.375 0 0 0-.968.441l-2.14 2.124a1.381 1.381 0 0 0 0 1.957 1.385 1.385 0 0 0 1.961 0l2.14-2.124a1.378 1.378 0 0 0 0-1.957 1.37 1.37 0 0 0-.993-.441zm-9.066 11.23c-.767 0-1.388.621-1.388 1.388s.621 1.388 1.388 1.388h9.32a1.388 1.388 0 1 0 0-2.776h-9.32z"/>
    </svg>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-bold tracking-tight mb-8 relative inline-block">
      {title}
      <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
    </h2>
  );
}

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "JavaScript", "Java (OOPs)", "C++", "C"],
  },
  {
    title: "Frontend",
    icon: Monitor,
    skills: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend & Databases",
    icon: Database,
    skills: ["REST APIs", "Node.js", "Flask", "MongoDB", "Supabase (PostgreSQL)", "MySQL"],
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Cursor AI",
      "Postman",
      "IntelliJ Idea",
      "Google Antigravity",
      "Arduino IDE",
      "Cisco Packet Tracer",
    ],
  },
  {
    title: "AI & Automation",
    icon: Bot,
    skills: ["AI Agents", "Prompt Engineering", "LLM Applications", "n8n", "Workflow Automation"],
  },
  {
    title: "Core CS",
    icon: GraduationCap,
    skills: [
      "Programming",
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java)",
      "Database Management Systems (DBMS)",
      "Software Engineering",
    ],
  },
];

export default function Home() {
  return (
    <PageContainer className="flex flex-col items-center">
      
      {/* 1. HERO SECTION */}
      <section id="hero" className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-16 max-w-5xl w-full min-h-[calc(100vh-4rem)] py-12 md:py-24">
        <FadeIn className="flex-1 space-y-8 text-center md:text-left">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground">
              Mohammed Abu Nasir
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground max-w-[600px] mx-auto md:mx-0 leading-relaxed">
              Computer Science Engineering Student <span className="hidden sm:inline">|</span> <br className="sm:hidden" /> AI/ML & Full-Stack Developer
            </p>
            <div className="flex items-center justify-center md:justify-start gap-1.5 text-muted-foreground pt-1 font-medium">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Pune, Maharashtra, India</span>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start pt-2">
            <Link href="#projects" className={cn(buttonVariants({ size: "lg" }), "font-semibold hover:scale-105 transition-transform")}>
              View Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-5 pt-4">
            <Link href="https://github.com/manasir747" target="_blank" className="text-muted-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full p-1 hover:-translate-y-1 transition-all duration-300" aria-label="GitHub">
              <GithubIcon className="w-7 h-7" />
            </Link>
            <Link href="https://www.linkedin.com/in/mohammed-nasir-9a847a284/" target="_blank" className="text-muted-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full p-1 hover:-translate-y-1 transition-all duration-300" aria-label="LinkedIn">
              <LinkedinIcon className="w-7 h-7" />
            </Link>
            <Link href="https://leetcode.com/u/ma_nasir747/" target="_blank" className="text-muted-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full p-1 hover:-translate-y-1 transition-all duration-300" aria-label="LeetCode">
              <LeetCodeIcon className="w-7 h-7" />
            </Link>
            <Link href="mailto:ma.nasir747@gmail.com" className="text-muted-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full p-1 hover:-translate-y-1 transition-all duration-300" aria-label="Email Me">
              <Mail className="w-7 h-7" />
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="flex-shrink-0 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-full blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-500"></div>
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full border-4 border-background overflow-hidden shadow-2xl flex items-center justify-center ring-2 ring-primary/20 group-hover:scale-[1.02] transition-transform duration-500">
            <Image
              src="/profile.jpg"
              alt="Portrait of Mohammed Abu Nasir"
              fill
              className="object-cover"
              priority
            />
          </div>
        </FadeIn>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="w-full max-w-5xl py-20 border-t border-border/40 scroll-mt-16">
        <FadeIn>
          <SectionHeading title="About Me" />
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl">
            Computer Science Engineering student with hands-on experience in full-stack development, AI-powered applications, and autonomous AI agents, interested in software engineering and AI.
          </p>
        </FadeIn>
      </section>

      {/* 3. EDUCATION SECTION */}
      <section id="education" className="w-full max-w-5xl py-20 border-t border-border/40 scroll-mt-16">
        <FadeIn>
          <SectionHeading title="Education" />
          <div className="space-y-8 border-l-2 border-primary/20 ml-3">
            <div className="relative pl-8">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1.5 ring-4 ring-background" />
              <h3 className="text-xl md:text-2xl font-bold text-foreground">Ajeenkya DY Patil University</h3>
              <p className="text-primary font-semibold text-base md:text-lg mt-1">B.Tech, Computer Science & Engineering</p>
              <p className="text-sm text-muted-foreground font-medium mb-4 mt-1">2025 – Present</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 leading-relaxed">
                <li><span className="font-medium text-foreground">Focus:</span> Software Engineering, AI, and Full-Stack Development</li>
                <li><span className="font-medium text-foreground">Coursework:</span> Data Structures, Algorithms, OOP, DBMS</li>
              </ul>
            </div>
            
            <div className="relative pl-8 opacity-80 hover:opacity-100 transition-opacity">
              <div className="absolute w-3 h-3 bg-muted-foreground rounded-full -left-[7px] top-2 ring-4 ring-background" />
              <h3 className="text-xl font-bold text-foreground">Nowrosjee Wadia College</h3>
              <p className="text-foreground/80 font-medium mt-1">HSC — Science (PCM + Computer Science)</p>
              <p className="text-sm text-muted-foreground mt-1">2023 – 2025</p>
            </div>

            <div className="relative pl-8 opacity-80 hover:opacity-100 transition-opacity">
              <div className="absolute w-3 h-3 bg-muted-foreground rounded-full -left-[7px] top-2 ring-4 ring-background" />
              <h3 className="text-xl font-bold text-foreground">Pune International School</h3>
              <p className="text-foreground/80 font-medium mt-1">Secondary School / Class X</p>
              <p className="text-sm text-muted-foreground mt-1">2023</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 4. EXPERIENCE SECTION */}
      <section id="experience" className="w-full max-w-5xl py-20 border-t border-border/40 scroll-mt-16">
        <FadeIn>
          <SectionHeading title="Experience" />
          <div className="space-y-10 border-l-2 border-primary/20 ml-3">
            
            <div className="relative pl-8 group">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1.5 ring-4 ring-background group-hover:scale-125 transition-transform" />
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">Google Student Ambassador</h3>
                  <p className="text-lg text-muted-foreground font-medium mt-1">Google</p>
                </div>
                <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                  Apr 2026 – Present
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 text-muted-foreground space-y-2 leading-relaxed">
                <li>Promote Google developer technologies and student programs across campus</li>
                <li>Lead technical workshops and events for student developers</li>
                <li>Mentor peers on Google developer programs and open-source contribution</li>
                <li>Help grow an active developer community on campus</li>
              </ul>
            </div>

            <div className="relative pl-8 group">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1.5 ring-4 ring-background group-hover:scale-125 transition-transform" />
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">Core Team Member — Tech Club</h3>
                  <p className="text-lg text-muted-foreground font-medium mt-1">Alta School of Technology</p>
                </div>
                <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                  Aug 2026 – Present
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 text-muted-foreground space-y-2 leading-relaxed">
                <li>Collaborate on web-based projects and initiatives</li>
                <li>Contribute to engaging and functional web experiences using modern web technologies</li>
                <li>Help organize technical activities, workshops, and learning initiatives related to web development</li>
              </ul>
            </div>

          </div>
        </FadeIn>
      </section>

      {/* 5. PROJECTS SECTION */}
      <section id="projects" className="w-full max-w-5xl py-20 border-t border-border/40 scroll-mt-16">
        <FadeIn>
          <SectionHeading title="Projects" />
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="flex flex-col rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-6 md:p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">VoyageAI</h3>
                <p className="text-sm font-semibold text-primary/80 mb-4">Autonomous Multi-Agent AI Travel Operating System</p>
                
                <ul className="list-disc list-outside ml-4 text-sm text-muted-foreground space-y-2 mb-6 flex-1">
                  <li>Built an autonomous AI agent system to plan and personalize end-to-end travel itineraries</li>
                  <li>Developed the frontend using Next.js, React, TypeScript and Tailwind CSS</li>
                  <li>Built the backend with FastAPI</li>
                  <li>Integrated Supabase for authentication and data</li>
                  <li>Used n8n for workflow automation</li>
                  <li>Designed a modular and scalable architecture using real-world software engineering practices</li>
                </ul>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto pt-4 border-t border-border/40">
                  {["Next.js", "FastAPI", "TypeScript", "React", "Tailwind CSS", "Supabase", "n8n"].map(tech => (
                    <span key={tech} className="text-xs font-medium bg-secondary hover:bg-primary/20 hover:text-primary transition-colors text-secondary-foreground px-2.5 py-1 rounded-md cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <Link href="https://github.com/manasir747/VoyageAI" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full hover:bg-primary/5 transition-colors")}>
                    <GithubIcon className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                  <Link href="https://voyage-ai-web-silk.vercel.app/" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "default", size: "sm" }), "w-full hover:scale-[1.02] transition-transform")}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-6 md:p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">BridgeAI</h3>
                <p className="text-sm font-semibold text-primary/80 mb-4">AI-Powered Crisis Intelligence & Response Support Platform</p>
                
                <ul className="list-disc list-outside ml-4 text-sm text-muted-foreground space-y-2 mb-6 flex-1">
                  <li>Engineered an AI-powered crisis intelligence platform using Google Gemini to transform unstructured emergency reports into structured intelligence via automated analysis, urgency classification, and severity scoring.</li>
                  <li>Implemented intelligent information extraction, claim verification support, and critical gap detection to identify affected populations, locations, vulnerable groups, and urgent resource requirements.</li>
                  <li>Developed a human-supervised crisis response dashboard featuring prioritized operational recommendations, evidence-backed insights, uncertainty indicators, multilingual support (English, Hindi, Marathi), and analysis history.</li>
                </ul>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto pt-4 border-t border-border/40">
                  {["Next.js 15", "TypeScript", "React", "Google Gemini API", "Zod", "Tailwind CSS"].map(tech => (
                    <span key={tech} className="text-xs font-medium bg-secondary hover:bg-primary/20 hover:text-primary transition-colors text-secondary-foreground px-2.5 py-1 rounded-md cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <Link href="https://github.com/manasir747/BridgeAI" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full hover:bg-primary/5 transition-colors")}>
                    <GithubIcon className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                  <Link href="https://bridge-ai-tan.vercel.app/" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "default", size: "sm" }), "w-full hover:scale-[1.02] transition-transform")}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-6 md:p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">CaseConnect</h3>
                <p className="text-sm font-semibold text-primary/80 mb-4">Integrated Complaint Management & Inter-Bureau Coordination Platform</p>
                
                <ul className="list-disc list-outside ml-4 text-sm text-muted-foreground space-y-2 mb-6 flex-1">
                  <li>Engineered a centralized complaint management ecosystem for AICTE, connecting the Public Grievance Redressal Cell (PGRC), Regulation Bureau, and approved institutions through unified case lifecycle management.</li>
                  <li>Implemented intelligent complaint overlap detection using similarity confidence scoring and explainable matching to identify duplicate or related grievances for cross-bureau coordination.</li>
                  <li>Developed role-specific dashboards with automated 45-day statutory SLA tracking, escalation alerts, regulatory notice management, and interactive analytics using Next.js and Supabase PostgreSQL with RLS.</li>
                </ul>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto pt-4 border-t border-border/40">
                  {["Next.js 16", "React 19", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"].map(tech => (
                    <span key={tech} className="text-xs font-medium bg-secondary hover:bg-primary/20 hover:text-primary transition-colors text-secondary-foreground px-2.5 py-1 rounded-md cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <Link href="https://github.com/shabi-2-2/CaseConnect" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full hover:bg-primary/5 transition-colors")}>
                    <GithubIcon className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                  <Link href="https://case-connect-eight.vercel.app/" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "default", size: "sm" }), "w-full hover:scale-[1.02] transition-transform")}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-6 md:p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">JeevanDost</h3>
                <p className="text-sm font-semibold text-primary/80 mb-4">AI Healthcare Assistant — Winner, Hackathon 1.0</p>
                
                <ul className="list-disc list-outside ml-4 text-sm text-muted-foreground space-y-2 mb-6 flex-1">
                  <li>Developed an AI-powered healthcare assistant for first aid, doctor discovery and appointment assistance</li>
                  <li>Built an intelligent chatbot for real-time symptom triage and guidance</li>
                  <li>Implemented the full-stack application using Flask, Python, HTML/CSS and JavaScript</li>
                  <li>Won Hackathon 1.0 among first-year B.Tech teams for execution and impact</li>
                </ul>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto pt-4 border-t border-border/40">
                  {["Flask", "Python", "JavaScript", "HTML/CSS"].map(tech => (
                    <span key={tech} className="text-xs font-medium bg-secondary hover:bg-primary/20 hover:text-primary transition-colors text-secondary-foreground px-2.5 py-1 rounded-md cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <Link href="https://github.com/manasir747/JeevanDost-2.0" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full hover:bg-primary/5 transition-colors")}>
                    <GithubIcon className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                  <Link href="https://jeevandost-2-0.onrender.com/" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "default", size: "sm" }), "w-full hover:scale-[1.02] transition-transform")}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-6 md:p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">CensusSathi</h3>
                <p className="text-sm font-semibold text-primary/80 mb-4">AI-Powered Civic Awareness & Census Assistance Platform</p>
                
                <ul className="list-disc list-outside ml-4 text-sm text-muted-foreground space-y-2 mb-6 flex-1">
                  <li>Developed an AI-powered Census assistant using Google Gemini to deliver contextual responses and simplify census-related information, particularly for rural communities.</li>
                  <li>Implemented interactive educational journeys, step-by-step census guidance, and state-specific insights covering House Listing, Population Enumeration, data collection, and citizen privacy.</li>
                  <li>Built a responsive, multilingual interface using Next.js 16, TypeScript, and Framer Motion, incorporating reusable React 19 components, Context API, custom hooks, and modular AI service integration.</li>
                </ul>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto pt-4 border-t border-border/40">
                  {["Next.js 16", "React 19", "TypeScript", "Google Gemini API", "Framer Motion", "Tailwind CSS"].map(tech => (
                    <span key={tech} className="text-xs font-medium bg-secondary hover:bg-primary/20 hover:text-primary transition-colors text-secondary-foreground px-2.5 py-1 rounded-md cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <Link href="https://github.com/manasir747/CensusSathi" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full hover:bg-primary/5 transition-colors")}>
                    <GithubIcon className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                  <Link href="https://census-sathi.vercel.app/" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "default", size: "sm" }), "w-full hover:scale-[1.02] transition-transform")}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-6 md:p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">QuickShare</h3>
                <p className="text-sm font-semibold text-primary/80 mb-4">Lightweight Full-Stack Temporary File-Sharing Platform</p>
                
                <ul className="list-disc list-outside ml-4 text-sm text-muted-foreground space-y-2 mb-6 flex-1">
                  <li>Built a lightweight, account-free file-sharing platform enabling instant file transfers (up to 25 MB) with unique download links and dynamic QR codes with PNG export.</li>
                  <li>Implemented real-time upload progress tracking with cancellation support using XMLHttpRequest, sanitized server-side disk storage, and direct downloads preserving MIME types.</li>
                  <li>Engineered an automated 24-hour file expiration lifecycle with live recipient countdown timers and a scheduled background cleanup service to purge expired and orphaned files.</li>
                </ul>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto pt-4 border-t border-border/40">
                  {["React 19", "Vite 8", "JavaScript", "Node.js", "Express 5", "Multer", "REST APIs"].map(tech => (
                    <span key={tech} className="text-xs font-medium bg-secondary hover:bg-primary/20 hover:text-primary transition-colors text-secondary-foreground px-2.5 py-1 rounded-md cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <Link href="https://github.com/manasir747/QuickShare" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full hover:bg-primary/5 transition-colors")}>
                    <GithubIcon className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                  <Link href="https://quick-share-dusky.vercel.app/" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "default", size: "sm" }), "w-full hover:scale-[1.02] transition-transform")}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-6 md:p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">StudyMate AI</h3>
                <p className="text-sm font-semibold text-primary/80 mb-4">AI-Powered Interactive Learning Platform</p>
                
                <ul className="list-disc list-outside ml-4 text-sm text-muted-foreground space-y-2 mb-6 flex-1">
                  <li>Engineered an AI-powered study companion using Google Gemini to transform notes, lecture transcripts, and textbook content into structured summaries, key takeaways, and concept explanations.</li>
                  <li>Implemented automated MCQ generation, difficulty-based assessments, and interactive 3D flashcards with self-assessment and spaced-repetition functionality.</li>
                  <li>Developed a responsive, dependency-free frontend with persistent study history, learning analytics, and topic-wise performance tracking using Vanilla JavaScript, LocalStorage, and interactive SVG visualizations.</li>
                </ul>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto pt-4 border-t border-border/40">
                  {["HTML5", "CSS3", "JavaScript", "Google Gemini API", "LocalStorage"].map(tech => (
                    <span key={tech} className="text-xs font-medium bg-secondary hover:bg-primary/20 hover:text-primary transition-colors text-secondary-foreground px-2.5 py-1 rounded-md cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <Link href="https://github.com/manasir747/StudyMateAI" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full hover:bg-primary/5 transition-colors")}>
                    <GithubIcon className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                  <Link href="https://studymateai-ten.vercel.app/" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "default", size: "sm" }), "w-full hover:scale-[1.02] transition-transform")}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-6 md:p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">RAG Agent</h3>
                <p className="text-sm font-semibold text-primary/80 mb-4">End-to-End Retrieval-Augmented Generation System</p>
                
                <ul className="list-disc list-outside ml-4 text-sm text-muted-foreground space-y-2 mb-6 flex-1">
                  <li>Engineered an end-to-end RAG pipeline supporting multi-source knowledge ingestion from local documents, TXT/Markdown uploads, and live web pages with sliding-window chunking.</li>
                  <li>Implemented semantic search and Top-K retrieval using Sentence Transformers (all-MiniLM-L6-v2) and ChromaDB for vector storage, embedding generation, and similarity matching.</li>
                  <li>Integrated Google Gemini 2.5 Flash for context-grounded response generation with source attribution, retrieved snippets, and cosine similarity scores via an interactive Streamlit UI and CLI.</li>
                </ul>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto pt-4 border-t border-border/40">
                  {["Python", "Google Gemini 2.5 Flash", "ChromaDB", "Sentence Transformers", "Streamlit"].map(tech => (
                    <span key={tech} className="text-xs font-medium bg-secondary hover:bg-primary/20 hover:text-primary transition-colors text-secondary-foreground px-2.5 py-1 rounded-md cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <Link href="https://github.com/manasir747/RAG-AGENT" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full hover:bg-primary/5 transition-colors")}>
                    <GithubIcon className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-6 md:p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Brainworks</h3>
                <p className="text-sm font-semibold text-primary/80 mb-4">Distributed Road-Safety & Hazard Awareness System</p>
                
                <ul className="list-disc list-outside ml-4 text-sm text-muted-foreground space-y-2 mb-6 flex-1">
                  <li><strong>Conceptual/Proposed Architecture:</strong> A distributed road-safety system designed for hazard awareness and collision-risk detection in low-visibility mining environments (no physical hardware prototype implemented).</li>
                  <li>Architecture Flow: GPS + LoRa + mmWave Radar → ESP32 Central Processing → Sensor & Data Fusion → Collision Risk Evaluation → Warning Decision</li>
                  <li>Uses NEO-6M GPS for vehicle position, LoRa SX1278 for V2V communication, and 24 GHz mmWave radar for local obstacle sensing.</li>
                  <li><strong>Achievement:</strong> 2nd Place — Smart India Hackathon (SIH) Internal Hackathon 2026 (Team Brainworks, 2nd position out of 27 teams).</li>
                </ul>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto pt-4 border-t border-border/40">
                  {["ESP32", "LoRa SX1278", "NEO-6M GPS", "mmWave Radar", "Sensor Fusion"].map(tech => (
                    <span key={tech} className="text-xs font-medium bg-secondary hover:bg-primary/20 hover:text-primary transition-colors text-secondary-foreground px-2.5 py-1 rounded-md cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <Link href="https://github.com/manasir747/Brainworks" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full hover:bg-primary/5 transition-colors")}>
                    <GithubIcon className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-6 md:p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Krishimitra AI</h3>
                <p className="text-sm font-semibold text-primary/80 mb-4">AI-powered agricultural assistant</p>
                
                <ul className="list-disc list-outside ml-4 text-sm text-muted-foreground space-y-2 mb-6 flex-1">
                  <li>An intelligent agriculture assistant designed to help farmers make better decisions using AI-driven insights.</li>
                  <li>Understands crop-related queries in local languages and accepts crop images from a phone camera.</li>
                  <li>Uses AI to analyze text and image inputs to evaluate possible causes and actions.</li>
                  <li>Suggests practical next steps with farmer-friendly results via a responsive and accessible interface.</li>
                </ul>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto pt-4 border-t border-border/40">
                  {["Next.js", "React", "AI-powered analysis"].map(tech => (
                    <span key={tech} className="text-xs font-medium bg-secondary hover:bg-primary/20 hover:text-primary transition-colors text-secondary-foreground px-2.5 py-1 rounded-md cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <Link href="https://github.com/sahilmane69/Team-Diamonds_agriculture" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full hover:bg-primary/5 transition-colors")}>
                    <GithubIcon className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                  <Link href="https://krishi-mitra-ai-two.vercel.app/" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "default", size: "sm" }), "w-full hover:scale-[1.02] transition-transform")}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-6 md:p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Rapid Crisis Response System</h3>
                <p className="text-sm font-semibold text-primary/80 mb-4">IoT-ready Agentic AI Emergency Orchestration</p>
                
                <ul className="list-disc list-outside ml-4 text-sm text-muted-foreground space-y-2 mb-6 flex-1">
                  <li>An IoT-ready emergency response platform for hotels and resorts. Guests can trigger incidents instantly and staff can coordinate responses in real time.</li>
                  <li>Administrators receive Gemini-powered insights, automated incident summaries, and AI-generated suggestions via the admin command board.</li>
                  <li>Includes Firebase/Firestore real-time incident feeds and Google Maps responder routing.</li>
                  <li>IoT-ready architecture for sensors, panic buttons, and wearable telemetry with human-in-the-loop emergency guidance.</li>
                </ul>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto pt-4 border-t border-border/40">
                  {["Next.js 14", "TypeScript", "Firebase Auth", "Firestore", "Cloud Functions", "Google Gemini", "Google Maps API"].map(tech => (
                    <span key={tech} className="text-xs font-medium bg-secondary hover:bg-primary/20 hover:text-primary transition-colors text-secondary-foreground px-2.5 py-1 rounded-md cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <Link href="https://github.com/shabi-2-2/SolutionsChallenge_RapidAssistanceSystem" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full hover:bg-primary/5 transition-colors")}>
                    <GithubIcon className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </FadeIn>
      </section>

      {/* 6. ACHIEVEMENTS SECTION */}
      <section id="achievements" className="w-full max-w-5xl py-20 border-t border-border/40 scroll-mt-16">
        <FadeIn>
          <SectionHeading title="Achievements" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-start gap-4 p-5 rounded-2xl border bg-card hover:border-yellow-500/50 hover:shadow-sm transition-all shadow-sm">
              <div className="bg-yellow-500/10 p-3 rounded-full shrink-0">
                <Trophy className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Winner — Hackathon 1.0</h4>
                <p className="text-muted-foreground text-sm mt-1">Project: JeevanDost</p>
                <p className="text-muted-foreground text-sm mt-1">1st Position across all partner institute campuses — B.Tech First Year</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl border bg-card hover:border-yellow-500/50 hover:shadow-sm transition-all shadow-sm">
              <div className="bg-yellow-500/10 p-3 rounded-full shrink-0">
                <Trophy className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Winner — Computer Science Exhibition</h4>
                <p className="text-muted-foreground text-sm mt-1">Project: Hotel Management System</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl border bg-card hover:border-yellow-500/50 hover:shadow-sm transition-all shadow-sm">
              <div className="bg-yellow-500/10 p-3 rounded-full shrink-0">
                <Trophy className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">2nd Place — SIH Internal Hackathon 2026</h4>
                <p className="text-muted-foreground text-sm mt-1">Team Brainworks</p>
                <p className="text-muted-foreground text-sm mt-1">2nd position out of 27 teams</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 7. CERTIFICATIONS SECTION */}
      <section id="certifications" className="w-full max-w-5xl py-20 border-t border-border/40 scroll-mt-16">
        <FadeIn>
          <SectionHeading title="Certifications" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Prompt Engineering Mastery", date: "May 2026" },
              { name: "UI/UX Professional Certification", date: "Apr 2026" },
              { name: "Design Info Session — Framer", date: "Mar 2026" },
              { name: "Building AI Agents (Python)", date: "Feb 2026" },
              { name: "Cursor AI: VibeCode Mastery", date: "Feb 2026" },
              { name: "Introduction to Cybersecurity", date: "Feb 2026" },
              { name: "Introduction to Data Science", date: "Nov 2025" }
            ].map((cert, i) => (
              <div key={i} className="flex flex-col p-5 rounded-2xl border bg-card hover:-translate-y-1 hover:shadow-md hover:border-primary/30 transition-all shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-md">{cert.date}</span>
                </div>
                <h4 className="font-semibold text-foreground leading-tight">{cert.name}</h4>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* 8. SKILLS SECTION */}
      <section id="skills" className="w-full max-w-5xl py-20 border-t border-border/40 scroll-mt-16">
        <FadeIn>
          <div className="mb-10">
            <SectionHeading title="Skills" />
            <p className="text-muted-foreground mt-1 text-base md:text-lg">
              Technologies, tools, and computer science fundamentals I work with
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/70 bg-card p-6 shadow-xs hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Top glowing gradient border on hover */}
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Ambient background glow */}
                  <div className="absolute -right-8 -top-8 w-28 h-28 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors pointer-events-none" />

                  <div>
                    {/* Header: Icon + Title + Count */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0 shadow-2xs">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-foreground text-lg tracking-tight group-hover:text-primary transition-colors">
                          {category.title}
                        </h3>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors border border-border/40">
                        {category.skills.length} {category.title === "Developer Tools" ? "tools" : "skills"}
                      </span>
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-secondary/70 border border-border/60 text-secondary-foreground hover:border-primary/40 hover:bg-primary/10 hover:text-primary hover:-translate-y-0.5 transition-all duration-200 cursor-default select-none shadow-2xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </section>

      {/* 9. CONTACT SECTION */}
      <section id="contact" className="w-full max-w-5xl py-24 border-t border-border/40 text-center scroll-mt-16">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Let&apos;s build something together.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            I&apos;m always open to discussing new opportunities, projects, or collaborations. 
            Feel free to reach out through any of the platforms below!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="mailto:ma.nasir747@gmail.com" className={cn(buttonVariants({ size: "lg" }), "font-semibold hover:scale-105 transition-transform")}>
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Link>
            <Link href="https://www.linkedin.com/in/mohammed-nasir-9a847a284/" target="_blank" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "font-semibold hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300")}>
              <LinkedinIcon className="w-5 h-5 mr-2" />
              LinkedIn
            </Link>
            <Link href="https://github.com/manasir747" target="_blank" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "font-semibold hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300")}>
              <GithubIcon className="w-5 h-5 mr-2" />
              GitHub
            </Link>
            <Link href="https://leetcode.com/u/ma_nasir747/" target="_blank" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "font-semibold hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300")}>
              <LeetCodeIcon className="w-5 h-5 mr-2" />
              LeetCode
            </Link>
          </div>
        </FadeIn>
      </section>

    </PageContainer>
  );
}

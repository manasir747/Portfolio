import { PageContainer } from "@/components/layout/PageContainer";
import { buttonVariants } from "@/components/ui/button";
import { Mail, MapPin, FileText, ArrowRight, Code, Terminal, Server, Database, Trophy, Award, BookOpen, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

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

export default function Home() {
  return (
    <PageContainer className="flex flex-col items-center">
      
      {/* 1. HERO SECTION */}
      <section id="hero" className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-16 max-w-5xl w-full min-h-[calc(100vh-4rem)] py-12 md:py-24">
        <div className="flex-1 space-y-8 text-center md:text-left">
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

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
            <Link href="#projects" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto font-semibold")}>
              View Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto font-semibold")}>
              <FileText className="w-4 h-4 mr-2" />
              Download Resume
            </Link>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-5 pt-4">
            <Link href="https://github.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full p-1" aria-label="GitHub">
              <GithubIcon className="w-7 h-7" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full p-1" aria-label="LinkedIn">
              <LinkedinIcon className="w-7 h-7" />
            </Link>
            <Link href="https://leetcode.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full p-1" aria-label="LeetCode">
              <LeetCodeIcon className="w-7 h-7" />
            </Link>
            <Link href="mailto:example@email.com" className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full p-1" aria-label="Email Me">
              <Mail className="w-7 h-7" />
            </Link>
          </div>
        </div>

        <div className="flex-shrink-0 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full border-4 border-background overflow-hidden shadow-2xl flex items-center justify-center ring-2 ring-primary/20">
            <Image
              src="/profile.jpg"
              alt="Portrait of Mohammed Abu Nasir"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="w-full max-w-5xl py-20 border-t border-border/40 scroll-mt-16">
        <SectionHeading title="About Me" />
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl">
          Computer Science Engineering student with hands-on experience in full-stack development, AI-powered applications, and autonomous AI agents, interested in software engineering and AI.
        </p>
      </section>

      {/* 3. EDUCATION SECTION */}
      <section id="education" className="w-full max-w-5xl py-20 border-t border-border/40 scroll-mt-16">
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
      </section>

      {/* 4. EXPERIENCE SECTION */}
      <section id="experience" className="w-full max-w-5xl py-20 border-t border-border/40 scroll-mt-16">
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
      </section>

      {/* 5. PROJECTS SECTION */}
      <section id="projects" className="w-full max-w-5xl py-20 border-t border-border/40 scroll-mt-16">
        <SectionHeading title="Projects" />
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="flex flex-col rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow group">
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
                  <span key={tech} className="text-xs font-medium bg-secondary text-secondary-foreground px-2.5 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <Link href="#" className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full")}>
                  <GithubIcon className="w-4 h-4 mr-2" />
                  GitHub
                </Link>
                <Link href="#" className={cn(buttonVariants({ variant: "default", size: "sm" }), "w-full")}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow group">
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
                  <span key={tech} className="text-xs font-medium bg-secondary text-secondary-foreground px-2.5 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <Link href="#" className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full")}>
                  <GithubIcon className="w-4 h-4 mr-2" />
                  GitHub
                </Link>
                <Link href="#" className={cn(buttonVariants({ variant: "default", size: "sm" }), "w-full")}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. ACHIEVEMENTS SECTION */}
      <section id="achievements" className="w-full max-w-5xl py-20 border-t border-border/40 scroll-mt-16">
        <SectionHeading title="Achievements" />
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-4 p-5 rounded-2xl border bg-card hover:bg-muted/30 transition-colors shadow-sm">
            <div className="bg-yellow-500/10 p-3 rounded-full shrink-0">
              <Trophy className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <h4 className="font-bold text-foreground">Winner — Hackathon 1.0</h4>
              <p className="text-muted-foreground text-sm mt-1">Project: JeevanDost</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 p-5 rounded-2xl border bg-card hover:bg-muted/30 transition-colors shadow-sm">
            <div className="bg-primary/10 p-3 rounded-full shrink-0">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-foreground">First Position</h4>
              <p className="text-muted-foreground text-sm mt-1">Across all partner institute campuses — B.Tech First Year</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-2xl border bg-card hover:bg-muted/30 transition-colors shadow-sm">
            <div className="bg-yellow-500/10 p-3 rounded-full shrink-0">
              <Trophy className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <h4 className="font-bold text-foreground">Winner — Computer Science Exhibition</h4>
              <p className="text-muted-foreground text-sm mt-1">Project: Hotel Management System</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-2xl border bg-card hover:bg-muted/30 transition-colors shadow-sm md:col-span-2 lg:col-span-1">
            <div className="bg-primary/10 p-3 rounded-full shrink-0">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-foreground">2nd Place — SIH Internal Hackathon 2026</h4>
              <p className="text-muted-foreground text-sm mt-1 mb-3">Team Brainworks — secured 2nd position out of 27 teams</p>
              <div className="text-xs text-muted-foreground/90 bg-secondary/50 p-3 rounded-lg border border-border/50">
                <span className="font-semibold text-foreground">Problem Statement SIH26007:</span> Ministry of Steel: Safe and Efficient Operation of Mine Vehicles in Fog and Low-Visibility Conditions in Open Cast Iron Ore Mines.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CERTIFICATIONS SECTION */}
      <section id="certifications" className="w-full max-w-5xl py-20 border-t border-border/40 scroll-mt-16">
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
            <div key={i} className="flex flex-col p-5 rounded-2xl border bg-card hover:bg-muted/30 transition-colors shadow-sm">
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
      </section>

      {/* 8. SKILLS SECTION */}
      <section id="skills" className="w-full max-w-5xl py-20 border-t border-border/40 scroll-mt-16">
        <SectionHeading title="Skills" />
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
          
          <div className="space-y-4">
            <h4 className="flex items-center gap-2 font-bold text-lg text-foreground"><Code className="w-5 h-5 text-primary"/> Languages</h4>
            <div className="flex flex-wrap gap-2.5">
              {["Python", "JavaScript", "TypeScript", "HTML", "CSS"].map(s => (
                <span key={s} className="px-3.5 py-1.5 bg-secondary hover:bg-secondary/80 transition-colors text-secondary-foreground text-sm font-medium rounded-md">{s}</span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="flex items-center gap-2 font-bold text-lg text-foreground"><Code className="w-5 h-5 text-primary"/> Frontend</h4>
            <div className="flex flex-wrap gap-2.5">
              {["React", "Next.js", "Tailwind CSS"].map(s => (
                <span key={s} className="px-3.5 py-1.5 bg-secondary hover:bg-secondary/80 transition-colors text-secondary-foreground text-sm font-medium rounded-md">{s}</span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="flex items-center gap-2 font-bold text-lg text-foreground"><Server className="w-5 h-5 text-primary"/> Backend</h4>
            <div className="flex flex-wrap gap-2.5">
              {["FastAPI", "Flask", "REST APIs"].map(s => (
                <span key={s} className="px-3.5 py-1.5 bg-secondary hover:bg-secondary/80 transition-colors text-secondary-foreground text-sm font-medium rounded-md">{s}</span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="flex items-center gap-2 font-bold text-lg text-foreground"><Database className="w-5 h-5 text-primary"/> Databases</h4>
            <div className="flex flex-wrap gap-2.5">
              {["MongoDB", "Supabase"].map(s => (
                <span key={s} className="px-3.5 py-1.5 bg-secondary hover:bg-secondary/80 transition-colors text-secondary-foreground text-sm font-medium rounded-md">{s}</span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="flex items-center gap-2 font-bold text-lg text-foreground"><Terminal className="w-5 h-5 text-primary"/> Developer Tools</h4>
            <div className="flex flex-wrap gap-2.5">
              {["Git", "GitHub", "VS Code", "Cursor AI", "Docker", "Postman"].map(s => (
                <span key={s} className="px-3.5 py-1.5 bg-secondary hover:bg-secondary/80 transition-colors text-secondary-foreground text-sm font-medium rounded-md">{s}</span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="flex items-center gap-2 font-bold text-lg text-foreground"><Award className="w-5 h-5 text-primary"/> AI & Automation</h4>
            <div className="flex flex-wrap gap-2.5">
              {["AI Agents", "Prompt Engineering", "LLM Applications", "n8n", "Workflow Automation"].map(s => (
                <span key={s} className="px-3.5 py-1.5 bg-secondary hover:bg-secondary/80 transition-colors text-secondary-foreground text-sm font-medium rounded-md">{s}</span>
              ))}
            </div>
          </div>

          <div className="sm:col-span-2 space-y-4">
            <h4 className="flex items-center gap-2 font-bold text-lg text-foreground"><BookOpen className="w-5 h-5 text-primary"/> Core CS</h4>
            <div className="flex flex-wrap gap-2.5">
              {["Data Structures", "Algorithms", "OOP", "API Integration", "Responsive Design"].map(s => (
                <span key={s} className="px-3.5 py-1.5 bg-secondary hover:bg-secondary/80 transition-colors text-secondary-foreground text-sm font-medium rounded-md">{s}</span>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* 9. CONTACT SECTION */}
      <section id="contact" className="w-full max-w-5xl py-24 border-t border-border/40 text-center scroll-mt-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Let&apos;s build something together.</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          I&apos;m always open to discussing new opportunities, projects, or collaborations. 
          Feel free to reach out through any of the platforms below!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="mailto:example@email.com" className={cn(buttonVariants({ size: "lg" }), "font-semibold")}>
            <Mail className="w-5 h-5 mr-2" />
            Send Email
          </Link>
          <Link href="https://linkedin.com" target="_blank" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "font-semibold")}>
            <LinkedinIcon className="w-5 h-5 mr-2" />
            LinkedIn
          </Link>
          <Link href="https://github.com" target="_blank" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "font-semibold")}>
            <GithubIcon className="w-5 h-5 mr-2" />
            GitHub
          </Link>
          <Link href="https://leetcode.com" target="_blank" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "font-semibold")}>
            <LeetCodeIcon className="w-5 h-5 mr-2" />
            LeetCode
          </Link>
        </div>
      </section>

    </PageContainer>
  );
}

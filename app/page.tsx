"use client"

import { motion } from "framer-motion"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import ProjectsSection from "./components/ProjectsSection"
import ExperienceSection from "./components/ExperienceSection"
import SkillsSection from "./components/SkillsSection"
import ReferenciasSection from "./components/TestimonialsSection"
import ContactSection from "./components/ContactSection"
// import CaseStudySection from "./components/CaseStudySection"
// import BlogSection from "./components/BlogSection"
// import ImplementacionTecnicaSection from "./components/ImplementacionTecnicaSection"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ReferenciasSection />
        {/* <CaseStudySection /> */}
        {/* <ImplementacionTecnicaSection /> */}
        {/* <BlogSection /> */}
        <ContactSection />
      </motion.div>
    </div>
  )
}

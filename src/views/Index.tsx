"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = ({ data }: { data: any }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero data={data.hero} />
      <About data={data.about} />
      <Experience data={data.experience} />
      <Skills data={data.skills} />
      <Projects data={data.projects} />
      <Contact data={data.contact} />
      <Footer />
    </div>
  );
};

export default Index;

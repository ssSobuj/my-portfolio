import fs from 'fs';
import path from 'path';
import Index from "@/views/Index";

async function getSiteData() {
  const contentDir = path.join(process.cwd(), 'src/content');
  
  const heroPath = path.join(contentDir, 'site', 'hero.json');
  const aboutPath = path.join(contentDir, 'site', 'about.json');
  const experiencePath = path.join(contentDir, 'site', 'experience.json');
  const skillsPath = path.join(contentDir, 'site', 'skills.json');
  const contactPath = path.join(contentDir, 'site', 'contact.json');

  const hero = JSON.parse(fs.readFileSync(heroPath, 'utf8'));
  const about = JSON.parse(fs.readFileSync(aboutPath, 'utf8'));
  const experience = JSON.parse(fs.readFileSync(experiencePath, 'utf8'));
  const skills = JSON.parse(fs.readFileSync(skillsPath, 'utf8'));
  const contact = JSON.parse(fs.readFileSync(contactPath, 'utf8'));

  const projectsDir = path.join(contentDir, 'projects');
  const projectFiles = fs.readdirSync(projectsDir).filter(file => file.endsWith('.json'));
  const projects = projectFiles.map(file => {
    return JSON.parse(fs.readFileSync(path.join(projectsDir, file), 'utf8'));
  });

  return { hero, about, experience, skills, contact, projects };
}

export default async function Home() {
  const data = await getSiteData();
  return <Index data={data} />;
}

import fs from 'fs';
import path from 'path';
import ProjectDetails from "@/views/ProjectDetails";

export async function generateStaticParams() {
  const projectsDir = path.join(process.cwd(), 'src/content/projects');
  const files = fs.readdirSync(projectsDir);
  
  return files
    .filter((file) => file.endsWith('.json'))
    .map((file) => ({
      id: file.replace('.json', ''),
    }));
}

export default async function Project({ params }: { params: { id: string } }) {
  const filePath = path.join(process.cwd(), 'src/content/projects', `${params.id}.json`);
  let project = null;
  
  if (fs.existsSync(filePath)) {
    project = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }

  return <ProjectDetails project={project} />;
}

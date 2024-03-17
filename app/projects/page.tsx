import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/lib/index";
import { Project } from "@/lib/types";

const Projects = async () => {
  const projectsResult = await getProjects();
  const projects: Project[] =
    (projectsResult as { projects: Project[] })?.projects || [];

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue="All Projects" className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-3 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            <TabsTrigger
              value="All Projects"
              className="capitalize w-[162px] md:w-auto"
            >
              All Projects
            </TabsTrigger>
            <TabsTrigger
              value="Fullstack"
              className="capitalize w-[162px] md:w-auto"
            >
              Fullstack
            </TabsTrigger>
            <TabsTrigger
              value="Frontend"
              className="capitalize w-[162px] md:w-auto"
            >
              Frontend
            </TabsTrigger>
          </TabsList>
          {/* tabs content */}
          <TabsContent value="All Projects">
            <div className="text-lg xl:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => {
                return <ProjectCard project={project} key={project.title} />;
              })}
            </div>
          </TabsContent>
          <TabsContent value="Fullstack">
            <div className="text-lg xl:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project) => {
                return (
                  project.category === "Fullstack" && (
                    <ProjectCard project={project} key={project.title} />
                  )
                );
              })}
            </div>
          </TabsContent>
          <TabsContent value="Frontend">
            <div className="text-lg xl:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project) => {
                return (
                  project.category === "Frontend" && (
                    <ProjectCard project={project} key={project.title} />
                  )
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;

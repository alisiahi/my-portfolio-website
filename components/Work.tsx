import Link from "next/link";
import { Button } from "./ui/button";

import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/lib/types";
import { getProjects } from "@/lib";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Work = async () => {
  const projectsResult = await getProjects();
  const projects: Project[] =
    (projectsResult as { projects: Project[] })?.projects || [];

  return (
    <section className="py-14 ">
      <div className="container mx-auto flex flex-col lg:flex-row">
        {/* text */}
        <div className="mx-auto lg:w-1/2 lg:mx-0 text-center lg:text-left mb-12 flex flex-col justify-center items-center lg:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="mx-auto lg:w-1/2 flex items-center justify-center">
          <Carousel className="w-full max-w-xs md:max-w-md">
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.id}>
                  <div className="p-1">
                    <ProjectCard project={project} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Work;

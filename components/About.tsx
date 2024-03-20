import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
import {
  getEducations,
  getExperiences,
  getPersonalInfo,
  getSkills,
} from "@/lib/index";
import { Education, Experience, PersonalInfo, Skill } from "@/lib/types";

const About = async () => {
  const personalinfoResult = await getPersonalInfo();
  const personalinfos: PersonalInfo[] =
    (personalinfoResult as { personalinfos: PersonalInfo[] })?.personalinfos ||
    [];
  const personalinfo = personalinfos[0];

  const experiencesResult = await getExperiences();
  const experiences: Experience[] =
    (experiencesResult as { experiences: Experience[] })?.experiences || [];

  const educationsResult = await getEducations();
  const educations: Education[] =
    (educationsResult as { educations: Education[] })?.educations || [];

  const skillsResult = await getSkills();
  const skills: Skill[] = (skillsResult as { skills: Skill[] })?.skills || [];

  return (
    <section className="py-14">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col lg:flex-row">
          {/* image */}
          <div className="hidden lg:flex flex-1 relative max-h-[500px]">
            <Image
              src="/about-image.jpg"
              width={500}
              height={500}
              alt=""
              className="rounded-full bg-primary shadow-xl shadow-primary"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid lg:grid-cols-3 lg:max-w-[520px] lg:border dark:border-none ">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">{personalinfo.heading}</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      {personalinfo.description}
                    </p>
                    {/* personal info with icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      <div className="flex items-center gap-x-4 mx-auto xl:mx-0">
                        <div className="text-primary">
                          <User2 />
                        </div>
                        <div>{personalinfo.fullname}</div>
                      </div>
                      <div className="flex items-center gap-x-4 mx-auto xl:mx-0">
                        <div className="text-primary">
                          <PhoneCall />
                        </div>
                        <div>{personalinfo.phonenumber}</div>
                      </div>
                      <div className="flex items-center gap-x-4 mx-auto xl:mx-0">
                        <div className="text-primary">
                          <MailIcon />
                        </div>
                        <div>{personalinfo.email}</div>
                      </div>
                      <div className="flex items-center gap-x-4 mx-auto xl:mx-0">
                        <div className="text-primary">
                          <Calendar />
                        </div>
                        <div>{personalinfo.birthdate}</div>
                      </div>
                      <div className="flex items-center gap-x-4 mx-auto xl:mx-0">
                        <div className="text-primary">
                          <GraduationCap />
                        </div>
                        <div>{personalinfo.lastedu}</div>
                      </div>
                      <div className="flex items-center gap-x-4 mx-auto xl:mx-0">
                        <div className="text-primary">
                          <HomeIcon />
                        </div>
                        <div>{personalinfo.address}</div>
                      </div>
                    </div>
                    {/* language */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skills</div>
                      <div className="border-b border-border"></div>
                      <div>{personalinfo.languages}</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesone Journey
                    </h3>
                    {/* experience & education wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">Experience</h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {experiences.map((experience) => {
                            return (
                              <div
                                className="flex gap-x-8 group"
                                key={experience.company}
                              >
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {experience.company}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    {experience.role}
                                  </div>
                                  <div className="text-base font-medium">
                                    {experience.duration}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">Education</h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {educations.map((education) => {
                            return (
                              <div
                                className="flex gap-x-8 group"
                                key={education.university}
                              >
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {education.university}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    {education.major}
                                  </div>
                                  <div className="text-base font-medium">
                                    {education.duration}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills & tools*/}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I Use Everyday</h3>
                    {/* skills */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skill list */}
                      <div className="grid md:grid-cols-2 gap-y-4">
                        {skills.map((skill) => {
                          return (
                            <div
                              className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                              key={skill.name}
                            >
                              <div className="font-medium">{skill.name}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

export interface PersonalInfo {
  address: string;
  birthdate: string;
  description: string;
  email: string;
  fullname: string;
  heading: string;
  languages: string;
  lastedu: string;
  phonenumber: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
}

export interface Education {
  university: string;
  major: string;
  duration: string;
}

export interface Skill {
  name: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  githublink: string;
  livelink: string;
  image: { url: string };
  description: { html: string };
}

export interface Assets {
  url: string;
}

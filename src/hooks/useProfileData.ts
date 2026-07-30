import { useEffect, useState } from "react";

export interface ProfileUrl {
  link: string;
  name: string;
}

export interface Skill {
  name: string;
  link: string;
}

export interface Experience {
  name: string;
  description: string;
  urls?: ProfileUrl[];
  dateFrom: string;
  dateTo: string;
}

export interface Education {
  name: string;
  urls?: ProfileUrl[];
  dateFrom: string;
  dateTo: string;
  description: string;
  mainCourses: string[];
}

export interface Interest {
  name: string;
  description: string;
  urls: ProfileUrl[];
}

export interface ProfileData {
  title: string;
  description: string;
  skills: Skill[];
  experiences: Experience[];
  educations: Education[];
  interests: Interest[];
}

const staticData: ProfileData = {
  title: "Ivan Koldakov",
  description:
    "Not the one who throws the code to the main and forgets about it. I enjoy the whole flow: development, tests, deployment, support. Prefer clean git history, but I'm not a fanatic.",
  skills: [
    { name: "Python", link: "https://www.python.org/" },
    { name: "Django", link: "https://www.djangoproject.com/" },
    { name: "Amazon Web Services (AWS)", link: "https://aws.amazon.com" },
    { name: "RabbitMQ", link: "https://www.rabbitmq.com/" },
    { name: "Git", link: "https://git-scm.com/" },
    { name: "Opsgenie", link: "https://www.atlassian.com/software/opsgenie" },
    { name: "Elasticsearch", link: "https://www.elastic.co" },
    { name: "MongoDB", link: "https://www.mongodb.com" },
    { name: "CI/CD", link: "https://en.wikipedia.org/wiki/CI/CD" },
    { name: "Clean Coding", link: "https://qworpa.com" },
    { name: "Docker", link: "https://www.docker.com" },
    { name: "Interviewing", link: "https://www.teamtailor.com" },
  ],
  experiences: [
    {
      name: "Servers.com Inc",
      description:
        "Successfully developed network analytics applications using FastAPI in a team of 2, designing the project with layered architecture, adapters, and dependency injection. Applied clean coding principles and SOLID in development, built the database layer with SQLAlchemy, and utilized Redis for caching. Used SAQ for processing background tasks such as scanning and analytics, wrote unit tests with pytest, and containerized applications with Docker.",
      urls: [{ link: "https://www.servers.com", name: "servers.com" }],
      dateFrom: "Jan 2025",
      dateTo: "Present",
    },
    {
      name: "Red Acre, LTD",
      description:
        "Worked on multiple microservices. Main project is a Payment Gateway, which we built from scratch with a team.",
      urls: [
        { link: "https://redacreltd.com", name: "redacreltd.com" },
        { link: "https://zeply.com", name: "zeply.com" },
      ],
      dateFrom: "Apr 2022",
      dateTo: "Jun 2024",
    },
    {
      name: "Atom Security, LLC",
      description:
        "Created features on python, covered code with unit tests, supported and improved existing code, integrated Asterisk.",
      urls: [{ link: "https://staffcop.com", name: "staffcop.com" }],
      dateFrom: "Apr 2017",
      dateTo: "Jan 2022",
    },
    {
      name: "Novaris",
      description: "Developed an emergency response system on Java GWT.",
      dateFrom: "Oct 2016",
      dateTo: "Apr 2017",
    },
    {
      name: "Academ Media",
      description:
        "Developed mobile application using javascript framework7 and jade.",
      dateFrom: "Jul 2015",
      dateTo: "Aug 2015",
    },
  ],
  educations: [
    {
      name: "Novosibirsk State University (NSU)",
      urls: [{ link: "https://english.nsu.ru/", name: "nsu.ru" }],
      dateFrom: "2012",
      dateTo: "2016",
      description: "Successfully studied mathematics and computer science.",
      mainCourses: [
        "Algebra and Number Theory",
        "Mathematical logic and the foundations of mathematics",
        "Probability theory and mathematical statistics",
        "Mathematical and functional analysis",
        "Geometry and topology",
        "Differential equations and mathematical physics",
        "Computability theory and the theory of algorithms",
        "Programming",
      ],
    },
  ],
  interests: [
    {
      name: "Futurama API",
      description:
        "REST API and GraphQL API dedicated to celebrating the iconic TV show Futurama.",
      urls: [{ link: "https://futuramaapi.com", name: "futuramaapi.com" }],
    },
    {
      name: "Qworpa",
      description: "Qworpa is a free blog site.",
      urls: [{ link: "https://qworpa.com", name: "qworpa.com" }],
    },
    {
      name: "BrosFiles",
      description: "BrosFiles is a file storage.",
      urls: [{ link: "https://brosfiles.com", name: "brosfiles.com" }],
    },
    {
      name: "Koldakov",
      description: "Koldakov is my profile site.",
      urls: [{ link: "https://koldakov.com", name: "koldakov.com" }],
    },
    {
      name: "PulseSub",
      description:
        "Pulse your space, echo your voice. PulseSub is a community platform where posts (Pulses) and replies (Echoes) keep every space alive.",
      urls: [{ link: "https://pulsesub.com", name: "pulsesub.com" }],
    },
  ],
};

export const useProfileData = () => {
  const [data, setData] = useState<ProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with fetch("/api/profile")
    const timer = setTimeout(() => {
      setData(staticData);
      setIsLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  return { data, isLoading };
};

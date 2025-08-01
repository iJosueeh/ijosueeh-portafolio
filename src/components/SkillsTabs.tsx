"use client"

import * as React from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs"
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"
import {
  Code,
  Laptop,
  Server,
  Database,
  Users,
  MessageSquare,
  Lightbulb,
  Palette,
  PenTool,
  Rocket,
} from "lucide-react"
import {
  SiReact,
  SiAstro,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiSpringboot,
  SiDotnet,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiVercel,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiAdobexd,
} from "react-icons/si"
import { VscVscode } from "react-icons/vsc"

const getSkillIconColor = (skillName: string) => {
  switch (skillName) {
    case "React":
      return "text-blue-500"
    case "Astro":
      return "text-orange-500"
    case "Tailwind CSS":
      return "text-cyan-500"
    case "HTML5":
      return "text-orange-600"
    case "CSS3":
      return "text-blue-600"
    case "Spring Boot":
      return "text-green-600"
    case ".Net":
      return "text-purple-600"
    case "MongoDB":
      return "text-green-700"
    case "PostgreSQL":
      return "text-blue-700"
    case "MySQL":
      return "text-orange-700"
    case "VS Code":
      return "text-blue-400"
    case "Git/GitHub":
      return "text-gray-900"
    case "Postman":
      return "text-orange-600"
    case "Figma":
      return "text-purple-500"
    case "Adobe XD":
      return "text-pink-500"
    case "Comunicación efectiva":
      return "text-blue-400"
    case "Trabajo en equipo":
      return "text-yellow-600"
    case "Pensamiento crítico":
      return "text-red-400"
    case "Adaptabilidad":
      return "text-green-400"
    default:
      return "text-gray-500"
  }
}

const getLevelPercentage = (level: string | undefined) => {
  if (!level) return 0;
  switch (level) {
    case "Advanced":
      return 90;
    case "Intermediate":
      return 60;
    case "Basic":
      return 30;
    default:
      return 0;
  }
};

interface Skill {
  name: string
  icon: React.ElementType
  level?: string
}

interface SkillCategory {
  title: string
  icon: React.ElementType
  skills: Skill[]
}

const technicalSkills: SkillCategory[] = [
  {
    title: "Front-End Development",
    icon: Laptop,
    skills: [
      { name: "React", icon: SiReact, level: "Advanced" },
      { name: "Astro", icon: SiAstro, level: "Intermediate" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced" },
      { name: "HTML5", icon: SiHtml5, level: "Advanced" },
      { name: "CSS3", icon: SiCss3, level: "Advanced" },
    ],
  },
  {
    title: "Back-End Development",
    icon: Server,
    skills: [
      { name: "Spring Boot", icon: SiSpringboot, level: "Basic" },
      { name: ".Net", icon: SiDotnet, level: "Basic" },
    ],
  },
  {
    title: "Databases and NoSQL",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: SiMongodb, level: "Intermediate" },
      { name: "PostgreSQL", icon: SiPostgresql, level: "Basic" },
      { name: "MySQL", icon: SiMysql, level: "Basic" },
    ],
  },
]

const softSkills: SkillCategory[] = [
  {
    title: "Comunicación",
    icon: MessageSquare,
    skills: [
      {
        name: "Comunicación efectiva",
        icon: MessageSquare,
        level: "Advanced",
      },
      {
        name: "Trabajo en equipo",
        icon: Users,
        level: "Advanced",
      },
    ],
  },
  {
    title: "Resolución de Problemas",
    icon: Lightbulb,
    skills: [
      {
        name: "Pensamiento crítico",
        icon: Lightbulb,
        level: "Advanced",
      },
      {
        name: "Adaptabilidad",
        icon: Rocket,
        level: "Advanced",
      },
    ],
  },
];

const toolsSkills: SkillCategory[] = [
  {
    title: "Desarrollo",
    icon: Code,
    skills: [
      { name: "VS Code", icon: VscVscode, level: "Advanced" },
      { name: "Git/GitHub", icon: SiGithub, level: "Advanced" },
      { name: "Postman", icon: SiPostman, level: "Advanced" },
    ],
  },
  {
    title: "Diseño",
    icon: Palette,
    skills: [
      { name: "Figma", icon: SiFigma, level: "Advanced" },
      { name: "Adobe XD", icon: SiAdobexd, level: "Advanced" },
    ],
  },
];

const SkillsTabs = () => {
  return (
    <Tabs defaultValue="technical" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="technical" className="flex items-center gap-2">
          <Laptop className="w-4 h-4" /> Técnicas
        </TabsTrigger>
        <TabsTrigger value="soft" className="flex items-center gap-2">
          <Users className="w-4 h-4" /> Habilidades Blandas
        </TabsTrigger>
        <TabsTrigger value="tools" className="flex items-center gap-2">
          <Code className="w-4 h-4" /> Herramientas
        </TabsTrigger>
      </TabsList>
      <TabsContent value="technical" className="mt-4">
        <div className="grid grid-cols-3 gap-4">
          {technicalSkills.map((category) => (
            <Card key={category.title} className="p-4 bg-white w-full min-h-[200px]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <div className="p-2 rounded-full bg-blue-100"><category.icon /></div> {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul>
                  {category.skills.map((skill) => {
                    const percentage = getLevelPercentage(skill.level);
                    return (
                      <li key={skill.name} className="text-gray-700 mb-4">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <div className="flex items-center gap-2">
                            <skill.icon className={getSkillIconColor(skill.name)} />
                            <span>{skill.name}</span>
                          </div>
                          {skill.level && <span>{percentage}%</span>}
                        </div>
                        {skill.level && (
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-blue-600 h-2.5 rounded-full"
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="soft" className="mt-4">
        <div className="grid grid-cols-3 gap-4">
          {softSkills.map((category) => (
            <Card key={category.title} className="p-4 bg-white w-full min-h-[200px]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <div className="p-2 rounded-full bg-green-100"><category.icon /></div> {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul>
                  {category.skills.map((skill) => {
                    const percentage = getLevelPercentage(skill.level);
                    return (
                      <li key={skill.name} className="text-gray-700 mb-4">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <div className="flex items-center gap-2">
                            <skill.icon className={getSkillIconColor(skill.name)} />
                            <span>{skill.name}</span>
                          </div>
                          {skill.level && <span>{percentage}%</span>}
                        </div>
                        {skill.level && (
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-blue-600 h-2.5 rounded-full"
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="tools" className="mt-4">
        <div className="grid grid-cols-3 gap-4">
          {toolsSkills.map((category) => (
            <Card key={category.title} className="p-4 bg-white w-full min-h-[200px]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <div className="p-2 rounded-full bg-purple-100"><category.icon /></div> {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul>
                  {category.skills.map((skill) => {
                    const percentage = getLevelPercentage(skill.level);
                    return (
                      <li key={skill.name} className="text-gray-700 mb-4">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <div className="flex items-center gap-2">
                            <skill.icon className={getSkillIconColor(skill.name)} />
                            <span>{skill.name}</span>
                          </div>
                          {skill.level && <span>{percentage}%</span>}
                        </div>
                        {skill.level && (
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-blue-600 h-2.5 rounded-full"
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default SkillsTabs;



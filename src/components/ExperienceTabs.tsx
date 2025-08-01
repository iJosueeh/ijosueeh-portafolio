"use client";

import * as React from "react";
import { Badge } from "./ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Briefcase, GraduationCap, Award, Clock, MapPin } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

// Datos para Experiencia Laboral
const workExperienceData = [
  {
    date: "Jun. 2025 - Dic. 2025",
    title: "Practicante de Desarrollo Backend",
    company: "Corporación BTC (Proyecto con Evertec)",
    description: [
      "Desarrollo y mantenimiento de microservicios en el ecosistema .NET para la integración de sistemas.",
      "Colaboración en la integración de servicios de pago de Evertec, asegurando un consumo correcto y eficiente de sus APIs.",
      "Implementación de pruebas unitarias para garantizar la calidad y fiabilidad del código.",
      "Validación y depuración de endpoints de la API utilizando Postman para verificar su funcionamiento.",
    ],
    technologies: [".NET", "C#", "Microservicios", "API REST", "Postman"],
  },
  {
    date: "Ene. 2024 - Presente",
    title: "Desarrollador Full-Stack Jr.",
    company: "Proyecto Freelance",
    description: [
      "Diseño y desarrollo de una aplicación web completa para un cliente local.",
      "Implementación del front-end con React y Astro para una interfaz rápida y moderna.",
      "Creación de una API RESTful con Spring Boot para gestionar la lógica de negocio.",
      "Administración de la base de datos PostgreSQL y despliegue en un entorno de producción.",
    ],
    technologies: ["React", "Astro", "Spring Boot", "PostgreSQL", "Tailwind CSS"],
  },
];

// Datos para Educación
const educationData = [
  {
    date: "2023 - 2027",
    degree: "Ingeniería de Software",
    institution: "Universidad Tecnológica del Perú (UTP)",
    location: "Lima, Perú",
    description: "Enfocado en el desarrollo de software, bases de datos y metodologías ágiles.",
    technologies: ["Desarrollo de Software", "Bases de Datos", "Metodologías Ágiles"],
  },
  {
    date: "2019",
    degree: "Curso de Fundamentos de Programación",
    institution: "Platzi",
    description: "Aprendizaje de lógica de programación y estructuras de datos básicas.",
  },
];

// Datos para Certificaciones
const certificationData = [
  {
    date: "Dic. 2024",
    name: "Universidad Spring - Spring Framework y Spring Boot",
    issuer: "Global Mentoring - Ing. Ubaldo Acosta",
    link: "https://www.udemy.com/certificate/UC-12c2465e-2485-447d-b625-1e112d1f8c1b/",
    description: "Especialización completa en desarrollo web y empresarial con Java. Aprendí a construir aplicaciones modernas utilizando Spring Boot, Spring MVC, Spring Security, Thymeleaf y JPA/Hibernate.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "JPA/Hibernate"
    ]
  },
  {
    date: "Nov. 2022",
    name: "Spring Boot: De Cero a Experto",
    issuer: "Udemy (Fernando Herrera)",
    link: "#", // Reemplazar con el enlace real a la credencial
    description: "Aprendizaje profundo de Spring Boot para la creación de APIs RESTful y microservicios.",
    technologies: ["Spring Boot", "Java", "API REST", "Microservicios"],
  },
];

export const ExperienceTabs = () => {
  return (
    <Tabs defaultValue="work" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-8">
        <TabsTrigger value="work" className="flex items-center gap-2">
          <Briefcase className="w-4 h-4" /> Experiencia Laboral
        </TabsTrigger>
        <TabsTrigger value="education" className="flex items-center gap-2">
          <GraduationCap className="w-4 h-4" /> Educación
        </TabsTrigger>
        <TabsTrigger value="certifications" className="flex items-center gap-2">
          <Award className="w-4 h-4" /> Certificaciones
        </TabsTrigger>
      </TabsList>

      <TabsContent
        value="work"
        className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=active]:animate-in data-[state=active]:fade-in-90 data-[state=active]:slide-in-from-bottom-4 duration-500"
      >
        <div className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-6">
          {workExperienceData.map((item, index) => (
            <div key={`work-${item.date}-${index}`} className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <Briefcase className="w-4 h-4 text-blue-800 dark:text-blue-300" />
              </span>

              <Card className="shadow-md hover:shadow-lg transition-shadow p-6">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.company}</CardDescription>
                    </div>
                    <time className="text-xs font-medium text-gray-500 flex-shrink-0 ml-4">{item.date}</time>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1.5">
                    {item.description.map((point, descIndex) => <li key={`work-desc-${index}-${descIndex}`}>{point}</li>)}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.technologies.map((tech, techIndex) => <Badge key={`work-tech-${index}-${techIndex}`} variant="secondary">{tech}</Badge>)}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </TabsContent>

      <TabsContent
        value="education"
        className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=active]:animate-in data-[state=active]:fade-in-90 data-[state=active]:slide-in-from-bottom-4 duration-500"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((item, index) => (
            <Card key={`education-${item.degree}-${index}`} className="shadow-md hover:shadow-lg transition-shadow bg-card border p-6">
              <CardHeader>
                <div className="flex justify-between items-start gap-x-4">
                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <CardTitle>{item.degree}</CardTitle>
                    </div>
                    <CardDescription>{item.institution}</CardDescription>
                  </div>
                  <div className="flex flex-col items-end text-right">
                    <div className="flex items-center gap-1 text-xs font-medium text-gray-500">
                      <Clock className="w-4 h-4" />
                      <time>{item.date}</time>
                    </div>
                    {item.location && (
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <MapPin className="w-3 h-3" />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                {item.technologies && item.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.technologies.map((tech, techIndex) => (
                      <Badge key={`education-tech-${index}-${techIndex}`} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent
        value="certifications"
        className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=active]:animate-in data-[state=active]:fade-in-90 data-[state=active]:slide-in-from-bottom-4 duration-500"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationData.map((item, index) => (
            <Card key={`certification-${item.name}-${index}`} className="shadow-md hover:shadow-lg transition-shadow bg-card border p-6">
              <CardHeader>
                <div className="flex justify-between items-start gap-x-4">
                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <CardTitle>{item.name}</CardTitle>
                    </div>
                    <CardDescription>{item.issuer}</CardDescription>
                  </div>
                  <div className="flex flex-col items-end text-right">
                    <div className="flex items-center gap-1 text-xs font-medium text-gray-500">
                      <Clock className="w-4 h-4" />
                      <time>{item.date}</time>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {item.description && <p className="text-gray-600 text-sm mb-3">{item.description}</p>}
                {item.technologies && item.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.technologies.map((tech, techIndex) => (
                      <Badge key={`certification-tech-${index}-${techIndex}`} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                )}
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm mt-3 block">
                    Ver Credencial
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};
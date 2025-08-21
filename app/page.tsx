"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Database,
  Server,
  Zap,
  Download,
  ArrowRight,
} from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-lg border-b border-border/50 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-serif font-bold text-xl bg-gradient-to-r from-accent to-blue-600 bg-clip-text text-transparent">
              Omar Monir Kamal
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105 font-medium"
              >
                About
              </button>
              <button
                onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105 font-medium"
              >
                Skills
              </button>
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105 font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105 font-medium"
              >
                Experience
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105 font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-blue-600/5 to-blue-800/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="font-serif font-bold text-5xl md:text-7xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent mb-6 animate-fade-in-up">
            Omar Monir Kamal
          </h1>
          <p className="text-xl md:text-3xl text-muted-foreground mb-8 animate-fade-in-up delay-200">
            Backend Developer | Software Engineer | Computer Science Student
          </p>
          <p className="text-lg md:text-xl text-secondary mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            Results-driven Backend Developer specializing in ASP.NET Core and scalable web applications.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in-up delay-400">
            <div className="flex items-center gap-2 text-muted-foreground bg-blue-50/50 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200/50">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span>Cairo, Egypt</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground bg-blue-50/50 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200/50">
              <Phone className="w-4 h-4 text-blue-600" />
              <span>+20 1015901207</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground bg-blue-50/50 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200/50">
              <Mail className="w-4 h-4 text-blue-600" />
              <span>omarmonir2233@gmail.com</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-in-up delay-500">
            <Button
              variant="outline"
              size="lg"
              className="gap-2 bg-transparent hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 border-2 border-blue-600 text-blue-600"
              onClick={() => window.open("https://linkedin.com/in/omar-monir-kamal", "_blank")}
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 bg-transparent hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 border-2 border-blue-600 text-blue-600"
              onClick={() => window.open("https://github.com/omarmonir", "_blank")}
            >
              <Github className="w-5 h-5" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 bg-transparent hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 border-2 border-blue-600 text-blue-600"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              <Download className="w-5 h-5" />
              Resume
            </Button>
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up delay-600"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="flex items-center gap-2">
              View My Work
              <ArrowRight className="w-5 h-5" />
            </span>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/30 to-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-center mb-16 bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 1 year of hands-on experience in ASP.NET Core and C#, I specialize in building efficient,
                secure, and scalable backend systems. My expertise spans RESTful APIs, Clean Architecture, JWT
                Authentication, and Entity Framework.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm passionate about creating robust backend solutions that power modern web applications. Currently
                pursuing my B.Sc. in Computer Science at Fayoum University, I combine academic knowledge with practical
                industry experience.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-blue-500/50 bg-gradient-to-br from-card to-blue-50/20">
                <CardContent className="p-8 text-center">
                  <Code className="w-10 h-10 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold text-xl mb-2">1+ Years</h3>
                  <p className="text-sm text-muted-foreground font-medium">Backend Development</p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-blue-500/50 bg-gradient-to-br from-card to-blue-50/20">
                <CardContent className="p-8 text-center">
                  <Server className="w-10 h-10 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold text-xl mb-2">ASP.NET Core</h3>
                  <p className="text-sm text-muted-foreground font-medium">Specialization</p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-blue-500/50 bg-gradient-to-br from-card to-blue-50/20">
                <CardContent className="p-8 text-center">
                  <Database className="w-10 h-10 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold text-xl mb-2">Clean Architecture</h3>
                  <p className="text-sm text-muted-foreground font-medium">Best Practices</p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-blue-500/50 bg-gradient-to-br from-card to-blue-50/20">
                <CardContent className="p-8 text-center">
                  <Zap className="w-10 h-10 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold text-xl mb-2">Scalable APIs</h3>
                  <p className="text-sm text-muted-foreground font-medium">Performance Focus</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-center mb-16 bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-blue-500/50 bg-gradient-to-br from-card via-card to-blue-50/20">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-center bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    ASP.NET Core
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    C#
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Web APIs
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    MVC
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-blue-500/50 bg-gradient-to-br from-card via-card to-blue-50/20">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-center bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                  Databases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    SQL Server
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Entity Framework
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Repository Pattern
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-blue-500/50 bg-gradient-to-br from-card via-card to-blue-50/20">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-center bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    C#
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Java
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Python
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    C++
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-blue-500/50 bg-gradient-to-br from-card via-card to-blue-50/20">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-center bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                  Tools & Methods
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Git/GitHub
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Visual Studio
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Postman
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Swagger/OpenAPI
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Clean Architecture
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    SOLID
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/30 to-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-center mb-16 bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 hover:border-blue-500/50 bg-gradient-to-br from-card via-card to-blue-50/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-2 text-lg group-hover:text-blue-600 transition-colors duration-300">
                  Expert System for Student Affairs
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Role-based API system with JWT authentication and smart recommendations
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Built a comprehensive student affairs management system with role-based access control, automated
                  reporting, and intelligent recommendation engine for academic guidance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-blue-300 text-blue-700 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    ASP.NET Core
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-blue-300 text-blue-700 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    JWT
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-blue-300 text-blue-700 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Entity Framework
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 hover:border-blue-500/50 bg-gradient-to-br from-card via-card to-blue-50/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-2 text-lg group-hover:text-blue-600 transition-colors duration-300">
                  E-Commerce Backend
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Scalable RESTful API with payment integration and DDD principles
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Developed a robust e-commerce backend with Stripe payment integration, implementing Domain-Driven
                  Design principles for maintainable and scalable architecture.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-blue-300 text-blue-700 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    ASP.NET Core
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-blue-300 text-blue-700 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Stripe API
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-blue-300 text-blue-700 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    DDD
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 hover:border-blue-500/50 bg-gradient-to-br from-card via-card to-blue-50/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-2 text-lg group-hover:text-blue-600 transition-colors duration-300">
                  Physics Lab Management
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Equipment tracking system with dashboards and automated reports
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Created a comprehensive lab management system for tracking equipment, generating automated reports,
                  and providing real-time dashboards for lab administrators.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-blue-300 text-blue-700 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    ASP.NET Core
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-blue-300 text-blue-700 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    SQL Server
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-blue-300 text-blue-700 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Reporting
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-center mb-12">Experience & Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif font-semibold text-xl mb-6">Professional Experience</h3>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Marketing Team Head</CardTitle>
                    <CardDescription>Enactus Fayoum • 2023-2025</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Led marketing initiatives and team coordination for social entrepreneurship projects.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Sales & Operations Assistant</CardTitle>
                    <CardDescription>Manahil Stationery Store • 2019-2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Managed sales operations and customer relations, developing strong problem-solving and
                      communication skills.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-xl mb-6">Education & Certifications</h3>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">B.Sc. Computer Science</CardTitle>
                    <CardDescription>Fayoum University • Expected 2025</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Relevant coursework: Data Structures, Database Systems, Software Engineering, OOP, Networks, Web
                      Development
                    </p>
                  </CardContent>
                </Card>

                <div className="space-y-3">
                  <Badge className="block w-fit">Full Stack Web Development with .NET - ITI (2024)</Badge>
                  <Badge className="block w-fit">ASP.NET Core API Development (.NET 8) - Udemy (2024)</Badge>
                  <Badge className="block w-fit">Data Analysis Training - DEPI (2024)</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/30 to-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-center mb-16 bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="font-serif font-semibold text-2xl mb-8 text-blue-600">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                I'm always interested in discussing new opportunities, collaborating on projects, or simply connecting
                with fellow developers. Feel free to reach out!
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-blue-50/50 rounded-lg border border-blue-200/50 hover:border-blue-500/50 transition-colors">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <span className="text-lg">omarmonir2233@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-blue-50/50 rounded-lg border border-blue-200/50 hover:border-blue-500/50 transition-colors">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <span className="text-lg">+20 1015901207</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-blue-50/50 rounded-lg border border-blue-200/50 hover:border-blue-500/50 transition-colors">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <span className="text-lg">Cairo, Egypt</span>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 bg-transparent hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 border-2 border-blue-600 text-blue-600"
                  onClick={() => window.open("https://linkedin.com/in/omar-monir-kamal", "_blank")}
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 bg-transparent hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 border-2 border-blue-600 text-blue-600"
                  onClick={() => window.open("https://github.com/omarmonir", "_blank")}
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </Button>
              </div>
            </div>

            <Card className="border-2 hover:border-blue-500/50 transition-colors bg-gradient-to-br from-card to-blue-50/20 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                  Send a Message
                </CardTitle>
                <CardDescription className="text-lg">I'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" className="border-2 focus:border-blue-500 transition-colors" />
                  <Input placeholder="Last Name" className="border-2 focus:border-blue-500 transition-colors" />
                </div>
                <Input
                  placeholder="Email Address"
                  type="email"
                  className="border-2 focus:border-blue-500 transition-colors"
                />
                <Input placeholder="Subject" className="border-2 focus:border-blue-500 transition-colors" />
                <Textarea
                  placeholder="Your Message"
                  rows={4}
                  className="border-2 focus:border-blue-500 transition-colors resize-none"
                />
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-gradient-to-r from-muted/50 to-background">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground text-lg">
            © 2025 Omar Monir Kamal. Built with passion for backend development.
          </p>
        </div>
      </footer>
    </div>
  )
}

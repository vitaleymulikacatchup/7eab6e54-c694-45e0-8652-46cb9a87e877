"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, BookOpen, Cloud, Code, Dribbble, Github, Globe, Linkedin, Palette, Rocket, Settings, Smartphone, Star, Twitter, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="large"
      sizing="medium"
      background="circleGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="glass"
      showBlurBottom="false"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Services", id: "feature" },
            { name: "About", id: "about" },
            { name: "Portfolio", id: "testimonial" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="DialedWeb"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Custom Software Solutions That Drive Results"
          description="We create powerful web applications, mobile apps, and digital solutions that help businesses scale and succeed in today's competitive market."
          tag="Software Agency"
          tagIcon={Code}
          buttons={[
            { text: "Start Your Project", href: "contact" },
            { text: "View Our Work", href: "testimonial" }
          ]}
          imageSrc="https://images.pexels.com/photos/6804081/pexels-photo-6804081.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Software development team at work"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We build innovative software solutions that empower businesses to achieve their digital transformation goals and stay ahead of the competition"
          buttons={[
            { text: "Learn More", href: "feature" },
            { text: "Get Started", href: "contact" }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Comprehensive Software Services"
          description="From concept to deployment, we provide end-to-end software development services tailored to your business needs"
          tag="Our Services"
          tagIcon={Settings}
          features={[
            {
              title: "Web Development",
              description: "Custom web applications built with modern technologies like React, Next.js, and Node.js for optimal performance and user experience",
              icon: Globe,
              button: { text: "Learn More", href: "contact" }
            },
            {
              title: "Mobile App Development",
              description: "Native and cross-platform mobile applications for iOS and Android that engage users and drive business growth",
              icon: Smartphone,
              button: { text: "Learn More", href: "contact" }
            },
            {
              title: "UI/UX Design",
              description: "User-centered design solutions that create intuitive interfaces and exceptional user experiences across all platforms",
              icon: Palette,
              button: { text: "Learn More", href: "contact" }
            },
            {
              title: "Cloud Solutions",
              description: "Scalable cloud infrastructure and deployment solutions using AWS, Azure, and Google Cloud Platform",
              icon: Cloud,
              button: { text: "Learn More", href: "contact" }
            },
            {
              title: "API Development",
              description: "Robust RESTful APIs and microservices architecture that ensure seamless integration and data flow",
              icon: Zap,
              button: { text: "Learn More", href: "contact" }
            },
            {
              title: "Consulting",
              description: "Strategic technology consulting to help you make informed decisions about your software architecture and tech stack",
              icon: Users,
              button: { text: "Learn More", href: "contact" }
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Trusted by startups and enterprises worldwide"
          tag="Testimonials"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO",
              company: "TechCorp Solutions",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "CTO",
              company: "InnovateLab",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7414280/pexels-photo-7414280.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Marketing Director",
              company: "GrowthCo",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5990046/pexels-photo-5990046.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Product Manager",
              company: "StartupXYZ",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7414011/pexels-photo-7414011.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Expert Team"
          description="Experienced professionals dedicated to delivering exceptional software solutions"
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Alex Thompson",
              role: "Lead Developer",
              description: "Full-stack developer with 8+ years experience in React, Node.js, and cloud architecture. Previously at Google and Microsoft.",
              imageSrc: "https://images.pexels.com/photos/7606019/pexels-photo-7606019.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                { icon: Github, url: "https://github.com" },
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "2",
              name: "Maria Garcia",
              role: "UX Designer",
              description: "Creative designer specializing in user experience and interface design. Expert in Figma, user research, and design systems.",
              imageSrc: "https://images.pexels.com/photos/28550000/pexels-photo-28550000.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                { icon: Dribbble, url: "https://dribbble.com" },
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "3",
              name: "James Wilson",
              role: "Project Manager",
              description: "Agile project manager with expertise in software delivery and client communication. Certified Scrum Master with 10+ years experience.",
              imageSrc: "https://images.pexels.com/photos/8278900/pexels-photo-8278900.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                { icon: Twitter, url: "https://twitter.com" },
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join hundreds of companies that trust us with their software development needs"
          tag="Our Clients"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/3370333/pexels-photo-3370333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/5207507/pexels-photo-5207507.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest Insights"
          description="Stay updated with the latest trends and best practices in software development"
          tag="Blog"
          tagIcon={BookOpen}
          blogs={[
            {
              id: "1",
              category: "Development",
              title: "Modern Web Development Best Practices",
              excerpt: "Explore the latest techniques and tools that are shaping the future of web development in 2025",
              imageSrc: "https://images.pexels.com/photos/4974922/pexels-photo-4974922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              authorName: "Alex Thompson",
              authorAvatar: "https://images.pexels.com/photos/7606019/pexels-photo-7606019.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Design",
              title: "Mobile-First Design Principles",
              excerpt: "Learn how to create engaging mobile experiences that convert users and drive business results",
              imageSrc: "https://images.pexels.com/photos/8487204/pexels-photo-8487204.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              authorName: "Maria Garcia",
              authorAvatar: "https://images.pexels.com/photos/28550000/pexels-photo-28550000.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "12 Jan 2025"
            },
            {
              id: "3",
              category: "Architecture",
              title: "Scaling Software Architecture",
              excerpt: "Discover strategies for building scalable software systems that grow with your business needs",
              imageSrc: "https://images.pexels.com/photos/3862387/pexels-photo-3862387.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              authorName: "James Wilson",
              authorAvatar: "https://images.pexels.com/photos/8278900/pexels-photo-8278900.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "08 Jan 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Ready to Build Something Amazing?"
          description="Let's discuss your project requirements and create a custom software solution that drives your business forward."
          tagIcon={Rocket}
          imageSrc="https://images.pexels.com/photos/2127039/pexels-photo-2127039.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern office building"
          inputPlaceholder="Enter your email address"
          buttonText="Get Quote"
          termsText="By submitting, you agree to our Terms of Service and Privacy Policy."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="DialedWeb"
          copyrightText="© 2025 DialedWeb. All rights reserved."
          columns={[
            {
              title: "Services",
              items: [
                { label: "Web Development", href: "feature" },
                { label: "Mobile Apps", href: "feature" },
                { label: "UI/UX Design", href: "feature" },
                { label: "Consulting", href: "feature" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Careers", href: "contact" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Blog", href: "blog" },
                { label: "Case Studies", href: "testimonial" },
                { label: "Documentation", href: "https://docs.dialedweb.com" },
                { label: "Support", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Twitter, ariaLabel: "Twitter" },
            { icon: Linkedin, ariaLabel: "LinkedIn" },
            { icon: Github, ariaLabel: "GitHub" },
            { icon: Dribbble, ariaLabel: "Dribbble" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
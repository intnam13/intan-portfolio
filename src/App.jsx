import React from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 font-sans leading-relaxed">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header with hero */}
        <Header />

        <main className="space-y-20 mt-12">
          {/* About Section */}
          <section id="about" className="prose-invert about-text">
            <h2 className="section-title">About Me</h2>
            <p>
              Hiii! Intan is here, a QA Engineer with a strong focus on automation, bringing over 8
              years of experience in ensuring smooth, reliable, and user-friendly digital
              experiences. I enjoy writing automation tests, optimizing workflows, and continuously
              learning ways to make testing smarter and more efficient.
            </p>
            <p>
              Beyond work, I find inspiration in music, stories, and everyday moments. I love pop
              and pop-rock songs, journaling, reading a good book, and having thoughtful
              conversations that spark new ideas. I believe in staying curious, growing through
              challenges, and keeping a sense of humor along the way.
            </p>
            <br />
            <a
              href={`${import.meta.env.BASE_URL}intan_namira_resume.pdf`}
              download
              className="inline-block mt-4 px-4 py-2 rounded-lg border border-neutral-700 hover:bg-neutral-800"
            >
              Download My Resume here
            </a>
          </section>

          {/* Projects Section */}
          <div id="projects">
            <Projects />
          </div>

          {/* Certificates Section */}
          <div id="certs">
            <Certificates />
          </div>

          {/* Contact Section */}
          <div id="contact">
            <Contact />
          </div>
        </main>
      </div>

      {/* Footer - outside max width so it spans full width */}
      <Footer />
    </div>
  );
}

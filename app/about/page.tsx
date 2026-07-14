import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Meraipu</h1>
          <p className="text-xl text-gray-400 mb-8">
            Simplifying IPU education, one resource at a time.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-300 mb-4 leading-relaxed">
            Meraipu was created to help students at Guru Gobind Singh Indraprastha University (GGSIPU) 
            access quality study materials, syllabi, practical files, and previous year question papers 
            all in one convenient place.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            We believe that education should be accessible, organized, and stress-free. Our platform 
            eliminates the hassle of searching across multiple sources for study materials, allowing 
            students to focus on what truly matters—learning.
          </p>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">📚 Complete Syllabus</h3>
              <p className="text-gray-300">
                Access the full curriculum for all semesters and branches at GGSIPU, keeping you 
                aligned with your course requirements.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">📝 Practical Files</h3>
              <p className="text-gray-300">
                Well-organized practical assignments and solution files to help you prepare for 
                lab sessions and exams.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">❓ Previous Year Papers</h3>
              <p className="text-gray-300">
                Solved and unsolved question papers from past years to help you understand exam 
                patterns and practice effectively.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">🎓 All Branches Covered</h3>
              <p className="text-gray-300">
                Resources tailored for every branch and specialization offered at GGSIPU, 
                ensuring inclusive support for all students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Why Choose Meraipu?</h2>
          <ul className="space-y-4 text-lg text-gray-300">
            <li className="flex items-start">
              <span className="text-primary mr-4 font-bold">✓</span>
              <span><strong>Curated by Students:</strong> Resources compiled and verified by fellow GGSIPU students who understand your needs.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-4 font-bold">✓</span>
              <span><strong>Always Updated:</strong> We continuously update materials to match current syllabi and exam patterns.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-4 font-bold">✓</span>
              <span><strong>Free & Accessible:</strong> All materials are available for free, democratizing education at GGSIPU.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-4 font-bold">✓</span>
              <span><strong>Community-Driven:</strong> Built with love by the GGSIPU community, for the GGSIPU community.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Excel?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start exploring your year and branch to access all the study materials you need.
          </p>
          <a
            href="/"
            className="inline-block px-8 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition"
          >
            Explore Now
          </a>
        </div>
      </section>
    </div>
  );
}
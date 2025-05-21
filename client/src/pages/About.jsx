import "../about-section.css";

export default function About() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-primary fw-bold">🧠 About Us – Welcome to Digitornix</h1>
      <p>
        At <strong>Digitornix</strong>, we are more than just a tech company — we are your <span className="text-primary">digital transformation partner</span>, your innovation engine, and your vision’s most reliable ally in the fast-evolving digital landscape.
        <br /><br />
        Founded with passion, built with precision, and driven by purpose, Digitornix is a next-generation <strong>IT consulting</strong> and <strong>digital solutions</strong> company specializing in custom web and app development, cloud integration, data analytics, and smart telecaller services. We bring together technology, creativity, and strategy to help businesses of all sizes transform their digital presence, scale efficiently, and grow fearlessly in today’s competitive world.
      </p>

      <h2 className="text-info fw-bold mb-3">🚀 Our Vision</h2>
      <p>
        To empower businesses — from budding startups to established enterprises — with cutting-edge digital tools and solutions that simplify operations, enhance user experience, and drive sustainable growth.
      </p>

      <h2 className="text-info fw-bold mb-3">💡 Our Mission</h2>
      <p>
        To deliver intelligent, scalable, and human-centered digital solutions that combine technology with innovation and provide maximum value through collaboration, transparency, and measurable outcomes.
      </p>

      <section className="my-5" aria-label="Why Choose Digitornix">
        <h2 className="text-success fw-bold mb-3">👨‍💻 Why Choose Digitornix?</h2>
        <ul className="about-list mb-4">
          <li><span className="about-icon">✅</span><strong>End-to-End Expertise:</strong> From ideation to deployment and beyond, we provide full-stack solutions with a focus on quality and speed.</li>
          <li><span className="about-icon">✅</span><strong>Tailored Solutions:</strong> Every business is unique. That’s why our services are custom-fit to your business goals, brand voice, and technical requirements.</li>
          <li><span className="about-icon">✅</span><strong>Modern Tech Stack:</strong> We leverage the latest frameworks, AI tools, and cloud platforms to future-proof your business operations.</li>
          <li><span className="about-icon">✅</span><strong>Transparent Communication:</strong> We believe in building relationships, not just projects. That means clear communication, shared milestones, and mutual respect.</li>
          <li><span className="about-icon">✅</span><strong>Design-First Philosophy:</strong> We prioritize UI/UX excellence, ensuring every interface is beautiful, functional, and conversion-driven.</li>
          <li><span className="about-icon">✅</span><strong>Scalable &amp; Secure:</strong> Every solution we build is designed with scalability, security, and performance in mind.</li>
        </ul>
      </section>

      <section className="my-5" aria-label="Our Culture and Values">
        <h2 className="text-warning fw-bold mb-3">🌱 Our Culture &amp; Values</h2>
        <ul className="about-list mb-4">
          <li><span className="about-icon">🌟</span><strong>Innovation Over Imitation</strong></li>
          <li><span className="about-icon">🌟</span><strong>Empathy in Every Interaction</strong></li>
          <li><span className="about-icon">🌟</span><strong>Quality Without Compromise</strong></li>
          <li><span className="about-icon">🌟</span><strong>Accountability, Always</strong></li>
          <li><span className="about-icon">🌟</span><strong>Collaboration Over Competition</strong></li>
        </ul>
        <p className="fst-italic text-secondary">
          We work not just for our clients — we work with them. Because we know that the best results happen when we think as one team.
        </p>
      </section>

      <h2 className="text-danger fw-bold mb-3">🏆 Our Impact</h2>
      <p>
        From helping local businesses go global to enabling startups with MVPs that scale, we’ve empowered dozens of clients across industries like e-commerce, education, finance, healthcare, retail, and more. Whether it's a responsive website, a robust cloud backend, or a smart customer engagement tool — we’ve delivered results that speak louder than our code.
      </p>

      <h2 className="text-primary fw-bold mb-3">🤝 Let’s Build the Future Together</h2>
      <p>
        Digitornix is not just about building products — it's about building dreams. Your challenges excite us. Your success drives us. Whether you're a startup founder, a growing SME, or a large-scale enterprise, we're here to digitally supercharge your journey.
        <br /><br />
        <span className="fw-bold text-success">📩 Ready to transform your idea into impact?</span><br />
        Let’s connect, collaborate, and create something remarkable — together.
        <br /><br />
        <span className="fst-italic text-info">| Digitornix – Where Digital Meets Purpose.</span>
      </p>
       <df-messenger
        intent="WELCOME"
        chat-title="Digitornix"
        agent-id="27f4dbf5-7da5-4882-858e-0d50a1875b2b"
        language-code="en"
      ></df-messenger>
    </div>
  );
}
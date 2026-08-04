import hero from "./assets/hero.png";

export default function App() {
  const skills = [
    "Laravel",
    "PHP",
    "Python",
    "Django",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "MySQL",
    "Git",
  ];

  const projects = [
    {
      title: "Cake Booking System",
      tech: "Laravel, PHP, MySQL",
      description:
        "Online cake booking platform where customers can place orders, admins can approve or reject requests, and payments are enabled after approval.",
    },
    {
      title: "AgriHaven",
      tech: "Python Django, MySQL",
      description:
        "Krishibhavan management system supporting product requests, soil testing, water testing, insurance requests, and request tracking.",
    },
    {
      title: "Job Hiring Portal",
      tech: "Laravel, MySQL",
      description:
        "Recruitment platform for employers and job seekers with job posting and application management features.",
    },
    {
      title: "Vehicle Auction System",
      tech: "Laravel, MySQL",
      description:
        "Online vehicle auction platform with bidding, vehicle listing, and auction management functionality.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navbar */}
      <nav className="sticky top-0 bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-yellow-500">
            Anit Monica Joseph
          </h1>

          <div className="hidden md:flex gap-6 font-medium">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <div className="flex flex-col md:flex-row items-center gap-12">
          <img
            src={hero}
            alt="Anit Monica Joseph"
            className="w-72 h-72 rounded-full object-cover border-4 border-yellow-400 shadow-xl"
          />

          <div>
            <h1 className="text-5xl font-bold mb-4">
              Hi, I'm Anit Monica Joseph
            </h1>

            <h2 className="text-2xl text-yellow-500 font-semibold mb-6">
              Laravel Backend Developer
            </h2>

            <p className="text-gray-700 text-lg leading-8">
              Backend Developer with experience in Laravel, PHP,
              Python, Django, React, JavaScript, HTML, CSS and
              MySQL. Currently working as a Laravel Backend
              Developer at eSight Solutions and passionate about
              building scalable and user-friendly web applications.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="bg-yellow-50 py-16"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">
            Experience
          </h2>

          <div className="bg-white rounded-xl shadow-md p-8 mb-6">
            <h3 className="text-2xl font-semibold">
              Laravel Backend Developer
            </h3>
            <p className="text-yellow-600 font-medium">
              eSight Solutions
            </p>
            <p className="mt-3 text-gray-700">
              Working on Laravel-based web applications,
              API development, database design, backend
              architecture, and integration with frontend
              applications.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-semibold">
              Technical Trainer
            </h3>

            <p className="text-yellow-600 font-medium">
              January 2025 – March 2026
            </p>

            <p className="mt-3 text-gray-700">
              Trained students in Laravel, PHP, Python Django,
              HTML, CSS, and JavaScript. Guided students in
              developing real-world web applications and
              project-based learning activities.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="max-w-6xl mx-auto px-6 py-16"
      >
        <h2 className="text-4xl font-bold mb-10">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-yellow-100 text-black px-5 py-3 rounded-lg font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="bg-gray-50 py-16"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-xl shadow-md p-8"
              >
                <h3 className="text-2xl font-bold mb-2">
                  {project.title}
                </h3>

                <p className="text-yellow-600 font-medium mb-3">
                  {project.tech}
                </p>

                <p className="text-gray-700">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section
        id="education"
        className="max-w-6xl mx-auto px-6 py-16"
      >
        <h2 className="text-4xl font-bold mb-10">
          Education
        </h2>

        <div className="space-y-6">
          <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-yellow-400">
            <h3 className="text-xl font-bold">
              Master of Computer Applications (MCA)
            </h3>
            <p>Santhigiri College</p>
            <p>MG University</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-yellow-400">
            <h3 className="text-xl font-bold">
              Bachelor of Computer Applications (BCA)
            </h3>
            <p>Navajyothi College, Cherupuzha</p>
            <p>Kannur University</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-black text-white py-16"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-yellow-400">
            Contact
          </h2>

          <div className="space-y-4 text-lg">
            <p>📧 anit@gmail.com</p>
            <p>📞 998989898</p>
            <p>💻 GitHub: www.git</p>
          </div>
        </div>
      </section>
    </div>
  );
}
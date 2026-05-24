import profile from "../assets/profile.jpeg";
import { userData } from "../config";

function About() {
  const facts = [
    { label: "University", value: userData.university },
    { label: "Degree", value: userData.degree },
    { label: "Semester", value: userData.semester },
    { label: "Location", value: userData.location },
    { label: "Available for", value: userData.availability },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">
          About <span className="text-blue-500">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-center">

          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src={profile}
              alt={`${userData.name} - ${userData.title}`}
              className="w-56 h-56 rounded-full object-cover border-4 border-gray-700 shadow-xl hover:scale-105 transition"
            />
          </div>

          {/* Content */}
          <div className="flex-1">

            <p className="text-gray-400 leading-relaxed mb-6">
              Hi! I'm {userData.name}, a final year {userData.degree} student at{" "}
              {userData.university}, {userData.location}. I specialize in React
              and frontend development, building modern and responsive web
              applications. I enjoy creating clean UI designs, solving real-world
              problems, and continuously learning new technologies. Currently
              seeking an internship as a frontend developer.
            </p>

            {/* Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 hover:border-blue-500 transition"
                >
                  <span className="text-blue-400 font-medium text-sm">
                    {fact.label}:
                  </span>{" "}
                  <span className="text-gray-300 text-sm">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>

            {/* CV Button */}
            <a
               href="/Resume.pdf"
              download
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-500 hover:scale-105 transition"
            >
              Download CV
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
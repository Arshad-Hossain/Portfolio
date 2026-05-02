export default function Projects() {
  const projects = [
    "https://category-a8-orange.vercel.app/",
    "https://a7-keenkeeper.vercel.app/",
    "https://digitools-platform-arshad.netlify.app/",
  ];

  return (
    <section id="projects" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6 px-6">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p}
            target="_blank"
            className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition"
          >
            Project {i + 1}
          </a>
        ))}
      </div>
    </section>
  );
}

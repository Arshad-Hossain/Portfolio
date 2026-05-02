export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "MongoDB"];

  return (
    <section id="skills" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {skills.map((s, i) => (
          <div key={i} className="bg-gray-900 p-4 rounded-xl">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Building Production-Ready Web Apps
        </h1>

        <p className="text-zinc-400 text-lg mb-8">
          Full-Stack Developer specializing in .NET, React & scalable systems.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/projects"
            className="bg-white text-black px-6 py-3 rounded-md font-medium"
          >
            View Projects
          </a>

          <a
            href="/contact"
            className="border border-zinc-700 px-6 py-3 rounded-md"
          >
            Contact
          </a>
        </div>
      </div>
    </main>
  );
}

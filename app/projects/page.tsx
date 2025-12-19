export const metadata = {
  title: "Projects",
  description: "Real-world client projects built using .NET and React",
};

export default function ProjectsPage() {
  return (
    <main className="px-6 py-16 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-10">Projects</h1>

      <div className="grid gap-6">
        <div className="border border-zinc-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold">
            Corporate Community Investment Platform
          </h2>
          <p className="text-zinc-400 mt-2">
            ASP.NET MVC based CSR platform for employee volunteering.
          </p>
        </div>
      </div>
    </main>
  );
}

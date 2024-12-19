export default function Projects() {
    const projects = [
      { title: "E-commerce SEO Optimization", description: "Almost doubled the organic traffic  for an online retail client." },
      { title: "Local Business SEO Campaign", description: "Boosted local search visibility for a Local Bakery." },
      { title: "Content Marketing Strategy", description: "Developed and implemented a content strategy that increased engagement more than 60%." }
    ]
  
    return (
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  
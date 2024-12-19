import { Search, BarChart, FileSpreadsheet, PenTool, Code, Globe, Laptop, Fullscreen, Bot } from 'lucide-react'

export default function Skills() {
  const skills = [
    { name: "SEO (Off-page Specialist)", icon: Search },
    { name: "Digital Marketing", icon: BarChart },
    { name: "Microsoft Office", icon: FileSpreadsheet },
    { name: "Data Entry Analysis", icon: PenTool },
    { name: "Social Media Marketing", icon: Globe },
    { name: "Python & TypeScript (Junior Developer)", icon: Code },
    { name: "Web Development (HTML, CSS & JavaScript)", icon: Laptop },
    { name: "AI Automation and machine learning.", icon: Bot },
    { name: "Full Stack Development", icon: Fullscreen }
  ]

  return (
    <section id="skills" className="bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
              <skill.icon size={24} className="text-gray-600" />
              <p className="text-lg font-semibold text-gray-800">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


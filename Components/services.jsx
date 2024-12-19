import { Video, Code, Download, Bot, Settings } from 'lucide-react'

const services = [
  { icon: Video, title: 'Video Lecture' },
  { icon: Code, title: 'Code(for learners)' },
  { icon: Download, title: 'Output' },
  { icon: Bot, title: 'AI services' },
  { icon: Settings, title: 'Tune the program' }
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          SERVICES
        </h2>
        
        <div className="grid grid-cols-3 gap-x-8 gap-y-16 max-w-4xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div 
                key={service.title}
                className={`flex flex-col items-center justify-center ${
                  index > 2 ? 'ml-[100%]' : ''
                }`}
              >
                <div className="mb-4 relative">
                  <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <Icon size={32} className="text-[#E69138]" />
                  </div>
                  <div className="absolute -inset-1 rounded-full border-2 border-[#E69138] opacity-20"></div>
                </div>
                <h3 className="text-lg font-medium text-gray-900 text-center">
                  {service.title}
                </h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


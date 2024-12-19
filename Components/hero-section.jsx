import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="relative min-h-[calc(100vh-76px)] flex items-center">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(11, 18, 33, 0.9), rgba(11, 18, 33, 0.95)), url('/placeholder.svg')`
        }}
      />
      
      {/* Content */}
      <div className="relative container mx-auto px-6 py-12">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Empower your data with{" "}
            <span className="block">CODYGROW</span>
          </h1>
          
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Welcome to CODYGROW, the revolutionary web platform designed to enhance 
            the efficiency of data scientists providing pre-built programs for every 
            stage of the process, from data cleaning and feature engineering to model 
            training and evaluation.
          </p>
          
          <div className="flex gap-4">
            <Button
              variant="default"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 text-lg"
            >
              Learn
            </Button>
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600/10 px-8 py-2 text-lg"
            >
              Work
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}


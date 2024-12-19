export function AboutSection() {
    return (
      <section className="relative py-24 bg-white">
        <div className="container mx-auto px-6">
          {/* Background Logo */}
          <div 
            className="absolute inset-0 flex items-center justify-center opacity-10"
            style={{
              backgroundImage: `url('/placeholder.svg')`,
              backgroundSize: '600px',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          {/* Content */}
          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              About CODYGROW
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              CODYGROW reduces the burden of repetitive tasks, enabling users 
              to upload data, select functionalities, and receive output with 
              minimal coding. This makes advanced data science accessible to 
              beginners.
            </p>
          </div>
        </div>
      </section>
    )
  }
  
  
import Image from 'next/image'
import Link from 'next/link'
import { Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Feedback Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg"
                alt="CODYGROW Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <span className="text-xl font-semibold">CODYGROW</span>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">We Value Your Feedback!</h3>
              <p className="text-sm text-gray-600">
                If you have any feedback, complaints, or suggestions, we'd love to hear from you!
              </p>
            </div>
            <div className="flex">
              <input
                type="email"
                placeholder="Type Email"
                className="flex-1 px-4 py-2 border border-r-0 border-gray-300 focus:outline-none focus:border-[#E69138]"
              />
              <button className="px-4 py-2 bg-[#E69138] text-white hover:bg-[#d17f2d] transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Service Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 snap-center">Service Links</h3>
            <div className="grid grid-cols-2 ">
              <div className="space-y-4">
                <Link href="/about" className="flex items-center text-gray-600 hover:text-[#E69138]">
                  <span className="mr-2">›</span> about us
                </Link>
                <Link href="/services" className="flex items-center text-gray-600 hover:text-[#E69138]">
                  <span className="mr-2">›</span> services
                </Link>
                <Link href="/learn" className="flex items-center text-gray-600 hover:text-[#E69138]">
                  <span className="mr-2">›</span> learn
                </Link>
                <Link href="/work" className="flex items-center text-gray-600 hover:text-[#E69138]">
                  <span className="mr-2">›</span> work
                </Link>
              </div>
              <div className="space-y-4">
                <Link href="/social" className="flex items-center text-gray-600 hover:text-[#E69138]">
                  <span className="mr-2">›</span> social media
                </Link>
                <Link href="/care" className="flex items-center text-gray-600 hover:text-[#E69138]">
                  <span className="mr-2">›</span> customer care
                </Link>
                <Link href="/privacy" className="flex items-center text-gray-600 hover:text-[#E69138]">
                  <span className="mr-2">›</span> privacy
                </Link>
              </div>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Information</h3>
            <div className="space-y-4">
              <p className="text-gray-600">
                <span className="font-medium">Tel:</span>
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Email:</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


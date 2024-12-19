import Image from 'next/image'
import Link from 'next/link'
import { UserCircle } from 'lucide-react'

export function NavBar() {
  return (
    <nav className="w-full py-4 px-6 flex items-center justify-between bg-[#111d3b]">
      <div className="flex items-center gap-2">
        <Image
          src="/placeholder.svg"
          alt="CODYGROW Logo"
          width={40}
          height={40}
          className="w-10 h-10"
        />
        <span className="text-white text-xl font-semibold">CODYGROW</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-white hover:text-blue-400 transition-colors">
          Home
        </Link>
        <Link href="/about" className="text-white hover:text-blue-400 transition-colors">
          About
        </Link>
        <Link href="/service" className="text-white hover:text-blue-400 transition-colors">
          Service
        </Link>
        <Link href="/contact" className="text-white hover:text-blue-400 transition-colors">
          Contact
        </Link>
        <Link href="/premium" className="text-white hover:text-blue-400 transition-colors">
          premium
        </Link>
        <button className="w-10 h-10 flex items-center justify-center">
            <UserCircle className="w-8 h-8 text-white" />
        </button>
      </div>

      
    </nav>
  )
}


import '@/app/globals.css'

export const metadata = {
  title: 'CODYGROW - Empower Your Data',
  description: 'Revolutionary web platform designed to enhance the efficiency of data scientists',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


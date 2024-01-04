import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ToolHub',
  description: 'Just what you\'re looking for.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <NavBar /> */}
        {children}
        <footer className='sticky bottom-0 bg-slate-800 text-slate-100 p-4 text-center'>Created by <a className='hover:text-yellow-400 transition' href="https://github.com/GCMoony">GCMoony</a></footer>
      </body>
    </html>
  )
}

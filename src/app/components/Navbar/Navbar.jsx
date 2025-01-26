export default function Navbar() {
  return (
    <nav className='px-5 py-5'>
      <h1 className='text-4xl font-semibold'>
        <a href='/'>
          <span className='inline-block p-1 bg-black text-white'>Tool</span>
          <span className=' p-1 rounded bg-yellow-400 text-black inline-block'>
            Hub
          </span>
        </a>
      </h1>
      <h2 className='text-sm mb-8'>Just what you&apos;re looking for</h2>
    </nav>
  )
}

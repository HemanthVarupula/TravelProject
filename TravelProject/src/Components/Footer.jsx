import React from 'react'

const Footer = () => {
  return (
    <div className='h-auto w-screen border-2 mt-5 m-2'>
    <footer className="bg-gray-900 text-gray-300 py-4 mt-10">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-lg font-semibold text-white">TravelWithHemanth</h2>
        <p className="text-sm mt-1">Explore. Experience. Enjoy.</p>

        <p className="text-xs text-gray-500 mt-3">
          © {new Date().getFullYear()} TravelWithHemanth. All Rights Reserved.
        </p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
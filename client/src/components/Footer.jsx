import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
       <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <span className="text-sm text-gray-300 sm:text-center">© 2023 <a href="https://yourwebsite.com" className="hover:underline" target="_blank" rel="noopener noreferrer">Your Website</a>. All Rights Reserved.</span>
          <p className="text-right text-sm text-gray-300">Developed By <a href="https://vinayprakash.com" className="underline text-blue-300 hover:text-blue-400" target="_blank" rel="noopener noreferrer">Vinay Prakash</a></p>
       </div>
    </footer>
  );
}

export default Footer

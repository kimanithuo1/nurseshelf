const Footer = () => {
    return (
      <footer className="bg-white border-t border-light py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-500">© {new Date().getFullYear()} NurseShelf. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-500 hover:text-teal">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-teal">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-teal">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  
  
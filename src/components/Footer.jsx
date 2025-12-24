
function Footer({ totalTasks }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">Task Manager Pro</h3>
                <p className="text-gray-400 text-sm">Professional task management solution</p>
              </div>
            </div>
          </div>

          <div className="text-center md:text-right">
            <div className="text-gray-300 mb-2">
              Currently managing <span className="font-bold text-white">{totalTasks}</span> tasks
            </div>
            <div className="text-gray-400 text-sm">
              © {currentYear} Task Manager. All rights reserved.
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-700 text-center text-gray-500 text-sm">
          <p>Built with BeyondChats</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
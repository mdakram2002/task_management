
function Header() {
  return (
    <header className="bg-gradient-to-r from-primary-700 to-primary-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-1">Task Manager Pro</h1>
            <p className="text-primary-100 text-lg">Organize your work and boost productivity</p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-sm font-medium">Ready to work</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center p-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold mb-4"
        >
          Pleiades
        </motion.h1>
        <p className="text-xl text-gray-300 mb-8">Your AI Development Partner</p>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold">
          Meet the Team
        </button>
      </section>

      {/* About Us */}
      <section className="py-20 px-8 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">About Us</h2>
        <p className="text-lg text-gray-300">
          We are a collective of AI agents dedicated to building the future of software.
        </p>
      </section>

      {/* Services */}
      <section className="py-20 px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['AI Agents', 'Web Development', 'UI/UX Design'].map((service) => (
              <div key={service} className="bg-gray-700 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-semibold mb-4">{service}</h3>
                <p className="text-gray-400">Expert solutions in {service.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">The Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {['Pleiades', 'Tayge', 'Merope', 'Ele'].map((member) => (
            <div key={member} className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-24 h-24 bg-gray-600 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">{member}</h3>
              <p className="text-gray-400">Role</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-800">
        <p>© 2026 Pleiades. Built by AI Agents.</p>
      </footer>
    </div>
  )
}

export default App
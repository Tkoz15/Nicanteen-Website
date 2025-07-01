'use client'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <a href="/" className="text-2xl font-bold" style={{ color: '#16a34a' }}>
            Nicanteen
          </a>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-green-600">Features</a>
            <a href="#product" className="text-sm font-medium hover:text-green-600">Product</a>
            <a href="#about" className="text-sm font-medium hover:text-green-600">About</a>
            <a href="#contact" className="text-sm font-medium hover:text-green-600">Contact</a>
          </nav>
          
          <button 
            className="px-4 py-2 text-white rounded-md"
            style={{ background: 'linear-gradient(to right, #16a34a, #4ade80)' }}
            onClick={() => window.open(process.env.NEXT_PUBLIC_SHOPIFY_URL || '#', '_blank')}
          >
            Shop Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
            <span className="mr-2">📦</span> Premium Pouch Carrier
          </div>
          
          <h1 className="mb-6 text-4xl md:text-5xl font-bold">
            The Perfect Carrier for Your
            <span style={{ color: '#16a34a' }}> Nicotine Pouches</span>
          </h1>
          
          <p className="mb-10 text-lg text-gray-600">
            Discreet, attractive, and designed to fit perfectly in your pocket. 
            Keep your pouches fresh and accessible with Nicanteen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-6 py-3 text-white rounded-md font-medium"
              style={{ background: 'linear-gradient(to right, #16a34a, #4ade80)' }}
              onClick={() => window.open(process.env.NEXT_PUBLIC_SHOPIFY_URL || '#', '_blank')}
            >
              Shop Now →
            </button>
            <a 
              href="#features" 
              className="px-6 py-3 border border-gray-300 rounded-md font-medium hover:bg-gray-50"
            >
              Learn More
            </a>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span style={{ color: '#16a34a' }}>✓</span> Premium Quality
            </div>
            <div className="flex items-center gap-2">
              <span style={{ color: '#16a34a' }}>✓</span> Pocket-Friendly Design
            </div>
            <div className="flex items-center gap-2">
              <span style={{ color: '#16a34a' }}>✓</span> Multiple Colors
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose <span style={{ color: '#16a34a' }}>Nicanteen</span>?
            </h2>
            <p className="text-lg text-gray-600">
              Designed with convenience and style in mind for modern pouch users.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '👌', title: 'Pocket-Perfect Design', desc: 'Slim profile that fits seamlessly in any pocket without bulging.' },
              { icon: '🛡️', title: 'Durable Protection', desc: 'High-quality plastic construction keeps your pouches safe and fresh.' },
              { icon: '🎨', title: 'Multiple Colors', desc: 'Choose from various colors to match your style and preference.' },
              { icon: '✨', title: 'Discreet & Stylish', desc: 'Sleek design that looks great while keeping your pouches private.' }
            ].map((feature, i) => (
              <div key={i} className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="w-64 h-40 bg-black rounded-lg shadow-2xl transform rotate-3"></div>
                <p className="mt-8 text-sm text-gray-600">Product image placeholder</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Nicanteen Pouch Carrier</h2>
              <p className="text-lg text-gray-600">
                The ultimate accessory for nicotine pouch users. Our premium carrier keeps your pouches organized, 
                fresh, and easily accessible wherever you go.
              </p>
              
              <div>
                <h3 className="font-medium mb-3">Choose Your Color</h3>
                <div className="flex gap-3">
                  <button className="w-12 h-12 bg-black rounded-full border-2 border-green-500"></button>
                  <button className="w-12 h-12 bg-green-500 rounded-full"></button>
                  <button className="w-12 h-12 bg-gray-500 rounded-full"></button>
                  <button className="w-12 h-12 bg-white rounded-full border-2 border-gray-300"></button>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span style={{ color: '#16a34a' }}>✓</span>
                  <span className="text-sm">Holds up to 20 pouches securely</span>
                </div>
                <div className="flex items-start gap-2">
                  <span style={{ color: '#16a34a' }}>✓</span>
                  <span className="text-sm">Snap-lock closure keeps contents fresh</span>
                </div>
                <div className="flex items-start gap-2">
                  <span style={{ color: '#16a34a' }}>✓</span>
                  <span className="text-sm">Slim 10mm profile fits any pocket</span>
                </div>
                <div className="flex items-start gap-2">
                  <span style={{ color: '#16a34a' }}>✓</span>
                  <span className="text-sm">Made from durable, BPA-free plastic</span>
                </div>
              </div>
              
              <button 
                className="px-6 py-3 text-white rounded-md font-medium flex items-center gap-2"
                style={{ background: 'linear-gradient(to right, #16a34a, #4ade80)' }}
                onClick={() => window.open(process.env.NEXT_PUBLIC_SHOPIFY_URL || '#', '_blank')}
              >
                🛒 Buy Now on Shopify
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">About Nicanteen</h2>
          <p className="text-lg text-gray-600 mb-12">
            Born from a simple idea: pouch users deserve better than plastic bags and tins.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-3xl mb-4">💡</div>
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">Designed from the ground up to solve real problems for pouch users.</p>
            </div>
            <div>
              <div className="text-3xl mb-4">👥</div>
              <h3 className="font-semibold mb-2">Community</h3>
              <p className="text-gray-600">Built by pouch users, for pouch users. We understand your needs.</p>
            </div>
            <div>
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-semibold mb-2">Purpose</h3>
              <p className="text-gray-600">Making your daily carry more convenient, discreet, and stylish.</p>
            </div>
          </div>
          
          <p className="text-gray-600">
            Nicanteen isn't just a product – it's a solution. We noticed that nicotine pouch users were stuck 
            with inconvenient storage options that didn't fit well in pockets or looked unprofessional. 
            That's why we created Nicanteen: a sleek, pocket-friendly carrier that keeps your pouches fresh 
            and accessible while maintaining a discreet profile.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">
              Have questions about Nicanteen? We'd love to hear from you.
            </p>
          </div>
          
          <form className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                rows={4}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Tell us what's on your mind..."
              />
            </div>
            
            <button 
              type="submit"
              className="w-full px-6 py-3 text-white rounded-md font-medium"
              style={{ background: 'linear-gradient(to right, #16a34a, #4ade80)' }}
            >
              Send Message
            </button>
          </form>
          
          <div className="mt-8 text-center text-gray-600">
            <p>📧 support@nicanteen.com</p>
            <p className="mt-2">💬 We typically respond within 24 hours</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#4ade80' }}>Nicanteen</h3>
              <p className="text-gray-400 text-sm">
                The ultimate carrier for your nicotine pouches. Discreet, attractive, and pocket-friendly.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#features" className="hover:text-green-400">Features</a></li>
                <li><a href="#product" className="hover:text-green-400">Product</a></li>
                <li><a href="#about" className="hover:text-green-400">About</a></li>
                <li><a href="#contact" className="hover:text-green-400">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-green-400">Shipping Info</a></li>
                <li><a href="#" className="hover:text-green-400">Returns</a></li>
                <li><a href="#" className="hover:text-green-400">FAQ</a></li>
                <li><a href="#" className="hover:text-green-400">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Get in Touch</h4>
              <p className="text-sm text-gray-400 mb-4">
                Have questions? We'd love to hear from you.
              </p>
              <a href="#contact" className="text-green-400 hover:underline text-sm">
                Contact Us →
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Nicanteen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
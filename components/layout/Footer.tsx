import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-brand-green">Nicanteen</h3>
            <p className="text-gray-400 text-sm">
              The ultimate carrier for your nicotine pouches. Discreet, attractive, and pocket-friendly.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#features" className="hover:text-brand-green transition-colors">Features</Link></li>
              <li><Link href="#product" className="hover:text-brand-green transition-colors">Product</Link></li>
              <li><Link href="#about" className="hover:text-brand-green transition-colors">About</Link></li>
              <li><Link href="#contact" className="hover:text-brand-green transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/shipping" className="hover:text-brand-green transition-colors">Shipping Info</Link></li>
              <li><Link href="/returns" className="hover:text-brand-green transition-colors">Returns</Link></li>
              <li><Link href="/faq" className="hover:text-brand-green transition-colors">FAQ</Link></li>
              <li><Link href="/privacy" className="hover:text-brand-green transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get in Touch</h4>
            <p className="text-sm text-gray-400">
              Have questions? We'd love to hear from you.
            </p>
            <Link href="#contact" className="text-brand-green hover:underline text-sm">
              Contact Us →
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Nicanteen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">VK Academy</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Empowering students with knowledge, character, and the competitive edge needed for a bright future. A legacy of excellence.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider text-sm">Explore</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link href="/academic-divisions" className="hover:text-brand-blue transition-colors">Academic Divisions</Link></li>
              <li><Link href="/batches" className="hover:text-brand-blue transition-colors">Upcoming Batches</Link></li>
              <li><Link href="/wall-of-fame" className="hover:text-brand-blue transition-colors">Wall of Fame</Link></li>
              <li><Link href="/faculty" className="hover:text-brand-blue transition-colors">Our Faculty</Link></li>
              <li><Link href="/student-life" className="hover:text-brand-blue transition-colors">Student Life</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider text-sm">Support</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link href="/contact" className="hover:text-brand-blue transition-colors">Admissions Help</Link></li>
              <li><Link href="#" className="hover:text-brand-blue transition-colors">Frequently Asked Questions</Link></li>
              <li><Link href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-brand-blue transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
             <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider text-sm">Reach Us</h3>
             <div className="space-y-3 text-sm text-slate-300">
                <p>
                  <strong>Campus:</strong><br/>
                  123 Academic Plaza, Education Hub,<br/>
                  New Delhi, India 110001
                </p>
                <p>
                  <strong>Admissions:</strong><br/>
                  +91 98765 43210
                </p>
                <p>
                  <strong>Email:</strong><br/>
                  admissions@vkacademy.edu
                </p>
             </div>
          </div>

        </div>
        
        {/* Bottom Copyright Banner */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} VK Academy. Excellence in Education.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Facebook</Link>
            <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-white transition-colors">YouTube</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
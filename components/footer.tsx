import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20" />
      </div>

      <div className="relative z-10">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-lg">PF</span>
                </div>
                <div>
                  <div className="font-playfair text-2xl font-bold">Premium Flooring</div>
                  <div className="text-slate-400 text-sm">Birmingham's Finest</div>
                </div>
              </div>

              <p className="text-slate-300 mb-8 leading-relaxed max-w-md">
                Transforming spaces with exceptional craftsmanship and premium materials. Birmingham's premier luxury
                flooring specialists since 2008.
              </p>

              <div className="flex space-x-4">
                <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full">
                  Get Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Services</h3>
              <ul className="space-y-3">
                {[
                  "Herringbone Flooring",
                  "Luxury Carpeting",
                  "Luxury Vinyl",
                  "Premium Laminate",
                  "Floor Restoration",
                  "Emergency Repairs",
                ].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div className="text-slate-400 text-sm">
                    <div>123 High Street</div>
                    <div>Birmingham B1 2AB</div>
                    <div>West Midlands</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <a href="tel:01212345678" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                    0121 234 5678
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <a
                    href="mailto:info@premiumflooring.co.uk"
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    info@premiumflooring.co.uk
                  </a>
                </div>
              </div>

              <div className="mt-6 p-4 bg-slate-800 rounded-xl">
                <div className="text-emerald-400 font-semibold text-sm mb-1">Emergency Service</div>
                <div className="text-slate-400 text-xs mb-2">24/7 Available</div>
                <a
                  href="tel:07123456789"
                  className="text-white font-semibold text-sm hover:text-emerald-400 transition-colors"
                >
                  07123 456 789
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-slate-400 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} Premium Flooring Birmingham. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#B84500] text-white overflow-hidden rounded-t-[30px] sm:rounded-t-[40px] bg-[url('/images/footer_img.png'),url('/images/footer_img2.png')] bg-[position:top_center,bottom_center] bg-no-repeat bg-contain">
      {/* Top Footer Main Area */}
      <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-8 lg:px-12 xl:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
        {/* Column 1: Brand Info & Socials */}
        <div className="lg:col-span-4 flex flex-col space-y-5">
          <div className="inline-block">
            <div className="bg-white text-[#FF6B00] px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-parkinsans font-bold text-xs sm:text-sm tracking-wide inline-block shadow-sm">
              LOGO
            </div>
          </div>

          <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-sm">
            SMM is Bangladesh&apos;s most trusted SMM panel. We offer fast, affordable social media growth services for every platform, with full support for local payments like bKash and Nagad.
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-3 pt-1">
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center p-1.5 transition-colors">
              <Image src="/images/fb.png" alt="FB" width={18} height={18} className="w-full h-full object-contain invert" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center p-1.5 transition-colors">
              <Image src="/images/instagram.png" alt="Instagram" width={18} height={18} className="w-full h-full object-contain invert" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center p-1.5 transition-colors">
              <Image src="/images/youtube.png" alt="YouTube" width={18} height={18} className="w-full h-full object-contain invert" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center p-1.5 transition-colors">
              <Image src="/images/linkedin.png" alt="LinkedIn" width={18} height={18} className="w-full h-full object-contain invert" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center p-1.5 transition-colors">
              <Image src="/images/telegram.png" alt="Telegram" width={18} height={18} className="w-full h-full object-contain invert" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="lg:col-span-2 flex flex-col space-y-3">
          <h3 className="font-parkinsans font-bold text-sm sm:text-lg text-white">
            Quick Links
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-white/80">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
          </ul>
        </div>

        {/* Column 3: Services Pages */}
        <div className="lg:col-span-3 flex flex-col space-y-3">
          <h3 className="font-parkinsans font-bold text-sm sm:text-lg text-white">
            Services Pages
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-white/80">
            <li><a href="#" className="hover:text-white transition-colors">Facebook SMM Panel</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Instagram SMM Panel</a></li>
            <li><a href="#" className="hover:text-white transition-colors">YouTube SMM Panel</a></li>
            <li><a href="#" className="hover:text-white transition-colors">TikTok SMM Panel</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Telegram SMM Panel</a></li>
            <li><a href="#" className="hover:text-white transition-colors">X-Twitter SMM Panel</a></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="lg:col-span-3 flex flex-col space-y-3">
          <h3 className="font-parkinsans font-bold text-sm sm:text-lg text-white">
            Contact Info
          </h3>
          <div className="space-y-2.5 text-xs sm:text-sm text-white/80">
            <div className="flex items-center space-x-3 bg-white/10 p-2.5 sm:p-3 rounded-xl">
              <span className="w-5 h-5 flex items-center justify-center text-white font-bold">✉</span>
              <span className="truncate">info@smmsun.com</span>
            </div>

            <div className="flex items-center space-x-3 bg-white/10 p-2.5 sm:p-3 rounded-xl">
              <span className="w-5 h-5 flex items-center justify-center text-white font-bold">📞</span>
              <span>+1 833 252 278</span>
            </div>

            <div className="flex items-start space-x-3 bg-white/10 p-2.5 sm:p-3 rounded-xl">
              <span className="w-5 h-5 flex items-center justify-center text-white font-bold mt-0.5">📍</span>
              <div>
                <p className="font-bold text-white">Serving all of Bangladesh</p>
                <p className="text-[11px] sm:text-xs text-white/70">Support: 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto mb-4 px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="w-full bg-[#752400]/80 backdrop-blur-md py-3.5 px-4 text-center text-[11px] sm:text-xs text-white/80 rounded-xl border border-white/10">
          © 2026 SMM Limited. All Rights Reserved. | Operated under the Bangladesh ICT framework.
        </div>
      </div>
    </footer>
  );
}
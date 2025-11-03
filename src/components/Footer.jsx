
// Footer.jsx
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaTiktok, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmex, FaCcDiscover } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white">
      {/* Top link row */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 py-6">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-red-600 font-bold">B</div>
            <div className="text-lg font-extrabold leading-none">
              Testy <span className="text-red-500">Food</span>
            </div>
          </div>

          <nav className="w-full overflow-x-auto md:w-auto">
            <ul className="flex min-w-max items-center gap-8 text-sm text-white/90">
              <li><a href="#" className="hover:text-white">About </a></li>
              <li><a href="#" className="hover:text-white">Order Food</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Offers</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Gift Voucher</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main columns */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Information */}
          <div>
            <h3 className="text-xl font-extrabold">INFORMATION</h3>
            <div className="mt-5 space-y-3 text-white/80">
              <p> Your A23 address for me in india</p>
              <a href="mailto:themesflat@gmail.com" className="hover:text-white">Your@gmail.com</a>
              <a href="#" className="block hover:text-white">Terms and Conditions</a>
              <a href="#" className="block hover:text-white">Warranty and Services</a>
            </div>
          </div>

          {/* Contact & Order */}
          <div className="border-y border-white/10 py-6 md:border-none md:py-0">
            <h3 className="text-xl font-extrabold">CONTACT & ORDER</h3>
            <p className="mt-4 text-white/70">Call Us To Order or Order Online</p>
            <p className="mt-3 text-3xl font-extrabold text-red-500">+91 4567893210</p>
            <a
              href="#"
              className="mt-6 inline-flex rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-amber-400"
            >
              ORDER ONLINE NOW
            </a>
          </div>

          {/* Hour time open */}
          <div>
            <h3 className="text-xl font-extrabold">HOUR TIME OPEN</h3>
            <ul className="mt-5 space-y-3 text-white/80">
              <li>Monday – Thursday: <span className="text-white">8.00am – 21.00pm</span></li>
              <li>Friday – Saturday: <span className="text-white">9.00am – 22.00pm</span></li>
              <li>Sunday: <span className="text-white">8.00 – 23.00pm</span></li>
              <li>Holiday: <span className="text-amber-400">Closed</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social strip */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-center  justify-center gap-4 rounded-full bg-[#1a1a1a] px-6 py-4">
          <IconBtn><FaFacebookF /></IconBtn>
          <IconBtn><FaTwitter /></IconBtn>
          <IconBtn><FaInstagram /></IconBtn>
          <IconBtn><FaPinterestP /></IconBtn>
          <IconBtn><FaTiktok /></IconBtn>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-8 border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
          <p className="text-sm text-white/70">
            © Copyright Themesflat 2023. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3 text-white/80">
            <FaCcVisa className="h-8 w-8" />
            <FaCcMastercard className="h-8 w-8" />
            <FaCcPaypal className="h-8 w-8" />
            <FaCcAmex className="h-8 w-8" />
            <FaCcDiscover className="h-8 w-8" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function IconBtn({ children }) {
  return (
    <button
      className="
        grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white
        transition hover:bg-white/10
        focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
      "
      aria-label="social"
      type="button"
    >
      <span className="text-base">{children}</span>
    </button>
  );
}

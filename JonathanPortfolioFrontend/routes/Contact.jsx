import penguContact from '../assets/PenguContact.png'
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"

function Contact() {
  return (
    <div className="w-screen min-h-screen m-0 p-0 pt-16 flex items-center justify-center bg-gradient-to-br from-[#0B1D26] via-[#5E9CAC] to-[#C2E9FB]">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-5xl px-4 py-12">
        {/* Resume Button */}
        <div className="flex flex-col items-center">
          <img
            src={penguContact}
            alt="Penguin Contact"
            className="w-96 h-96 object-contain mb-6"
          />
          <a
            href="https://drive.google.com/file/d/1VGglYGN0TvhdUVls_YvqOn7Dz1VJYWi6/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-8 py-3 rounded-full bg-blue-400 text-gray-800 font-semibold shadow hover:bg-blue-300 transition"
          >
            View Resume
          </a>
        </div>
        {/* Contact Info */}
        <div className="bg-white/80 rounded-xl shadow-lg px-8 py-10 flex flex-col justify-center w-full max-w-xl">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Contacts</h2>
          <div className="flex flex-col gap-6">
            {/* Phone */}
            <div className="flex items-center justify-center gap-4">
              <FaPhoneAlt className="text-3xl text-blue-500" />
              <a
                href="tel:+19176356016"
                className="text-xl text-gray-900 hover:underline break-all w-full text-center transition-transform duration-200 hover:-translate-y-0.5"
              >
                +1 (917) 635-6016
              </a>
            </div>
            {/* Email */}
            <div className="flex items-center justify-center gap-4">
              <FaEnvelope className="text-3xl text-blue-500" />
              <a
                href="mailto:jonathant11001@gmail.com"
                className="text-xl text-gray-900 hover:underline break-all w-full text-center transition-transform duration-200 hover:-translate-y-0.5"
              >
                jonathant11001@gmail.com
              </a>
            </div>
            {/* GitHub */}
            <div className="flex items-center justify-center gap-4">
              <FaGithub className="text-3xl text-gray-800" />
              <a
                href="https://github.com/jonathant11001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-gray-900 hover:underline break-all w-full text-center transition-transform duration-200 hover:-translate-y-0.5"
              >
                github.com/jonathant11001
              </a>
            </div>
            {/* LinkedIn */}
            <div className="flex items-center justify-center gap-4">
              <FaLinkedin className="text-3xl text-[#2977c9]" />
              <a
                href="https://linkedin.com/in/jonathan-tam01/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-gray-900 hover:underline break-all w-full text-center transition-transform duration-200 hover:-translate-y-0.5"
              >
                linkedin.com/in/jonathan-tam01/
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
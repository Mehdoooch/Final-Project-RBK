import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function BasicFooter() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">
              na7na charika 3ari9a tatma7 lel raha mta3 les clinets w hetha reflected mel les offres mte3na :D
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300">محكمة الناحية بحي الزهور Q4WV+VM9, Rue 4501, Tunis
</p>
            <p className="text-gray-300">Phone: 54 879 652</p>
            <p className="text-gray-300">Email: jeKeri@wala.malek</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <Facebook size={24} />
                <span className="sr-only">Facebiik</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <Twitter size={24} />
                <span className="sr-only">Twatter</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <Instagram size={24} />
                <span className="sr-only">Instamaram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <Linkedin size={24} />
                <span className="sr-only">Linked7sin</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">© 2023 DarDarek. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
import { FaTelegram, FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaMoon } from 'react-icons/fa'; // Иконки для соцсетей

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-gray-400">
          {/* Column 1 */}
          <div>
            <h3 className="text-white font-bold mb-4">Use</h3>
            <ul>
              <li><a href="#" className="hover:text-white">Get a wallet</a></li>
              <li><a href="#" className="hover:text-white">Get or sell Toncoin</a></li>
              <li><a href="#" className="hover:text-white">Stake</a></li>
              <li><a href="#" className="hover:text-white">Apps & Services</a></li>
              <li><a href="#" className="hover:text-white">Bridge</a></li>
              <li><a href="#" className="hover:text-white">Domains</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-white font-bold mb-4">Learn</h3>
            <ul>
              <li><a href="#" className="hover:text-white">Ton concept</a></li>
              <li><a href="#" className="hover:text-white">Roadmap</a></li>
              <li><a href="#" className="hover:text-white">TonStat</a></li>
              <li><a href="#" className="hover:text-white">History of Mining</a></li>
              <li><a href="#" className="hover:text-white">Toncoin</a></li>
              <li><a href="#" className="hover:text-white">Validators</a></li>
              <li><a href="#" className="hover:text-white">Blockchain comparison</a></li>
              <li><a href="#" className="hover:text-white">White paper</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-white font-bold mb-4">Build</h3>
            <ul>
              <li><a href="#" className="hover:text-white">Getting started</a></li>
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">TON Overflow</a></li>
              <li><a href="#" className="hover:text-white">Dev community</a></li>
              <li><a href="#" className="hover:text-white">Grants</a></li>
              <li><a href="#" className="hover:text-white">Liquidity Program</a></li>
              <li><a href="#" className="hover:text-white">TON Footsteps</a></li>
              <li><a href="#" className="hover:text-white">Bug Bounty</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-white font-bold mb-4">Community</h3>
            <ul>
              <li><a href="#" className="hover:text-white">Communities</a></li>
              <li><a href="#" className="hover:text-white">TON Foundation</a></li>
              <li><a href="#" className="hover:text-white">Events</a></li>
              <li><a href="#" className="hover:text-white">Collaborate</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Press releases</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="text-white font-bold mb-4">Other</h3>
            <ul>
              <li><a href="#" className="hover:text-white">Support and Feedback</a></li>
              <li><a href="#" className="hover:text-white">Brand assets</a></li>
              <li><a href="#" className="hover:text-white">Contact us</a></li>
            </ul>
            {/* Theme toggle icon */}
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex justify-between items-center">
          {/* Left - TON logo */}
          <div className="text-white flex items-center">
            <img src="https://ton.org/download/ton_symbol.svg" alt="TON Logo" className="w-8 h-8 mr-2" />
            <span>TON</span>
          </div>

          {/* Right - Social icons */}
          <div className="flex space-x-4">
            <FaLinkedin className="text-gray-400 hover:text-white cursor-pointer" />
            <FaTelegram className="text-gray-400 hover:text-white cursor-pointer" />
            <FaGithub className="text-gray-400 hover:text-white cursor-pointer" />
            <FaTwitter className="text-gray-400 hover:text-white cursor-pointer" />
            <FaEnvelope className="text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}

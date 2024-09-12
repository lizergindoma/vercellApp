import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-gray-200">
      {/* Navbar */}
      <Navbar />
      
      {/* Контент */}
      <main className="pt-16"> {/* Отступ для навбара */}
        {children}
      </main>

      <Footer />
    </div>
  );
}

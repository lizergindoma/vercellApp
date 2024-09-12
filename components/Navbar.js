import { FaSearch, FaTimes } from 'react-icons/fa'; // Иконки для поиска и закрытия
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen); // Открываем/закрываем поиск
  };

  // Добавляем обработчик прокрутки
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Если прокрутка больше 50px, добавляем полупрозрачность
      } else {
        setIsScrolled(false); // Если меньше 50px, убираем полупрозрачность
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`p-4 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1A1A1A]/70 backdrop-blur-md' : 'bg-[#1A1A1A]'
      }`}
    >
      {/* Контейнер для центрирования контента с отступами */}
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Логотип */}
        <div className="text-white text-2xl font-bold flex items-center">
          <img src="/ton_symbol.svg" alt="TON Logo" className="w-8 h-8 mr-2" />
          <span>Blog</span>
        </div>

        {/* Поисковая строка для десктопов */}
        <div className="relative hidden md:block"> {/* Скрываем на мобильных экранах */}
          <input
            type="text"
            placeholder="Search blog..."
            className="bg-gray-800 text-white rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring focus:ring-blue-500 w-72"
          />
          <svg
            className="absolute left-3 top-2 w-6 h-6 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.415 1.415l-4.387-4.387zM8 14A6 6 0 108 2a6 6 0 000 12z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Иконка лупы для мобильных устройств */}
        <div className="md:hidden">
          <button onClick={toggleSearch} className="text-white text-2xl focus:outline-none">
            {isSearchOpen ? <FaTimes /> : <FaSearch />}
          </button>
        </div>
      </div>

      {/* Модальное окно для поиска на мобильных устройствах */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-[#1A1A1A] z-40 flex items-start p-4">
          <div className="w-full">
            <div className="flex justify-between items-center mb-4">
              <div className="text-white text-2xl font-bold flex items-center">
                <img src="https://ton.org/download/ton_symbol.svg" alt="TON Logo" className="w-8 h-8 mr-2" />
                <span>Blog</span>
              </div>
              <button onClick={toggleSearch} className="text-white text-2xl focus:outline-none">
                <FaTimes /> {/* Кнопка для закрытия */}
              </button>
            </div>
            <input
              type="text"
              placeholder="Search blog..."
              className="bg-gray-800 text-white rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring focus:ring-blue-500 w-full"
            />
          </div>
        </div>
      )}
    </nav>
  );
}



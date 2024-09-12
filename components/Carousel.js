import Link from 'next/link';
import { FaFileAlt, FaUsers, FaGraduationCap, FaCode, FaHandshake, FaAward } from 'react-icons/fa'; // Иконки

export default function Carousel() {
  const tabs = [
    { id: 1, name: 'News', icon: <FaFileAlt />, path: '/' },
    { id: 2, name: 'Community', icon: <FaUsers />, path: '/category/community' },
    { id: 3, name: 'Learn', icon: <FaGraduationCap />, path: '/category/learn' },
    { id: 4, name: 'Development', icon: <FaCode />, path: '/category/development' },
    { id: 5, name: 'Partners', icon: <FaHandshake />, path: '/category/partners' },
    { id: 6, name: 'Grants', icon: <FaAward />, path: '/category/grants' },
  ];

  return (
    <div className="container mx-auto px-6 mt-4 overflow-x-auto scrollbar-hide"> {/* Добавили класс scrollbar-hide */}
      <div className="flex space-x-4">
        {tabs.map((tab) => (
          <Link key={tab.id} href={tab.path}>
            <div className="flex items-center px-4 py-2 bg-[#1A1A1A] text-white rounded-full hover:bg-gray-700 transition-colors duration-300 cursor-pointer border border-gray-600">
              <span className="mr-2 text-lg">{tab.icon}</span> {/* Иконка */}
              <span className="text-base">{tab.name}</span> {/* Название вкладки */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

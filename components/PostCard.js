import { FaRegClock, FaRegCalendarAlt } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';
import Link from 'next/link';

export default function PostCard({ post, category }) {
  return (
    <Link href={`/posts/${post.slug}`}>
    <div className="rounded-lg overflow-hidden shadow-lg bg-[#1A1A1A] h-auto hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {/* Изображение карточки */}
      <div className="overflow-hidden h-48">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>

      {/* Содержимое карточки */}
      <div className="p-4">
        {/* Метаданные карточки */}
        <div className="flex items-center text-gray-400 text-xs mb-2">
          <FaRegCalendarAlt className="mr-1" />
          <span>{post.date}</span>
          <BsFillPeopleFill className="mx-2" />
          <span>{post.category}</span>
          <FaRegClock className="mx-2" />
          <span>{post.time}</span>
        </div>

        {/* Заголовок и описание */}
        <h3 className="text-lg font-bold text-white mb-2">{post.title}</h3>
        <p className="text-sm text-gray-300 opacity-90 line-clamp-3">{post.description}</p>
      </div>

      {/* Подвал карточки */}
      <div className="p-4 flex items-center text-sm text-gray-400"> {/* Убираем границу */}
        <img
          src="/ton_symbol.svg"
          alt="TON Foundation"
          className="w-5 h-5 mr-2"
        />
        <span>TON Foundation</span>
      </div>
    </div>
    </Link>
  );
}

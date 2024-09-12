import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Layout from '../../components/Layout';
import { FaRegClock, FaRegCalendarAlt } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FaTelegram, FaTwitter, FaFacebook, FaLinkedin, FaLink } from 'react-icons/fa';

export default function PostPage({ post }) {
  return (
    <Layout>
      <div className="container mx-auto p-4 sm:p-8">
        {/* Дата, категория и время чтения */}
        <div className="flex items-center text-gray-400 text-sm mb-4">
          <FaRegCalendarAlt className="mr-1" />
          <span>{post.date}</span>
          <BsFillPeopleFill className="mx-2" />
          <span>{post.category}</span>
          <FaRegClock className="mx-2" />
          <span>{post.time}</span>
        </div>

        {/* Заголовок статьи */}
        <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
          {post.title}
        </h1>

        {/* Автор */}
        <div className="flex items-center mb-4">
          <img src="https://ton.org/download/ton_symbol.svg" alt="TON Foundation" className="w-6 h-6 mr-2" />
          <span className="text-gray-400">TON Society</span>
        </div>

        {/* Социальные иконки */}
        <div className="flex space-x-4 mb-8 text-gray-400">
          <a href="#" className="hover:text-white">
            <FaTelegram />
          </a>
          <a href="#" className="hover:text-white">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-white">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-white">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-white">
            <FaLink />
          </a>
        </div>

        

        {/* Текст статьи */}
        <div className="prose prose-lg prose-invert text-gray-300 max-w-4xl mx-auto">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        

      

      </div>
    </Layout>
  );
}

// Получение данных статей
export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'content', `${params.slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(fileContent); // Парсинг frontmatter и контента

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      post: {
        ...data,  // Включаем метаданные статьи
        content: contentHtml // Преобразованный HTML контент
      }
    }
  };
}

// Генерация путей
export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'content');
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '');

    return {
      params: { slug }
    };
  });

  return {
    paths,
    fallback: false
  };
}

import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import NewsHeader from '../components/NewsHeader';
import PostCard from '../components/PostCard';

const posts = [
  {
    title: 'TADA and TON Foundation Bring Web3 Ride-Hailing to Telegram',
    description: 'TADA, one of Southeast Asia\'s top ride-hailing platforms, has formed a strategic partnership with TON Foundation to bring Web3 technology to the real world.',
    image: '/Blog_TON x TADA.png',  // Пример изображения
    date: '12 Sep',
    time: '3 min read',
    category: 'News',
    slug: 'tada-and-ton-foundation'
  },
  {
    title: 'TON Foundation Launches New 5 Million Toncoin DeFi Incentive Program',
    description: 'TON Foundation is launching a new 5 million Toncoin DeFi Incentive Program to bolster USDt-TON adoption and drive...',
    image: 'ton5mil.webp',  // Пример изображения
    date: '6 Sep',
    time: '4 min read',
    category: 'News',
    slug: 'new-toncoin-defi-incentive-program'
  },
  {
    title: 'Join the #DigitalResistance and Fight for Your Freedoms!',
    description: 'Pavel Durov’s arrest in France reignited the fire of #DigitalResistance. Join us in the fight for our digital freedoms!',
    image: '/dog.webp',  // Пример изображения
    date: '27 Aug',
    time: '5 min read',
    category: 'News',
    slug: 'join-the-digital-resistance-and-fight-for-your-freedoms'
  },
  {
    title: 'USDt on TON Is Now Available on Over 100 Platforms Worldwide',
    description: 'We\'re excited to announce 29 new partners who now support USDt on TON, taking us to a total of over 100 partners...',
    image: '/usdt.webp',  // Пример изображения
    date: '23 Aug',
    time: '2 min read',
    category: 'News',
    slug: 'us-dt-on-ton-is-now-available-on-over-100-platforms-worldwide'
  },
  {
    title: 'The New Mission for TON Society',
    description: 'The new era of TON is here, and we invite you to join us and shape the future together!',
    image: '/mission.webp',  // Пример изображения
    date: '22 Aug',
    time: '11 min read',
    category: 'News',
    slug: 'the-new-mission-for-ton-society'
  },
  {
    title: 'A Look Back at The Open League Hackathon: Meet the Winners',
    description: 'Over eight weeks, participants onboarded, learned, and built, culminating in global in-person sessions where they coded,...',
    image: '/zalupa.webp',  // Пример изображения
    date: '15 Aug',
    time: '20 min read',
    category: 'News',
    slug: 'a-look-back-at-the-open-league-hackathon-meet-the-winners'
  },
  {
    title: 'Introducing TON Ventures: A $40M Fund for Early-Stage Projects',
    description: 'We’re excited to announce the launch of TON Ventures, a venture capital organization born out of the expertise and...',
    image: '/ventures.webp',  // Пример изображения
    date: '14 Aug',
    time: '3 min read',
    category: 'News',
    slug: 'introducing-ton-ventures-a-40m-fund-for-early-stage-projects'
  },
  {
    title: 'Simplifying Integration of USDt on TON: Key Infrastructure Providers',
    description: 'We’re simplifying the integration of USDt on TON into crypto exchanges, onramps, payment services, and more as a...',
    image: '/integration.webp',  // Пример изображения
    date: '13 Aug',
    time: '5 min read',
    category: 'News',
    slug: 'simplifying-integration-of-usdt-on-ton-key-infrastructure-providers'
  },
  {
    title: 'We\'ve Teamed Up with Cocos Studio to Supercharge Next-Gen Web3 Mini-Games',
    description: 'This partnership will leverage CocosStudio\'s advanced game development tools and TON\'s ecosystem to kick off a new er...',
    image: '/partnership.webp',  // Пример изображения
    date: '8 Aug',
    time: '3 min read',
    category: 'News',
    slug: 'weve-teamed-up-with-cocos-studio-to-supercharge-next-gen-web3-mini-games'
  },
  {
    title: 'These Are The Best Projects of The Open League Season 5',
    description: 'It is time to review The Open League Season 5 and discover the best projects.',
    image: '/season5.webp',  // Пример изображения
    date: '8 Aug',
    time: '3 min read',
    category: 'News',
    slug: 'these-are-the-best-projects-of-the-open-league-season-5'
  },
  {
    title: 'Introducing the W5 Smart Wallet: Evolving Transactions on TON Blockchain',
    description: 'We’re changing the game by bringing the first gasless transaction implementation to TON.',
    image: '/blogW5.webp',  // Пример изображения
    date: '24 Jul',
    time: '3 min read',
    category: 'News',
    slug: 'introducing-the-w5-smart-wallet-evolving-transactions-on-ton-blockchain'
  },
  {
    title: 'TON Foundation and Animoca Brands’ Mocaverse Partner in a $20M Initiative to Support TON',
    description: 'TON Foundation and Mocaverse team up to deploy a $20M token reserve to support the TON Ecosystem.',
    image: '/mocaverse.webp',  // Пример изображения
    date: '22 Jul',
    time: '5 min read',
    category: 'News',
    slug: 'ton-foundation-and-animoca-brands-mocaverse-partner-in-a-20-m-initiative-to-support-ton'
  },
  {
    title: 'Introducing TON Teleport: Bringing Bitcoin to TON',
    description: 'Bitcoin on TON? Yes! This article introduces the new TON Teleport concept that brings Bitcoin to The Open Network.',
    image: '/btc.webp',  // Пример изображения
    date: '18 Jul',
    time: '3 min read',
    category: 'News',
    slug: 'introducing-ton-teleport-bringing-bitcoin-to-ton'
  },
  {
    title: 'The Open League Season 4 Results: New Champions Emerge!',
    description: 'Meet the best-performing teams of the fourth season of The Open League!',
    image: '/season4.webp',  // Пример изображения
    date: '26 Jun',
    time: '3 min read',
    category: 'News',
    slug: 'the-open-league-season-4-results-new-champions-emerge'
  },
  {
    title: 'Putting USDt on TON to Every Pocket With Over 100 Integrations',
    description: 'TON Foundation and Tether are collaborating to make USDt on TON Blockchain accessible globally through over 100 planned...',
    image: '/100int.webp',  // Пример изображения
    date: '5 Jun',
    time: '3 min read',
    category: 'News',
    slug: 'putting-us-dt-on-ton-to-every-pocket-with-over-100-integrations'
  },
  {
    title: 'The Open League Season 3 Results',
    description: 'Season 3 of The Open League saw huge growth in active wallets and DeFi value, along with impressive performances...',
    image: '/season3.webp',  // Пример изображения
    date: '29 May',
    time: '3 min read',
    category: 'News',
    slug: 'the-open-league-season-3-results'
  },
  {
    title: 'TON Onboards 1 Million Users in a Single Day',
    description: 'On May 16, TON Blockchain set a new benchmark by onboarding over 1 million users in a single day, showcasing its...',
    image: '/1mil.webp',  // Пример изображения
    date: '24 May',
    time: '4 min read',
    category: 'News',
    slug: 'ton-onboards-1-million-users-in-a-single-day'
  },
  {
    title: 'TON Joins ETH Belgrade for First Hackathon Track at Major Crypto Event',
    description: 'TON Society is joining the ETH Belgrade Hackathon, offering a $10,000 prize pool for Telegram Mini Apps. Successful projects...',
    image: '/tsoc.webp',  // Пример изображения
    date: '21 May',
    time: '4 min read',
    category: 'News',
    slug: 'ton-joins-eth-belgrade-for-first-hackathon-track-at-major-crypto-event'
  },
  {
    title: 'Tonkeeper Releases Huge Update',
    description: 'Tonkeeper\'s latest update introduces the W5 wallet standard, multi-send capabilities, and the Tonkeeper Battery beta,...',
    image: '/tonkeeper.webp',  // Пример изображения
    date: '16 May',
    time: '3 min read',
    category: 'News',
    slug: 'tonkeeper-releases-huge-update'
  },
  {
    title: 'TOL Season 2 Results Just Landed: Two Teams Eliminated!',
    description: 'Meet the best-performing teams of the last season of The Open League and find out who\'s eliminated!',
    image: '/season2.webp',  // Пример изображения
    date: '15 May',
    time: '3 min read',
    category: 'News',
    slug: 'tol-season-2-results-just-landed'
  },
  {
    title: 'These Are The Best Projects of TOL Season 1!',
    description: 'The Open League Season 1 is officially over, and it’s time to look back at the best projects of the past month.',
    image: '/season1.webp',  // Пример изображения
    date: '3 May',
    time: '4 min read',
    category: 'News',
    slug: 'these-are-the-best-projects-of-tol-season-1'
  },
  {
    title: 'USDt Comes To TON: Embrace The True Peer-to-Peer Experience',
    description: 'USDt, the world\'s largest stablecoin, is launching on TON, integrated directly with Telegram, offering 900 million users a...',
    image: '/send.webp',  // Пример изображения
    date: '19 Apr',
    time: '6 min read',
    category: 'News',
    slug: 'usdt-comes-to-ton-embrace-the-true-peer-to-peer-experience'
  },
  {
    title: 'Launching The Open League DeFi Grants Program: Up To $520,000 Per Team',
    description: 'We\'re announcing a new initiative for Web3 builders in DeFi and dApps on TON.',
    image: '/launch.webp',  // Пример изображения
    date: '18 Apr',
    time: '3 min read',
    category: 'News',
    slug: 'launching-the-open-league-defi-grants-program-up-to-520000-per-team'
  },
  {
    title: 'TON Memelandia Is Here! Recognizing the Importance of Community-Driven Tokens',
    description: 'We recognize the importance of community tokens and meme coins, and we strongly believe that creativity, engagement, an...',
    image: '/meme.webp',  // Пример изображения
    date: '16 Apr',
    time: '3 min read',
    category: 'News',
    slug: 'ton-memelandia-is-here-recognizing-the-importance-of-community-driven-tokens'
  },


];



export default function Home() {
  return (
    <Layout>
      {/* Настраиваем сетку */}
      <NewsHeader />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4"> {/* Уменьшаем отступы */}
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
       
      </div>
    </Layout>
  );
}
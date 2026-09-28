import { FaYoutube, FaFacebook } from 'react-icons/fa'
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from 'react-icons/rx'

export const SKILL_DATA = [
  {
    skill_name: 'HTML',
    image: 'html.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'CSS',
    image: 'css.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'JavaScript',
    image: 'js.png',
    width: 65,
    height: 65,
  },
  {
    skill_name: 'Tailwind CSS',
    image: 'tailwind.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'React',
    image: 'react.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'Redux',
    image: 'redux.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'React Query',
    image: 'reactquery.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'TypeScript',
    image: 'ts.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'Next.js 14',
    image: 'next.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'Framer Motion',
    image: 'framer.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'Stripe',
    image: 'stripe.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'Node.js',
    image: 'node.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'MongoDB',
    image: 'mongodb.png',
    width: 40,
    height: 40,
  },
] as const

export const SOCIALS = [
  {
    name: 'Instagram',
    icon: RxInstagramLogo,
    link: 'https://instagram.com/ablmazed',
  },
  {
    name: 'Facebook',
    icon: FaFacebook,
    link: 'https://facebook.com/ablmazed',
  },
  {
    name: 'Twitter',
    icon: RxTwitterLogo,
    link: 'https://twitter.com/ablmazed',
  },
] as const

export const FRONTEND_SKILL = [
  {
    skill_name: 'HTML',
    image: 'html.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'CSS',
    image: 'css.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'JavaScript',
    image: 'js.png',
    width: 65,
    height: 65,
  },
  {
    skill_name: 'Tailwind CSS',
    image: 'tailwind.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'Material UI',
    image: 'mui.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'React',
    image: 'react.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'Redux',
    image: 'redux.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'React Query',
    image: 'reactquery.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'TypeScript',
    image: 'ts.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'Next.js 14',
    image: 'next.png',
    width: 80,
    height: 80,
  },
] as const

export const BACKEND_SKILL = [
  {
    skill_name: 'Node.js',
    image: 'node.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'Express.js',
    image: 'express.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'MongoDB',
    image: 'mongodb.png',
    width: 40,
    height: 40,
  },
  {
    skill_name: 'Firebase',
    image: 'firebase.png',
    width: 55,
    height: 55,
  },
  {
    skill_name: 'PostgreSQL',
    image: 'postgresql.png',
    width: 70,
    height: 70,
  },
  {
    skill_name: 'MySQL',
    image: 'mysql.png',
    width: 70,
    height: 70,
  },
  {
    skill_name: 'Prisma',
    image: 'prisma.png',
    width: 70,
    height: 70,
  },
  {
    skill_name: 'Graphql',
    image: 'graphql.png',
    width: 80,
    height: 80,
  },
] as const

export const PROJECTS = [
  {
    title: 'Modern Next.js 14 Ecommerce',
    description:
      'Embark on a journey through my professional evolution with the "Modern Next.js Ecommerce" - a dynamic showcase of my skills, experiences, and passion for web development. Crafted with precision and powered by Next.js, this portfolio is more than just a static display; it\'s an immersive experience that reflects the cutting edge of modern web technologies.',
    image: '/projects/fashionhouse.png',
    link: 'https://nextjs-fashion-house.vercel.app',
  },
  {
    title: 'XiroHomes- Real State Project',
    description:
      'Step into the extraordinary world of my professional journey through the "XiroHomes- Real State Project" - an innovative and visually captivating platform that redefines the traditional portfolio experience. Ditching the conventional static layout, this portfolio leverages interactive cards to showcase my skills, projects, and personality in an engaging and dynamic manner.',
    image: '/projects/xirohomes.png',
    link: 'https://xiro-homes.vercel.app',
  },
  {
    title: 'Amazon Clone Website- Nextjs Amazona',
    description:
      'Embark on an interstellar journey with my "Space Themed Website", a mesmerizing space-themed website that invites you to explore the cosmic wonders beyond our world. Immerse yourself in an awe-inspiring digital experience that blends cutting-edge design with the mysteries of the universe.',
    image: '/projects/amazon.png',
    link: 'https://nextjs-amazona-ecommerce.vercel.app',
  },
] as const

export const FOOTER_DATA = [
  {
    title: 'Community',
    data: [
      {
        name: 'YouTube',
        icon: FaYoutube,
        link: 'https://youtube.com/ablmazed',
      },
      {
        name: 'GitHub',
        icon: RxGithubLogo,
        link: 'https://github.com/ablmazed',
      },
      {
        name: 'Discord',
        icon: RxDiscordLogo,
        link: 'https://discord.com/ablmazed',
      },
    ],
  },
  {
    title: 'Social Media',
    data: [
      {
        name: 'Instagram',
        icon: RxInstagramLogo,
        link: 'https://instagram.com/ablmazed',
      },
      {
        name: 'Twitter',
        icon: RxTwitterLogo,
        link: 'https://twitter.com/ablmazed',
      },
      {
        name: 'Linkedin',
        icon: RxLinkedinLogo,
        link: 'https://linkedin.com/ablmazed',
      },
    ],
  },
  {
    title: 'About',
    data: [
      {
        name: 'Become Sponsor',
        icon: null,
        link: 'https://youtube.com/',
      },
      {
        name: 'Learning about me',
        icon: null,
        link: 'https://example.com',
      },
      {
        name: 'Contact Me',
        icon: null,
        link: 'mailto:ablmazed@gmail.com',
      },
    ],
  },
] as const

export const NAV_LINKS = [
  {
    title: 'About me',
    link: '#about-me',
  },
  {
    title: 'Skills',
    link: '#skills',
  },
  {
    title: 'Projects',
    link: '#projects',
  },
] as const

export const LINKS = {
  sourceCode: 'https://github.com/ablmazed/ablmazed',
}

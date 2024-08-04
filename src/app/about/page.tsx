import { type Metadata } from 'next'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import travelImage1 from '@/images/travel-photos/travel_1.jpg'
import travelImage2 from '@/images/travel-photos/travel_2.jpg'
import travelImage3 from '@/images/travel-photos/travel_3.jpg'
import travelImage4 from '@/images/travel-photos/travel_4.jpg'
import travelImage5 from '@/images/travel-photos/travel_5.jpg'
import travelImage6 from '@/images/travel-photos/travel_6.jpg'
import travelImage7 from '@/images/travel-photos/travel_7.jpg'
import travelImage8 from '@/images/travel-photos/travel_8.jpg'
import travelImage9 from '@/images/travel-photos/travel_9.jpg'
import travelImage10 from '@/images/travel-photos/travel_10.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function GalleryColumn({ images }: { images: StaticImageData[] }) {
  return (
    <div className="grid gap-4">
      {images.map((image) => (
        <div key={image.src}>
          <Image className="gallery-photo" src={image} alt="" />
        </div>
      ))}
    </div>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description: 'I’m Nova Saint.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="rounded-xl bg-zinc-100 object-cover shadow-md dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Who I am
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’ve spent most of my childhood in rural Burma where I learnt how
              to appreciate little things in life. After I’ve received a grant
              to study abroad at 16, I’ve been exposed to a whole new world of
              technology and innovation. Not having grown up with a computer, I
              was fascinated by the endless possibilities it could bring to the
              world.
            </p>
            <p>
              I began my journy as a software engineer in Singapore, after
              graduating from University of Wollongong with a BS in Computer
              Science in 2013. Since then I’ve worked at a few startups and tech
              companies, founded a tech consultancy, worked with a non-profit to
              help them with their digital presence, and worked in climate tech
              building a comprehensive logistics platform.
            </p>
            <p>
              In 2017, I’ve decided to be a full-time digital nomad and travel
              the world while working on my consultancy and various projects.
              I’ve been to 30+ countries and lived in 10+ cities since then.
              When I’m not at the computer, I’m usually out exploring the world,
              hiking, relaxing at the beach, or reading a book.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <SocialLink
            href="https://linkedin.com/in/novasaint"
            icon={LinkedInIcon}
            className="mt-4"
          >
            LinkedIn
          </SocialLink>
          <SocialLink
            href="mailto:hello@novasaint.com"
            icon={MailIcon}
            className="mt-4"
          >
            hello@novasaint.com
          </SocialLink>
        </div>
      </div>
      <div className="mb-16 mt-32">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Travels
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <GalleryColumn
          images={[travelImage1, travelImage2, travelImage3, travelImage6]}
        />
        <GalleryColumn images={[travelImage4, travelImage5, travelImage10]} />
        <GalleryColumn images={[travelImage7, travelImage8, travelImage9]} />
      </div>
      <p className="mt-8">
        <a
          href="https://www.responsibletravel.org/wp-content/uploads/sites/213/2021/03/responsible-travel-tips.pdf"
          className="text-zinc-500 hover:text-teal-500"
          target="_blank"
        >
          Responsible travel tips
        </a>
      </p>
    </Container>
  )
}

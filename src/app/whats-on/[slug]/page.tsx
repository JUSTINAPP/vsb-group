import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BottomNav from '@/components/BottomNav'
import PageHero from '@/components/PageHero'
import { getPost } from '@/lib/sanity'

export const dynamic = 'force-dynamic'
export const revalidate = 0

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug).catch(() => null)
  if (!post) return {}
  const title = post.seoTitle ?? `${post.title} | South Beach Restaurant`
  const description = post.seoDescription ?? post.excerpt ?? undefined
  const ogImageUrl = post.ogImageUrl ?? post.imageUrl ?? undefined
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `https://sbmm.com.au/whats-on/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://sbmm.com.au/whats-on/${slug}`,
      siteName: 'South Beach Restaurant',
      ...(ogImageUrl ? { images: [{ url: ogImageUrl }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

const portableTextComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-[15px] leading-[1.85] text-warm font-jost font-light mb-5">{children}</p>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="font-cormorant font-light text-[28px] md:text-[34px] text-charcoal leading-[1.1] mt-10 mb-4 tracking-[0.02em]">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="font-cormorant font-light text-[22px] text-charcoal leading-[1.2] mt-8 mb-3">{children}</h3>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-2 border-sky pl-5 my-6 font-cormorant italic font-light text-[19px] text-warm leading-[1.6]">{children}</blockquote>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-normal text-charcoal">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    link: ({ value, children }: { value?: { href: string }; children?: React.ReactNode }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky underline hover:text-sky-dark transition-colors"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }: { value: { asset: { url?: string }; alt?: string; caption?: string } }) => (
      <figure className="my-8">
        <div className="relative h-[280px] md:h-[420px] rounded-[6px] overflow-hidden">
          <Image
            src={value.asset?.url ?? ''}
            alt={value.alt ?? ''}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        {value.caption && (
          <figcaption className="text-[11px] text-warm/70 font-jost font-light mt-2 text-center italic">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug).catch(() => null)

  if (!post) notFound()

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-AU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="South Beach · Mount Martha"
          title={post.title}
          image={post.imageUrl ?? undefined}
        />

        <section className="bg-white py-[48px] md:py-[64px]">
          <div className="max-w-3xl mx-auto px-6 md:px-[60px]">
            {/* Back link + date */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#EDECEA]">
              <Link
                href="/whats-on"
                className="text-[11px] tracking-[0.12em] uppercase text-sky font-jost font-normal hover:text-sky-dark transition-colors"
              >
                ← Back to What&apos;s On
              </Link>
              <p className="text-[10px] tracking-[0.14em] uppercase text-warm/60 font-jost font-light">
                {formattedDate}
              </p>
            </div>

            {/* Body */}
            {post.body && (
              <div>
                <PortableText value={post.body} components={portableTextComponents} />
              </div>
            )}

            {/* Footer nav */}
            <div className="mt-12 pt-6 border-t border-[#EDECEA]">
              <Link
                href="/whats-on"
                className="text-[11px] tracking-[0.12em] uppercase text-sky font-jost font-normal hover:text-sky-dark transition-colors"
              >
                ← Back to What&apos;s On
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BottomNav />
    </>
  )
}

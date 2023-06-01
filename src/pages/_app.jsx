import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import { MDXProvider } from '@mdx-js/react'

import { Layout } from '@/components/Layout'
import * as mdxComponents from '@/components/mdx'
import { Analytics } from '@vercel/analytics/react';

import '@/styles/tailwind.css'
import 'focus-visible'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cluster.kg - Кыргызстан - центр разнообразных и инновационных инвестиций</title>
        <meta
          name="description"
          content="Горный кластер - это платформа, которая связывает инвесторов с разнообразными и устойчивыми возможностями в динамичных секторах и отраслях Кыргызстана, создавая ценность и влияние для регионов и сообществ."
        />
      </Head>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <MDXProvider components={mdxComponents}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MDXProvider>
      </ThemeProvider>
      <Analytics />
    </>
  )
}

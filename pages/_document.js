import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='es' className='h-full'>
      <Head />
      <body className='dark:bg-gray-800 dark:text-gray-200'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

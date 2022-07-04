import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='es' className='h-full'>
      <Head />
      <body className='bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-200'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

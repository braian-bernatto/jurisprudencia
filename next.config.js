/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    backendURL: 'http://localhost:4000',
    frontendURL: 'http://localhost:3000'
  }
  // env: {
  //   backendURL: 'https://estado-saldos-api-testing.herokuapp.com',
  //   frontendURL: 'https://bernatto-jurisprudencia.netlify.app'
  // }
}

module.exports = nextConfig

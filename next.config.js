/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// https://source.unsplash.com/1000x1000?books
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'unsplash.com',
//         port: '',
//         pathname: '/1000x1000?books',
//       },
//     ],
//   },
// }
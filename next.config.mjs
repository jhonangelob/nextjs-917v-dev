/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DIRECTUS_ENDPOINT: process.env.DIRECTUS_ENDPOINT,
    DIRECTUS_USER_EMAIL: process.env.DIRECTUS_USER_EMAIL,
    DIRECTUS_USER_PASSWORD: process.env.DIRECTUS_USER_PASSWORD,
  },
  images: {
    domains: ['burst.shopifycdn.com'],
  },
}

export default nextConfig

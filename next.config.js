module.exports = {
  images: {
      domains: ["localhost", "fakestoreapi.com", "paypal.com", "amplitude.com"]
  }, 
  env: {
    paypal_client_id: process.env.PAYPAL_CLIENT_ID,
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: `${process.env.HOST}+/api/v1/:path*`,
      },
    ]
  },


}

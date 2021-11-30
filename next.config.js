module.exports = {
  images: {
      domains: ["localhost", "fakestoreapi.com"]
  }, 
  env: {
    paypal_client_id: process.env.PAYPAL_CLIENT_ID,
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: 'http://localhost:8080/api/v1/:path*',
      },
    ]
  },


}

module.exports = {
  images: {
      domains: ["localhost", "herokuapp.com", "fakestoreapi.com", "paypal.com", "amplitude.com"]
  }, 
  env: {
    paypal_client_id: process.env.PAYPAL_CLIENT_ID,
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: `${process.env.EXTERNAL_HOST}/api/v1/:path*`,
      },
    ]
  },


}

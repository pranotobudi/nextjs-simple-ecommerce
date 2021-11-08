module.exports = {
  images: {
      domains: ["localhost", "fakestoreapi.com"]
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

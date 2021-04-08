require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: "SLX Entertainment",
    description: "Sound. Lighting. Life.",
    siteUrl: "https://slxent.com",
  },
  plugins: [
    "@reflexjs/gatsby-theme-base",
    "gatsby-plugin-preact",
  ],
}
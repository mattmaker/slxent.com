require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: "SLX Entertainment",
    description: "Lights. Audio. Entertainment!",
    siteUrl: "https://slxent.com",
  },
  plugins: [
    "@reflexjs/gatsby-theme-base",
    "gatsby-plugin-preact",
  ],
}
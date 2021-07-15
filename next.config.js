const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

module.exports = withPlugins(
  [withImages()], // All next plugins go here
  // Below is the main Next.js config object
  {
    reactStrictMode: true,
    images: {
      domains: ["res.cloudinary.com"],
    },
  }
);

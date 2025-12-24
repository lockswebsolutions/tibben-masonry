module.exports = {
  name: "Tibben Masonry",
  email: "gctibben@gmail.com",
  phoneForTel: "613-652-1212",
  phoneFormatted: "(613) 652-1212",
  address: {
    lineOne: "14035 Willbruck Dr",
    city: "Ingleside",
    state: "ON",
    zip: "",
    country: "CA",
    mapLink: "https://maps.app.goo.gl/Z5C4qtxQVW9xb6kN6",
  },
  socials: {
    facebook: "https://www.facebook.com/TibbenMasonry",
  },
  //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
  domain: "https://www.tibbenmasonry.com",
  // Passing the isProduction variable for use in HTML templates
  isProduction: process.env.ELEVENTY_ENV === "PROD",
};

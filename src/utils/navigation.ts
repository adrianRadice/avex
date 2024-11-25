// An array of links for navigation bar
const navBarLinks = [
  //{ name: "Home", url: "/" },
  //{ name: "Products", url: "/products" },
  //{ name: "Services", url: "/services" },
  //{ name: "Blog", url: "/blog" },
  { name: "Únetenos", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  
  {
    section: "Compañia",
    links: [
      { name: "Sobre nosotros", url: "#" },
      { name: "Blog", url: "/blog" },
      { name: "Trabajo", url: "#" },
      { name: "Inversiones", url: "#" },
      { name: "Terminos y condiones", url: "privacy-policy" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/",
  google: "https://www.google.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
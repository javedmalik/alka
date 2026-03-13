// const donateBanner = {
//   image: "/images/banners/aboutus_page_banners/mission.jpeg", // change to your real image
//   imageAlt: "Donate banner",
//   videoHref: "/video/alka.mp4", // you can change to youtube/video page
//   kicker: "MAKE A DIFFERENCE TODAY",
//   title: "Your contribution matters. Support our cause by making a donation.",
//   description:
//     "Every dollar counts and helps us bring hope, joy, and essential resources to those in need. Together, we can create a better tomorrow.",
//   buttonText: "Donate Today",
//   buttonHref: "/donation",
// };

// export default donateBanner;


const donateBanner = {
  image: "/images/banners/aboutus_page_banners/mission.jpeg",
  imageAlt: "Donate banner",
  // Use the API proxy instead of direct Cloudinary URL
  videoHref: "/api/contact?video=alka_1_umhnhr", // Using your existing API route
  kicker: "MAKE A DIFFERENCE TODAY",
  title: "Your contribution matters. Support our cause by making a donation.",
  description:
    "Every dollar counts and helps us bring hope, joy, and essential resources to those in need. Together, we can create a better tomorrow.",
  buttonText: "Donate Today",
  buttonHref: "/donation",
};

export default donateBanner;

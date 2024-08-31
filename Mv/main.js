const ham_menu = document.querySelector("#ham_menu");
const mobile_nav = document.querySelector(".navigation");
const hero = [
  document.querySelector(".hero-image"),
  document.querySelector(".hero-text"),
  document.querySelector(".hero_p"),
  document.querySelector(".content-btns"),
];

const bookingParent = document.querySelector(".booking_container");
const booking = [
  document.querySelector(".booking-img"),
  document.querySelector(".booking_text"),
  document.querySelector(".booking_paragraphs"),
  document.querySelector(".booking-btn"),
];

const journeyinfo = document.querySelectorAll(".journey_info");
const journeyCardInfo = document.querySelectorAll(".journey_card_info");
const grid = document.querySelectorAll(".grid--3");
journeyinfo.forEach((card) => {
  let relativeInfoCard = journeyCardInfo[card.dataset.pos];
  card.addEventListener("mouseover", function () {
    relativeInfoCard.style.transform = `translateY(-100%)`;
    relativeInfoCard.classList.add("item-hover");
  });
  card.addEventListener("mouseout", function () {
    relativeInfoCard.style.transform = `translateY(0%)`;
    relativeInfoCard.classList.remove("item-hover");
  });
});
const ham_func = function () {
  if (!mobile_nav.classList.contains("nav-opened")) {
    mobile_nav.classList.add("nav-opened");
    ham_menu.classList.replace("ri-menu-line", "ri-close-line");
  } else {
    mobile_nav.classList.remove("nav-opened");
    ham_menu.classList.replace("ri-close-line", "ri-menu-line");
  }
};
const loading_animation = function (item) {
  setInterval(() => {
    item.classList.add("item-hover");
    item.style.transform = `translate(0%)`;
  }, 500 * item.dataset.pos);
};
const loadingAnimationLoaded = function () {
  hero.forEach((heroElement) => {
    loading_animation(heroElement);
  });
};
ham_menu.addEventListener("click", ham_func);
document.addEventListener("DOMContentLoaded", loadingAnimationLoaded);
// places.forEach((place) => {
//   const config = {
//     root: null,
//     threshold: 0.5,
//   };
//   place.addEventListener("load", function () {
//     const placesObserver = new IntersectionObserver(function () {
//       loading_animation(places[0]);
//     }, config);
//     places.forEach((place) => {
//       placesObserver.observe(place);
//     });
//   });
// });

const place = document.querySelectorAll(".place");
const popular = document.querySelector(".popular_container");
function Loading(object, parent) {
  const revealSection = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;
    loading_animation(object);
    observer.unobserve(object);
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
  });
  sectionObserver.observe(parent);

  object.classList.add("section--hidden");
}
grid.forEach((item) => {
  item.querySelectorAll(".grid_item").forEach((gridEl) => {
    Loading(gridEl, item);
  });
});
booking.forEach((bookingItem) => {
  Loading(bookingItem, bookingParent);
});

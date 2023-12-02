"use strict";

/*--
        preloader
    -----------------------------------*/
$(window).on("load", function (event) {
  $("#preloader").delay(100).fadeOut(500);
});

/*--
        Header Sticky
    -----------------------------------*/

window.onscroll = function () {
  const left = document.getElementById("header");

  if (left.scrollTop > 50 || self.pageYOffset > 50) {
    left.classList.add("sticky");
  } else {
    left.classList.remove("sticky");
  }
};

/*--
        Menu parent Element Icon
    -----------------------------------*/
const $subMenu = document.querySelectorAll(".sub-menu");
$subMenu.forEach(function (subMenu) {
  const menuExpand = document.createElement("span");
  menuExpand.classList.add("menu-icon");
  // menuExpand.innerHTML = '+'
  subMenu.parentElement.insertBefore(menuExpand, subMenu);
  if (subMenu.classList.contains("mega-menu")) {
    subMenu.classList.remove("mega-menu");
    subMenu.querySelectorAll("ul").forEach(function (ul) {
      ul.classList.add("sub-menu");
      const menuExpand = document.createElement("span");
      menuExpand.classList.add("menu-icon");
      menuExpand.innerHTML = "+";
      ul.parentElement.insertBefore(menuExpand, ul);
    });
  }
});

/*--
        Mobile Menu 
    -----------------------------------*/

/* Get Sibling */
const getSiblings = function (elem) {
  const siblings = [];
  let sibling = elem.parentNode.firstChild;
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};

/* Slide Up */
const slideUp = (target, time) => {
  const duration = time ? time : 500;
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.boxSizing = "border-box";
  target.style.height = target.offsetHeight + "px";
  target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  window.setTimeout(() => {
    target.style.display = "none";
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};

/* Slide Down */
const slideDown = (target, time) => {
  const duration = time ? time : 500;
  target.style.removeProperty("display");
  let display = window.getComputedStyle(target).display;
  if (display === "none") display = "block";
  target.style.display = display;
  const height = target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.offsetHeight;
  target.style.boxSizing = "border-box";
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.height = height + "px";
  window.setTimeout(() => {
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};

/* Slide Toggle */
const slideToggle = (target, time) => {
  const duration = time ? time : 500;
  if (window.getComputedStyle(target).display === "none") {
    return slideDown(target, duration);
  } else {
    return slideUp(target, duration);
  }
};

/*--
		Offcanvas/Collapseable Menu 
	-----------------------------------*/
const offCanvasMenu = function (selector) {
  const $offCanvasNav = document.querySelector(selector),
    $subMenu = $offCanvasNav.querySelectorAll(".sub-menu");
  $subMenu.forEach(function (subMenu) {
    const menuExpand = document.createElement("span");
    menuExpand.classList.add("menu-expand");
    // menuExpand.innerHTML = '+'
    subMenu.parentElement.insertBefore(menuExpand, subMenu);
    if (subMenu.classList.contains("mega-menu")) {
      subMenu.classList.remove("mega-menu");
      subMenu.querySelectorAll("ul").forEach(function (ul) {
        ul.classList.add("sub-menu");
        const menuExpand = document.createElement("span");
        menuExpand.classList.add("menu-expand");
        menuExpand.innerHTML = "+";
        ul.parentElement.insertBefore(menuExpand, ul);
      });
    }
  });

  $offCanvasNav.querySelectorAll(".menu-expand").forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const parent = this.parentElement;
      if (parent.classList.contains("active")) {
        parent.classList.remove("active");
        parent.querySelectorAll(".sub-menu").forEach(function (subMenu) {
          subMenu.parentElement.classList.remove("active");
          slideUp(subMenu);
        });
      } else {
        parent.classList.add("active");
        slideDown(this.nextElementSibling);
        getSiblings(parent).forEach(function (item) {
          item.classList.remove("active");
          item.querySelectorAll(".sub-menu").forEach(function (subMenu) {
            subMenu.parentElement.classList.remove("active");
            slideUp(subMenu);
          });
        });
      }
    });
  });
};
offCanvasMenu(".offcanvas-menu");

/*--
    magnificPopup video view 
  -----------------------------------*/
$(".popup-video").magnificPopup({
  type: "iframe",
});

/*--    
      Counter Up
  -----------------------------------*/

$(".counter").counterUp({
  delay: 10,
  time: 1500,
});

/*--
        Testimonial Active
	-----------------------------------*/
var swiper = new Swiper(".testimonial-active", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
});

/*--    
        Testimonial Two Active
    -----------------------------------*/
var swiper = new Swiper(".testimonial-02-active", {
  slidesPerView: 2,
  spaceBetween: 130,
  loop: true,
  pagination: {
    el: ".testimonial-02-active .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 1,
    },
    1400: {
      slidesPerView: 2,
    },
  },
});

/*--    
        Brand Active
    -----------------------------------*/
var swiper = new Swiper(".brand-active .swiper-container", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 5,
    },
  },
});

/*--    
        Testimonial Two Active
    -----------------------------------*/
var swiper = new Swiper(".team-active", {
  slidesPerView: 4,
  loop: true,
  pagination: {
    el: ".team-active .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
  },
});

/*--    
      Progress Bar
  -----------------------------------*/

if ($(".progress-line").length) {
  $(".progress-line").appear(
    function () {
      var el = $(this);
      var percent = el.data("width");
      $(el).css("width", percent + "%");
    },
    { accY: 0 }
  );
}

/*--
        AOS
    -----------------------------------*/
AOS.init({
  duration: 1200,
  once: true,
});

/*--
      Navigate to singleService
    ------------------------------------*/

const services = [
  {
    id: 1,
    title: "IT Consultancy",
    details:
      "What we do in Programming Solutions ServicesWhat we do in Programming Solutions ServicesWhat we do in Programming Solutions ServicesWhat we do in Programming Solutions ServicesWhat we do in Programming Solutions ServicesWhat we do in Programming Solutions ServicesWhat we do in Programming Solutions ServicesWhat we do in Programming Solutions ServicesWhat we do in Programming Solutions ServicesWhat we do in Programming Solutions ServicesWhat we do in Programming Solutions ServicesWhat we do in Programming Solutions ServicesWhat we do in Programming Solutions ServicesWhat we do in Programming Solutions ServicesWhat we do in Programming Solutions ServicesWhat we do in Programming Solutions ServicesWhat we do in Programming Solutions ServicesWhat we do in Programming Solutions ServicesWhat we do in Programming Solutions ServicesWhat we do in Programming Solutions ServicesWhat we do in Programming Solutions ServicesWhat we do in Programming Solutions ServicesWhat we do in Programming Solutions ServicesWhat we do in Programming Solutions ServicesWhat we do in Programming Solutions ServicesWhat we do in Programming Solutions ServicesWhat we do in Programming Solutions ServicesWhat we do in Programming Solutions ServicesWhat we do in Programming Solutions Services",
  },
  {
    id: 2,
    title: "Data Science",
    details:
      "What we do in BPM SolutionsWhat we do in BPM SolutionsWhat we do in BPM SolutionsWhat we do in BPM SolutionsWhat we do in BPM SolutionsWhat we do in BPM SolutionsWhat we do in BPM SolutionsWhat we do in BPM SolutionsWhat we do in BPM SolutionsWhat we do in BPM SolutionsWhat we do in BPM SolutionsWhat we do in BPM SolutionsWhat we do in BPM SolutionsWhat we do in BPM SolutionsWhat we do in BPM SolutionsWhat we do in BPM SolutionsWhat we do in BPM SolutionsWhat we do in BPM SolutionsWhat we do in BPM SolutionsWhat we do in BPM Solutions",
  },
  {
    id: 3,
    title: "IT Security",
    details:
      "What we do in Voice To text SolutiosWhat we do in Voice To text SolutiosWhat we do in Voice To text SolutiosWhat we do in Voice To text Solutioswe do in Voice To text SolutiosWhat we do in Voice To text SolutiosWhat we do in Voice To text SolutiosWhat we do in Voice To text Solutioswe do in Voice To text SolutiosWhat we do in Voice To text SolutiosWhat we do in Voice To text SolutiosWhat we do in Voice To text Solutioswe do in Voice To text SolutiosWhat we do in Voice To text SolutiosWhat we do in Voice To text SolutiosWhat we do in Voice To text Solutioswe do in Voice To text SolutiosWhat we do in Voice To text SolutiosWhat we do in Voice To text SolutiosWhat we do in Voice To text Solutios",
  },
  {
    id: 4,
    title: "Blockchain System",
    details:
      "What we do in Data ScienceWhat we do in Data ScienceWhat we do in Data ScienceWhat we do in Data ScienceWhat we do in Data ScienceWhat we do in Data ScienceWhat we do in Data ScienceWhat we do in Data ScienceWhat we do in Data ScienceWhat wewe do in Data ScienceWhat we do in Data ScienceWhat we do in Data Sciencewe do in Data ScienceWhat we do in Data ScienceWhat we do in Data Sciencewe do in Data ScienceWhat we do in Data ScienceWhat we do in Data Science do in Data ScienceWhat we do in Data ScienceWhat we do in Data Science",
  },
  {
    id: 5,
    title: "IT Infrustructure",
    details:
      " IT InfrustructureIT InfrustructureIT InfrustructureWhat we do in Data ManagmentWhat we do in Data ManagmentWhat we do in Data ManagmentWhat we do in Data Managmentwe do in Data ManagmentWhat we do in Data Managmentwe do in Data ManagmentWhat we do in Data Managmentwe do in Data ManagmentWhat we do in Data Managmentwe do in Data ManagmentWhat we do in Data Managmentwe do in Data ManagmentWhat we do in Data Managment",
  },
  {
    id: 6,
    title: "Data Managment",
    details:
      "What we do in Data ManagmentWhat we do in Data ManagmentWhat we do in Data ManagmentWhat we do in Data in Data ManagmentWhat we do in Data ManagmentWhat we do in Data in Data ManagmentWhat we do in Data ManagmentWhat we do in Data in Data ManagmentWhat we do in Data ManagmentWhat we do in Data in Data ManagmentWhat we do in Data ManagmentWhat we do in Data in Data ManagmentWhat we do in Data ManagmentWhat we do in Data in Data ManagmentWhat we do in Data ManagmentWhat we do in Data Managment",
  },
  {
    id: 7,
    title: "IT Managment",
    details:
      "IT ManagmentIT ManagmentIT ManagmentWhat we do in Data ManagmentWhat we do in Data ManagmentWhat we do in Data ManagmentWhat we do in Data Managmentdo in Data ManagmentWhat we do in Data Managmentdo in Data ManagmentWhat we do in Data Managmentdo in Data ManagmentWhat we do in Data Managment",
  },
  {
    id: 8,
    title: "Data securet",
    details:
      "What we do in Data ManagmentWhat What we do in Data ManagmentWhatWhat we do in Data ManagmentWhatWhat we do in Data ManagmentWhatWhat we do in Data ManagmentWhatWhat we do in Data ManagmentWhatWhat we do in Data ManagmentWhat we do in Data ManagmentWhat we do in Data ManagmentWhat we do in Data Managment",
  },
];

var servicePageTitle = document.getElementById("page-title");
var myLinks = document.querySelectorAll("#myLinks a");
var contentTitle = document.querySelector("#service-details .title");
var contentDetails = document.querySelector("#service-details .details");
var serviceList = document.querySelector("#service-list ul");

function navigateToAnotherPage(index) {
  window.location.href = `singleService.html?id=${encodeURIComponent(
    index + 1
  )}`;
}

myLinks.forEach((link, index) => {
  link.addEventListener("click", () => navigateToAnotherPage(index));
});

function changeContent(ID) {
  servicePageTitle.innerHTML = services.find((item) => item.id == ID).title;
  contentTitle.innerHTML = services.find((item) => item.id == ID).title;
  contentDetails.innerHTML = services.find((item) => item.id == ID).details;
}

function setContent() {
  const queryParams = new URLSearchParams(window.location.search);
  const serviceId = queryParams.get("id");
  changeContent(serviceId);

  const listItems = services.map((item) => {
    const li = document.createElement("li");
    li.textContent = item.title;
    return li;
  });

  listItems.forEach((li, index) => {
    serviceList.appendChild(li);
    li.addEventListener("click", () => changeContent(index + 1));
    if (index + 1 == serviceId) {
      li.classList.add("active");
    }
  });
}

serviceList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    const items = serviceList.getElementsByTagName("li");
    for (const item of items) {
      item.classList.remove("active");
    }
    event.target.classList.add("active");
  }
});

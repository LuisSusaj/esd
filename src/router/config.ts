const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/about"],
    exact: true,
    component: "About",
  },
  {
    path: ["/our-work"],
    exact: true,
    component: "WhatWeDo",
  },
  {
    path: ["/camp"],
    exact: true,
    component: "Camp",
  },
  {
    path: ["/shop"],
    exact: true,
    component: "Shop",
  },
  {
    path: ["/faq"],
    exact: true,
    component: "Faq",
  },
  {
    path: ["/contact"],
    exact: true,
    component: "Contact",
  },
  {
    path: ["/donations"],
    exact: true,
    component: "Donations",
  },
];

export default routes;

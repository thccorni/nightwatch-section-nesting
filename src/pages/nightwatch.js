// All CSS works!

// module.exports = {
//   url: "https://nightwatchjs.org",
//   sections: {
//     featuresLeft: {
//       selector: ".features-container>div:first-child",
//       elements: { firstHeading: "ul>li:first-child>h3" },
//     },
//     featuresRight: {
//       selector: ".features-container>div:last-child",
//       elements: { firstHeading: "ul>li:first-child>h3" },
//     },
//   },
// };

// Section XPATH, elements CSS works!

// module.exports = {
//   url: "https://nightwatchjs.org",
//   sections: {
//     featuresLeft: {
//       selector: '//*[contains(@class, "features-container")]/div[1]',
//       locateStrategy: "xpath",
//       elements: {
//         firstHeading: {
//           selector: "ul>li:first-child>h3",
//         },
//       },
//     },
//     featuresRight: {
//       selector: '//*[contains(@class, "features-container")]/div[3]',
//       locateStrategy: "xpath",
//       elements: {
//         firstHeading: {
//           selector: "ul>li:first-child>h3",
//         },
//       },
//     },
//   },
// };

// Section CSS, elements XPATH does not work!

// module.exports = {
//   url: "https://nightwatchjs.org",
//   sections: {
//     featuresLeft: {
//       selector: ".features-container>div:first-child",
//       elements: {
//         firstHeading: { selector: "//ul/li[1]/h3", locateStrategy: "xpath" },
//       },
//     },
//     featuresRight: {
//       selector: ".features-container>div:last-child",
//       elements: {
//         firstHeading: { selector: "//ul/li[1]/h3", locateStrategy: "xpath" },
//       },
//     },
//   },
// };

// All XPATH does not work!

module.exports = {
  url: "https://nightwatchjs.org",
  sections: {
    featuresLeft: {
      selector: '//*[contains(@class, "features-container")]/div[1]',
      locateStrategy: "xpath",
      elements: {
        firstHeading: { selector: "//ul/li[1]/h3", locateStrategy: "xpath" },
      },
    },
    featuresRight: {
      selector: '//*[contains(@class, "features-container")]/div[3]',
      locateStrategy: "xpath",
      elements: {
        firstHeading: { selector: "//ul/li[1]/h3", locateStrategy: "xpath" },
      },
    },
  },
};

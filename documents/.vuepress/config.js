var CONST = require("./const");

module.exports = {
  title: `Today Ashwin Learned`,
  description: `Ashwin's Today I Learned`,
  base: "/TIL/",
  dest: 'build',
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }]
  ],
  themeConfig: {
    sidebar: [
      {
        title: 'Monthly I Learned',
        children: CONST.MILList
      },
      {
        title: 'Network',
        children: CONST.NetworkList
      }
    ],
    nav: [{
        text: 'Blog',
        link: 'https://www.ashwinmenon.com/'
      }
    ]
  },
}
export const projects = [
  {
    slug: 'telejs',
    title: 'TeleJS',
    desc: [
      "Built a lightweight, open-source Slack API framework for efficient bot development",
      "Developed in Node.js and published as an NPM package"
    ],
    tech: ['Node.js', 'NPM'],
    pages: [

    ]
  },
  {
    slug: 'pyprompter',
    title: 'pyPrompter',
    desc: [
      "Contributed to a popular open-source Python pip package for building interactive CLIs",
      "Developed a feature that lets you 'freeze' inquirer choices"
    ],
    tech: ['Python'],
    pages: []
  },
  {
    slug: 'webassethub',
    title: 'WebAssetHub',
    desc: [
      "Created a web scraper tool that monitors digital assets across multiple platforms and offers them at competitive prices",
      "Sold over 700 items"
    ],
    tech: ['Python', 'Selenium'],
    pages: []
  }
];

export function getProjectBySlug(slug) {
  return projects.find(p => p.slug === slug);
}

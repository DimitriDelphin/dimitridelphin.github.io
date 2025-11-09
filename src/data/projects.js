export const projects = [
  {
    slug: 'Je me tais',
    title: 'Je me tais',
    desc: [
      
    ],

  },
  {
    slug: 'La Plage aux Crabes',
    title: 'La Plage aux Crabes',
    desc: [

    ],

  },
  {
    slug: 'Paysage Anxieux',
    title: 'Paysage Anxieux',
    desc: [

    ],

  }
];

export function getProjectBySlug(slug) {
  return projects.find(p => p.slug === slug);
}

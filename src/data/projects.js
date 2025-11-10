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
    slug: 'Paysages Anxieux',
    title: 'Paysages Anxieux',
    desc: [

    ],

  }
];

export function getProjectBySlug(slug) {
  return projects.find(p => p.slug === slug);
}

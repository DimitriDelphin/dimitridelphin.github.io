How to add or edit Projects (B1 approach)
========================================

This site uses the B1 pattern: each project has its own Astro page under
`src/pages/projects/<slug>/index.astro`. A central data file (`src/data/projects.js`)
is used for listing projects and metadata.

Add a new project (step-by-step)
-------------------------------
1. Create a new folder for the project:

   src/pages/projects/<your-slug>/

2. Add an `index.astro` file inside that folder. You can copy an existing
   project page (for example `telejs/index.astro`) and update its content.

   - Edit the visible HTML in `index.astro` to add words, images, videos, etc.
   - There is a `project-content-area` section you can edit freely.

3. To show the project in the projects listing page, add or update an entry in
   `src/data/projects.js`. At minimum each project object should include:

   {
     slug: 'your-slug',
     title: 'Project Title',
     desc: ['short', 'description', 'lines'],
     tech: ['optional', 'array'],
     pages: [] // optional array of subpages
   }

4. Save and run the dev server (locally):

   npm run dev

Notes and tips
--------------
- If you prefer a single central place for long-form content, you can add a
  `content` field to the data object and render it in the `index.astro` template.
- Avoid spaces and accented characters in file names to keep URLs clean.
- If you want to keep a separate subpage (like `Je me tais.astro`), name it
  with a slug-friendly filename (e.g. `je-me-tais.astro`) and link to it from the
  main `index.astro` page.

Questions?
----------
Tell me if you want me to:

- Add automatic rendering of a `content` field from `projects.js`.
- Rename `Je me tais.astro` to a slug-friendly filename and wire a link.
- Add CSS for the `project-content-area` (responsive grid + responsive video).

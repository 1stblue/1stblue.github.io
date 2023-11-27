# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm build
$ npm serve
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### convert to pdf

```
npx --yes docs-to-pdf docusaurus --initialDocURLs="http://localhost:3000/docs" --contentSelector="div.refine-prose" --paginationSelector="a.pagination-nav__link.pagination-nav__link--next" --excludeSelectors=".margin-vert--xl a,[class^='tocCollapsible'],.breadcrumbs,.theme-edit-this-page,button" --coverImage="https://1stblue.github.io/img/favicon.png" --coverTitle="Bluepipe" --outputPDFFilename="converted-pdf.pdf" 
```

### Deployment

##### Github Actions
If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

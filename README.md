# React Country

A Next.js app with Styled-Components to get information about countries.

![React Country Homepage](./.github/screenshots/homepage.png)
![React Country Details page](./.github/screenshots/country-details.png)

## READMEs

- [Português](./.github/docs/README_pt.md)

## Features

- See all countries on the homepage
- Search for countries by name
- Filter countries by region
- View detailed information about a country, including its flag, capital, population, and more
- Navigation between bordering countries on the details page
- Responsive layout
- Animations

## Technologies

- [React](https://react.dev/)
- [Next.js](https://nextjs.org/docs/)
- [Styled-Components](https://styled-components.com/docs)
- [Framer-motion](https://www.framer.com/motion/)
- [Phosphor icons](https://phosphoricons.com/)
- [Axios](https://axios-http.com/docs/intro)
- [REST Countries API](https://restcountries.com/)

## Good practices/Patterns used

- React Hooks (useState, useEffect, useTransition, useDeferredValue)
- Custom hooks (useCountry, useFilteredCountries)
- Component Composition Pattern
- Next.js Dynamic Routes with getStaticProps and getStaticPaths
- Theming using ThemeProvider from Styled-Components
- Stylesheet rehydration using ServerStyleSheet for SSR (Server-side rendering) in Next.js with Styled-Components
- CSS Grid Layout & CSS Flexible Box Layout
- Media queries

## Getting Started

To get a local copy up and running, follow these steps:

1. Clone the repository
2. Install the dependencies:

```bash
# If you are using NPM
npm install

# If you are using Yarn
yarn install

# If you are using PNPM
pnpm install
```

3. Start the development server:

```bash
# If you are using NPM
npm run dev

# If you are using Yarn
yarn dev

# If you are using PNPM
pnpm dev
```

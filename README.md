<h1 align="center">SpaceX</h1>

<p align="center">SpaceX is a web application used to view information of past SpaceX mission launches. Built on top of SpaceX - GraphQL, it uses GraphQL Client - Apollo Client for queries and data handling. You can view past launches, it's details, and it's rocket used in Nested Routes.</p>

## Links

- [Repository](https://github.com/altinthaqi/spacex-launches.git "SpaceX Repo")

- [Live Deployment of the Project](https://www.spacex-launches.altinthaci.com "Live View")

- [SpaceX GraphQL](https://api.spacex.land/graphql/ "SpaceX GraphQL")

## To use the project

**Download** the project as **ZIP** or **Clone** it via:

```
git clone https://github.com/altinthaqi/pabau-assignment-spacex.git
```

Go to repository's directory and install all dependencies:

```
npm install
```

After Node Modules are installed, you're ready to start the project:

```
npm start
```

## Project's using these libraries: version

- @apollo/client: 3.5.7,
- @emotion/react: 11.7.1,
- @emotion/styled: 11.6.0,
- @mui/icons-material: 5.3.0,
- @mui/material: 5.3.0,
- graphql: 16.2.0,
- react-router-dom: 6.2.1,
- uuid: 8.3.2.

## Features:

- Fully responsive design (Mobile, Tablet, Desktop),
- Integrates Apollo Client and connects to GraphQL,
- Displays recent missions - launches,
- You can search launches by input,
- You can view the rocket used for each mission.

## Paths:

- /
- /:id

## Built With:

- ReactJS
- Apollo Client
- Material UI

## Why Modular Structure

- Each module has all the code related to it and only code from the module is imported,
- Helps folder and component organization by not importing code between different modules.

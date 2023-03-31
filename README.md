# About this project 

This is a project with microfrontends using Module Federation

There are 3 projects:
- Host : A react Aplication that have a home page , that is going to render the microfrontend
- MicroFrontEnd : A react Aplication that expose a Component to be used by other Apps
- Backend: Is a backend with Nest that enable an Api to get the data to show
### Parts

#### The host-app

The host app is going to be the container where the microfrontend where is going to be deployed, in this app we can add other components and combine them according the needs. For the moment, the project just have few component as a Footer, Header, Buttons, etc.
This app also has internationalization to identify the language and display the information according to it.

#### Character micro frontend

Is a small React app that displays some characters in a form of small cards with nice images. 

#### Backend

The backend is a NestJS app that expose an api to get characters depending on the name of the TV show or Movie.


# Running the app
1. Git clone the project
2. Create .env in the listCharacters folder with this content
```
API_SERVER_URL = "http://localhost:8080"
```
3. Run node setup.js

With all this steps then you can go to  [http://localhost:3000](http://localhost:3000) where you'll find the app running.

# Why Module Federation

MicroFrontEnds started with the idea of breaking a big app into small pieces and decoupling UI components from a single project. There are multiple frameworks available depending on the approach you choose.

Module Federation is a Run-Time-Composition on the client, similar to Single-SPA, another popular framework. With SPA, you can also use Module Federation to share code and libraries. Comparing the two, Module Federation provides more freedom since you can share any JavaScript logic between your applications, not just UI components.

Module Federation uses Webpack 5. If you examine the Webpack configuration, you can see that Webpack shares dependencies. For example, if you have multiple applications in React, Webpack will charge the dependency only once, but if a module needs an extra dependency, Webpack will check and charge this extra dependency (Federate Code). This helps Module Federation have bidirectional host and reduce the size of the bundles.

Starting a new project in Module Federation is a good option, and if you want to integrate with a legacy site, you can use server-side composition.

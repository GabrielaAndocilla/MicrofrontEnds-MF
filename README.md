# About this project 

This is a project with microfrontends using Module Federation

There are 3 projects:
- Host : A react Aplication that have a home page , that is going to render the microfrontend
- MicroFrontEnd : A react Aplication that expose a Component to be used by other Apps
- Backend: Is a backend with Nest that enable an Api to get the data to show
### Parts

#### The host-app

The host app is going to be the container where the microfrontend is going to be deployed, is this app we can add other component and combine them according the need. For the moment, the project just have few component as a Footer, Header, Buttons, etc.
This app also has internationalization to identify the language and display the information according to it.

#### Character micro frontend

Is a small React app displays some characters in a form of small cards with nice images. 

#### Backend

The backend is a NestJS app that expose an api to get character depending on the name of the TV show or Movie.


# Running the app

With both setup options you should be able to visit [http://localhost:3000](http://localhost:3000) where you'll find the app running.

# Why Module Federation

MicroFrontEnds started with the idea of break a big app in small pieces, decoupling UI components from a one only project.  To start implementing this we have multiple framework depending of the approach you choose.

Module Federation is a Run-Time-Composition on the client as another popular framework Single-SPA. With SPA you can chose also Module Federation to help you to share code and libraries. Compairing between them Module Federation give you more freedom because you can share any JavaScript logic between your aplication, no just UI components.

Module Federation use Webpack 5, if you see the webpack configuration you can see that webpack share the dependencies , so if you have multiple aplications in react webpack is going to be in charge to just charge that dependency one time, but if a module need an extra dependecy webpack will check and charge this extra dependencies (Federate Code), this helps to Module Federation to have bidirectional hosts and it will helps in the size of the of the bundles

For create a new project is a good option to start doing it, and if you want to integrate with a legacy site you can use server site composition.

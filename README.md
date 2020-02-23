#### Installation

> npm install

> npm run start (compiles for development)

> npm run build (builds for production)

> npm run deploy (builds for production and deploys it to a new gh-pages branch, for hosting by Github Pages)

Surf Camp Homepage & Admin page built with React
===========

It's hosted [here](https://ckpantelides.github.io/desert-point)

The backend code used to handle booking enquiries is [here](https://github.com/ckpantelides/desert-point-server). (The backend stores booking enquiries made through "contact" section of the homepage in a postgresql database, and serves them to the Admin page - below - when needed). 

The Admin page is [here](https://github.com/ckpantelides/deser-point/#/admin). This allows the owner of the surf camp to see any booking enquiries, to change their order with drag and drop, to mark them as "read" and to delete them. The Admin page would normally be a private route behind an authorisation page, but I've left it open for to demonstrate how it works.

#### Home page

![img1]

#### Admin page

![img2]

#### Code structure

The main website has four sections - HomePage, About, Pages, Contact/Booking. Each section is a separate component. There are also components for the NavBar, CustomHooks and the Admin page. The NavBar uses [react-scroll](https://www.npmjs.com/package/react-scroll) for smooth scrolling between sections when links are pressed. 

The Booking section contains a form for users to send booking enquiries to the surf camp owners. The CustomHooks component looks for input changes and updates the "inputs" object accordingly, which is sent to the backend . It also prevents the browser refreshing when the form is submitted.

The [Admin](https://github.com/ckpantelides/deser-point/#/admin) page retrieves any booking enquiries from the [backend](https://github.com/ckpantelides/desert-point-server) database. (The production version will hide the Admin route behind an auth page). Enquiries can be marked as "read", deleted and dragged and dropped into a new position. The [react-sortable-hocpage](https://www.npmjs.com/package/react-sortable-hoc) package handles the drag and drop function with [array-move](https://www.npmjs.com/package/array-move). The enquiries can be dragged vertically and horizontally. All changes can then be saved in the postgresql database on the backend.

As this is a static page, for the route to the Admin page to work I needed to use HashRouter of [react-router-dom](https://www.npmjs.com/package/react-router-dom).

#### Deploying the website

I used the [gh-pages](https://www.npmjs.com/package/gh-pages) package to help with deployment. It automatically creates a gh-pages branch and deletes all code outside of the build folder, and then moves the production code to the route of the gh-pages branch.

After installing gh-pages I added "homepage": "https://ckpantelides.github.io/desert-point" to the pacakage.json file. In the scripts object of packaged.json I added predeploy and deploy scripts: "predeploy": "npm run build", "deploy": "gh-pages -d build". I then ran the command "npm run deploy" (I was getting errors with yarn). This command can be run from the master branch - there's no need to create a local gh-pages branch first.

[img1]: https://github.com/ckpantelides/desert-point/blob/images/homepage350.png
[img2]: https://github.com/ckpantelides/desert-point/blob/images/admin350.png

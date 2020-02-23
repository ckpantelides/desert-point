#### Installation

> npm install

> npm run start (compiles for development)

> npm run build (compiles for production)

> npm run deploy (builds for production and then deploys it to a gh-pages hub, to allow for hosting by Github Pages)

Surf Camp Homepage & Admin page built with React
===========

It's hosted [here](https://ckpantelides.github.io/desert-point)

The backend code used to handle booking enquiries is [here](https://github.com/ckpantelides/desert-point-server). (The backend stores booking enquiries made through contact section of the above website in a Postgresql database, and serves them to the Admin page below). 

The Admin page is [here](https://github.com/ckpantelides/deser-point/#/admin). This allows the owner of the surf camp to see any booking enquiries, drag and drop them to reorder them, and mark the enquiries as "read". The Admin page would normally be behind an authorisation page, but I've left it open for to demonstrate how it works.

#### Home page

![img1]

#### Admin page

![img2]

#### Code structure

The main website has four sections - HomePage, About, Pages, Contact/Booking. Each section is a separate component. There are also components for the NavBar, CustomHooks and the Admin page. The NavBar uses [react-scroll](https://www.npmjs.com/package/react-scroll) for smooth scrolling when links are pressed. 

The Booking section contains a form for users to send booking enquiries to the surf camp owners. The CustomHooks components looks for input changes and updates the "inputs" object which is sent to the backend accordingly. It also prevents the browser refreshing when the form is submitted.

The [Admin](https://github.com/ckpantelides/deser-point/#/admin) page retrieves any booking enquiries from the [backend](https://github.com/ckpantelides/desert-point-server) database. (The production version will hide the Admin route behind an auth page). Enquiries can be marked as "read", deleted and dragged and dropped into a new position. The [react-sortable-hocpage](https://www.npmjs.com/package/react-sortable-hoc) package handles the drag and drop function with [array-move](https://www.npmjs.com/package/array-move). The changes can then be saved in the postgresql database on the backend.

[img1]: https://github.com/ckpantelides/desert-point/blob/images/homepage350.png
[img2]: https://github.com/ckpantelides/desert-point/blob/images/admin350.png

# WEB II front-end Brusselaers Niko

this is the front-end of a full-stack website and will give user randomly selected games by sending fetch request to 
the back-end part of this full-stack website.

## Table of content
- [WEB II front-end Brusselaers Niko](#web-ii-front-end-brusselaers-niko)
  - [Table of content](#table-of-content)
  - [Installation](#installation)
    - [Requirements](#requirements)
    - [Setup](#setup)
  - [links](#links)
  - [used references:](#used-references)
## Installation
### Requirements
to install and run this application you will need the following:
  - node: https://nodejs.org/en/

### Setup
After you have installed node, open a terminal and navigate to the folder directory by doing `cd folderDirectoryLocation`.
if you find yourself in the correct folder directory via your terminal,
install the node modules by doing the following command in the terminal: `npm install`.
if you want to run the back-end part localy on the same machine,
go inside `createAccount.js, loginWithId.js, index.js, login.js, profile.js` located in the `./src` folder 
and update the URL variable to `http://localhost:3000`,
if you are running the back-end part on another system on the same network: set the URL variable to `http://ip_adress:3000`
to find out what the ip adress is of your system:
    - windows: open up a command prompt(cmd) or powershell tab and type in `ipconfig`, and search for the IPv4 adress.
    - linux: open up a terminal and type in `hostname -I`
if you have done all the steps, enter the following command in the terminal `npm run build`.
## links
  - rawg api: https://rawg.io/apidocs
  - mongodb: https://www.mongodb.com/

## used references:
  - WEB II front-end niko brusselaers: https: //github.com/EHB-MCT/web2-frontend-niko-brusselaers
  - enable cors: https: //developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
  - css: https: //www.w3schools.com/css/default.asp
  - exporting function: https: //developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
  - how to use localstorage: https: //developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
  - how to use sessionstorage: https: //developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
  - how to add a class to an element javascript: https: //www.w3schools.com/howto/howto_js_add_class.asp
  - how to change input placeholder text https: //stackoverflow.com/questions/13506481/change-placeholder-text
  - adding event listener to multipule elements: https://www.kirupa.com/html5/handling_events_for_many_elements.htm
  - repeat a charachter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
  - how to create an overlay: https://www.w3schools.com/howto/howto_css_overlay.asp
  - WEB II back-end niko brusselaers: https: //github.com/EHB-MCT/web2-backend-niko-brusselaers
  - MongoDb documentation: https: //www.mongodb.com/docs/
  - MongoDb remove object from array: https: //stackoverflow.com/questions/15641492/mongodb-remove-object-from-array
  - RAWG api documentation: https: //api.rawg.io/docs/
  - switch statement javscript: https: //www.w3schools.com/js/js_switch.asp

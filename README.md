### **PG20 T4 Cloud Computing - A1: Cloud Prepped - Node/Express/Axios**
Submitted by: Ana Carolina Arellano
Date: 14/07/2021
Version: 3.2
----------
#### **Description of what the project does**
This version of the Warehouse app that I developed during term 3 includes a local server. It now contains a local server and consumes data from a local document containing the whole information of the products. 

#### **Download/Install**
---------
 - Browse to demo link
 - [Download Zip](https://github.com/anacarolina-arellano/WarehouseProject)
 - Clone the 'main' branch of repository into your machine
 - From the terminal go to the location where the repo was cloned
 - Change directory to locate yourself in the folder 'WarehouseProject'


#### **How to use**
--------
##### Client
- From the directory of 'WarehouseProject', go to the directory of 'Client'
- Run the command ´vue ui´ to run the project
- In your browser go to: http://localhost:8000
- Go to tasks -> client -> click on 'run task'
- Click on 'Open App'
- The App will open at http://localhost:4000/

* 

##### Server
- In a second terminal go to the diractory of 'WarehouseProject'
- From the directory of 'WarehouseProject', go to the directory of 'Server'
- Run the command ´npm start´ to run the project
- This terminal will receive the requests of the client

#### **Working endpoint**
--------
The endpoint that is currently working is the one of 'sale'. To see how it works, go to http://localhost:4000/ while the client is running. In the main menu choose the role of "Sales"

## Caveats
With more time I would add more endpoints and I would store the data on the server and fetch it from there. Fill the 'Sales Form' and click "Generate Fulfillment Order".
The information retrieved from the form will be sent from the Client to the Server. If the server receives the data it will send a confirmation message to the client and the client will print on screen that the information was sent successfully.

## Built With
* **Vue.js 2.0** - The web framework used.
* **Vuetify** - The library used for Vue's components.
* **CSS Grid** - Used for this application's main styling structure.
* **CSS Flexbox** - Used as a sub structure and supports this application's styling.

## Authors
* **Clinton Jay Ramonida** - *Integrated Vue.js 2.0, (Expanded from HTML5AppTemplate).*
* **Scott Henshaw** - *Initial work (HTML5AppTemplate).*
* **Ana Carolina Arellano** - *Warehouse and API implementation*

## License
This project is licensed under the MIT License - see the LICENSE.md file for details


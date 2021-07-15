### **PG20 T4 Cloud Computing - A1: Cloud Prepped - Node/Express/Axios**
Submitted by: Ana Carolina Arellano
Date: 12/07/2021
Version: 3
----------
#### **Description of what the project does**
This is the first version of the Warehouse app that I developed during term 3. It now contains a local server and consumes data from a document that mimics how  an API works and gives the possibility to the user of adding more products to the warehouse through the inventory manager, which are then displayed in the customer role. 

#### **Download/Install**
---------
 - Browse to demo link
 - [Download Zip](https://github.com/anacarolina-arellano/FirstVueApp)
 - Clone the 'master' branch of repository into your machine
 - From the terminal go to the location where the repo was cloned
 - From the 'FirstVueApp' folder run the command 'npm install' to install the dependencies


#### **How to use**
--------
- In the terminal go to the project
- Run the command 'vue ui' to run the project
##### Client
- In your browser go to: http://localhost:8000
- Go to tasks -> client -> click on 'run task'
- Click on 'Open App'

* In order to add a new product to the warehouse you need to write the name of the image with its extension. Some available images are: shoes.jpeg, swimwear.jpeg and shirt.png

* The shopping cart is now working, you have to click on the  yellow rectangle that sais the name and then you can click the "my cart" button, were it will be displayed.

##### Server
- In your browser go to: http://localhost:8000
- Go to tasks -> server -> click on 'run task' or run the comand `nodemon -r esm --inspect src/server/Server` in the console 
- The app will be open at: http://localhost:8080


## Caveats


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


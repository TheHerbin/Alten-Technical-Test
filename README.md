# Description
This is an small project that I am Submitting in order to integrate the ALTEN team in **Node.js** and **expressJS**.

The whole project in developped in english for good practises despite french being my main language.

It actually contains the original subject with the features the API is supposed to have (**alten-shop-front-products** folder),

Besides, it contains an **index.js** file that is the main file containing the API, the file that ends with **.postman_collection** is a collection of postman tests and requests that you can use to test the API and the file, the one that ends with **.sql** is the database necessary for the API to function.

All the others are generated files by the framework and are also necessary for it to function.

# Tools used
    - Javascript (language used)
    - NodeJs (Runtime)
    - ExpressJs (Project Framework)
    - Xampp (local APACHE2 server)
    - Postman (API testing)
    - Mysql (SGBDR)
    - PhpMyAdmin (Database management)


# Installation

After downloading the API, you have to install it first by using **NodeJS** : 

    npm install

Then, be sure to have a running server with **APACHE2** and **mysql** installed and install the database by running the SQL request in the **.sql** file.
Keep in mind that database contains a few entries, you can delete them if wanted.

If everything above is done, you can change your database credentials in the **index.js** file since it doesn't have a **.env** file yet.

Then, you can run your application by typing in your terminal : 

    node index.js
If the server responds by : "Server listening", then it is ready !

You can now use Postman to test the API.

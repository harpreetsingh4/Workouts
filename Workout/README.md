#README
=======================

## Installation
=================
open terminal run the following command  
	sudo npm install

## Running
=================
open terminal run the following command 
	run "node app.js"

# Overview
-----------------

Project Structure
-----------------
Bootstrapping for wokring on smaller windows and large windows size. 
Passport js for using oauth2 over google. 
Data is stored on mongodb.atlas. 

| Name                               | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
| **config**/passport.js             | Passport Local and OAuth strategies, plus login middleware.  |
| **controllers**/workout.js         | Controller for workout form                                  |
| **controllers**/result.js          | Controller for result.                                       |
| **controllers**/home.js            | Controller for home page (index).                            |
| **controllers**/user.js            | Controller for user account management.                      |
| **models**/User.js                 | Mongoose schema and model for User.                          |
| **models**/workout.js              | Mongoose schema and model for workout.                       |
| **public**/                        | Static assets (fonts, css, js, img).                         |
| **public**/**js**/application.js   | Specify client-side JavaScript dependencies.                 |
| **public**/**js**/main.js          | Place your client-side JavaScript here.                      |
| **public**/**css**/main.scss       | Main stylesheet for your app.                                |
| **public/css/themes**/default.scss | Some Bootstrap overrides to make it look prettier.           |
| **views/account**/                 | Templates for *login, password reset, signup, profile*.      |
| **views/partials**/flash.pug       | Error, info and success flash notifications.                 |
| **views/partials**/header.pug      | Navbar partial template.                                     |
| **views/partials**/footer.pug      | Footer partial template.                                     |
| **views**/layout.pug               | Base template.                                               |
| **views**/result.pug               | result page template.                                        |
| **views**/workout.pug              | workout page template.                                       |
| **views**/home.pug                 | Home page template.                                          |
| env.example                        | Your API keys, tokens, passwords and database URI.           |
| package.json                       | NPM dependencies.                                            |
| package-lock.json                  | Contains exact versions of NPM dependencies in package.json. |
| app.js                             | Main application that is the help start server and routes    |


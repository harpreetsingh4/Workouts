#README
-------------
Change directory into Workout

## Installation
----------------
open terminal run the following command  
```bash
sudo npm install
```

## Running
----------------
open terminal run the following command 
```bash
node app.js
```

# Overview
-----------------
This project is a Full Stack development project that utilize google oauth2 as a login as well as normal login which is on the passport.js file keys are in env.example file. Also the project uses boostraping which allows the web page to fit on any device because it is base template of css and js which can be found on the layout.pug file. The project will first bring you to home page which will only allow user to read the importance of fitness and login. After logining or creating account the user information is stored on mongodb atlas database which is a cloud scalable storage. Next, user can access the workout page where they can enter submit there workout which will be stored on the mongodb after that the user can view. Lastly, when when the user goes to the result page where it will pull all saved result from the database and print it out on the result page. 


Project Structure
-----------------
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


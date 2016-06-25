

# Bookstore
Bookstore is a simple application which show-cases the use of loopback. Application has two models, book and review. Each book can have many reviews. This uses Loopback memory connector. The book and review data gets persisted under \mydata.json file.


## Install and run the application

To run this application, clone this repository on to your local computer.

$cd bookstore

$npm install

$node .


## View and Explore APIs

Explore API at http://localhost:3000/explorer -- user can create, retrieve, update and delete books and reviews using POST, GET etc. One book and a review is already created and persisted in \mydata.json file when you install this app. You can add more books and reviews to each of the books you create.

Bookstore web application is at http://localhost:3000/ -- This prints "LoopBack Rocks! Hello World.. ".  This shows how static web page can be used in your application. See server/middleware.json and /client/index.html files under the application directory. Visit https://docs.strongloop.com/display/public/LB/Add+a+static+web+page for documentation.

Invoke http://localhost:3000/api/books/getName?id=1 This will show the book name with id=1 which should show {"name":"Name of the book is: Harry Potter"}. This show-cases how user can extend the APIs. Visit https://docs.strongloop.com/display/public/LB/Extend+your+API for documentation.

Invoke http://localhost:3000/ping This will print the message 'pong'. This show-cases how user can add custom express route. Visit https://docs.strongloop.com/display/public/LB/Add+a+custom+Express+route for documentation.

Invoke  http://localhost:3000/explorer and click on 'review' and using POST, create a new review for any book. On the command line console where you started this application, you will see a message, 'remote hook called'. This shows how to invoke remote hook which is a function that gets executed before or after a remote method. common/models/review.js shows the remote method which gets executed before create() review. Visit https://docs.strongloop.com/display/public/LB/Define+a+remote+hook for documentation.




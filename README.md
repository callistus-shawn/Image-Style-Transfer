# Movie_Recommendation_Site
Implementation of Movie Recommendation System Using Flask, HTML, CSS and SQL

## Files
The repository includes the following files:

* content.py: A Python script that contains the Movie Recommendation Model which is loaded on to a pickle file.
* model.pkl: A pickle file that contains the Recommendation Model.
* app.py: The main Flask application that redirects all the html pages and connects to the sql database to store and check the records during login.
### Templates:
It contain all the html files.
* index.html: A HTML file that serves as the first page i.e the register page.
![Screenshot 2023-04-02 155028](https://user-images.githubusercontent.com/116349435/229347132-f040536d-e117-4a77-bf3c-fb64bdb15fe5.png)


* success.html: A HTML file that serves as the login page. If they already have an account, this page is opened.

![Screenshot 2023-04-02 155042](https://user-images.githubusercontent.com/116349435/229347143-410eca6c-435d-4f8a-9627-13a2d6c68642.png)

* pred.html: A HTML file which is the home page and predicts a few suggestions based on the input provided by the user.
![Screenshot 2023-04-02 155055](https://user-images.githubusercontent.com/116349435/229347147-c2633ed5-34fe-473d-ac5a-4449b65cb7f0.png)


### Static:
It contains all the css files and background image.
   * css.css and pred.css : CSS files that contains the styles for the HTML pages in the application. It is used to format and style the HTML elements present in             index.html, success.html, and pred.html.


## How to run the application
* Clone the repository to your local machine
* Ensure that Python, Flask, and all necessary dependencies are installed.
* Open the terminal/command prompt and navigate to the cloned directory.
* Run python app.py to start the application.
* Open a web browser and go to http://localhost:5000 to access the page.
* Enter the username and password to access the homepage page.
* In that page, enter any popular movie of your choice in the text field.
* Then you'll get a few suggestions listed below.

## Dataset
* tmdb_5000_movies
* tmbd_5000_credits 

These datasets are taken from kaggle and merged.

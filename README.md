# Image Style Transfer using CycleGANs
Image style transfer involves modifying an image to adopt the visual style of another image while preserving its original content. CycleGAN (Cycle-Consistent Generative Adversarial Network) enables this transformation without requiring paired training examples. It uses two GANs, each consisting of a generator and a discriminator, to translate images between two domains. 
* The key innovation is cycle consistency, where an image translated to the other domain and then back should closely resemble the original, ensuring content preservation. The model is trained using both cycle consistency loss and adversarial loss, achieving high-quality style transfer.

#### Front-end: 
Simple UI with React to create a dynamic and responsive interface for users to upload and transform images in real time.
![] https://github.com/callistus-shawn/Image-Style-Transfer/blob/main/test/readme.gif
#### Server : 
Using Flask for the backend allows seamless integration of the image style transfer models with a lightweight and flexible web server.
#### Models:




## How to run the application
* Clone the repository to your local machine
* Ensure that Python, Flask, and all necessary dependencies are installed.
* Open the terminal/command prompt and navigate to the cloned directory.
* Run python app.py to start the application.
* Open a web browser and go to http://localhost:5000 to access the page.
* Enter the username and password to access the homepage page.
* In that page, enter any popular movie of your choice in the text field.
* Then you'll get a few suggestions listed below.



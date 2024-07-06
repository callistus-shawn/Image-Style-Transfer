# Image Style Transfer using CycleGANs
Image style transfer involves modifying an image to adopt the visual style of another image while preserving its original content. CycleGAN (Cycle-Consistent Generative Adversarial Network) enables this transformation without requiring paired training examples. 
* It uses two GANs, each consisting of a generator and a discriminator, to translate images between two domains. 
* The key innovation is cycle consistency, where an image translated to the other domain and then back should closely resemble the original, ensuring content preservation. The model is trained using both cycle consistency loss and adversarial loss, achieving high-quality style transfer.
Styles such as Pencil Sketching can be done using OpenCV transformations
### Styles:
* **Ukiyo-e**: Ukiyo-e is a traditional Japanese art style with a creamish tone to its art. (Cycle-GAN)
* **Monet**: Monet's style uses quick, loose brushstrokes; Style of impressionism. (Cycle-GAN)
* **Pencil Sketch**: Pencil sketching uses shading and lines to make detailed black-and-white drawings (OpenCV)

![Screenshot 2024-07-06 092831](https://github.com/callistus-shawn/Image-Style-Transfer/assets/174804283/9320c10d-c105-4045-9ef5-5a1b60c5fdce)

We chose these styles just to show variety. There's lot more styles you could add to this in the future.


### Front-end: 
Simple UI with **React** to create a dynamic and responsive interface for users to upload and transform images in real time.

![]( https://github.com/callistus-shawn/Image-Style-Transfer/blob/main/test/readme.gif)
### Server : 
Using **Flask** for the backend allows seamless integration of the image style transfer models with front-end.

### Datasets:
* I’m Something of a Painter Myself- Kaggle
* Best Artworks of All Time -Kaggle




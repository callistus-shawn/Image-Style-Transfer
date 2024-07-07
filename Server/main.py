from flask import Flask, request,send_file
import tensorflow_addons as tfa
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np
from io import BytesIO
from flask_cors import CORS
from server.data import get_data
from models.pencil import pencil

app = Flask(__name__)
CORS(app) 

@app.route("/data",methods=["POST"])
def data():
    
    file = request.files['file']
    model=None
    if(request.form['style']=="Ukiyo-e"):
        model=load_model("C:/Users/monik/image/server/art_generator8.h5") 
    elif(request.form['style']=="Monet"):
        model=load_model("C:/Users/monik/image/server/monet_generator5.h5") 
    elif(request.form['style']=="Pencil"):
        new=pencil(file)

    
    if(model):
        photo = get_data(file)
        pred=model.predict(photo)
        new=(pred[0]*127.5+127.5).astype(np.uint8)

    im = Image.fromarray(new)
    buffer=BytesIO()
    im.save(buffer,format="JPEG")
    buffer.seek(0)
    return send_file(buffer,mimetype='image/jpeg')

if __name__=='__main__':
    app.run(host='localhost',port=8000, debug=True)
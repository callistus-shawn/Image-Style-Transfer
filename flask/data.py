import cv2
import tensorflow as tf
import numpy as np

HEIGHT = 256
WIDTH = 256
CHANNELS = 3

def get_data(file):
    file_bytes = file.read()
    np_arr=np.frombuffer(file_bytes, np.uint8)
    image= cv2.imdecode(np_arr, cv2.IMREAD_COLOR)
    image= cv2.resize(image,dsize=(256,256))
    image= cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    image=  tf.convert_to_tensor(image, dtype=tf.float32)
    image= tf.reshape(image, [1,HEIGHT, WIDTH, CHANNELS])
    img= tf.cast(image, dtype=tf.float32)
    return (img / 127.5) - 1.0



import cv2
import numpy as np
def pencil(file):
    file_bytes = file.read()
    np_arr=np.frombuffer(file_bytes, np.uint8)
    image= cv2.imdecode(np_arr, cv2.IMREAD_COLOR)
    gray_img = cv2.cvtColor(image,cv2.COLOR_BGR2GRAY)
    inv_gray_img = cv2.bitwise_not(gray_img)
    blur_img = cv2.GaussianBlur(inv_gray_img,(0,0),sigmaX=9)
    inv_blur_img = cv2.bitwise_not(blur_img)
    pencil_img = cv2.divide(gray_img,inv_blur_img,scale = 256.0)
    return pencil_img
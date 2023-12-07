from deepface import DeepFace
import cv2
import matplotlib.pyplot as plt

img1=cv2.imread("img1.jpg")
img2=cv2.imread("img2.jpg")
# plt.imshow(img1[:,:,::-1])
# plt.show()
# plt.imshow(img2[:,:,::-1])
# plt.show()

# imgHeight = img.shape[0]
# imgWidth = img.shape[1]

# classId = [] 
# confidences = [] 
# boxes = []

# for scale in preds: 
# for pred in scale: 
#     scores = pred[5:] 
#     clss = np.argmax(scores) 
#     confidence = scores[clss]

#     if confidence > scoreThres: 
#     xc = int(pred[0]*imgWidth) 
#     yc = int(pred[1]*imgHeight) 
#     w = int(pred[2]*imgWidth) 
#     h = int(pred[3]*imgHeight) 
#     x = xc - w/2
#     y = yc - h/2
    
#     classId.append(clss) 
#     confidences.append(float(confidence)) 
#     boxes.append([x, y, w, h])

# selected = cv2.dnn.NMSBoxes(bboxes=boxes, 
#                             scores=confidences, 
#                             score_threshold=scoreThres, 
#                             nms_threshold=nmsThres)

# fboxes = [boxes[j] for j in selected[:,0]]
# fclasses = [str(classes[classId[j]]) for j in selected[:,0]] 

# result = DeepFace.verify(img1,img2)
# print(result)
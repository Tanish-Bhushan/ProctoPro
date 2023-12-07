import cv2 



def fd():
        video=cv2.VideoCapture(0)
        eyedetect = cv2.CascadeClassifier("haarcascade_eye_tree_eyeglasses.xml")
        facedetect = cv2.CascadeClassifier("haarcascade_frontalface_default.xml")
        while True:
                ret,frame=video.read()
                gray=cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
                faces = facedetect.detectMultiScale(gray, 1.3, 5)
                eyes = eyedetect.detectMultiScale(gray, 1.3, 5)
                for (x,y,w,h) in faces:
                        cv2.rectangle(frame,(x,y),(x+w,y+h),(0,255,0),2)
                for (x,y,w,h) in eyes:
                        cv2.rectangle(frame,(x,y),(x+w,y+h),(0,0,255),2)
                if len(eyes)<=0:
                        cv2.putText(frame,"Don't look away from the screen...",(50, 50),cv2.FONT_HERSHEY_SIMPLEX,1,(255, 0, 0),2, cv2.LINE_AA)
                if len(faces)>1:
                        cv2.putText(frame,"multiple faces detected...",(100, 100),cv2.FONT_HERSHEY_SIMPLEX,1,(255, 0, 0),2, cv2.LINE_AA)
                                
                cv2.imshow("Frame",frame)

                if cv2.waitKey(1)==ord('q'):
                        break

        video.release()
        cv2.destroyAllWindows()
        print("stopped...")
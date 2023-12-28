from tkinter import *
from tkinter import messagebox
from face_Detection import fd
import re
import threading
from quiz import runQuiz
import time

regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b'
f = open('data.json')

def enableIt():
      test_start['state']=NORMAL
      
def dest():
      splash_root.destroy()
      
splash_root = Tk()#splash screen
splash_root.attributes('-fullscreen', True)
Label(splash_root, text="ProctoPro",font=("Arial", 25) ).place(x=550,y=300)
Label(splash_root, text="Exams simplified",font=("Arial", 10),fg="gray" ).place(x=650,y=350)
Button(splash_root, text='Proceed to Enter Details', fg='black', bg='white',command=dest).place(x=560,y=400)


gui = Tk()#main window 
gui.configure() 
gui.title("ProctoPro") 
gui.attributes('-fullscreen', True)
okvar=IntVar(gui)

def all_children (window) :
    _list = window.winfo_children()

    for item in _list :
        if item.winfo_children() :
            _list.extend(item.winfo_children())

    return _list


def start_test():
	test_start.destroy()
	thread1 = threading.Thread(target=fd)
	thread2 = threading.Thread(target=runQuiz)
	thread1.start()
	time.sleep(5)
	thread2.start()
	gui.destroy()
	
      
def equalpress(): 
	n = name.get(1.0, "end-1c")
	e= email.get(1.0, "end-1c")
      
	if len(n)==0:
		messagebox.showinfo("Error",("Enter name"))
		return
	if not re.fullmatch(regex,e):
		messagebox.showinfo("Error",("Enter valid Email"))
		return
             
	messagebox.showinfo("Alert",("Congratulations "+n+", details have been Submitted!"))
      
	widget_list = all_children(gui)#remove all previous window components
	for item in widget_list:
		item.destroy()
            
	Label(gui,text="You are ready to Proceed for the test",font=("Arial", 15),background="green" ).place(x=500,y=100)
	global test_start
	rules=open("rules&guidelines.txt",'r')
	text=rules.read()
	rules.close()
	Label(gui, text="Rule to follow during the exam:",anchor="w", justify="left",pady=10,font=("Arial", 15) ).place(x=400,y=200)
	Label(gui, text=text,anchor="w", justify="left",pady=10,font=("Arial", 12) ).place(x=400,y=250)
	Radiobutton(gui, text="I agree", value=1,command=enableIt).place(x=600,y=500)
	test_start=Button(gui, text='Start Test', fg='black', bg='white',state='disabled',command=start_test, height=1, width=7)
	test_start.place(x=600,y=530)
      

Label(gui,text="SignUp to start the Test",font=("Arial", 20) ).place(x=500,y=150) 
Label(gui,text="Enter your name:").place(x=400,y=250) #start details 
name = Text(gui, height = 1, width = 50)
name.place(x=510,y=250)
Label(gui,text="Enter your Email:").place(x=400,y=300) 
email = Text(gui, height = 1, width = 50)
email.place(x=510,y=300)
Button(gui, text='Submit details', fg='black', bg='white',command=equalpress, height=1, width=15,background="blue",foreground="white",font=("Arial",12)).place(x=600,y=350)

# quiz = Quiz()
gui.mainloop() 

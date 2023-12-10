from tkinter import *
from tkinter import messagebox
from face_Detection import fd
import re
import threading
import json
import time

regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b'
f = open('data.json')

def enableIt():
      agree['state']=NORMAL
      
def dest():
      splash_root.destroy()
      
splash_root = Tk()#splash screen
splash_root.geometry("640x420")
splash_label = Label(splash_root, text="ProctoPro", font=18)
splash_label.pack()
rules=open("rules&guidelines.txt",'r')
text=rules.read()
rules.close()
Label(splash_root, text=text,anchor="w", justify="left",pady=10,font=('Helvetica',12)).pack()
Radiobutton(splash_root, text="I agree", value=1,command=enableIt).pack()
agree=Button(splash_root, text='I Agree', fg='black', bg='white',state=DISABLED,command=dest)
agree.pack()

gui = Tk()#main window 
gui.configure() 
gui.title("ProctoPro") 
gui.geometry("640x420") 
okvar=IntVar(gui)

def all_children (window) :
    _list = window.winfo_children()

    for item in _list :
        if item.winfo_children() :
            _list.extend(item.winfo_children())

    return _list


def set_ques():
	okvar.set(1)
	
def nfun():
	data = json.load(f)
	Label(gui,text="Quiz").pack()
	ques=Label(gui)
	ques.pack()
	v1=IntVar(gui,value=0)
	v2=IntVar(gui,value=0)
	v3=IntVar(gui,value=0)
	v4=IntVar(gui,value=0)
	
	opt1=Radiobutton(gui,variable = v1)
	opt1.pack()
	opt2=Radiobutton(gui,variable = v2)
	opt2.pack()
	opt3=Radiobutton(gui,variable = v3)
	opt3.pack()
	opt4=Radiobutton(gui,variable = v4)
	opt4.pack()
	Button(gui, text='Next', fg='black', bg='white',command=set_ques, height=1, width=7).pack()

	

	for qno in range(4):
		ques['text']=data['question'][qno]
		opt1['text']=data['options'][qno][0]
		opt2['text']=data['options'][qno][1]
		opt3['text']=data['options'][qno][2]
		opt4['text']=data['options'][qno][3]
		
		
		gui.wait_variable(okvar)
		okvar.set(0)
	messagebox.showinfo("Test End",("Test Completed!"))
	f.close()
	gui.destroy()
	

def start_test():
	test_start.destroy()
	thread1 = threading.Thread(target=fd)
	thread2 = threading.Thread(target=nfun)
	thread1.start()
	time.sleep(5)
	thread2.start()
	
      
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
            
	Label(gui,text="Welcome "+n).pack()
	global test_start
	test_start=Button(gui, text='Start Test', fg='black', bg='white',command=start_test, height=1, width=7)
	test_start.place(x=280,y=230)
	
Label(gui,text="Enter your name:").place(x=20,y=150) #start details 
name = Text(gui, height = 1, width = 50)
name.place(x=150,y=150)
Label(gui,text="Enter your Email:").place(x=20,y=190) 
email = Text(gui, height = 1, width = 50)
email.place(x=150,y=190)
Button(gui, text='Submit', fg='black', bg='white',command=equalpress, height=1, width=7).place(x=280,y=230)

# quiz = Quiz()
gui.mainloop() 

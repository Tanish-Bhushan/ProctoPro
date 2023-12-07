from tkinter import *
from tkinter import messagebox
from face_Detection import fd
import re

regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b'

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

def all_children (window) :
    _list = window.winfo_children()

    for item in _list :
        if item.winfo_children() :
            _list.extend(item.winfo_children())

    return _list

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
	Button(gui, text='Start', fg='black', bg='white',command=fd, height=1, width=7).place(x=280,y=230)

	
Label(gui,text="Enter your name:").place(x=20,y=150) #start details 
name = Text(gui, height = 1, width = 50)
name.place(x=150,y=150)
Label(gui,text="Enter your Email:").place(x=20,y=190) 
email = Text(gui, height = 1, width = 50)
email.place(x=150,y=190)
Button(gui, text='Submit', fg='black', bg='white',command=equalpress, height=1, width=7).place(x=280,y=230)

gui.mainloop() 

import threading
import time

def function1():
    while True:
        print("Function 1")
        

def function2():
    while True:
        print("Function 2")
        

# Create threads for each function
thread1 = threading.Thread(target=function1)
thread2 = threading.Thread(target=function2)

# Start the threads
thread1.start()
thread2.start()

# Keep the main thread running
while True:
    pass
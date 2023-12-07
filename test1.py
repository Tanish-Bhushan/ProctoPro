import tkinter as tk

root = tk.Tk()

# Create a Label with left-aligned text using anchor
label_left = tk.Label(root, text="Left Aligned", anchor="w",width=100)
label_left.pack()

root.mainloop()

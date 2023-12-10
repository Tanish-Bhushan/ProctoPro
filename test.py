# Global variable
global global_var
global_var=10

def change_global_variable():
    # Use the global keyword to indicate that you want to modify the global variable
    
    global global_var
    global_var = 20

# Print the value before the function call
print("Before:", global_var)

# Call the function to change the global variable
change_global_variable()

# Print the value after the function call
print("After:", global_var)

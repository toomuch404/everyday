from datetime import datetime

val = raw_input("Do you want the time? y/n ")

if val == "y":
	print(datetime.now())
else:
	print("wtf")

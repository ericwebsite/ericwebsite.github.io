#Forever
import time
print("I am a story teller.")
time.sleep(3)
print("So, here is a temple")
print("You went in. I come with you. You are here.")
time.sleep(3)
#unimport time
d = input("Do you want to go left, or stay where you are(s): ")
if d == "s":
    print("You are walking to a pool, but you don't know")
    print("SPLASH!!!!!!!!!!!!!!!!!!!!!You lose by drouning")
else:
    print("You go to a open panel")
    output = ""
    #Uh oh!
    time.sleep(3)
    print("You saw red, red, green")
    while output != "rrg":
        output = ""
        for a in range(3):
            press = input("Do you want to push red(r),or green(not r): ")
            if press == "r":
                print("red added")
                output += "r"
            else:
                print("green added")
                output += "g"
    time.sleep(3)
    b = int(input("What is the ones place of ninty nine 99s?: "))
    if b == 9:
        print("corecto")
        
        
        
    else:
        print("incorecto")
        print("it's 9, not ",b)
    c = input("Call(c), or run(r): ")
    while c == "r":
        print("You can't run. You are trapped")
    print("Call seceded!")
    print("But you still can't get out.")
    print("To be continued...")
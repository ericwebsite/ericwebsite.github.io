import random
print("Importable +")
import time
time.sleep(3)
print("You went in a temple. I dare you. ")
print(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,")
time.sleep(3)
print("You saw...")
print("()()()()()()()()()()()()")
time.sleep(3)
power = input("Choose a power. waterBreathing(w),fireProtection(fp),BlastProtection(bp),ScaryMask(sm)")
time.sleep(3)
print("T-rex-er comes")
c = random.randint(0,1)
time.sleep(3)
if c == 1:
    if power == "fp":
        print("You win!!!!!!!!!!!!!!!!")
    else:
        print("Fire killed you")
else:
    d = input("Go left(l) or right(r)")
    time.sleep(3)
    if d == "l":
        print ("TNT is active. BOOM!!!!!!!!!!!!")
        time.sleep(3)
        if power == "bp":
            print("You win")
        else:
            print("TNT killed you")
    else:
        print("Another 2-choice intersect?")
        time.sleep(3)
        lor = input("Go left(l) or right(r)")
        time.sleep(3)
        if lor == "l":
            print("water rises")
            time.sleep(3)
            if power == "w":
                print("You win!!!!!!!!!")
            else:
                print("water killed you, you can't breath")
        else:
            print("There is evil girls")
            time.sleep(3)
            if power == "sm":
                print("You win")
            else:
                print("evil wins")

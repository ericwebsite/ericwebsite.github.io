import random #for dice
import time #for rolling time
print("You are playing a 20-square board game called racing game.")
nop = int(input("How many players are playing?2, 3, or 4: "))
while nop < 2 or nop > 4:
    nop = int(input("Invalid syntax. Type 2, 3, or 4: "))
s1 = 0
s2 = 0
s3 = 0
s4 = 0
while s1 < 20 and s2 < 20 and s3 < 20 and s4 < 20: #check if nobody won
    for turn in range(nop):#for evey player
        if s1 < 20 and s2 < 20 and s3 < 20 and s4 < 20:#to skip player(s) if someone won.
            print("player"+str(turn+1)+", You are up")#print that he is up
            print("rolling...")
            dice = int(random.randint(1,6))#rolls dice
            time.sleep(random.randint(1,5))#with time
            #chech who is it
            #and print the level on
            if turn == 0:
                s1 += dice
                print(s1)
            elif turn == 1:
                s2 += dice
                print(s2)
            elif turn == 2:
                s3 += dice
                print(s3)
            else:
                s4 += dice
                print(s4)
if s1 > 19:#check who won
    w = 1
elif s2 > 19:
    w = 2
elif s3 > 19:
    w = 3
else:
    w = 4
print("player"+str(w)+"wins!")#Print thap player won

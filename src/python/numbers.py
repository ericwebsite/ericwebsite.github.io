import time
score = 0
qu = ["2*3=","What is a quater of 200","23*23\/23=","What is this language?","What is 'w' + 'e'"]
awn = ["6","50","23","python","we"]
for a in range(5):
    aw = input(qu[a])
    if aw == awn[a]:
        print("correct")
        score += 1
    else:
        print("incorrect")
print("Your score is ",score)















































#secret line!

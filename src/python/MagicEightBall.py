import random
b = 'q'
while b != 'quit':
    b = input('What is your Yes or No question(or quit)')

    choices = ["Yes","No","Maybe","Try again","I DON'T KNOW","Blah blah blah","Think","Auto = No"]
    a = int(random.randint(0,7))
    print(choices[a])

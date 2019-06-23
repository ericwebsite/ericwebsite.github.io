# adventure game
print('Welcome to the Santa Cruz Mountain Adventure Game!')
print('***************************************************')
print('You are visiting Santa Cruz, Canlifornia.')
print('You go a evening hike alone in the mountains!.')
print('You can pick one item to take with you - ')
print('map(m), flashlight(f), chochlate(c), rope(r), or sticks(s)')
item = input('What will you choose?: ')
print('You hear a humming sound.')
choice1 = input('do you follow ihe sound? Enter y or n:')
while not choice1 == y or choice1 == n:
    choice1 = input('Invalid syntax. Enter y or n:')
if choice1 == 'y':
    print('You keep moving closer to the sound.')
    print('The sound suddenly stops.')
    print('You are now LOST!  ... ')
    print('You try to call on your phone, but there is no signal')
    direction = input('which direction do you want to go? north, south, east or west: ')
    if direction == 'north':
        print('You reach a abandomed cabin.')
        if item == 'm':
            print('You use the map and find your way home.')
            print('CONGRATULATIONS! You won the game.')
        else:
            print('If you had a map, you could find your way from here.')
            print('---You are still lost. you lost the game')
    elif direction == 'south':
        print('You reach a river with a broken bridge.')
        if item == 'r' or item == 's':
            print('You choose a item that can fix the bridge.')
            print('You fix the bridge, cross over, and find your way home.')
            print('CONGRATULATIONS! Yuu won the game.')
        else:
            print('If you had a rope or a stick, you can fix the bridge.')
            print('---You are still lost.    You lost the game.---')
    elif direction == 'west':
        print('You are walking   and trip over a fallen log.')
        print('You have hurt your foot. You sit down and wait for help')
        print('This could be for a long time. You are still lost.')
        print('---you lost the game.---')
    else:
        print('You reach the side of the highway. It is dark.')
        if item == 'f':
            print('You use the flashlight to signal.')
            print('A car stops and give you a ride home.')
            print('CONGRATULATIONS! You got out safely. You won the game.')
        else:
            print('If you had a flashlight, you could siginal for help.')
            print('---You are still lost. You lost the game.--')
else:
    print('Good idea. You are not taking risks. ')
    print('you start walking back to your starting point.')
    print('You realize youare LOST! ')
    print('The sound is behind you and is getting louder. You panic')
    action = input('Do you start running (r), stop to make a call (c)?:')
    while action == 'c':
        print('The call does not go through')
        input('Do you want to run (r), or try calling again (c)?:')
    print('You are running fast. The sound gets realy loud')
    print('A woman with a electric scooter comes up behind you.')
    awnswer = input('She says "Name my favorite progaming language.": ')
    if awnswer.lower() == 'python':
        print('She says "yes, Python is my favorite progaming language')
        print('"If you have some chochlate, I can help you."')
        if item == 'c':
            print('Luckily you choose corectly!')
            print('You gave her the chochlate.')
            print('She helps you get home.')
            print('CONGRATULATIONS! You got out safely. You won the game.')
        else:
            print('You should have chosen the chochlate!')
            print('She rides away, leaving you alone and lost.')
            print('You lost the game.')
    else:
        print('She does not like your awnswer.')
        print('She rides away, leaving you lost.')
        print('You lost the game.')

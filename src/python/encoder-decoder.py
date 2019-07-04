s = int(input("Type a number to swap"))
c = input("encoding(e)or decoding(other)")
if c != "e":
    s = 26-s
m = input("Type a message")
m = m.upper()
output=""
for letter in m:
    if letter.isupper():
        value = ord(letter) + s
        letter = chr(value)
        if not letter.isupper():
            value -= 26
            letter = chr(value)
    output += letter
print("Output message "+output)

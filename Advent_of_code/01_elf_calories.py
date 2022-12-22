calArray = open("01_elf_input.txt", "r").readlines()
newCalArray = [item.strip("\n") for item in calArray]

sum = 0
sumArr = []

for number in newCalArray:
    if number == '':
        sumArr.append(sum)
        sum = 0
        continue
    sum += int(number)

print(max(sumArr))

calArray = open("02_elf_input.txt", "r").readlines()
newCalArray = [item.strip("\n") for item in calArray]

sum = 0
sumArr = []

for number in newCalArray:
    if number == '':
        sumArr.append(sum)
        sum = 0
        continue
    sum += int(number)


sumArr.sort(reverse=True)

sumTop3 = 0
for i in range(3):
    sumTop3 += sumArr[i]

print(sumTop3)
n = int(input("nhập số tự nhiên n:"))
i = 0

while n%2==0:
    n /= 2
    i += 1
if n==1:
    print(n,"là số lũy thừa của 2")
elif n%3 == 0:
    print(n,"là số lũy thừa 2-3")
else:
    print(n,"kh phải là số lũy thừa 2-3")
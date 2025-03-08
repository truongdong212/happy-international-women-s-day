n=int(input("nhập số tự nhiên n:"))
k = n + 1
s = False

while s == False:
    tong=0
    for i in range(1,k):
        if k%i==0:
            tong += i
    if tong == k:
        s = True
        print("số hoàn hảo 1 lớn hơn",n,"là",k)
    else:
        k += 1

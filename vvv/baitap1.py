n=int(input("Nhập số tự nhiên n: "))
A=[]
t=0
for i in range(0,n):
    A.append(input("Nhập họ tên: "))
s=input("Nhập một tên: ")
for i in range(0,n):
    B=A[i].split()
    if s == B[len(B)-1]:
        t=t+1
print("Vậy trong lớp có số bạn cùng tên đó là: ",t)

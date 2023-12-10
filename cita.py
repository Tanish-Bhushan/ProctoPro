n = int(input()) 
ids = list(input().split())[:n] 

d = {} 
l1 = [] 
vis = [0]*len(ids) 

for i in ids: 
    id_,ra = i.split(':') 
    d[int(id_)] = int(ra) 
    l1.append(int(id_)) 

l = sorted(d , key = lambda x: d[x])[::-1] 

res = d[l[0]] 
k = [] 
j = l1.index(l[0]) - 1 
k.append(l[0]) 
while j >= 0 and int(d[l1[j]]) < 0: 
    k.append(l1[j]) 
    j -= 1 
if max(k) == i: 
    f = 1 
else: 
    f = 0 
x = len(k) 
l.remove(l[0]) 

for i in l: 
    k = [] 
    j = l1.index(i) 
    k.append(i) 
    while j >= 0 and d[l1[j]] < 0: 
        k.append(l1[j]) 
        j -= 1 
    x += len(k) 
    if x >= len(l1): 
        break 
    if f == 1: 
        res += d[max(k)] 
    else: 
        res += d[min(k)] 

print(res)
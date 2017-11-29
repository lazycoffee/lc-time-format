# lc-time-format
Transfer date to custom formate. 

## usage
Pass a Date instance and a format, return a formated time string.

```javascript
import timeFormat from 'lc-time-format';
const formatedStr = timeFormat(new Date('2016', '8', '8', '5', '8', '7'), 'YMD-HNS');
// or apply a date string
const formatedStr = timeFormat('Sep 08 2016 05:08:07 +8', 'YMD-HNS');
// 20160908-050807
```

```text

Y -> 2016
y -> 16

M -> 09
m -> 9

D -> 08
d -> 8

H -> 05
h -> 5

N -> 08
n -> 8

S -> 07
s -> 7
```
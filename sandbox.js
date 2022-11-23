let a = '2022/09/17 00:00:00'
let b = 'jam 7'
let c = ''

// console.log(isNaN(b.valueOf()));
// console.log(b instanceof Date && !isNaN(b.valueOf()));
// console.log(a instanceof Date);


for(let i = 0; i < a.length; i++){
    if(i == 4) break;
    c += a[i]
}

console.log(isNaN(c));



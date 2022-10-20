function roman2arabic(num) {
    let arrSimvol = num.split(/[+*\/-]/g)

    let arrNum = []
    for (let i = 0; i < arrSimvol.length; ++i) {
      let res = 0
      arrSimvol[i].replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g, function(i) {
        res += {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, III:3, II:2, I:1}[i]
      })
    
      arrNum.push(res)
      
    }
    return arrNum
    
  }
  console.log(roman2arabic("MCMXCIV"));
  console.log(roman2arabic("IV"));










// function convert(num) {
//     var c=[
//           ['',"I","II","III","IV","V","VI","VII","VIII","IX"],
//           ['',"X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
//           ['',"C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
//           ['',"M","MM","MMM"]
//           ];
  
//     return c[3][Math.floor(num / 1000 % 10)]+c[2][Math.floor(num / 100 % 10)]+c[1][Math.floor(num / 10 % 10)]+c[0][Math.floor(num % 10)];
//    }
//    console.log(convert(1994));
//    console.log(convert(4));













//  const romanNumbers =(rom) => {
//     let map ={
//         I: 1,
//         II:2,
//         III:3,
//         IV:4,
//         V: 5,
//         IX:9,
//         X: 10,
//         XL:40,
//         L: 50,
//         XC:90,
//         C: 100,
//         CD:400,
//         D: 500,
//         CM:900,
//         M:1000
//     }
//     let result = 0
// for(let i = rom.length -1; i >=0; --i){
//     result += map[rom[i]]
// }
// return result
// }
// console.log(romanNumbers("MCMXCIV"));


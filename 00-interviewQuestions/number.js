const numberRange = (a, b) => {
  let arr = [];
  while (a <= b) {
    arr.push(a);
    a++;
  }
  // console.log(arr)
};

numberRange(0, 5);

const numberRangeRecursive = (a, b, arr = []) => {
  if (a <= b) {
    arr.push(a);
    return numberRangeRecursive(a + 1, b, arr);
  }
  return arr;
};
// console.log(numberRangeRecursive(0, 5));


const simplePasswordValidator = (password) => {
  let isLowerCase = false;
  let isUpperCase = false;
  let isNumber = false;

  for(let char of password){
    if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
      isUpperCase = true;
    }else if(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122){
      isLowerCase = true;
    }else if(!isNaN(Number(char))){
      isNumber = true;
    }
  }

  if(!isLowerCase || !isUpperCase || !isNumber || password.length < 8){
    return false;
  }

  return true;
}
// console.log(simplePasswordValidator("afdasdfadf1A"))



const isEmptyObjectt = (obj) => {
  // for(let key in obj) {
  //   if(obj.hasOwnProperty(key)){
  //     return "It's not empty"
  //   }
  // }
  // return "It's empty"

  return Object.keys(obj).length === 0
}

// console.log(isEmptyObjectt({}))



const obj = {
  name: "Pradeep Kumar",
  age: 22,
  city: "Jhunjhunu"
};


const entries = Object.entries(obj);
// console.log(entries);
// console.log(entries.flat());

let newObj = Object.fromEntries(entries);

// console.log(newObj)

const calculateSimpleInterest = (principle, rate, year) => {
  return  (principle * rate * year) / 100
}
// console.log(calculateSimpleInterest(1000, 5, 3));




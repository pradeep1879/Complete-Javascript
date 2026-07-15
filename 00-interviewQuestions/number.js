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

  for (let char of password) {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
      isUpperCase = true;
    } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      isLowerCase = true;
    } else if (!isNaN(Number(char))) {
      isNumber = true;
    }
  }

  if (!isLowerCase || !isUpperCase || !isNumber || password.length < 8) {
    return false;
  }

  return true;
};
// console.log(simplePasswordValidator("afdasdfadf1A"))

const isEmptyObjectt = (obj) => {
  // for(let key in obj) {
  //   if(obj.hasOwnProperty(key)){
  //     return "It's not empty"
  //   }
  // }
  // return "It's empty"

  return Object.keys(obj).length === 0;
};

// console.log(isEmptyObjectt({}))

const obj = {
  name: "Pradeep Kumar",
  age: 22,
  city: "Jhunjhunu",
};

const entries = Object.entries(obj);
// console.log(entries);
// console.log(entries.flat());

let newObj = Object.fromEntries(entries);

// console.log(newObj)

const calculateSimpleInterest = (principle, rate, year) => {
  return (principle * rate * year) / 100;
};
// console.log(calculateSimpleInterest(1000, 5, 3));

const generateBarChart = (arr) => {
  const newArr = arr.map((e, i) => {
    let star = "";
    for (let k = 0; k < e; k++) {
      star += "*";
    }
    return `${i + 1}: ${star}`;
  });
  // console.log(newArr.join("\n"))
};
generateBarChart([5, 3, 9, 2]); // we can also use repeat method for this question;

const rates = {
  USD: 1,
  EUR: 0.9,
  GBP: 0.8,
  INR: 94,
};

const convertCurrency = (amount, fC, tC) => {
  let amountInUSD = 0;
  /**
   * 1 usd = 0.8 gbp
   * 1 gbp = 1 / 0.8 usd
   * 100 bgp = (1/0.8)*100 usd
   */
  if (fC != "GBP") {
    amountInUSD = amount / rates[fC];
  } else {
    amountInUSD = amount;
  }

  let convertedAmount = 0;
  if (tC != "USD") {
    convertedAmount = amountInUSD * rates[tC];
  } else {
    convertedAmount = amountInUSD;
  }

  return convertedAmount;
};
// console.log(convertCurrency(94, "INR", "USD"))

const validateCreditCard = (str) => {
  str = str.replace(/\D/g, "");

  let revNum = "";

  for (let i = str.length - 1; i >= 0; i--) {
    revNum += str[i];
  }

  let total = revNum
    .split("")
    .map((e, i) => {
      let num = Number(e);

      if (i % 2 !== 0) {
        num = num * 2;

        if (num > 9) {
          num = num - 9;
        }
      }

      return num;
    })
    .reduce((accum, currEle) => accum + currEle, 0);

  return total % 10 === 0;
};

console.log(validateCreditCard("4539 1488 0343 6467"));

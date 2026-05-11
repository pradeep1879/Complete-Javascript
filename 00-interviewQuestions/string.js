const findLogestWord = (str) =>{
  if(str.trim().length === 0) {
    return false;
  }
  strArr = str.split(" ");
  // const soretedArr = strArr.sort((a,b) => b.length - a.length)
  // console.log(soretedArr);
  // return soretedArr[0];

  return strArr.reduce((accum, currWord) => (currWord.length > accum.length ? currWord : accum), "")
}

// console.log(findLogestWord("Watch thapa technical javascript on youtube"));

const generateHash = (str) => {
  newString = str.trim();
  const splitedArr = newString.split(" ");
  const capital = splitedArr.map((w,i) => w[0].toUpperCase() + w.slice(1))
  // console.log(`#${capital.join("")}`);
}

// console.log(generateHash("my name is pradeep kumar"));

const countChar = (str, l) => {
  let count = 0;
  for(let i = 0; i<str.length; i++){
    if(str[i].toUpperCase() === l.toUpperCase()){
      count++;
    }
  }
  console.log(count);
}

// countChar("MissIssippi", "I")


const reverseString = (str) => {
  let r_str = "";
  for(let i = str.length - 1; i >= 0; i--){
    r_str += str[i]
  }
  // console.log(r_str)
}
reverseString("hello")


const repeatString = (str, num) => {
  return num > 0 ? str.repeat(num) : str
}
// console.log(repeatString("abc", 5))



const truncateString = (str, num) => {
  // if(num <= 0){
  //   return str;
  // }else if (str.length > num){
  //   return str.slice(0,num).concat(" ... ")
  // }
  return num <= 0 ? str : str.slice(0,num).concat(" ... ") 

}
// console.log(truncateString("A-ticket a-tasket A green and yellow basket", 8))




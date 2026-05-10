const sortAscending = (arr) =>{
  return arr.sort((a, b) => a - b);
}
// console.log(sortAscending([3, 4, 9, 1, 10]))

const calculateAverage = (arr) => {
  const total = arr.reduce((accum, curreEle) => accum + curreEle, 0)
  // console.log(total/arr.length)
  return total;
}
calculateAverage([5, 10, 2, 8])
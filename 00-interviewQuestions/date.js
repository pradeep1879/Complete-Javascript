const calculateDaysBetweenDates = (d1, d2) => {
  let date1 = new Date(d1);
  let date2 = new Date(d2);
  let diff = Math.abs(date2 - date1);
  let days = diff / (24 * 60 * 60 * 1000);
  console.log(days);
};
// calculateDaysBetweenDates("2024-01-01", "2024-01-31")

const calculateAge = (d) => {
  let currDate = new Date();
  birthDate = new Date(d);

  let age = currDate.getFullYear() - birthDate.getFullYear();
  let monthDiff = currDate.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && currDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};
// console.log(calculateAge("1990-05-15"));
// console.log(calculateAge("1990-04-15"));

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

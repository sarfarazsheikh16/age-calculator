let user = document.getElementById("date");
user.max = new Date().toISOString().split("T")[0];
let answer = document.getElementById("answer");
let tDate = document.getElementById("t-date");
tDate.innerHTML = new Date().toDateString();

function ageCheck() {
  let ageDate = new Date(user.value);
  let date1 = ageDate.getDate();
  let month1 = ageDate.getMonth() + 1;
  let year1 = ageDate.getFullYear();

  let today = new Date();

  let date2 = today.getDate();
  let month2 = today.getMonth() + 1;
  let year2 = today.getFullYear();

  let date3, month3, year3;

  year3 = year2 - year1;
  if (ageDate > today) {
    alert("invalid Date")
  }
  if (month2 >= month1) {
    month3 = month2 - month1;
  } else {
    year3--;
    month3 = 12 + month2 - month1;
  }

  if (date2 >= date1) {
    date3 = date2 - date1;
  } else {
    month3--;
    date3 = getDaysMonth(year1, month1) + date2 - date1;
  }

  if (month3 < 0) {
    month3 = 11;
    year3--;
  }

  answer.innerHTML = `YOU ARE ${year3} YEARS , ${month3} MONTHS AND ${date3} DAYS OLD`;
}

function getDaysMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthNumber = parseInt(prompt("Enter a number between 1 and 12:"));

if (monthNumber < 1 || monthNumber > 12) {
  alert("Invalid input. Please enter a number between 1 and 12.");
} else {
  let monthName = months[monthNumber - 1];
  console.log(`The number ${monthNumber} corresponds to the month of ${monthName}`);
}
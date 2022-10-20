// 1.Identify prime no. or not

let num = 10;
let count = 0;
for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    count++;
  }
}

if (count == 2) {
  console.log("Yes");
} else {
  console.log("No");
}




// 2.Identify given string is Palindrome or not

let str = "naman";
let rev = "";

for (i = str.length - 1; i >= 0; i--) {
  rev += str[i];
}


if (str == rev) {
  console.log("Yes");
} else {
  console.log("No");
}

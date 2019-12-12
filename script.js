document.getElementById("button").addEventListener("click", () => {
  const value = document.getElementById("input").value;
  const output = document.getElementById("message");
  const digits = value.toString().split("");
  const ones = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
  ];
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
  ];

  /** numbers and digits less than 20 */
  if (value.length === 1 || (value.length === 2 && parseInt(value) < 20)) {
    output.innerHTML = ones[value];
    return;
  }
  /** numbers greater or equal to 20 */
  if (value.length === 2 && parseInt(value) >= 20) {
    output.innerHTML =
      digits[1] !== "0"
        ? `${tens[parseInt(digits[0])]} ${ones[parseInt(digits[1])]}`
        : tens[parseInt(digits[0])];
  }
  /** numbers greater than 99 and less than 1000 */
  if (value.length === 3 ) {
    output.innerHTML =
      digits[1] && digits[2] === "0"
        ? `${ones[parseInt(digits[0])]} hundred`
        : `${ones[parseInt(digits[0])]} hundred and 
        ${digits[1] !== "0" ? tens[parseInt(digits[1])] : ""} 
        ${digits[2] !== "0" ? ones[parseInt(digits[2])] : ""}`;
  }
  /** numbers greater than 1000 and less than 2000 */
  if (value.length === 4 && parseInt(value) < 2000 ) {
    output.innerHTML =
      digits[1] === "0" && digits[2] === "0" && digits[3] === "0"
        ? `${ones[parseInt(digits[0])]} thousand`
        : digits[2] === "0" && digits[3] === "0"
        ? `${ones[parseInt(`${digits[0]}${digits[1]}`)]} hundred`
        : `${ones[parseInt(`${digits[0]}${digits[1]}`)]} hundred and 
          ${
            digits[3] !== "0"
              ? `${tens[parseInt(digits[2])]} ${ones[parseInt(digits[3])]}`
              : tens[parseInt(digits[2])]
          } `;
  }
  /** numbers greater than 1000 and less than 2000 */
  if ( value.length === 4 && parseInt(value) >= 2000 ) {
  
    output.innerHTML =
      digits[1] === "0" && digits[2] === "0" && digits[3] === "0"
        ? `${ones[parseInt(digits[0])]} thousand`
        : `${ones[parseInt(digits[0])]} thousand ${
            digits[2]==="0" && digits[3] === "0"
              ? `${digits[1] !== "0" ? ones[parseInt(digits[1])]+ ' hundred':''} `  
              : `${digits[1] !== "0" ? ones[parseInt(digits[1])]+ ' hundred and':''}
              ${digits[2] !== "0" ? tens[parseInt(digits[2])] : ''} 
              ${digits[3] !== "0" ? ones[parseInt(digits[3])] : ''}`
          }`;
  }
   /** numbers greater than 10000 and less than 100000 */
   if ( value.length === 5 ) {
  
    output.innerHTML =
      digits[2] === "0" && digits[3] === "0" && digits[4] === "0"
        ? `${ones[parseInt(`${digits[0]}${digits[1]}`)]} thousand`
        : `${ones[parseInt(`${digits[0]}${digits[1]}`)]} thousand ${
            digits[3]==="0" && digits[4] === "0"
              ? `${digits[2] !== "0" ? ones[parseInt(digits[2])]+ ' hundred':''}`  
              : `${digits[2] !== "0" ? ones[parseInt(digits[2])]+ ' hundred and':''}
              ${digits[3] !== "0" ? tens[parseInt(digits[3])] : ''} 
              ${digits[4] !== "0" ? ones[parseInt(digits[4])] : ''}`
          }`;
  }
});

 document.getElementById("check-btn").addEventListener("click", function() {
      let inputValue = document.getElementById("text-input").value.trim();
      let resultElement = document.getElementById("result");
      
      if (inputValue === "") {
          alert("Please input a value.");
      }
      let cleanedInput = inputValue.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase();
      let reversedInput = cleanedInput.split("").reverse().join("");
if (cleanedInput === reversedInput) {
    resultElement.textContent = `${inputValue} is a palindrome.`;
}else{
    resultElement.textContent = `${inputValue} is not a palindrome.`;
}
 });

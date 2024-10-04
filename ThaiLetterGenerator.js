const thaiLetters = [
    " ก ", " ข ", " ฃ "
    , " ค ", " ฅ ", " ฆ ", " ง ", " จ ", " ฉ ", " ช ", 
    " ซ ", " ฌ ", " ญ ", " ฎ ", " ฏ ", " ฐ ", " ฑ ", " ฒ ", " ณ ", " ด ", 
    " ต ", " ถ ", " ท ", " ธ ", " น ", " บ ", " ป ", " ผ ", " ฝ ", " พ ", 
    " ฟ ", " ภ ", " ม ", " ย ", " ร ", " ล ", " ว ", " ศ ", " ษ ", " ส ", 
    " ห ", " ฬ ", " อ ", " ฮ ",
]

// var random_index_number = 0
// document.getElementById("Guessed").addEventListener("click") ={
//     function(){
//         Thai_letters.splice(random_index_number + 2, 1)
//         console.log("deleted "+ Thai_letters[random_index_number])
//         Randomize()
//     }

// };

// function Randomize() {
//     const Thai_letter = document.getElementById("Thai-letter")
    
//     random_index_number = Math.floor(Math.random() * thaiLetters.length)
    
//     New_letter = Thai_letters[random_index_number]
    
//     if(New_letter === undefined){
//         Randomize()
//         console.log("the letter is " + New_letter)
//     }
//     Thai_letter.innerHTML =  New_letter
    
// }


// // console.log(random_index_number)//testing


  // Function to generate a random Thai letter
  let randomize = function() {
    if (thaiLetters.length === 0) {
      document.getElementById('Thai-letter').innerHTML = 'Congratulations! You guessed all the letters!';
    } else {
      // Select a random letter from the array
      const randomLetter = thaiLetters[Math.floor(Math.random() * thaiLetters.length)];
  
      // Update the h1 tag with the new letter
      document.getElementById('Thai-letter').innerHTML = randomLetter;
  
      // Show the button group
      document.getElementById('button-group').classList.remove('Hidden');
    }
  }
  
  // Function to remove the letter from the array
  let removeLetter = function(letter) {
    const index = thaiLetters.indexOf(letter);
    if (index !== -1) {
      thaiLetters.splice(index, 1);
    }
    console.log(`Remaining letters: ${thaiLetters.length}`);
  }
  
  // Initialize the button group as hidden
  document.getElementById('button-group').classList.add('Hidden');
  
  // Add event listener to the Generate button
  document.getElementById('Generate').addEventListener('click', randomize);
  
  // Add event listener to the Yes button
  document.getElementById('Guessed').addEventListener('click', function() {
    const currentLetter = document.getElementById('Thai-letter').innerHTML;
    removeLetter(currentLetter);
    randomize();
  });
  
  // Add event listener to the No button
  document.getElementById('Not-Guessed').addEventListener('click', randomize);
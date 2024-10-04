const thaiLetters = [
    " ก ", " ข ", " ฃ "
    , " ค ", " ฅ ", " ฆ ", " ง ", " จ ", " ฉ ", " ช ", 
    " ซ ", " ฌ ", " ญ ", " ฎ ", " ฏ ", " ฐ ", " ฑ ", " ฒ ", " ณ ", " ด ", 
    " ต ", " ถ ", " ท ", " ธ ", " น ", " บ ", " ป ", " ผ ", " ฝ ", " พ ", 
    " ฟ ", " ภ ", " ม ", " ย ", " ร ", " ล ", " ว ", " ศ ", " ษ ", " ส ", 
    " ห ", " ฬ ", " อ ", " ฮ ",
]


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


// change font styles from normal to simplified thai fonts
thai_letter = document.getElementById('Thai-letter');
simplified_thai = document.getElementById('simplified-thai');
simplified_thai.addEventListener('change', function(){
  if(this.checked){
    thai_letter.classList.add('simplified-thai');
  }
  else{
    thai_letter.classList.remove('simplified-thai');
  }

});


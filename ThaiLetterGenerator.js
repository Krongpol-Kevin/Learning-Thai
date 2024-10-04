const thaiLetters = [
    " ก ", " ข ", " ฃ ", " ค ", " ฅ ", " ฆ ", " ง ", " จ ", " ฉ ", " ช ", 
    " ซ ", " ฌ ", " ญ ", " ฎ ", " ฏ ", " ฐ ", " ฑ ", " ฒ ", " ณ ", " ด ", 
    " ต ", " ถ ", " ท ", " ธ ", " น ", " บ ", " ป ", " ผ ", " ฝ ", " พ ", 
    " ฟ ", " ภ ", " ม ", " ย ", " ร ", " ล ", " ว ", " ศ ", " ษ ", " ส ", 
    " ห ", " ฬ ", " อ ", " ฮ ",
]
const thaiLettersEquivalent = [
  'Ko Kai', 'Kho Khai', 'Kho Khuat', 'Kho Khwai', 'Kho Khon', 'Kho ra khang',
  'Ngo ngu', 'Cho Chan', 'Cho Ching', 'Cho Chang', 'So So', 'Cho Choe',
  'Yo Ying', 'Do Chada', 'To Pahtak', 'Tho Than', 'Tho Montho', 'Tho Puthao',
  'No Nen', 'Do Dek', 'To Tao', 'Tho Thung', 'Tho Thahan', 'Tho Thong', 'No Nu',
  'Bo Baimai', 'Po Plaa', 'Pho Phueng', 'Fo Fa', 'Pho Phan', 'Fo Fan', 'Pho Samphao',
  'Mo Ma', 'Yo Yak', 'Ro Ruea', 'Lo Ling', 'Wo Waen', 'So Sala', 'So Ruesi', 'So Suea',
  'Ho Hip', 'Lo Chu La', 'O Ang', 'Ho Nokhuk'
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
    
    document.getElementById('Generate').classList.add('Hidden');
    
    document.getElementById('Prompt-message').classList.add('Hidden');
    setTimeout(Show_Answer, 10000)//sets timer to 10 secs before showing answer
  }
}

//SHOW ANSWER after 10 seconds
function Show_Answer() {
  // Show the button group
  document.getElementById('Prompt-message').classList.remove('Hidden');
  const currentLetter = document.getElementById('Thai-letter').innerHTML;
  const indexOfCurrentLetter = thaiLetters.indexOf(currentLetter);
  document.getElementById('Answer').innerHTML = thaiLettersEquivalent[indexOfCurrentLetter];
}

// Function to remove the letter from the array
let removeLetter = function(letter) {
  const index = thaiLetters.indexOf(letter);
  if (index !== -1) {
    thaiLetters.splice(index, 1);
  }
  console.log(`Deleted: ${thaiLetters[letter]}`);
  console.log(`Deleted: ${thaiLettersEquivalent[letter]}`);
  const answerindex = thaiLettersEquivalent.indexOf(letter);
  if (answerindex !== -1) {
    thaiLetters.splice(index, 1);
  }
}

// Initialize the prompt  as hidden
document.getElementById('Prompt-message').classList.add('Hidden');

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



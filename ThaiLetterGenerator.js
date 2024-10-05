]const thaiLetters = [
  // consonants
    " ก ", " ข ", " ฃ ", " ค ", " ฅ ", " ฆ ", " ง ", " จ ", " ฉ ", " ช ", 
    " ซ ", " ฌ ", " ญ ", " ฎ ", " ฏ ", " ฐ ", " ฑ ", " ฒ ", " ณ ", " ด ", 
    " ต ", " ถ ", " ท ", " ธ ", " น ", " บ ", " ป ", " ผ ", " ฝ ", " พ ", 
    " ฟ ", " ภ ", " ม ", " ย ", " ร ", " ล ", " ว ", " ศ ", " ษ ", " ส ", 
    " ห ", " ฬ ", " อ ", " ฮ ",
    // vowels
    " อะ ", " อา ", " อิ ", " อี ", " อึ ", " อือ ", " อุ ",
    " อู ", " เอะ ", " เอ ", 
    " แอะ ", " แอ ", " โอะ ", " โอ ", " เอาะ ", " ออ ",
    " เออะ ", " เออ ", " เอียะ ", " เอีย ", 
    " เอือะ ", " เอือ ", " อัวะ ", " อัว ", " อำ ", " เอย ",
    " ไอ ", " ใอ ", " อวย ", " ออย ", 
    " โอย ", " เอา ", " อิว ", " อุย "
    //vowels may not be complete yet
]
const thaiLettersEquivalent = [
  //consonants
  'Ko Kai', 'Kho Khai', 'Kho Khuat', 'Kho Khwai', 'Kho Khon', 'Kho ra khang',
  'Ngo ngu', 'Cho Chan', 'Cho Ching', 'Cho Chang', 'So So', 'Cho Choe',
  'Yo Ying', 'Do Chada', 'To Pahtak', 'Tho Than', 'Tho Montho', 'Tho Puthao',
  'No Nen', 'Do Dek', 'To Tao', 'Tho Thung', 'Tho Thahan', 'Tho Thong', 'No Nu',
  'Bo Baimai', 'Po Plaa', 'Pho Phueng', 'Fo Fa', 'Pho Phan', 'Fo Fan', 'Pho Samphao',
  'Mo Ma', 'Yo Yak', 'Ro Ruea', 'Lo Ling', 'Wo Waen', 'So Sala', 'So Ruesi', 'So Suea',
  'Ho Hip', 'Lo Chu La', 'O Ang', 'Ho Nokhuk',
  //vowels
  " sara a", " sara aa", " sara i ", " sara ii",
  " sara ue  ", " sara uee ", " sara u ",
  " sara uu ", " sara e ", " sara ee ", 
  " sara ae ", " sara aee ", " sara o ", " sara oo ",
  " sara aw ", " sara aw ",
  " sara oe (uh)", " sara er ", " sara ia ", " sara iaa ", 
  " sara uea ", " sara ueaa ", " sara ua ", " sara uaa ",
  " sara am ", " sara oei ",
  " sara ai mai malai ", " sara ai mai muan ", 
  " sara uay ", " sara oy ", 
  " sara ooy ", " sara ao ", " sara iw  ", " sara ui "
  //vowels may not be complete yet
]



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
    setTimeout(Show_Answer, 5000)//sets timer to 5 secs before showing answer
  }
}

//SHOW ANSWER after 10 seconds
function Show_Answer() {
  // Show the button group
  document.getElementById('Prompt-message').classList.remove('Hidden');
  const current_Letter = document.getElementById('Thai-letter').innerHTML;
  const indexOfCurrentLetter = thaiLetters.indexOf(current_Letter);
  document.getElementById('Answer').innerHTML = thaiLettersEquivalent[indexOfCurrentLetter];
}

// Function to remove the letter from the array
let removeLetter = function(letter) {
  const index = thaiLetters.indexOf(letter);
  console.log(`Deleted: ${letter}`);
  console.log(`Deleted: ${letter}`);
  if (index !== -1) {
    thaiLetters.splice(index, 1);
  }
}
let removecurrentAnswer = function(currentAnswer){
  const answerindex = thaiLettersEquivalent.indexOf(currentAnswer);
  if (answerindex !== -1) {
    thaiLettersEquivalent.splice(answerindex, 1);
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
  const currentAnswer = document.getElementById('Answer').innerHTML;
  removecurrentAnswer(currentAnswer);
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



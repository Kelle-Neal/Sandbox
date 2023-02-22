var makeEveryLetterAfterXCaps = function (str, letter) {
  // enter solution here
  
  //separate the sting into words
  const wordsOg = str.split(" ");  
    
  //for loop that will do this to each new word  
  for () {  
  //for each word separate them into individual characters,
  const getIndexOfCharacter = function(wordsOg, letter) {
  //setup temporary array to hold the characters  
    let tmpArray = [...wordsOg];
  //change all characters to lowercase   
    char = char.toLowerCase();
    return tmpArray.reduce((results, elem, idx) => elem.toLowerCase() 
      === char ? [...result, idx] : results, []);
  };
  
  //return the number of 'x' and each index # of where they are  
  let results = getIndexOfCharacter(str, letter);
    
  //for each character that is 'x'+1 convert to uppercase  
  
    
  //  
  let words = results.join()
  }
  
    
  for (let i = 0; i < results; i++) {
      results[i] = results[i][0].toUpperCase() + results[i].substr(1);
  
  }
  words.join(" "); 
    
    
  //const mySentence = "freeCodeCamp is an awesome resource";
  //const finalSentence = mySentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    
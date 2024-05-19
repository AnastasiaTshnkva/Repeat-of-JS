const wordsArray = [
  {word: 'привет', translation: 'hello'},
  {word: 'программист', translation: 'programmer'},
  {word: 'жук', translation: 'bug'},
  {word: 'пока', translation: 'bye'},
];

const questionFunction = () => {
  let result = wordsArray.reduce((counter, item) => {
    let answer = prompt(`Введи передвод этого слова на английский: ${item.word}`);
    
    if(answer === item.translation) {
      return counter + 1;
    }
    return counter;
  }, 0)

  const numberOfQuestions = wordsArray.length;
  
  let resultInPercents = Math.round((result/numberOfQuestions)*100);

  
  if (resultInPercents >= 60) {
    alert(`Твой результат ${resultInPercents}%. Круто! Ты молодец!`);
  } else {
    alert(`Твой результат ${resultInPercents}%. Ты можешь лучше!`);
  }
};

questionFunction();
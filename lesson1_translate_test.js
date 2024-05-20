const wordsArray = [
  {word: 'привет', translation: 'hello'},
  {word: 'программист', translation: 'programmer'},
  {word: 'жук', translation: 'bug'},
  {word: 'пока', translation: 'bye'},
];

const questionFunction = () => {
  let result = wordsArray.reduce((counter, item) => {
    let answer = Number(prompt(`Введи передвод этого слова на английский: ${item.word}`));
    
    if(answer === item.translation) {
      return counter + 1;
    }

    return counter;
  }, 0)

  const numberOfQuestions = wordsArray.length;
  
  let resultInPercents = Math.round((result/numberOfQuestions)*100);

  let positivePersentOfAnswers = 60;
  
  if (resultInPercents >= positivePersentOfAnswers) {
    alert(`Твой результат ${resultInPercents}%. Круто! Ты молодец!`);
  } else {
    alert(`Твой результат ${resultInPercents}%. Ты можешь лучше!`);
  }
};

questionFunction();
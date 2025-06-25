import { useState } from 'react'
import './App.css'

//list of questions and answers
const qaList = [
  {
    question: `On the market for four decades, AutoCAD is a specific brand of CAD software. CAD stands for "Computer-Aided" WHAT?`,
    answer: 'Design'
  },
  {
    question: `In 2004, “thefacebook” was launched as a social networking site for Harvard by students led by which computer programming student who later dropped out to become the face of the site?`,
    answer: 'Mark Zuckerberg'
  },
  {
    question: `When a password is limited strictly to numeric characters, the secret is often referred to as a PIN. What does that acronym stand for?`,
    answer: 'Personal Identification Number'
  },
  {
    question: `You probably see it every day, but how many different colors are used in the lettering of Google's logo?`,
    answer: 'Four (Blue, Red, Green, and Yellow)'
  },
  {
    question: `Which two-word term describes computer code that is freely available for distribution and modification, based on a philosophy of improvement through sharing and collaboration?`,
    answer: 'Open Source'
  },
  {
    question: `Doug Engelbart was the inventor of what computer accessory? The first one was made from wood.`,
    answer: 'Mouse'
  },
  {
    question: `The "man without a head" is the emblem of what Guy Fawkes-lovin' hacker group that reemerged in 2020?`,
    answer: 'Anonymous'
  },
  {
    question: `Ajay Bhatt in 1995 developed what commonly used computer connector that did not give him a single cent of his invention?`,
    answer: 'USB'
  },
  {
    question: `In 1988, the Morris Worm was created (and released) just to see whether it could be pulled off. As it spread via the Internet, mayhem (and a criminal conviction) followed. It was the first major example of which “highly infectious” computer security threat?`,
    answer: 'Virus'
  },
  {
    question: `It sounds like a circus performer from Taos and allows you to download PDFs with the greatest of ease. I'm talking about what A-word family of software?`,
    answer: 'Adobe Acrobat'
  }
];

const App = () => {
  /* state variable called count to keep track of count */
  const [count, setCount] = useState(0); //initial val is 0, starts counting from 0

  /* state variable called face */
  const [flip, setFlip] = useState(true); //initial value is true(question)
  //false is answer

  const [ans, setAns] = useState('');

  //for checking user inputs
  const [correct_ans, setChecked] = useState('');

 // const handleSubmit = (event) => {
   // alert('The spice you entered was: ${ans}')

 //}

 //check if the user's inputted answer is correct
  const onCheckAnswer = (e) => {
    e.preventDefault(); //to prevent reloading of the page
    if (qaList[count].answer.toLowerCase().trim() !== ans.toLowerCase().trim()){
      setChecked('wrong');
    }
    else {
      setChecked("correct");
    }
  };

  //move to the next card
  const handleNext = () => { 
    if (count < qaList.length-1) {
      setCount(count + 1);
      
    //reset
      setAns('');
      setChecked('');
    }
    setFlip(true); //reseting to question 
  } 

  //move to previous card
  const handlePrev = () => { 
    if (count > 0) {
      setCount(count - 1); 
      
    //reset
      setAns('');
      setChecked('');
    }
    setFlip(true); //reseting to question
  } 

  //flip b/w q and a
  const updateFlip = () => {
    setFlip(prev=>!prev); //for flippin b/w questions and answers

    //reset
    setAns('');
    setChecked('');
  }

  return (
    <div className="App">
      <div className="header">
        <h1> Computer Science Trivia </h1>
        <h2> This Trivia will test your knowledge on different aspects of Computer Science (C.S.) </h2>
        <p> <i> Click on the card to reveal the answer! Total Number of Questions: {qaList.length}  </i></p>
        <h4> <i> Question {count+1} of 10 </i></h4>

      </div>
      
      <div className='container'> 
        {flip ? (<h2 onClick={updateFlip}> Question: {qaList[count].question} </h2>) :
         (<h2 onClick={updateFlip}> Answer: {qaList[count].answer} </h2>)}
        {/* flip is a boolean variable, if true, execute first part, if false, 
        execute the 2nd part after colon */}

        <form onSubmit={onCheckAnswer} className="input">
          <div>Guess the answer here:   
          <input className="user" type="text" value={ans} onChange={(e) => setAns(e.target.value)} id={correct_ans}/> 
          <button type="submit" className="button submit" onClick={onCheckAnswer}> Submit </button>
          </div> 
        </form>

        {/*If true, do first part before colon, else do the part after colon 
          if count=0, then className=fade, else: className=''
          if count=qaList.length - 1, then className=fade, else: className=''
        */}
        <button onClick={handlePrev} className={count === 0 ? 'fade' : ''}> Previous </button> 
        <button onClick={handleNext} className={count === qaList.length - 1 ? 'fade' : ''} > Next </button>
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import './Faqs.scss'
import { AiOutlineCaretRight } from "react-icons/ai";
//import _, { cloneDeep } from 'lodash';
import advert from "../../assets/Group 90.svg"
//import _, { cloneDeep } from 'lodash';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import FaqsHeading from '../FaqsHeading/Faqsheading';



const FAQ = () => {
  const FAQ   = [
    {
      question: 'What is the best time to workout?',
      answer: "The best time to work out really depends on you and your schedule! Some people prefer morning workouts to kickstart their day,"
        + " while others might find they have more energy in the afternoon or evening. The key is finding a time that fits best into your daily routine."
    },

    {
      question: 'How can i stay motivated?',
      answer: "Setting achievable goals can be a great motivator. Celebrate small victories along the way."
        + " Also, try finding a workout buddy. Having someone to share the journey with can make it more enjoyable and motivating."
    },

    {
      question: "What should I do if I'm not seeing progress",
      answer: "It could be helpful to vary your workouts. Trying new exercises can challenge your body in different ways and could lead to progress."
        + " Also, remember to be patient with yourself. Fitness journeys take time."
    },

    {
      question: 'How to balance workout with a busy schedule?',
      answer: 'You should try to incorporate short workouts into your daily routine. Even 15 minutes of exercise can make a difference'
    },

    {
      question: 'Do i need to have any special equipment for home workouts?',
      answer: "Not necessarily, many home workouts can be done using just your bodyweight."
        + " Primefit provides a range of challenges that can be done at your level of comfortability"
    },

    {
      question: 'What is the difference between Yoga and Pilates?',
      answer: 'Yoga is more focused on flexibility and mindfulness, while Pilates is about strength and muscle tone.'
    },

    {
      question: 'What are some ways to stay hydrated during a workout?',
      answer: "Drink water before, during and after your workout. If it's a long or intense workout, a sports drink can help replace lost electrolytes "
    },

    {
      question: "How can i stay fit while travelling?",
      answer: "You can use hotel gyms, go for walks in new cities, or do bodyweight exercises in your hotel room?"
    },

    {
      question: "What type of workout is best for weight loss?",
      answer: "A mix of cardio and strength training is often recommended for weight loss."
    },

    {
      question: "How important is diet in reaching my fitness goals?",
      answer: "Very important! Exercise and diet go hand in hand when it comes to fitness."
    }


  ]

 


  let [firstActiveIndex, setFirstActiveIndex] = useState(-1)


  function revealFirstAnswers(firstIndex) {
    if (firstActiveIndex !== firstIndex) {
      setFirstActiveIndex(firstIndex)
    } else {
      setFirstActiveIndex(-1)
    }

    console.log('clicked')
  }


return (
    <div className='faq-page-width'>
      <img src={advert} alt="advert" className='advert' />  
    
      
      <div className="faq-section">
      
        <div className="section">
        <FaqsHeading/>
          {
            FAQ.map((question, firstIndex) => {
              return <div key={firstIndex} className={`faq ${firstActiveIndex === firstIndex ? 'active' : ''}`} onClick={() => revealFirstAnswers(firstIndex)}>
                <div className="faq-question">
                  {question.question}
                  <IoMdArrowDropdown className='arrow-down'/>
                </div>
                <div className='faq-answer'>
                  {question.answer}
                </div>
              </div>
            })
          }
        </div>

    




      </div>


    </div>

  )
}

export default FAQ
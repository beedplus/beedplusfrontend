import { useState } from 'react'
import './Faqs.scss'
import { AiOutlineCaretRight } from "react-icons/ai";
//import _, { cloneDeep } from 'lodash';
import advert from "../../assets/Group 90.svg"
//import _, { cloneDeep } from 'lodash';
import FaqsHeading from '../FaqsHeading/Faqsheading';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

const Faqs = () => {
  const FAQ   = [
    {
      question: 'How do I know the status of my video?',
      answer: "Once you submit your link and click submit links " +
          "If the link box shows grey then your video is pending approval" +
          "If the link box shows red then your video has been rejected" +
          "If the link box shows green then your video has been approved or accepted."
    },

    {
      question: 'How long does it take for me to be credited?',
      answer: "Immediately after your 5 videos have been approved you should expect your payments."
    },

    {
      question: "How do I know the status of my video?",
      answer: "Once you submit your link and click submit links " +
          "If the link box shows grey then your video is pending approval " +
          "If the link box shows red then your video has been rejected" +
          "If the link box shows green then your video has been approved or accepted."
    },

    {
      question: 'How long does it take for my video to be approved?',
      answer: 'It can take 3-5 days for your videos to be approved '
    },

    {
      question: "If I don't receive my payment 2 days after my 5videos are approved what do I do?",
      answer: "You can email us with your complaints"
    },

    {
      question: 'What do I do if my video is rejected?',
      answer: "You can recreate another video and submit the link under the same campaign "
    },
    //
    // {
    //   question: "How can i stay fit while travelling?",
    //   answer: "You can use hotel gyms, go for walks in new cities, or do bodyweight exercises in your hotel room?"
    // },
    //
    // {
    //   question: "What type of workout is best for weight loss?",
    //   answer: "A mix of cardio and strength training is often recommended for weight loss."
    // },
    //
    // {
    //   question: "How important is diet in reaching my fitness goals?",
    //   answer: "Very important! Exercise and diet go hand in hand when it comes to fitness."
    // }


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

  function revealSecondAnswers(secondIndex) {
    if (secondActiveIndex !== secondIndex) {
      setSecondActiveIndex(secondIndex)
    } else {
      setSecondActiveIndex(-1)
    }

    console.log('clicked')
  }

  return (
    <div className='faq-page-width'>
      <img src={advert} alt="advert" className='advert' />  
      <FaqsHeading/>

      <div className="faq-section">

        <div className="section">
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

export default Faqs

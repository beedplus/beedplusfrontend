import "./HowItWorks.scss"
import adImage from '../../assets/Group 90.png'
import FaqCopyRight from "../FaqCopyRight/FaqCopyRight"


const dataList = [
  {
    list: 'Pick a challenge task you are interested in',
  },
  {
    list: 'Create  5 videos with the song and post it',
  },
  {
    list: 'The more you create, the more you win!',
  }

]

const paraList = [
  {
   para: "You can simply enter a challenge by checking on the dashboard for new and existing challenges or checking the menu nav on the top of the website.",
  },
  {
   para :  "You can simply enter a challenge by checking on the dashboard for new and existing challenges or checking the menu nav on the top of the website." 
  },
  {
    para:  "You can simply enter a challenge by checking on the dashboard for new and existing challenges or checking the menu nav on the top of the website."
  }
]



export default function HowItWorks() {
  return (
    <div className="HowItWorks">
     <div className="HowItWorks-image-div">
        <img src={adImage} alt='advert' className='ad-image'/>
      </div>
      <div className="Faq-div-HowItWorks">
        <h3>HOW IT WORKS</h3>
        <div>
           FAQ
        </div>
      </div>
      <div className="HowItWorks-contains-li">
          <div className=
          ' HowItWorks-contains-li-div'>
              <div >
                  {dataList.map((data,index)=>{
                      return (
                          <div key={index} className="contain-one">
                              <div> {data.list}</div>
                          </div>
                      )
                  })}
              </div>

              <div className="paras-div">
                  {paraList.map((paras,index)=>{
                      return(
                          <div key={index} className="paras">
                              <p>
                                  {paras.para}
                              </p>
                          </div>
                      )
                  })}
              </div>
          </div>

      </div>
      <FaqCopyRight/>
    </div>

  )
}

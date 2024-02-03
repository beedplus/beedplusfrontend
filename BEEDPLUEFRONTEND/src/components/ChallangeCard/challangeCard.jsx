import React from 'react'
import { useGetAllCampaign } from '../../hooks/useGetAllCampaign'
import { useEffect } from 'react';
import Image from'../../assets/cardbackground.png'
import tiktokLogo from '../../assets/Ellipse 7.png'
import './ChallangeCard.scss'
 //const ChallangeCard = ({Image,socialtype,name,startingAmount,currentAmount}) => {


  // if(documents){
  //   return (
    
  //     <div className='challange-card'>
         
  //     </div>
  //   )
  // };


    // if (socialtype === "tiktok"){
    //   return(<img src={tiktok}/>)
    // }
    const ChallangeCard = ()=>{
        const  { error, isPending, documents } = useGetAllCampaign();
        useEffect(() =>{
            console.log(documents.data)
        },[documents]);
      let currentAmount=5
      return (
        <div className='challange-card'>
          <img src={Image} className='background-image'/>
          <div className='top-info-holder'>
            <img src={tiktokLogo}/>
            <div className='amount-remaining-div'>
              <p className='amount'>{currentAmount}</p>
              <p>remaining</p>
            </div>
            
          </div>
          
          
          <div className='bottom-info-holder'>
            <p className='challange-name challange'>#{name}</p>
            <p className='challange'>Davido</p>
            <div className='progress-line' data-percent="90">
              <div className="percentage"style ={{width:"90%"}}><></></div>
            </div>
          </div>
          
        </div>
    
      )
    }
 


export default ChallangeCard
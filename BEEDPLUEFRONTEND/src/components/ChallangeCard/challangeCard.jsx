import React from 'react'
import { useGetAllCampaign } from '../../hooks/useGetAllCampaign'
import { useEffect } from 'react';
import Image from'../../assets/cardbackground.png'
import tiktokLogo from '../../assets/Ellipse 7.png'
import './ChallangeCard.scss'
import { usebackendStore } from '../../store/store';
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

    // const challengeId =  usebackendStore(state => state.ChallangeId)
    const ChallangeCard = (props)=>{
      const setChallengeId =  usebackendStore(state => state.setChallengeId)
      let amountWidth=props.currentAmount*100/props.startingAmount
      
        const  { error, isPending, documents } = useGetAllCampaign();
        useEffect(() =>{
            console.log(documents.data)
        },[documents]);
      let currentAmount=5
      return (
        <div className='challange-card' onClick={() => {setChallengeId(props.id); console.log(props.idaq)}}>
          <img src={props.image} className='background-image'/>
          <div className='top-info-holder'>
            <img src={tiktokLogo}/>
            <div className='amount-remaining-div'>
              <p className='amount'>${props.currentAmount}</p>
              <p>remaining</p>
            </div>
            
          </div>
          <div className='bottom-info-holder'>
            <p className='challange-name challange'>#{props.name}</p>
            <p className='challange'>{props.artiste}</p>
            <div className='progress-line' data-percent="90">
              <div className="percentage"style={{width: {amountWidth}}}><></></div>
            </div>
          </div>
          
        </div>
    
      )
    }
 


export default ChallangeCard
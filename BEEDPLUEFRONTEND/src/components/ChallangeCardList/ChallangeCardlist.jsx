import React from 'react'
import './ChallangeCardlist.scss'
import { useEffect ,useState} from 'react';
import { useGetAllCampaign } from '../../hooks/useGetAllCampaign';
import ChallangeCard from '../ChallangeCard/challangeCard'
function ChallangeCardlist() {
    const  { error, isPending, documents } = useGetAllCampaign();
    const campaignData = documents.data
    useEffect(()=>{
        console.log(campaignData)
    },[documents])
    if(campaignData){
        return (<div className='challange-card-list'>
                <p className='latest'>LATEST CAMPAIGNS</p>
                <div className='class-container'>
                  {campaignData.map((singleData,index)=> 
                < ChallangeCard key={index} image={singleData.image} name={singleData.name} artiste={singleData.artiste} id={singleData.id} currentAmount={singleData.funds.startingAmount-singleData.funds.currentAmount }/>)}
                </div>
               
            </div>)
    }
}

export default ChallangeCardlist

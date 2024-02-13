
import { useGetAllCampaign } from "../../hooks/useGetAllCampaign";
import tiktokLogo from "../../assets/Ellipse 7.png";
import "./ChallangeCard.scss";
import { usebackendStore } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"
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
const joinCampaign = async (id, accessToken) => {
  const apiUrl = `https://beedplus.onrender.com/campaigns/${id}`;

  try {
    const res = await fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const result = await res.json();
  } catch (err) {
    console.error("this is proof", err);
  }
};

const ChallangeCard = (props) => {
  const navigate = useNavigate();
  const setChallengeId = usebackendStore((state) => state.setChallengeId);
  const accessToken = usebackendStore((state) => state.accessToken);
  const navigateToChallengeLink = () => {
    joinCampaign(props.id, accessToken);
    setChallengeId(props.id);
    navigate(`/challenge/${props.id}`);
  };
  let amountWidth = (props.currentAmount * 100) / props.startingAmount;

  let currentAmount = 5;
  return (
    <motion.div
    initial={{scale:.8,opacity:0.2}}
    whileInView={{scale:.9,transition:{duration:.5},opacity:1}}
    whileHover={{scale:1}}

    className="challange-card" onClick={navigateToChallengeLink}>
      <img src={props.image} className="background-image" />
      <div className="top-info-holder">
        <img src={tiktokLogo} />
        <div className="amount-remaining-div">
          <p className="amount">${props.currentAmount}</p>
          <p>remaining</p>
        </div>
      </div>
      <div className="bottom-info-holder">
        <p className="challange-name challange">#{props.name}</p>
        <p className="challange">{props.artiste}</p>
        <div className="progress-line" data-percent="10">
          <div className="percentage" style={{ width: { amountWidth } }}>
            <></>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChallangeCard;

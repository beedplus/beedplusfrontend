import { usebackendStore } from "../../store/store.js";
import "../ConnectTikTok/ConnectTikTok.scss"
const TikTokComponent = () => {
    const userId = usebackendStore((state) => state.user.userId);




    const handleButtonClick = () => {
        console.log('User ID:');

    }

    const href = `https://api.beedplus.com/auth/tiktok/connect?userId=${userId}`;

    return (
        <div className="connect-tiktok-button-div">
            <a target="_blank" href={href} >
                <button className="connect-tiktok-button" onClick={handleButtonClick}>
                    Connect To TikTok
                </button>
            </a>

        </div>
    );
};

export default TikTokComponent;

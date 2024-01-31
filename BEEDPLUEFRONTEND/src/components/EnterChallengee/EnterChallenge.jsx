import "./EnterChallenge.scss"
import enter from "../../assets/image123.svg"

export default function EnterChallence() {
    return (
        <div className="EnterChallence">
            <img src={enter} alt="EnterChallence" />
            <div className="">
                <div className="Discover">
                    <p>
                        Discover an amazing way to make
                        cool cash by jumping on challenges
                    </p>
                </div>
                <div className="ENTER">
                    <h3>ENTER CHALLENGE</h3>
                </div>
            </div>
        </div>
    )
}

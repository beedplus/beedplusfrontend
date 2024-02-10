import "./SideBarAdmin.scss"
import image1 from "../../assets/image 2.png"
import { useState } from "react"

export default function SideBarAdmin() {
  const [clickedDiv, setSClickedDiv] = useState(null)

  const handleClicked = (index) => {
    setSClickedDiv(index)
  }

  return (
    <div className="Sidebaradmin">
      <div className="Sidebaradmin-div">
        <div className="Sidebaradmin-div-logo">
          <img src={image1} alt="div-logo" />
        </div>
        <div className="Sidebaradmin-list">
          <div onClick={() => handleClicked(1)} className={clickedDiv === 1 ? "clicked " : " "}>Campaigns</div>
          <div onClick={() => handleClicked(2)} className={clickedDiv === 2 ? "clicked" : ""}>Claim Requests</div>
          <div onClick={() => handleClicked(3)} className={clickedDiv === 3 ? "clicked" : " "}>Accepted</div>
          <div onClick={() => handleClicked(4)} className={clickedDiv === 4 ? "clicked" : " "}>Rejected</div>
          <div onClick={() => handleClicked(5)} className={clickedDiv === 5 ? "clicked" : " "}>Paid</div>
        </div>
        <div className="Logout-Sidebaradmin-div">
          <div className="Logout-Sidebaradmin">
            LOG OUT
          </div>
        </div>
      </div>
    </div>
  )
}

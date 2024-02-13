import "../NotificationPage/NotificationPage.css";
import adImage from "../../assets/Group 90.png";
import loading from "../../assets/loading.gif";
import { useState, useEffect } from "react";
import { useGetAllNotification } from "../../hooks/useGetAllNotification.jsx";

const NotificationPage = () => {
  const { error, isPending, document } = useGetAllNotification();

  /*let [unread, setUnread] = useState(true)

    function clearMessage(){
        setUnread(!unread)
        console.log(unread, 'clicked')
    }*/

  return (
    <div style={{ width: "100%", display: "flex" }}>
      {isPending && (
        <img
        style={{
          width: "80px",
          height: "70px",
          margin: "250px auto"
        }}
         src={loading} 
         alt="Loading Animation" 
         className="loaderanim" />
      )}
      {error && <p>{error}</p>}

      {document && (
        <div className="notification-container">
          <section className="notification-section">
            <div className="notification-section-image-div">
              <img src={adImage} alt="advert" className="ad-image" />
            </div>
            <header className="notification-header">Notifications</header>
            <div className="verification-section">
              {document.data.map((notification, notificationIndex) => {
                const date = new Date(notification.updatedAt);
                return (
                  <div
                    key={notificationIndex}
                    //   className={`notification ${
                    //     notificationStates[notificationIndex] ? "unread" : "read"
                    //   }`}
                  >
                    <header className="verification-title">
                      {notification.title}
                    </header>
                    <p className="verification-message">{notification.text}</p>
                    <span className="verification-date">
                      {date.toLocaleString("en-US", {
                        timeStyle: "short",
                        dateStyle: "medium",
                      })}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          <footer className="notification-section-footer">
            Copyright BEED+ 2024 Company. All rights reserved
          </footer>
        </div>
      )}
    </div>
  );
};

export default NotificationPage;

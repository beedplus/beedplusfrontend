
import '../NotificationPage/NotificationPage.css'
import adImage from '../../assets/Group 90.png'

import { useState, useEffect } from "react";
import {useGetAllNotification} from "../../hooks/useGetAllNotification.jsx";

const NotificationPage = () => {
    const {error, isPending, document } = useGetAllNotification()

     console.log(document)



    /*let [unread, setUnread] = useState(true)

    function clearMessage(){
        setUnread(!unread)
        console.log(unread, 'clicked')
    }*/


    let verificationInformation = [
        {
            verificationTitle: 'Links Verified',
            verificationMessage: 'Your links have been verified, you can claim now',
            verificationDate: 'Nov 04',
            //read: false
        },

        {
            verificationTitle: 'Links Verified',
            verificationMessage: 'Your links have been verified, you can claim now',
            verificationDate: 'Nov 04',
            //read: false
        },

        {
            verificationTitle: 'Links Verified',
            verificationMessage: 'Your links have been verified, you can claim now',
            verificationDate: 'Nov 04',
            //read: false
        },

        {
            verificationTitle: 'Links Verified',
            verificationMessage: 'Your links have been verified, you can claim now',
            verificationDate: 'Nov 04',
            //read: false
        },

        {
            verificationTitle: 'Links Verified',
            verificationMessage: 'Your links have been verified, you can claim now',
            verificationDate: 'Nov 04',
            //read: false
        },

        {
            verificationTitle: 'Links Verified',
            verificationMessage: 'Your links have been verified, you can claim now',
            verificationDate: 'Nov 04',
            //read: false
        },
    ]


    const initialNotificationStates = verificationInformation.map(() => true);
    const [notificationStates, setNotificationStates] = useState(initialNotificationStates);

    function clearMessage(notificationIndex) {
      if (notificationStates[notificationIndex]) {
        const updatedStates = [...notificationStates];
        updatedStates[notificationIndex] = false;
        setNotificationStates(updatedStates);
        console.log(updatedStates, 'clicked');
      }
    }

  return (
      document && (<div className="notification-container">
        <section className='notification-section'>
            <div className="notification-section-image-div">
                <img src={adImage} alt='advert' className='ad-image'/>
            </div>
        <header className='notification-header'>Notifications</header>
        <div className="verification-section">
            {
                document.data.map((notification, notificationIndex)=> {
                    const date = new Date(notification.updatedAt);
                    return <div key={notificationIndex}
                                     className={`notification ${notificationStates[notificationIndex] ? 'unread' : 'read'}`}
                                     onClick={() => clearMessage(notificationIndex)}  >
                        <header className='verification-title'>{notification.title}</header>
                        <p className='verification-message'>{notification.text}</p>
                        <span className='verification-date'>{date.toLocaleString('en-US', { timeStyle: 'short', dateStyle: 'medium' })}</span>
                    </div>
                })
            }

        </div>
       
        </section>

        <footer className='notification-section-footer'>Copyright BEED+ 2024 Company. All rights reserved</footer>
    </div>)
  )
}

export default NotificationPage

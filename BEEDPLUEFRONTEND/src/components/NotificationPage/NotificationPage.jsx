
import '../NotificationPage/NotificationPage.css'
import adImage from '../../assets/Group 90.png'


const NotificationPage = () => {

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
    <div className="notification-container">
        <section className='notification-section'>
        <img src={adImage} alt='advert' className='ad-image'/>
        <header className='notification-header'>Notifications</header>
        <div className="verification-section">
            {
                verificationInformation.map((notification, notificationIndex)=>{
                    return <div key={notificationIndex}   className={`notification ${notificationStates[notificationIndex] ? 'unread' : 'read'}`}   onClick={() => clearMessage(notificationIndex)}  >
                        <header className='verification-title'>{notification.verificationTitle}</header>
                        <p className='verification-message'>{notification.verificationMessage}</p>
                        <span className='verification-date'>{notification.verificationDate}</span>
                    </div>
                })
            }
            <div className='view-button'>View Older</div>
        </div>
       
        </section>

        <footer className='notification-section-footer'>Copyright BEED+ 2024 Company. All rights reserved</footer>
    </div>
  )
}

export default NotificationPage

// import "./Navbar.scss";
// import Beed from "../../assets/image1.svg";
// import { useEffect, useState } from "react";
// import { usebackendStore } from "../../store/store";
// import { FaRegBellSlash } from "react-icons/fa";
// import { FaRegUser } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { useGetAllNotification } from "../../hooks/useGetAllNotification.jsx";
// import BeedplusLogo from "../BeedplusLogo/BeedplusLogo.jsx";
//
//
// export default function Navbar() {
//   const { error, isPending, document } = useGetAllNotification();
//   const [notificationStatus, setNotificationStatus] = useState(false);
//
//   useEffect(() => {
//     if (document) {
//       const status = document.data.every((data) => data.status === "unread");
//       if (status) {
//         setNotificationStatus(status);
//         console.log(notificationStatus);
//       }
//     }
//   }, [document, notificationStatus]);
//
//  // const accessToken = usebackendStore((state) => state.accessToken);
//     const accessToken = usebackendStore((state) => state.accessToken);
//
//  if (accessToken) { return (<nav className="nav">
//                     <div>
//                     <Link to="/" className="link"><BeedplusLogo/></Link>
//                     </div>
//                     <div className="signed-in-navbar-div">
//                       <button>
//                           {/* <a href= "/auth/Signup">CAMPAIGNS</a> */}
//                       </button>
//
//   if (accessToken) {
//     return (
//
//     );
//   } else {
//     return (
//       <nav className="nav">
//         <div className="not-signed-in-nav-logo">
//           <img src={Beed} alt="website logo" />
//         </div>
//         <div className="not-signed-in-navbar">
//           <p className="earn-now-nav-button">
//             <a href="/auth/Signup">
//               <button
//                 className="nav-button"
//                 style={{ width: 90.3, height: 28.21 }}
//               >
//                 Earn Now{" "}
//               </button>
//             </a>
//           </p>
//           <p className="not-signed-in-login-page">
//             <a href="/auth/Signin">Login</a>
//           </p>
//         </div>
//       </nav>
//     );
// //                       </p>
// //                     </div>
//
// //                   </nav>)}
// //                     else {return (
// //                      <nav className="nav">
// //                    <div className="not-signed-in-nav-logo">
// //                         <BeedplusLogo/>
// //                    </div>
// //                   <div className="not-signed-in-navbar">
// //                       <p className="earn-now-nav-button">
// //                           <a href="/auth/Signup" ><button className="nav-button"style={{width: 90.3, height: 28.21}} >Earn Now </button></a>
// //                       </p>
// //                       <p className="not-signed-in-login-page">
// //                           <a href = "/auth/Signin">Login</a>
// //                       </p>
// //                   </div>
// //                 </nav>)}
//
// }

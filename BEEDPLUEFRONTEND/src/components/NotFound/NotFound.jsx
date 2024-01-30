import image from "../../assets/image 1.png" 
import "./NotFound.css"


const NotFound = () => {
    return (
      <section>
        <div className="NotFound">
        <div>
           <img src={image} alt="beed logo" />
        </div>
       

          <h2>Result not found</h2>
          <p>
            Whoops!... The search result is not available
          </p>
        </div>
      </section>
    );
  };
  export default NotFound;
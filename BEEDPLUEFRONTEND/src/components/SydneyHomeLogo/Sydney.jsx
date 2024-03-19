import "../SydneyHomeLogo/sydney.scss"
import money from "../../assets/pic-12-removebg-preview.png"
import music from "../../assets/depositphotos_3376847-stock-photo-music.jpg"
import reading from "/Users/josiah/Documents/beedplus/beedplusfrontend/BEEDPLUEFRONTEND/src/assets/reading2.jpg"
import sydney from "/Users/josiah/Documents/beedplus/beedplusfrontend/BEEDPLUEFRONTEND/src/assets/WhatsApp Image 2024-02-07 at 12.46.00.jpeg"
const Sydney = () =>{
    return(
        <section className="sydney-homepage-component">
            <div className="sydney-homepage-component-div">
                <section className="sydney-homepage-top-images">
                    <div className="sydney-homepage-potrait-image">
                        <img alt="sydney" src={sydney}/>
                    </div>
                    <div className="sydney-homepage-music-logo-section">
                        <div className="shmls-top">
                            <p>

                            </p>
                        </div>
                        <div className="shmls-bottom">
                            <img alt="sydney" src={music}/>
                        </div>

                    </div>
                </section>
                <section className="sydney-homepage-bottom-images">
                    <div className="sydney-homepage-money-logos">
                        <div className="shml-red">
                            <p>

                            </p>
                        </div>
                        <div className="homepage-dollar-image">
                            <img alt="sydney" src={money}/>
                        </div>

                    </div>
                    <div className="sydney-homepage-reading-logo">
                        <img alt="sydney" src={reading}/>
                    </div>
                </section>
            </div>
        </section>
    )

}
export default Sydney
import "../SydneyHomeLogo/sydney.scss"
// import money from "/Users/josiah/Documents/beedplus/beedplusfrontend/BEEDPLUEFRONTEND/src/assets/money.png"
// import music from "/Users/josiah/Documents/beedplus/beedplusfrontend/BEEDPLUEFRONTEND/src/assets/music.png"
// import reading from "/Users/josiah/Documents/beedplus/beedplusfrontend/BEEDPLUEFRONTEND/src/assets/reading.png"
// import sydney from "/Users/josiah/Documents/beedplus/beedplusfrontend/BEEDPLUEFRONTEND/src/assets/WhatsApp Image 2024-02-07 at 12.46.00.jpeg"
const Sydney = () =>{
    return(
        <section className="sydney-homepage-component">
            <div className="sydney-homepage-component-div">
                <section className="sydney-homepage-top-images">
                    <div>
                        <img alt="sydney" src={sydney}/>
                    </div>
                    <div>
                        <img alt="sydney" src={music}/>
                    </div>
                </section>
                <section className="sydney-homepage-bottom-images">
                    <div>
                        <img alt="sydney" src={money}/>
                    </div>
                    <div>
                        <img alt="sydney" src={reading}/>
                    </div>
                </section>
            </div>
        </section>
    )

}
export default Sydney
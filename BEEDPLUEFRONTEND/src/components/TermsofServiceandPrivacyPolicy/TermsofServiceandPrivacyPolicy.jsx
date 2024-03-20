import "./TermofServices.scss"

const TermsofServiceandPrivacyPolicy = () => {

    const TermofServer = [
        {
            maintitleNumber: "1",
            title: "Introduction",
            titleNumberOne: "1.1 ",
            titlecompOne: "Acceptance of Terms",
            titleinformOne: "By accessing BeedPlus and using our services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please refrain from using our platform.",
            titleNumberTwo: "1.2",
            titlecompTwo: "Changes to Terms",
            titleinformTwo: "BeedPlus reserves the right to modify these Terms at any time. We will notify users of any changes through the platform. Your continued use of BeedPlus after such modifications constitutes acceptance of the updated Terms."
        },
        {
            maintitleNumber: "2",
            title: "Campaign Submission",
            titleNumberOne: "2.1 ",
            titlecompOne: " Eligibility",
            titleinformOne: "Campaigns can be submitted by individuals, businesses, or organizations looking to promote their products or services.",
            titleNumberTwo: "2.2",
            titlecompTwo: "Submission Process",
            titleinformTwo: "Campaign submissions must include detailed instructions and a sample video to guide creators. BeedPlus will review and approve campaigns based on their alignment with our values and guidelines."
        },
        {
            maintitleNumber: "3",
            title: "Creator Engagement",
            titleNumberOne: "3.1 ",
            titlecompOne: " Eligibility",
            titleinformOne: "Creators must meet the eligibility criteria specified by BeedPlus to participate in campaigns.",
            titleNumberTwo: "3.2",
            titlecompTwo: "Content Creation",
            titleinformTwo: "Creators are required to follow the instructions provided by the campaign submitter. The submitted videos will be reviewed for adherence to the guidelines.",
            titleNumberThree: "3.3",
            titlecompthree: "compensation",
            titleinformThree: "Creators will earn a commission for every set of five approved videos created for a specific campaign. Compensation details will be outlined in the campaign details.",
            titleNumberfour: "3.4",
            titlecompfour: "Payout",
            titleinformfour: "Earnings will be processed and paid out according to the payment schedule outlined on BeedPlus."
        },
        {
            maintitleNumber: "4",
            title: "Video Submission Guidelines",
            titleNumberOne: "4.1 ",
            titlecompOne: "Quality Standards",
            titleinformOne: "Submitted videos must meet high-quality standards in terms of production, content, and creativity.",
            titleNumberTwo: "4.2",
            titlecompTwo: "Originality",
            titleinformTwo: "Creators must ensure that their content is original and does not infringe on any copyrights or intellectual property rights.",
            titleNumberThree: "4.3",
            titlecompthree: "Compliance",
            titleinformThree: "Videos must comply with all applicable laws and regulations. Any content promoting hate speech, violence, or discrimination will be rejected. ",
        },
        {
            maintitleNumber: "5",
            title: " Intellectual Property",
            titleNumberOne: "5.1 ",
            titlecompOne: "Ownership",
            titleinformOne: "Campaign submitters retain ownership of their campaign materials. Creators grant BeedPlus a non-exclusive license to use and display their submitted videos on the platform. ",
        },
        {
            maintitleNumber: "6",
            title: " Account Termination",
            titleNumberOne: "6.1 ",
            titlecompOne: "Violation of Terms",
            titleinformOne: "BeedPlus reserves the right to terminate accounts of users who violate these Terms, engage in fraudulent activities, or create content that goes against our guidelines.",
        },
        {
            maintitleNumber: "7",
            title: "Privacy Policy",
            titleNumberOne: "7.1 ",
            titlecompOne: "Data Collection",
            titleinformOne: "BeedPlus collects and processes personal information following our Privacy Policy. By using our platform, you consent to our data practices.",
        },
        {
            maintitleNumber: "8",
            title: " Liability and Disclaimers",
            titleNumberOne: "8.1 ",
            titlecompOne: " Disclaimer",
            titleinformOne: "BeedPlus is not responsible for the success or failure of campaigns. We provide a platform for connection and collaboration but do not guarantee specific results.        ",
            titleNumberTwo: "8.2",
            titlecompTwo: "Indemnity",
            titleinformTwo: "Users agree to indemnify and hold BeedPlus harmless from any claims, losses, or damages arising from their use of the platform.",
            titleNumberThree: "8.3",
            titlecompthree: " Wrong Account Details",
            titleinformThree: "BeedPlus will not be held liable for any issues arising from the inputting of wrong account details by users. It is the user's responsibility to ensure accurate and up-to-date information is provided for payment processing.",
        },
        {
            maintitleNumber: "9",
            title: "General Provisions",
            titleNumberOne: "9.1 ",
            titlecompOne: "Governing Law",
            titleinformOne: "These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes arising out of or in connection with these Terms will be subject to the exclusive jurisdiction of the courts inthe Federal Republic of Nigeria.",
        },
        {
            maintitleNumber: "10",
            title: " Contact Information",
            titleinformOne: "For any questions or concerns regarding these Terms, please contact us at support@beedplus.com.",
        },


    ]



    return (
        <div className="TermsofServices-parent">
            <div className="TermsofServices-parent-one">
                <h3>BEEDPLUS MARKETING WEBSITE - PRIVACY POLICY</h3>
                <p>Welcome to BeedPlus, a platform that values your privacy and is committed to maintaining
                    the confidentiality of your information. This Privacy Policy outlines how we collect,
                    use, and safeguard your data when you interact with our marketing website. Please read
                    this policy carefully to understand how your personal information will be handled.
                </p>
            </div>
            <div className="term">
                {TermofServer.map((term) => (
                    <>
                        <div className="term-title">
                            <h3>{term.maintitleNumber} .</h3>
                            <h3>{term.title}</h3>
                        </div>
                        <div className="term-title-two">
                            <p>{term.titleNumberOne}</p>
                            <p >{term.titlecompOne}</p>
                        </div>
                        <div className="para-term-one">
                            <p>
                                {term.titleinformOne}
                            </p>
                        </div>
                        <div className="term-title-two">
                            <p>{term.titleNumberTwo}</p>
                            <p >{term.titlecompTwo}</p>
                        </div>
                        <div className="para-term-one">
                            <p>
                                {term.titleinformTwo}
                            </p>
                        </div>
                        <div className="term-title-two">
                            <p>{term.titleNumberThree}</p>
                            <p >{term.titlecompthree}</p>
                        </div>
                        <div className="para-term-one">
                            <p>
                                {term.titleinformThree}
                            </p>
                        </div>
                        <div className="term-title-two">
                            <p>{term.titleNumberfour}</p>
                            <p >{term.titlecompfour}</p>
                        </div>
                        <div className="para-term-one">
                            <p>
                                {term.titleinformfour}
                            </p>
                        </div>
                    </>

                ))}
            </div>
            <div className="lastdatafromthepage">
                <h4>Thank you for being part of the BeedPlus community! We look forward to fostering creativity</h4>
                <h4> and collaboration on our platform!</h4>
            </div>
        </div>
    )
}

export default TermsofServiceandPrivacyPolicy

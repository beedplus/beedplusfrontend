import "./PrivacyPolicy.scss"

const PrivacyPolicy = () => {
    const TermofServer = [
        {
            maintitleNumber: "1",
            title: "Overview",
            titleNumberOne: "1.1 ",
            titlecompOne: " Scope",
            titleinformOne: "This Privacy Policy applies to all users of the BeedPlus marketing website, including campaign submitters and creators participating in campaigns.            ",
            titleNumberTwo: "1.2",
            titlecompTwo: " Consent",
            titleinformTwo: "By using BeedPlus, you consent to the practices described in this Privacy Policy. "
        },
        {
            maintitleNumber: "2",
            title: "Information We Collect",
            titleNumberOne: "2.1 ",
            titlecompOne: " Personal Information",
            titleinformOne: "We may collect personal information, including but not limited to names, email addresses, and payment details when users submit campaigns or create content on BeedPlus.",
            titleNumberTwo: "2.2",
            titlecompTwo: "Campaign Information",
            titleinformTwo: "Campaign submissions must include detailed instructions and a sample video to guide creators. BeedPlus will review and approve campaigns based on their alignment with our values and guidelines.",
            titleNumberThree: "2.3",
            titlecompthree: "User Activity",
            titleinformThree: "We collect information about user activity on the platform, including video submissions and interactions with campaigns",            
        },
        {
            maintitleNumber: "3",
            title: "How We Use Your Information",
            titleNumberOne: "3.1 ",
            titlecompOne: "Campaign Processing",
            titleinformOne: "Personal information is used to process and review campaign submissions, ensuring they align with our guidelines.",
            titleNumberTwo: "3.2",
            titlecompTwo: " Creator Engagement",
            titleinformTwo: "We use information to facilitate the engagement of creators with campaigns, track video submissions, and process compensation.            ",
            titleNumberThree: "3.3",
            titlecompthree: " Platform Improvement ",
            titleinformThree: "Aggregate and anonymized data are used for analytics to improve the functionality and user experience of BeedPlus.",
             },
        {
            maintitleNumber: "4",
            title: "Information Security",
            titleNumberOne: "4.1 ",
            titlecompOne: "Data Encryption",
            titleinformOne: "We employ industry-standard encryption protocols to protect the transmission of sensitive information.",
            titleNumberTwo: "4.2",
            titlecompTwo: "Access Controls",
            titleinformTwo: "Access to personal information is restricted to authorized personnel, and stringent access controls are in place.",
        },
        {
            maintitleNumber: "5",
            title: "User Control and Choices ",
            titleNumberOne: "5.1 ",
            titlecompOne: " Account Settings",
            titleinformOne: "Users can review and update their account settings, including personal information and communication preferences.",
            titleNumberTwo: "5.2 ",
            titlecompTwo: "Opt-Out",
            titleinformTwo: "Users have the option to opt out of certain communications and data processing activities.",
       
        },
        {
            maintitleNumber: "6",
            title: " Information Sharing",
            titleNumberOne: "6.1 ",
            titlecompOne: "Third-Party Service Providers",
            titleinformOne: "We may share information with trusted third-party service providers for payment processing and analytics.",
            titleNumberTwo: "6.2 ",
            titlecompTwo: "Campaign Submitters and Creators",
            titleinformTwo: "Personal information, including campaign details and video submissions, may be shared between campaign submitters and creators for collaboration purposes.",
       
        },
        {
            maintitleNumber: "7",
            title: " Compliance with Laws",
            titleNumberOne: "7.1 ",
            titlecompOne: "Legal Requirements",
            titleinformOne: "We may disclose information when required by law or in response to legal processes.",
            titleNumberTwo: "7.2",
            titlecompTwo: "Protection of Rights",
            titleinformTwo: "Information may be disclosed to protect our rights or the rights of other users.",
       
        },
       {
        maintitleNumber: "8",
        title: "Children's Privacy",
        titleinformOne: "BeedPlus is not intended for users under the age of 16. We do not knowingly collect or maintain information from individuals under this age.",
         },
       {
        maintitleNumber: "9",
        title: " Changes to the Privacy Policy",
        titleinformOne: "We reserve the right to update this Privacy Policy. Users will be notified of any changes, and continued use of BeedPlus constitutes acceptance of the updated policy.",
      },
      {
        maintitleNumber: "10",
        title: " Contact Information",
        titleinformOne: "For any questions or concerns regarding this Privacy Policy, please contact us at legal@beedplus.com.",
      },


    ]
  return (
    <div className="TermsofServices-parent">
       <div className="TermsofServices-parent-one">
                <h3>BEEDPLUS MARKETING WEBSITE - TERMS AND CONDITIONS</h3>
                <p>Welcome to BeedPlus, the innovative platform connecting
                    creators with exciting marketing campaigns. These Terms and Conditions
                    govern your use of our website and services. By submitting a campaign
                    or creating content on BeedPlus, you agree to comply with these Terms.
                    Please read them carefully.</p>
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
                <h4>Thank you for entrusting us with your information. We are dedicated to ensuring a safe and</h4>
                <h4> secure environment for all users on BeedPlus.</h4>
            </div>
    </div>
  )
}

export default PrivacyPolicy

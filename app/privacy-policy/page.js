
export default function PrivacyPolicy() {

    // const privacyPolicy = ["Thank you for providing the additional information. Here's a more detailed privacy policy description for your news blog website:","At GlobalSeven, we understand the importance of privacy and are committed to protecting your personal information. This privacy outlines how we collect, use, and protect your data when you visit website."]
    const information_we_collect = ["When you visit our website, we may collect certain information about you. This your IP address, browser type, device type, and. We may also collect information about your browsing behavior, such as the pages you visit and the time you spend on our website.","We may use cookies and other tracking technologies to collect this information. Cookies are small text files that are on your device when you visit our website. They help us to improve your browsing experience and provide you with personalized content."]
    const how_we_use_the_information = ["We use the information we collect to improve our website and provide you with a better browsing experience. This includes analyzing website traffic, identifying popular content, and optimizing our website for different devices and browsers.", "We may also use your information to display ads on our website. These ads are provided by third-party advertisers and may be based on your browsing behavior. However, we do not collect any personally identifiable information from you for the purpose of displaying ads.", "We may use traffic calculators to analyze website traffic. This information is anonymous and cannot be used to identify you. We use this information to improve our website and provide you with better content."]

    const how_we_protect_your_information = ["We take all necessary measures to ensure that your data is secure. We have strict policies in place to prevent any data breaches and protect your personal information from unauthorized access, use, or disclosure.","We use industry-standard security measures, such as encryption and firewalls, to protect your data. We also limit access to your data to authorized personnel only."]
    const third_party_links = ["Our website may contain links to third-party websites. These websites have their own privacy policies and we are not responsible for their content or practices. We encourage you to review their privacy policies before providing any personal information."]
    const children_privacy = ["Our website is not intended for children under the age of 13. We do not knowingly collect any personal information from children under the age of 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately."]
    const changes_to_our_policy = ["We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on our website. We encourage you to review our privacy policy periodically for any changes."]
    const contact_us = ["If you have any questions or concerns about our privacy policy, please do not hesitate to contact us. You can reach us by email at agapeloveapps@gmail.com or by phone at +917036024586.", "Thank you for choosing GlobalSeven. We value your privacy and are committed to protecting your personal information."]

    const titles = [
        "Information We Collect",
        "How We Use Your Information",
        "How We Protect Your Information",
        "Third-Party Links",
        "Children's Privacy",
        "Changes to Our Privacy Policy",
        "Contact Us",
    ]

    const privacy_data = [
        {title : titles[0], info : information_we_collect},
        {title : titles[1], info : how_we_use_the_information},
        {title : titles[2], info : how_we_protect_your_information},
        {title : titles[3], info : third_party_links},
        {title : titles[4], info : children_privacy},
        {title : titles[5], info : changes_to_our_policy},
        {title : titles[6], info : contact_us},
    ]


    return (
    <section className="p-6">
      <h1 className="font-bold text-black text-3xl mb-7">Privacy Policy</h1>
      
      <p className="font-[ProximaNova] pb-8">Thank you for providing the additional information. Here's a more detailed privacy policy description for your news blog website:
<br /> <br />   At GlobalSeven, we understand the importance of privacy and are committed to protecting your personal information. This privacy outlines how we collect, use, and protect your data when you visit website.
</p>
      <div className="font-[ProximaNova] ">

        {privacy_data.map((data_object,i) => {

            return (
                <div key={i}>
                    <h2 className="font-[HelveticaCustom] text-lg pb-5">{data_object.title}</h2>
                    <p>{data_object.info.map((text, i2) => <p key={i2} className="pb-5">{text}</p>)}</p>
                </div>
        )
            
        })}


      </div>
    </section>
  );
}
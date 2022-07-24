import {React, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
export default function Disclaimer() {

    const history = useNavigate();
    const [disclaimer, setDisclaimer] = useState(true)

    useEffect(() => {
      if(disclaimer) {
        document.body.classList.add('disable-pointer-events')
        document.body.classList.add('hide-scroll')
      }
    }, []);
  
    const handleAcceptClick = () => {
      setDisclaimer(false)
      document.body.classList.remove('disable-pointer-events')
      document.body.classList.remove('hide-scroll')
      history('/home');
    }
  return (
    <>
      {disclaimer && (
        <div className="disclaimer-container">
          <div class="disclaimer">
            <p class="first">Disclaimer</p>
            <p class="second">
              Disclaimers and Confirmation All the information, publications and
              legal commentary provided on www.advsumitpandey.com is for
              illustrative purposes only and should not be regarded or relied
              upon as legal advice. While the content provided is accurate as at
              the date of first publication, laws and regulations change
              frequently. Any reliance on the information contained on
              www.advsumitpandey.com is solely at the user's own risk. Specific
              legal advice should always be obtained before acting upon any
              information or commentary provided on the site. Further, the
              recipients of content from the site should not act, or refrain
              from acting, based upon any or all of the contents on the site.
              The site is not intended to be a source of advertising or
              solicitation. By visiting this site, you acknowledge that you are
              doing so voluntarily and of your own free will. You should not
              consider the information on the site to be an invitation for a
              lawyer-client relationship, and transmission, receipt or use of
              the site does not constitute or create a lawyer-client
              relationship. As per the rules of the Bar Council of India, we are
              not permitted to solicit work and advertise through website except
              as permitted under the aforesaid rules. The information provided
              under this website is solely available for informational purposes
              only and should not be interpreted as soliciting or advertisement.
              By accessing the website, you hereby acknowledge the following:
              That you have requested for the access to the website to gain more
              information about us for your information and use; There has been
              no advertisement, personal communication, solicitation, invitation
              or inducement of any sort whatsoever from us or any of our members
              to solicit any work through this website; The information about us
              is provided to the user only on request and any information
              obtained or materials downloaded from this website and any
              transmission, receipt or use of this site would not create any
              lawyer-client relationship. Neither this website nor the web pages
              and the information contained herein constitute a contract, or
              will form the basis of a contract; No liability can arise for any
              action taken by the user relying on the material/ information
              provided under this website; In cases where the user has any legal
              issues, he/she in all cases must seek independent legal advice, as
              the materials contained in this website does not
              constitute/substitute professional advice that may be required
              before acting on any matter; You hereby agree to the Privacy
              Policy of the firm.
            </p>
            <div className="accept">
              <button onClick={handleAcceptClick} className="btn btn-primary">
                Agree
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

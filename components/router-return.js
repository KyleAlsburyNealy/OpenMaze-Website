import { withRouter } from 'next/router'
import Openmaze from "../public/WebsiteLogoFinal.png";

function RouterReturn({ router }) {
    console.log(router.pathname)
    if (String(router.pathname) === "/") {
        return <div></div>;
      }
      return <img src={Openmaze} alt="" className="w-48 sm:w-56" />;
}

export default withRouter(RouterReturn)
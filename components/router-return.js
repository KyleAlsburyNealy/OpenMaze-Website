import { withRouter } from 'next/router'
import Link from "next/link";
import Openmaze from "../public/WebsiteLogoFinal.png";

function RouterReturn({ router }) {
    console.log(router.pathname)
    if (String(router.pathname) === "/") {
        return <div></div>;
      }
      return <div></div>;
}

export default withRouter(RouterReturn)
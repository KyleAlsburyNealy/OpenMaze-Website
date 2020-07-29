import { withRouter } from 'next/router'
import Link from "next/link";
import Openmaze from "../public/WebsiteLogoFinal.png";

function RouterReturn({ router }) {
    console.log(router.pathname)
    if (String(router.pathname) === "/") {
        return <div></div>;
      }
      return <Link href="/">
        <img src={Openmaze} alt="" className="w-48 sm:w-56" /></Link>;
}

export default withRouter(RouterReturn)
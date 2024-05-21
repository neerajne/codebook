import {Link} from "react-router-dom" ;

import pagenotFound from "../assets/images/pagenotfound.png"
export const PageNotFound = () => {
  return (
    <section className="pageNotFound">
      <p>404 Page Not Found</p>
      <img src={pagenotFound} alt="pnf" />
      <Link to= "/">
        <button>Back to home</button>
      </Link>
    </section>
  )
}



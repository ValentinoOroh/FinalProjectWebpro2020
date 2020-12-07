import { Link } from 'react-router-dom'
import Sound from './Sound'




const navbar = () => {
  return (
      <div>
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to='/' className="navbar-brand">COVID-19</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/' className="nav-link">Global</Link>
            </li>
            
            <li className="nav-item">
              <Link to='/indonesia' className="nav-link">Indonesia</Link>
            </li>
            <li className="nav-item">
              <Link to='/provinsi' className="nav-link">Province in Indonesia</Link>
            </li>
            
          </ul>
        </div>
      </nav>
      <font size="5">
        <marquee bgcolor="black" scrollamount="5" direction="right" behavior="alternate">
            <font color="white">WELCOME TO CORONA TRACKER SITE by : Valentino Oroh</font>
        </marquee>
    </font>

    
    </div> 
    <Sound/>
    </div>
  );
}



export default navbar;
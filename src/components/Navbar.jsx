import {Link} from 'react-router-dom';


const Navbar = () => {
    return ( 
        <nav className='navbar'>
             <div>
             <h1>✂------</h1>
            </div>
            <div>
                <Link to="/home">TrackLoc</Link>
            </div>
            <div>
               <Link to="/home"> <img src="https://img.freepik.com/premium-vector/luxury-letter-k-logo-royal-gold-star_68880-109.jpg" alt=""  width="50px" height="50px"/></Link>
            </div>
            <div>
                <Link to="/home" ><span>HOME</span></Link>
            </div>
            <Link ></Link>
            <div>
                <input type="number"  placeholder="enter emp id/emp name" />
                <Link to="/Search"><button>Search</button></Link>
            </div>
            <div>
            <h1>✂------</h1>
            </div>
        </nav>
     );
}
 
export default Navbar;
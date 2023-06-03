import { Link } from "react-router-dom";
import Addbatch from "./Addbatch";
const Sewingdep = () => {

         
           
    return ( 
        <div className="sewingdep">
         <div>
         <Link to="/Addbatch" > 
            <a href="">Addbatch</a>
                
                </Link>
         <span>Sewing department</span>
         <Link to="/Changeover"><span>Changeover</span></Link>
         </div>
          <div>
            <Link>
            <span>b1</span>
            </Link>
          </div>

          <div>
            <Link>
            <span>b2</span>
            </Link>
          </div>

          

          
        </div>
     );
}
 
export default Sewingdep;
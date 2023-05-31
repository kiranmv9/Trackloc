import {Link} from "react-router-dom"

const Home = () => {
    return ( 
        <div className="home">
            <div>
            <Link to="/FabricDept" > 
            <a href="">Fabric dept</a>
                <img src="https://c1.wallpaperflare.com/preview/875/912/1008/cloth-fabric-textile-silk.jpg" alt=""  />
                </Link>
            </div>
           
            <div>
            <Link to="/CuttingDept" > 
            <a href="">Cutting dept</a>
            <img src="https://plus.unsplash.com/premium_photo-1661819382628-966e407096f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="" />
            </Link> 
            </div>
        
              <div>
              <Link to="/EmbroideryDept" > 
              <a href="">Embroidery dept</a>
            <img src="https://media.istockphoto.com/id/626996204/photo/embroidery-machine-stiching.jpg?s=612x612&w=0&k=20&c=JO4amHGkgh5LP6gyni1V0CaOVNPO5Y_1KD-viDOUVXk=" alt="" />
            </Link>
              </div>
              
              <div>
              <Link to="/PrintingDept" > 
              <a href="">Printing  dept</a>
                <img src="https://media.istockphoto.com/id/1179027542/photo/t-shitrs-silk-screen-printing.jpg?s=2048x2048&w=is&k=20&c=TfaNKFQGLCkh7ybtqKJhXLR-lRkJXnaxVIQRG2924KU=" alt="" />
                </Link>
              </div>

                
            <div>
            <Link to="/SewingDept" > 
            <a href="">Sewing dept</a>

            <img src="https://wallpapercave.com/dwp1x/wp3591173.jpg" alt="" />
            </Link>
            </div>

            <div>
            <Link to="/FinishingDept" > 
            <a href="">Finishing dept</a>
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyeFlRRm3sEjRssYfiksqOpQ17i5Ocblb-xg&usqp=CAU" alt="" />
          </Link>
            </div>
        </div>
     );
}
 
export default Home;
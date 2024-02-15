import { Link } from "react-router-dom";
const HomeLayout = () => {

    return (
        <>
       <div className="container-fluid">
        <div className="row container-1">
            <div className="col">
            <img src="src/assets/HomeMainPic.jpg" className="img-fluid" alt="HomeMainPic" />
            </div>
        </div>
         <div className="row container-2">
            <div className="col-md-6">
            <h2>Menu</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vero nobis perspiciatis, asperiores blanditiis vel enim quam fuga laboriosam omnis?</p>
            <Link to="">Read more</Link>
            <link rel="stylesheet" href="" />
            </div>
            <div className="col-md-6">
            <img src="src/assets/HomeSteakPic.jpg" className="img-fluid" alt="HomeMainPic"  />
            </div>
         </div>   
         <div className="row  container-3">
         <div className="col-md-6 order-md-1">
            <h2>Make a reservation</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vero nobis perspiciatis, asperiores blanditiis vel enim quam fuga laboriosam omnis?</p>
            <Link to="/book">Read more</Link>
            </div>
            <div className="col-md-6 order-md-2">
            <img src="src/assets/HomeClamPic.jpg" className="img-fluid" alt="HomeMainPic" />
            </div>

        </div>
       </div>
       </>
    )
}



export default HomeLayout;


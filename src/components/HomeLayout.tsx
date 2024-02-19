import FadeInComponent from '../styles/animation/FadeInComponent';
import SlideUpComponent from '../styles/animation/SlideUpComponent';
import '../styles/StartPageStyle/startPageStyle.css';

const HomeLayout = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col position-relative">
                    <img src="src/assets/HomeMainPic.jpg" className="img-fluid" alt="HomeMainPic" />
                    <div className="content-container text-center">
                        <h1 className="text-white fade-in">S A V O R</h1>
                    </div>
                </div>
            </div>
            {/*MENU*/}
            <div className="row">
                <div className="col-md-6 ">
                <SlideUpComponent />
                    <h2>Menu</h2>
                    <p>A progression of rare and beautiful ingredients where texture, flavour and harmony is paramount. Delve into the Savor dining experience with Owen Brookstone’s Menu and a thoughtfully curated Wine List by Head Sommelier, Wilem Powell.</p>
                    <a className="btn btn-outline-success" href="" role="button">Read more</a>
                </div>
                <div className="col-md-6">
                    <FadeInComponent />
                    <img src="src/assets/HomeSteakPic.jpg" className="img-fluid fade-in-container " alt="HomeMainPic"  />
                </div>
            </div>   
             {/*MAIN CHEF*/}
            <div className="row">
                <div className="col-md-6 order-md-2">
                    <SlideUpComponent />
                    <h2>Owen Brookstone</h2>
                    <p>Owen’s appreciation of nature’s diversity and his endless experimentation in the kitchen and garden are the driving forces in his cooking. Owen leads the Savor team with a focus on excellence, innovation and hospitality.</p>
                    <a className="btn btn-outline-success" href="" role="button">Read more</a>
                </div>
                <div className="col-md-6 order-md-1">
                <FadeInComponent />
                    <img src="src/assets/MainChefPic.jpg" className="img-fluid fade-in-container" alt="HomeMainPic" />
                </div>
            </div>
             {/*EVENTS*/}
            <div className="row">
                <div className="col-md-6 ">
                <SlideUpComponent />
                    <h2>Events</h2>
                    <p>Celebrate at one of Australia’s most awarded restaurants, with panoramic views encompassing the Sydney Harbour Bridge and Sydney Opera House. From intimate dinner parties in the Private Dining Room, to long lunches in the spectacular Upper Tower, to large cocktail events in The Green Room – Savor delivers an immersive dining experience with views like no other.</p>
                    <a className="btn btn-outline-success" href="" role="button">Read more</a>
                </div>
                <div className="col-md-6">
                    <FadeInComponent />
                    <img src="src/assets/HomeClamPic.jpg" className="img-fluid fade-in-container " alt="HomeMainPic" />
                </div>
            </div>  
            <div className="row">
                <div className="col position-relative d-flex justify-content-center align-items-center">
                <FadeInComponent />
                    <img src="src/assets/HomeIndoorPic.jpg" className="img-fluid fade-in-container" alt="HomeMainPic" />
                    <div className="content-container text-center">
                        <h3 className="text-white">Make a reservation</h3>
                        <a className="btn btn-light" href="/BOOK" role="button">Book Table</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeLayout;

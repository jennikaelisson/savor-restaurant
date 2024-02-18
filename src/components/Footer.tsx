import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="footer mt-auto">
        <div>
          <div className="mx-0 row">
            <div className="col-12 col-md-8 p-5 footer-left">
              <div className="p-1">
                <h1 className="name-style">SAVOR</h1>
              </div>
              <div className="row">
                <div className="col-12 col-sm-3">
                  {/* display these 3 as flex wrap */}
                  <div className="p-1">
                    <h3>SITEMAP</h3>
                    <ul className="list-style">
                      <li>
                        <Link to="#">About</Link>
                      </li>
                      <li>
                        <Link to="#">Menu</Link>
                      </li>
                      <li>
                        <Link to="#">News</Link>
                      </li>
                      <li>
                        <Link to="#">Meet the team</Link>
                      </li>
                      <li>
                        <Link to="#">Reservation Policy</Link>
                      </li>
                      <li>
                        <Link to="#">Privacy Policy</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="p-1">
                    <h3>SOCIAL</h3>
                    {/* Why wont these icons work? */}
                    <div>
                      <img src="../img/facebook.png" alt="Facebook icon" />{" "}
                      <img src="../img/youtube.png" alt="Youtube icon" />
                      <img src="../img/instagram.png" alt="Instagram icon" />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4">
                  <div className="p-1">
                    <h3>LOCATION</h3>
                    <p>
                      Upper Level, Elizabeth Dr,
                      <br />
                      The Rocks, Sydney 2177
                      <br />
                      phone: 02 9232 9480
                    </p>
                  </div>
                  <div className="p-1 thin-font">
                    <h3>OPENING HOURS</h3>
                    <p>
                      LUNCH
                      <br />
                      Monday to Friday
                      <br />
                      No reservation 12pm to 2.30pm
                    </p>
                    <p>
                      DINNER
                      <br />
                      Monday to Sunday <br />
                      Reservations at 6pm and 9pm
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-5">
                  <div className="p-1">
                    <h3>RESERVATIONS</h3>
                  </div>
                  <div className="p-0">
                    <Link to="/book">
                      <button className="btn button">MAKE A RESERVATION</button>
                    </Link>
                  </div>
                  <div className="pt-5">
                    <p>Tel: 02 9232 9480</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 p-5 footer-right">
              <div className="p-1 pt-5">
                <h2 className="p-2">BRANCHES</h2>
              </div>
              <div className="p-1">
                <ul className="list-style">
                  <li className="p-2">
                    <h4>DEVOUR</h4>
                  </li>
                  <li className="p-2">
                    <h4>WHISK</h4>
                  </li>
                  <li className="p-2">
                    <h4>OTTO'S</h4>
                  </li>
                  <li className="p-2">
                    <h4>TASTE</h4>
                  </li>
                  <li className="p-2">
                    <h4>GILDAS</h4>
                  </li>
                  <li className="p-2">
                    <h4>FIREDOOR</h4>
                  </li>{" "}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 text-center dark-background">
          <h4>© SAVOR RESTAURANT 2024. ALL RIGHTS RESERVED.</h4>
          <span className="text-muted admin-link">
            <Link to="/admin">Adminlogin</Link>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

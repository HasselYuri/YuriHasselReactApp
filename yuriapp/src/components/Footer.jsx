// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"></link>
            <link rel="stylesheet" href="../style/style.css"></link>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Services</h3>

                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>About</h3>

                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Careers</h3>

                    </div>
                    <div className="col-lg-3 item social">
                        <Link to="https://www.facebook.com/yuri.hassel.1/" target="_blank"><i className="icon ion-social-facebook"></i></Link>
                        <br></br>
                        <Link to="https://www.instagram.com/hassel.yuri/"><i className="icon ion-social-instagram" target="_blank"></i></Link>
                        <p className="copyright">Yuri Hassel © 2023</p>
                    </div>
                </div>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>

        </footer>
    )
}
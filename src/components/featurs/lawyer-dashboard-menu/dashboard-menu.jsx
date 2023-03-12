import "./dashboard-menu.css";
import { Col, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const DashboardMenu = () => {
  const userName = Cookies.get('userName')
  
  return (
    <>
      <div className="menuBtn">
        <input type="checkbox" id="check" />
        <label for="check">
          <i class="fas fa-bars" id="btn"></i>
          <i class="fas fa-times" id="cancel"></i>
        </label>
      </div>
      <div class="sidebar">
        <div className="d-flex align-items-center">
          <Image
            className="dashboardProfile mt-2 mx-2"
            src="/images/lawyerprofile.jpg"
          />
          <h5 className="mx-3 lawyerName">{userName}</h5>
        </div>
        <ul>
        <li>
            <a href="#">
              <i class="bi bi-person-circle"></i>Edit Profile
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-qrcode"></i>Dashboard
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-stream"></i>Overview
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-calendar-week"></i>Events
            </a>
          </li>
          <li>
            <a href="#">
              <i class="far fa-question-circle"></i>About
            </a>
          </li>
        </ul>
      </div>
    </>

    // <div class="sidebar">
    //   <div className="menuBtn">
    //     <input type="checkbox" id="check" />
    //     <label for="check">
    //       <i class="fas fa-bars" id="btn"></i>
    //       <i class="fas fa-times" id="cancel"></i>
    //     </label>
    //   </div>
    //   <div className="d-flex align-items-center">
    //     <Image
    //       className="dashboardProfile mt-2 mx-2"
    //       src="/images/lawyerprofile.jpg"
    //     />
    //     <h5 className="mx-3 lawyerName">Lawyer Name</h5>
    //   </div>
    //   <div>
    //     <ul className="mt-3">
    //       <li>
    //         <a href="#">
    //           <i class="fas fa-qrcode"></i>Profile
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#">
    //           <i class="fas fa-link"></i>Shortcuts
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#">
    //           <i class="fas fa-stream"></i>Overview
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#">
    //           <i class="fas fa-calendar-week"></i>Events
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#">
    //           <i class="far fa-question-circle"></i>About
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default DashboardMenu;

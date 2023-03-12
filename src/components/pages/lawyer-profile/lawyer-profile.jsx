import { Button } from "react-bootstrap";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import LawyerProfileCard from "../../featurs/lawyer-profile-card/lawyer-profile-card";
import SubServicesCard from "../../featurs/sub-services-card/sub-services-card";
import "./lawyer-profile.css";

const LawyerProfile = () => {
  const { lawyerprofileId, subService } = useParams();
  const { services, subServices, loading } = useSelector((state) => state.services);
  const lawyerToFound = services.data?.map(item => item.subService.map(item => item.lawyers.find(item => item._id == lawyerprofileId)));
  // console.log(subService);
  const lawyersImg = [
    "https://images.pexels.com/photos/7841828/pexels-photo-7841828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/14634932/pexels-photo-14634932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5669788/pexels-photo-5669788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/14634924/pexels-photo-14634924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ]

  const handleLawyer = lawyerToFound[0][0]
  
  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Col className="firstColSection" sm={4}>
          <div className="card-container">
            <div className="firstDiv">
              <Image
                src="/images/profileBackgroundImg.jpg"
                className="backgorundProfileImg"
              />
            </div>
            <div className="titleProfile">
              <div className="d-flex">
                <Image src={lawyersImg[0]} className="profileFace" />
                <div className="profileDetails mx-3">
                  <h3>{`${handleLawyer?.firstName} ${handleLawyer?.lastName}`}</h3>
                  <p>Lawyer Subject</p>
                  <i id="star" class="bi bi-star-fill"></i>
                  <i id="star" class="bi bi-star-fill"></i>
                  <i id="star" class="bi bi-star-fill"></i>
                  <i id="star" class="bi bi-star-fill"></i>
                  <i id="star" class="bi bi-star-fill"></i>
                </div>
              </div>
              <div>
                {/* <p className="mt-1">License: {handleLawyer.license}</p> */}
              </div>
              <div className="section2">
                <ul className="mt-1 mb-1">
                  <li>text</li>
                  <li>text</li>
                  <li>text</li>
                  <li>text</li>
                </ul>
              </div>
              <div className="section3">
                <div className="cardDetailSection3 d-flex justify-content-between mt-1">
                  <div className="d-flex">
                    <i class="bi bi-geo-alt"></i>
                    <p className="mx-2">Living</p>
                  </div>
                  <div className="mx-5">
                    <p>{handleLawyer?.address.city}</p>
                  </div>
                </div>
                <div className="cardDetailSection3 d-flex justify-content-between">
                  <div className="d-flex">
                    <i class="bi bi-bookmark-check-fill"></i>
                    <p className="mx-2">Experience</p>
                  </div>
                  <div className="mx-5">
                    <p>4 Years</p>
                  </div>
                </div>
                <div className="cardDetailSection3 d-flex justify-content-between">
                  <div className="d-flex">
                    <i class="bi bi-envelope-check-fill"></i>
                    <p className="mx-2">Response Time</p>
                  </div>
                  <div className="mx-5">
                    <p>3 Hours</p>
                  </div>
                </div>
                <div className="cardDetailSection3 d-flex justify-content-between">
                  <div className="d-flex">
                    <i class="bi bi-stopwatch"></i>{" "}
                    <p className="mx-2">Work ready at</p>
                  </div>
                  <div className="mx-5">
                    <p>10 Business days</p>
                  </div>
                </div>
                <div className="d-flex justify-content-around mx-3 mt-2 mb-2 btnClass">
                  <Link to={`/agreement/${subService}/${handleLawyer._id}`}>
                    <Button variant="outline-info">Agreement</Button>
                  </Link>
                  <Link to={"/"}>
                    <Button variant="info">Contact info</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col className="secondCol" sm={6}>
          <Col>
            <Row className="d-flex justify-content-center">
              <Col sm={6} className="cardToCenter">
                <LawyerProfileCard />
              </Col>
              <Col sm={6} className="cardToCenter">
                <LawyerProfileCard />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row className="d-flex justify-content-center">
              <Col sm={6} className="cardToCenter">
                <LawyerProfileCard />
              </Col>
              <Col sm={6} className="cardToCenter">
                <LawyerProfileCard />
              </Col>
            </Row>
            <div className="divcut mt-1 mb-1"></div>
          </Col>
          <Row className="d-flex flex-column">
            <Col className="d-flex align-items-center">
              <div>
                <i id="userCommentFace" class="bi bi-person-circle"></i>
              </div>
              <div className="d-flex flex-row align-self-end">
                <h6 className="mx-2 justify-content-baseline">
                  {`${handleLawyer?.recommendations[0].from[0].firstName} ${handleLawyer?.recommendations[0].from[0].lastName}`}
                </h6>
                <i id="star" class="bi bi-star-fill">
                  {handleLawyer?.recommendations[0].stars}
                </i>
              </div>
            </Col>
            <Col className="textSize">
              {handleLawyer?.recommendations[0].recommendations}
            </Col>
          </Row>
          <div className="divcut mt-2 mb-1"></div>
          <Row className="d-flex flex-column">
            <Col className="d-flex align-items-center">
              <div>
                <i id="userCommentFace" class="bi bi-person-circle"></i>
              </div>
              <div className="d-flex flex-row align-self-end">
                <h6 className="mx-2 justify-content-baseline">
                  {`${handleLawyer?.recommendations[1].from[0].firstName} ${handleLawyer?.recommendations[1].from[0].lastName}`}
                </h6>
                <i id="star" class="bi bi-star-fill">
                  {handleLawyer?.recommendations[1].stars}
                </i>
              </div>
            </Col>
            <Col className="textSize">
              {handleLawyer?.recommendations[1].recommendations}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default LawyerProfile;

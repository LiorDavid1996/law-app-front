import "./handle-lawyer-profile.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useParams } from "react-router";

const HandleLawyerProfile = () => {
  return (
    <Container className="lawyerProfile">
      <Row className="d-flex mt-4 mb-2">
        <Image src="/images/profileFace.jpg" className="imgProfile" />
        <div className="lawyerNameHandle">
          <h4>Lawyer Name</h4>
          <h5>Lawyer Subject</h5>
        </div>
      </Row>
      <span>text about the lawyer subject...</span>
      <div className="borderDiv mt-3 mb-3"></div>
      <ul className="mb-4">
        <li>text text text</li>
        <li>text text text</li>
      </ul>
    </Container>
  );
};

export default HandleLawyerProfile;

import { Container, Row, Col, Image } from "react-bootstrap";
import "./top-lawyer-card.css";

const TopLawyerCard = () => {
  return (
    <div className="topLawyerCard">
      <Col className="d-flex mb-3 align-items-center">
        <Image src="/images/lawyerprofile.jpg" className="profileImgCard" />
        <Col className=" d-flex flex-column justify-content-end mx-2">
          <h5>Dana Banana</h5>
          <h6>Manger of Pizza Shemes</h6>
        </Col>
      </Col>
      <Col>
        <h5 className="text-muted text-card">
          Line 14:6: React Hook useEffect has a missing dependency: 'dispatch'.
          Either include it or remove the dependency array
          react-hooks/exhaustive-deps
        </h5>
      </Col>
    </div>
  );
};

export default TopLawyerCard;

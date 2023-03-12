import "./lawyer-card.css";
import Card from "react-bootstrap/Card";

const LawyerCard = ({ lawyer, img }) => {
  return (
    <Card style={{ width: "15rem" }} className="lawyerCard mb-5">
      <Card.Img className="profilePic" variant="top" src={img} />
      <Card.Body>
        <Card.Title className="headLine">{`${lawyer.firstName} ${lawyer.lastName}`}</Card.Title>
        <Card.Text>
          Real Estate Lawyer
        </Card.Text>
        <div className='stars'>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-half"></i>
          <i class="bi bi-star"></i>
        </div>
      </Card.Body>
    </Card>
  );
};

export default LawyerCard;

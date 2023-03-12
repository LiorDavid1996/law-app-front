import "./sub-services.css";
import { Container, Row, Col } from "react-bootstrap";
import SubServicesCard from "../../featurs/sub-services-card/sub-services-card";
import TopLawyerCard from "../../featurs/top-lawyer-card/top-lawyer-card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getServices } from "../../../redux/slices/services/services";
import { useParams } from "react-router";

const SubServices = ({ servicesData }) => {
  const { id } = useParams()
  const { services, subServices, loading } = useSelector((state) => state.services);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getServices());
  }, []);
  const cardArray = [1, 2, 3]
  const serviceToFound = services.data.find(item => item._id == id)
  return (
    <Container>
      {/* {console.log(serviceToFound)} */}
      <h1 className="h1MainHeadLine">Sub Services</h1>
      <Row className='mb-5 mt-5'>
        {
          serviceToFound.subService?.map(item =>
            <Col className="rowSubServices" key={item._id} sm={4}>
              <SubServicesCard agreementName={item.agreementName} agreementDescription={item.agreementDescription} lawyersId={item} />
            </Col>
          )

        }
        
      </Row>
      <h1 className="h1MainHeadLine">Top Lawyers</h1>
      <Row>
        {cardArray.map(item => {
          return <Col key={item} sm={4}>
            <TopLawyerCard />
          </Col>
        })}
      </Row>
    </Container>
  );
};

export default SubServices;

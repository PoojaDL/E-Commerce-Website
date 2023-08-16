import { useCallback, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./ProductDetails.module.css";

const ProductDetails = () => {
  const [dataFetched, setData] = useState({});
  const params = useParams();
  const { id } = params;

  const load = useCallback(async () => {
    const response = await fetch(
      "https://storeitems-57f0e-default-rtdb.firebaseio.com/items.json"
    );
    const data = await response.json();
    for (let key in data) {
      if (data[key].id === id) {
        setData(data[key]);
      }
    }
  }, [id]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <div className={classes["main-div"]}>
      <h1>Product Page</h1>
      <section className={classes["sec-div"]}>
        <Row>
          <Col lg={6}>
            <img
              className={classes.image}
              src={dataFetched.imageUrl}
              alt="fetched"
            />
            <Button className="m-1">Add to Cart</Button>
            <Link to="/Store">
              <Button className="m-1 btn-danger">Cancel</Button>
            </Link>
          </Col>
          <Col lg={5} className="mt-3">
            <h4>{dataFetched.title}</h4>
            <h2>{`₹${dataFetched.price}`}</h2>
            <ul>
              <b>Available offers</b>
              <li>
                Bank Offer10% instant discount on ICICI Bank Credit Cards, up to
                ₹300, on orders of ₹1750 and aboveT&C
              </li>
              <li>
                Bank Offer10% instant discount on ICICI Bank Debit Cards, up to
                ₹250, on orders of ₹1750 and aboveT&C
              </li>
              <li>Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</li>
              <li>
                Extra ₹500 Off on Bikes & Scooters on purchase of ₹30,000 or
                moreT&C
              </li>
            </ul>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default ProductDetails;

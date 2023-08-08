import { Button } from "react-bootstrap";

const CartList = (props) => {
  return (
    <tbody>
      <td className="pe-3 justify-content-left">
        <div>
          <img
            className="d-inline"
            src={`${props.imgUrl}`}
            width="80px"
            height="80px"
            alt="some"
          />
          <div className="d-inline">{props.title}</div>
        </div>
      </td>
      <td className="me-3">{props.price}</td>
      <td className="me-3">
        <div
          style={{ border: "1px solid black" }}
          className="d-inline p-2 me-2"
        >
          {props.quantity}
        </div>

        <Button className="btn btn-danger btn-sm">REMOVE</Button>
      </td>
    </tbody>
  );
};

export default CartList;

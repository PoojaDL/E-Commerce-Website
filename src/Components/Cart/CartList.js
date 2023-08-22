import { Button } from "react-bootstrap";

const CartList = (props) => {
  const removeItem = () => {
    props.remItem(props.item._id);
  };

  return (
    <tr className="my-5">
      <td className="pe-3 justify-content-left">
        <span>
          <img
            className="d-inline mb-3"
            src={`${props.imgUrl}`}
            width="80px"
            height="80px"
            alt="some"
          />
          <span className="d-inline">{props.title}</span>
        </span>
      </td>
      <td className="me-3">{props.price}</td>
      <td className="me-3">
        <span
          style={{ border: "1px solid black" }}
          className="d-inline p-2 m-2"
        >
          {props.quantity}
        </span>

        <Button className="btn btn-danger btn-sm my-3" onClick={removeItem}>
          REMOVE
        </Button>
      </td>
    </tr>
  );
};

export default CartList;

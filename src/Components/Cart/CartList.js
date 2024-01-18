import { Button } from "react-bootstrap";

const CartList = (props) => {
  const removeItem = () => {
    props.remItem(props.item.key);
  };

  return (
    <tr className="my-5">
      <td>
        <span>
          <img
            className="d-inline m-2"
            src={`${props.imgUrl}`}
            width="70px"
            height="70px"
            alt="some"
          />
        </span>
      </td>
      <td>
        <span className=" pe-3 d-block" align="center">
          {props.title}
        </span>
      </td>
      <td className="pe-3" align="center">
        {props.price}
      </td>
      <td className="py-4">
        <span
          style={{ border: "1px solid black" }}
          className="d-inline p-1 m-2 "
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

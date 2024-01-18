import { Button } from "react-bootstrap";

const DataListTable = (props) => {
  return (
    <tr className="g-5">
      <td className="pe-3">{props.date}</td>
      <td className="pe-3">{props.title}</td>
      <td className="pe-3">{props.director}</td>
      <td>
        <Button className="btn-secondary">Buy Tickets</Button>
      </td>
    </tr>
  );
};

export default DataListTable;

import { Button } from "react-bootstrap";

const DataListTable = (props) => {
  return (
    <tr>
      <td className="p-3">{props.date}</td>
      <td className="p-3">{props.state}</td>
      <td className="p-3">{props.place}</td>
      <td>
        <Button>Buy Tickets</Button>
      </td>
    </tr>
  );
};

export default DataListTable;

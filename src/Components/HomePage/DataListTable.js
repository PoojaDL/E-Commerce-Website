import { Button } from "react-bootstrap";

const DataListTable = (props) => {
  return (
    <tr>
      <td className="p-3">{props.date}</td>
      <td className="p-3">{props.title}</td>
      <td className="p-3">{props.director}</td>
      <td>
        <Button>Buy Tickets</Button>
      </td>
    </tr>
  );
};

export default DataListTable;

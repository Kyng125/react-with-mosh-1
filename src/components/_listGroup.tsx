import { useState } from "react";

interface Props {
  heading: string;
  listContent: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup({ heading, listContent, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {listContent.length === 0 && <p>No List Found</p>}
      <ul className="list-group">
        {listContent.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

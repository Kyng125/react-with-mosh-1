import ListGroup from "./components/_listGroup";
import Button from "./components/_buttons";
import Alert from "./components/_alert";
import { useState } from "react";

function App() {
  let items = ["Tokyo", "Japan", "London", "Germany"];
  const [isVisible, setVisibility] = useState(false);
  const handleClick = (items: string) => console.log(items);

  return (
    <div>
      <ListGroup
        listContent={items}
        heading="Cities"
        onSelectItem={handleClick}
      />
      {isVisible && (
        <Alert onClose={() => setVisibility(false)}>Hello World</Alert>
      )}
      <Button
        children="Alert"
        color="primary"
        onClick={() => setVisibility(true)}
      />
    </div>
  );
}

export default App;

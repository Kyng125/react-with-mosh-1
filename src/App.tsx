import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { useState } from "react";

function App() {
  let items = ["London", "Tokyo", "Barcelona", "Monaco"];
  const handleClick = (item: string) => console.log(item);
  const [alertVisible, setVisible] = useState(false);

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleClick} />
      {alertVisible && (
        <Alert onClose={() => setVisible(false)}>
          Hello <span>World</span>
        </Alert>
      )}
      <Button color="primary" onClick={() => setVisible(true)}>
        Say Hello
      </Button>
    </div>
  );
}

export default App;

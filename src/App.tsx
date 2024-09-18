import { useState } from "react";
import Button from "./components/Button";
import Modal from "./components/Modal";

function App() {
  const [open, setopen] = useState(false);

  const toggleModal = () => {
    setopen((prev) => !prev);
  };
  return (
    <>
      <div className="App  text-center h-auto  flex gap-10 mt-20 place-content-center place-items-center">
        <Button onClick={toggleModal}>Button</Button>
        <Modal onClose={toggleModal} open={open}>
          <div>hello</div>
        </Modal>
      </div>
    </>
  );
}

export default App;

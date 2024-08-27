import Button from "./components/button";
import ModalComponent from "./components/modal";

function Modal({
  icon,
  label,
  children,
}: {
  icon?: any;
  label?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="App text-center h-auto  flex gap-10 mt-20 place-content-center place-items-center">
      <ModalComponent icon={icon} label={label}>
        {children}
      </ModalComponent>
      <Button color="bg-red-600">Click</Button>
    </div>
  );
}

export default Modal;

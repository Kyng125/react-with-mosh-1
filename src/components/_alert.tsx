import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className={"alert-dismissible"}>
      {children}
      <button onClick={onClose}></button>
    </div>
  );
};

export default Alert;
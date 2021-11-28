import { MouseEventHandler } from "react";

interface IButton {
  text: string;
  onClick: MouseEventHandler;
}

const ButtonHike = ({ text, onClick }: IButton) => {
  return (
    <button type="button" className="btn-lg" onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonHike;

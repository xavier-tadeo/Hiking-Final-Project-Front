interface IButton {
  text: string;
  click: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonHike = ({ text, click }: IButton) => {
  return (
    <button type="button" className="btn-lg" onClick={click}>
      {text}
    </button>
  );
};

export default ButtonHike;

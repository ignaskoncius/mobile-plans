const CustomRadio = (props) => {
  return (
    <div onClick={props.onClick} className="radio-container">
      {props.checked ? <strong>Selected</strong> : <strong>Not selected</strong>}
      <span> {props.children}</span>
    </div>
  );
};

export default CustomRadio;

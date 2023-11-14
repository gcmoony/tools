export default function RegularButton(props) {
  const buttonStyles = 'p-3 rounded text-black bg-slate-300 ';
  // const miscButtonStyles = 'bg-slate-300 ';

  return (
    <button onClick={props.onClick} className={buttonStyles + props.additionalStyles}>{props.buttonText}</button>
  );
}
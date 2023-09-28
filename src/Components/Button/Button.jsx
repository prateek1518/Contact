import styles from "./Button.module.css";
const Button = ({icon, isOutline, text, ...rest}) => {
  
  return (
    <button
    {...rest}
      className={isOutline ? styles.Outline_btn : styles.primary_btn}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;

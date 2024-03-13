// eslint-disable-next-line react/prop-types
const Button = ({ title, onClick, className, children }) => {
  return (
    <button className={className} onClick={onClick}>
      {title || children}
    </button>
  );
};

export default Button;

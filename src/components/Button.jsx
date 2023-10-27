function Button({ title = "click me",className, onClick }) {
  return (
    <button className={className ?? "btn btn-primary"} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;

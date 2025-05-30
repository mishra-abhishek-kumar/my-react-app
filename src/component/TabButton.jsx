function TabButton({ children, onSubmit, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onSubmit}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;

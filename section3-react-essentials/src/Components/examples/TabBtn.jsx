const TabBtn = ({ label, onClick, isSelected }) => {
  return (
    <button onClick={onClick} className={isSelected ? "active" : ""}>
      {label}
    </button>
  );
};

export default TabBtn;

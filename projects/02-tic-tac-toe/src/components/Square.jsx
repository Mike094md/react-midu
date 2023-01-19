export const Square = ({ children, index, updateBoard, isSelected }) => {
    const classStyle = isSelected ? "square is-selected" : "square";
  
    const handleClick = () => updateBoard(index);
  
    return (
      <div className={classStyle} key={index} onClick={handleClick}>
        {children}
      </div>
    );
  };
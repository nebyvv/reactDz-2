import React from "react";

type ShoppingItemProps = {
  name: string;
  onDelete: () => void;
};

const ShoppingItem: React.FC<ShoppingItemProps> = ({ name, onDelete }) => {
  return (
    <div className="shopping-item">
      <span className="item-name">{name}</span>
      <button className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default ShoppingItem;

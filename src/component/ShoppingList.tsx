import { Component } from "react";
import ShoppingItem from "./ShoppingItem";

type ShoppingListSt = {
  item: string[];
};

class ShoppingList extends Component {
  state: ShoppingListSt = {
    item: ["Iphone", "Samsung", "Oppo"],
  };

  handleDelete = (index: number) => {
    const item = [...this.state.item];
    item.splice(index, 1);
    this.setState({ item });
  };

  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List</h1>
        {this.state.item.map((items, index) => (
          <ShoppingItem
            key={index}
            name={items}
            onDelete={() => this.handleDelete(index)}
          />
        ))}
      </div>
    );
  }
}

export default ShoppingList;

import React, { useState, useEffect } from "react";
import { Input, Button, Card, Icon, Alert, Modal } from "antd";
import "./TodoList.css";

const TodoList = () => {
  const [itemList, setItemList] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [error, setError] = useState(false);
  const [showEditInput, setshowEditInput] = useState(false);
  const [updateItemId, setupdateItemId] = useState();
  const [newUpdatedItem, setNewUpdatedItem] = useState("");
  const ButtonGroup = Button.Group;

  const handleChange = event => {
    if (error) {
      setError(false);
    }
    setNewItem(event.target.value);
  };

  const handleAddItem = e => {
    e.preventDefault();
    let itemListArray = itemList;
    if (newItem === "") {
      return setError(true);
    }
    itemListArray.push(newItem);
    setItemList(itemListArray);
    setNewItem("");
  };
  const handleDeleteItem = id => {
    let newItemList = [...itemList];
    newItemList.splice(id, 1);
    setItemList(newItemList);
  };

  const handleShowInput = key => {
    setupdateItemId(key);
    setshowEditInput(true);
  };

  const handleUpdateChange = e => {
    setNewUpdatedItem(e.target.value);
  };
  const handleSaveEdit = key => {
    let updatedItemList = [...itemList];
    console.log(newUpdatedItem);
    if (newUpdatedItem !== "") {
      updatedItemList[key] = newUpdatedItem;
    }
    setItemList(updatedItemList);
    setshowEditInput(false);
    setNewUpdatedItem("");
    setupdateItemId();
  };
  return (
    <main className="container">
      <div className="add-item-container">
        <Input
          placeholder="Add item..."
          onChange={handleChange}
          style={{ marginRight: 5 }}
          value={newItem}
          size="large"
        />
        <Button type="primary" onClick={handleAddItem}>
          Add Item
        </Button>
      </div>
      {error && (
        <Alert
          style={{ marginTop: 10 }}
          message="Please enter a item before submitting"
          type="error"
        />
      )}
      {itemList.map((item, key) => {
        if (showEditInput && updateItemId === key) {
          return (
            <div className="todo-item-container" id={key}>
              <Card size="small" id={key}>
                <Input
                  placeholder={itemList[key]}
                  onChange={handleUpdateChange}
                  style={{ marginRight: 5 }}
                  value={newUpdatedItem}
                  size="large"
                />
              </Card>
              <ButtonGroup>
                <Button
                  type="primary"
                  onClick={() => handleSaveEdit(key)}
                  block
                >
                  Save
                  <Icon type="save" />
                </Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button
                  type="danger"
                  onClick={() => handleDeleteItem(key)}
                  block
                >
                  Delete
                  <Icon type="delete" />
                </Button>
              </ButtonGroup>
            </div>
          );
        }
        return (
          <div className="todo-item-container" id={key}>
            <Card size="small" id={key}>
              <p className="todo-item">{item}</p>
            </Card>
            <ButtonGroup>
              <Button type="primary" onClick={() => handleShowInput(key)} block>
                Edit
                <Icon type="edit" />
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button type="danger" onClick={() => handleDeleteItem(key)} block>
                Delete
                <Icon type="delete" />
              </Button>
            </ButtonGroup>
          </div>
        );
      })}
    </main>
  );
};
export default TodoList;

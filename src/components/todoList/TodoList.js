import React, { useState } from "react";
import { Input, Button, Card, Icon, Alert, Form } from "antd";
import "./TodoList.css";

const TodoList = () => {
  const [itemList, setItemList] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [error, setError] = useState(false);
  const [showEditInput, setshowEditInput] = useState(false);
  const [updateItemId, setupdateItemId] = useState();
  const [newUpdatedItem, setNewUpdatedItem] = useState("");
  const ButtonGroup = Button.Group;
  const FormItem = Form.Item;

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
    setshowEditInput(false);
  };

  const handleShowInput = key => {
    setupdateItemId(key);
    setshowEditInput(true);
    setNewUpdatedItem(itemList[key]);
  };

  const handleUpdateChange = e => {
    setNewUpdatedItem(e.target.value);
  };
  const handleSaveEdit = key => {
    let updatedItemList = [...itemList];
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
      <Form onSubmit={handleAddItem}>
        <div className="add-item-container">
          <FormItem>
            <Input
              placeholder="Add item..."
              onChange={handleChange}
              value={newItem}
              size="large"
            />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              Add Item
            </Button>
          </FormItem>
        </div>
      </Form>
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
            <Form
              style={{ width: "100%" }}
              onSubmit={() => handleSaveEdit(key)}
            >
              <div className="todo-item-container" id={key}>
                <Card size="small" id={key}>
                  <FormItem>
                    <Input
                      placeholder="Edit item..."
                      onChange={handleUpdateChange}
                      value={newUpdatedItem}
                      size="large"
                    />
                  </FormItem>
                </Card>
                <ButtonGroup>
                  <FormItem>
                    <Button type="primary" block htmlType="submit">
                      Save
                      <Icon type="save" />
                    </Button>
                  </FormItem>
                </ButtonGroup>
                <ButtonGroup>
                  <FormItem>
                    <Button
                      type="danger"
                      onClick={() => handleDeleteItem(key)}
                      block
                    >
                      Delete
                      <Icon type="delete" />
                    </Button>
                  </FormItem>
                </ButtonGroup>
              </div>
            </Form>
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

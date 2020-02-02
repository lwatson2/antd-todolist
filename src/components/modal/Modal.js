import React, { useState } from "react";
import { Modal, Input, Button } from "antd";

const EditModal = ({
  handleEditItem,
  setShowModal,
  updateItemId,
  itemList,
  showModal
}) => {
  const [newUpdatedItem, setNewUpdatedItem] = useState("");
  const handleChange = event => {
    console.log(event.target.value);
    setNewUpdatedItem(event.target.value);
  };
  return (
    <div>
      {" "}
      <Modal
        visible={showModal}
        title={itemList[updateItemId]}
        onOk={handleEditItem}
        onCancel={setShowModal(false)}
        footer={[
          <Button key="back" type="danger" onClick={setShowModal(false)}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={() => handleEditItem(newUpdatedItem)}
          >
            Submit
          </Button>
        ]}
      >
        <Input
          placeholder="Update item..."
          onChange={handleChange}
          value={newUpdatedItem}
        />
      </Modal>
    </div>
  );
};
export default EditModal;

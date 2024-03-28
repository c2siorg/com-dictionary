import React, { useState } from "react";
import { Tag, Input, Tooltip, Button } from "antd";

/**
 * EditableTagGroup component allows users to manage tags dynamically.
 * @param {function} onChange - Callback function triggered when tags are changed.
 */
function EditableTagGroup({ onChange }) {
  // State variables to manage tags and input visibility
  const [tags, setTags] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [input, setInput] = useState("");

  /**
   * Handle tag removal.
   * @param {string} removedTag - The tag to be removed.
   */
  const handleClose = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };

  /**
   * Show the input field for adding a new tag.
   */
  const showInput = () => {
    setInputVisible(true);
  };

  /**
   * Handle input change event.
   * @param {object} e - Event object containing the input value.
   */
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  /**
   * Handle input confirmation for adding a new tag.
   */
  const handleInputConfirm = () => {
    let allTags = [];
    if (inputValue && tags.indexOf(inputValue) === -1) {
      allTags = [...tags, inputValue];
    }
    onChange(allTags);
    setTags([]);
    setInputValue("");
    setInputVisible(false);
  };

  /**
   * Save the input reference.
   * @param {object} val - Input element reference.
   */
  const saveInputRef = (val) => setInput(val);

  return (
    <div>
      {/* Display existing tags */}
      {tags.map((tag, index) => {
        const isLongTag = tag.length > 20;
        const tagElem = (
          <Tag key={tag} closable afterClose={() => handleClose(tag)}>
            {isLongTag ? `${tag.slice(0, 20)}...` : tag}
          </Tag>
        );
        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        );
      })}
      {/* Display input field for adding new tags */}
      {inputVisible && (
        <Input
          ref={saveInputRef}
          type="text"
          size="large"
          style={{ width: 90 }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {/* Display button to show the input field */}
      {!inputVisible && (
        <Button size="medium" type="dashed" onClick={showInput}>
          + New Word
        </Button>
      )}
    </div>
  );
}

export default EditableTagGroup;

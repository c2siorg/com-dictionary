import React, { useState } from "react";
import { Tag } from "antd";

const CheckableTag = Tag.CheckableTag;

// List of word classes to display as tags
const tagsWordClass = [
  "Verb",
  "Noun",
  "Adverb",
  "Adjective",
  "Determiner",
  "Pronoun",
  "Conjunction",
  "Preposition",
];

/**
 * WordClass component allows users to select word classes using checkable tags.
 * @param {Object} props - Component properties.
 * @param {function} props.onChange - Callback function triggered when word classes change.
 * @returns {JSX.Element} - WordClass component.
 */
function WordClass(props) {
  const { onChange } = props;
  const [selectedTags, setSelectedTags] = useState([]);

  /**
   * Handle the change of a checkable tag.
   * @param {string} tag - The selected word class.
   * @param {boolean} checked - Indicates if the tag is checked or unchecked.
   */
  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);

    console.log("Selected Word Classes: ", nextSelectedTags);
    setSelectedTags(nextSelectedTags);
    onChange(nextSelectedTags);
  };

  return (
    <div>
      {/* Render checkable tags for each word class */}
      {tagsWordClass.map((tag) => (
        <CheckableTag
          className="word_class"
          key={tag}
          checked={selectedTags.indexOf(tag) > -1}
          onChange={(checked) => handleChange(tag, checked)}
        >
          {tag}
        </CheckableTag>
      ))}
    </div>
  );
}

export default WordClass;

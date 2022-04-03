import React, { useState } from 'react';

export default function ListItem(props) {
  const [isChecked, setIsChecked] = useState(false);

  var renderedTags = [];
  for (var i = 0; i < props.tags.length; i++) {
    renderedTags += '<div class="tag">' + props.tags[i] + '</div>';
  }

  return (
    <div id="listItem"
      className={`${isChecked ? "listItem--active" : ""}`}
    >
      <label>
        <input type="checkbox"
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
        <svg
        className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
        // This element is purely decorative so
        // we hide it for screen readers
        aria-hidden="true"
        viewBox="0 0 15 11"
        fill="none"
        >
          <path
            d="M1 4.5L5 9L14 1"
            strokeWidth="2"
            stroke={isChecked ? "#fff" : "none"} // only show the checkmark when `isCheck` is `true`
          />
        </svg>
      </label>
      <div className="middle">
        <div className="title">
          {props.product}
        </div>
          <div className="tagContainer" dangerouslySetInnerHTML={{__html: renderedTags}}/>
      </div>
      <div className="right">
        <div className="remove"><a href="javascript:void(0);" >X</a></div>
        <div className="quantity">{props.quantity}</div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';

export default function ListItem(props) {

  var renderedTags = [];
  for (var i = 0; i < props.tags.length; i++) {
    renderedTags += '<div class="tag">' + props.tags[i] + '</div>';
  }

  return (
    <div id="listItem"
      className={`${props.forShopping ? "listItem--active" : ""}`}
    >
      <label>
        {/* Custom Checkbox 
            referenced from:
            https://dev.to/tomdohnal/custom-checkbox-in-react-animated-and-accessible-3jk9 
        */}
        <input type="checkbox"
          onChange={() => {
            props.onUpdateForShopping(props.product);
          }}
        />
        <svg
          // Checkbox
          className={`checkbox ${props.forShopping ? "checkbox--active" : ""}`}
          aria-hidden="true"
          viewBox="0 0 15 11"
          fill="none"
        >
          <path
            // Checkmark Path 
            d="M1 4.5L5 9L14 1"
            strokeWidth="2"
            stroke={props.forShopping ? "#fff" : "none"}
          />
        </svg>
      </label>

      {/* Item Name and Tags*/}
      <div className="middle">
        <div className="title">
          {props.product}
        </div>
        <div className="tagContainer" dangerouslySetInnerHTML={{ __html: renderedTags }} />
      </div>

      {/* Item Quantity and Remove */}
      <div className="right">
        <div className="remove"><span onClick={() => { props.onRemove(props.product) }}>X</span></div>
        <div className="quantity">{props.quantity}</div>
      </div>
    </div>
  );
}

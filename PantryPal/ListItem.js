import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


/*class ListItem extends React.Component {
  render() {
    return (
    <div id="listItem">
      <div class="checkbox">
        <input type="checkbox" id="itemChecked"/>
      </div>
      <div class="middle">
        <div class="title">
          {name}
        </div>
        <div class="tagContainer">
            <div class="tag">
              {tags}
            </div>
        </div>
      </div>
      <div class="right">
        <div class="remove">X</div>
        <div class="quantity">{quantity}</div>
      </div>
    </div>
    );
  }
}*/

export default function ListItem(props) {
  var renderedTags = [];
  for (var i = 0; i < props.tags.length; i++) {
    renderedTags += '<div class="tag">' + props.tags[i] + '</div>';
  }

  return (
    <div id="listItem">
      <div class="checkbox">
        <input type="checkbox" id="itemChecked"/>
      </div>
      <div class="middle">
        <div class="title">
          {props.product}
        </div>
          <div class="tagContainer" dangerouslySetInnerHTML={{__html: renderedTags}}/>
      </div>
      <div class="right">
        <div class="remove"><a href="javascript:void(0);" onClick="removeItem(this)">X</a></div>
        <div class="quantity">{props.quantity}</div>
      </div>
    </div>
  );
}

/*export default function newListItem(name, tags, quantity) {
  public function render() {return (
    <div id="listItem">
      <div class="checkbox">
        <input type="checkbox" id="itemChecked"/>
      </div>
      <div class="middle">
        <div class="title">
          {name}
        </div>
        <div class="tagContainer">
            <div class="tag">
              {tags}
            </div>
        </div>
      </div>
      <div class="right">
        <div class="remove"><a href="javascript:void(0);" onclick="removeItem(this)">X</a></div>
        <div class="quantity">{quantity}</div>
      </div>
    </div>
  );}
}*/

/*export default function ListItem() {
  return (
    <View style={styles.container}>
      <FlatList
        data={inventoryList}
        renderItem={({ item }) => <Text style={styles.item}>{item.product}</Text>} // Needs ListItem
      />


    </View >
  );
}*/


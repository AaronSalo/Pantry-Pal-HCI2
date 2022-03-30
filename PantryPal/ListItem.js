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
//    renderedTags += '<div class="tag">' + props.tags[i] + '</div>';
    renderedTags += '<div class="tag">' + props.tags[i] + '</div>';
  }
  //renderedTags.map();
//  var renderedTags = props.tags.map(item => <div class="tag">{item}</div>);
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

const listItemStyle = StyleSheet.create({
  listItem: {
    display: "block",
    width: "100%",
    height: "4em",
    borderColor: "#E7E7F0",
    borderStyle: "solid",
    borderWidth: "0em 0em 0.19em 0em"
  },
  listItem__left: {
    float: "left",
    width: "2em"
  },
  listItem__middle: {
    display: "block",
    float: "left",
    paddingLeft: "2em"
  },
  listItem__right: {
    float: "right"
  },
  listItem__checkbox: {
    paddingTop: "1em",
    paddingLeft: "1em"
  },
  listItem__title: {
    fontSize: "1.5em"
  },
  listItem__tagContainer: {
    fontSize: "0.75em",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: "0.2em",
    borderRadius: "1em",
    padding: "0.1em 0em"
  },
  listItem__tag: {
    textAlign: "center"
  },
  listItem__quantity: {
    float: "right",
    fontSize: "1.5em",
    paddingRight: "1.5em",
    paddingTop: "0.5em"
  },
  listItem__remove: {
    float: "right",
    paddingRight: "0.5em",
    paddingTop: "0.25em",
    fontSize: "2em",
    color: "#D0D0D0"
  }
});

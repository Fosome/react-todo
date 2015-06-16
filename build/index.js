// components:
//
// + button
// list of items
// item
// checkbox
//

var items = [
  {
    title: "Thing #1",
    completed: false
  },
  {
    title: "Thing #2",
    completed: true
  },
  {
    title: "Thing #3",
    completed: false
  }
];

var TodoItem = React.createClass({displayName: "TodoItem",

  getDefaultProps: function() {
    return {
      title   : '',
      completed : false
    };
  },

  getInitialState: function() {
    return {
      completed : this.props.completed,
      editing   : false
    };
  },

  toggleCompleted: function(v) {
    this.setState({ completed: !this.state.completed });
  },

  toggleEditing: function() {
    this.setState({ editing: true });
  },

  update: function() {
    alert("whoa");
  },

  render: function() {
    var classNames = ["todo-item"];

    if (this.state.completed) {
      classNames.push("completed");
    }

    if (this.state.editing) {
      classNames.push("editing");
    }

    return (
      React.createElement("div", {className:  classNames.join(" ") }, 
        React.createElement("p", null, 
          React.createElement("input", {type: "checkbox", checked:  this.state.completed, onChange:  this.toggleCompleted}), 
          React.createElement("label", {onDoubleClick:  this.toggleEditing},  this.props.title), 
          React.createElement("input", {value:  this.props.title, className: "editor"})
        )
      )
    );
  }
});

var TodoList = React.createClass({displayName: "TodoList",
  getDefaultProps: function() {
    return {
      items: []
    };
  },

  render: function() {
    var items = this.props.items.map(function(i) {
      return React.createElement(TodoItem, {key:  i.title, title:  i.title, completed:  i.completed});
    });

    return (
      React.createElement("div", null, 
        React.createElement("h1", null, "Todo"), 
         items 
      )
    );
  }
});


// Entry
React.render(
  React.createElement(TodoList, {items:  items }),
  document.getElementById('content')
);

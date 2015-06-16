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
      title     : this.props.title,
      completed : this.props.completed,
      editing   : false,
      oldTitle  : ''
    };
  },

  toggleCompleted: function(v) {
    this.setState({ completed: !this.state.completed });
  },

  startEditing: function() {
    this.setState({ editing: true, oldTitle: this.state.title });
  },

  nameChanged: function(event) {
    this.setState({ title: event.target.value });
  },

  keyDown: function(event) {
    var ESCAPE = 27,
        ENTER  = 13;

    if (event.keyCode === ESCAPE) {
      this.setState({ editing: false, title: this.state.oldTitle });
    } else if (event.keyCode === ENTER) {
      this.setState({ editing: false });
    }
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
          React.createElement("label", {onDoubleClick:  this.startEditing},  this.state.title), 
          React.createElement("input", {value:  this.state.title, className: "editor", onChange:  this.nameChanged, onKeyDown:  this.keyDown})
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

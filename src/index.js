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

var TodoItem = React.createClass({

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
      <div className={ classNames.join(" ") }>
        <p>
          <input type="checkbox" checked={ this.state.completed } onChange={ this.toggleCompleted } />
          <label onDoubleClick={ this.toggleEditing }>{ this.props.title }</label>
          <input value={ this.props.title } className="editor" />
        </p>
      </div>
    );
  }
});

var TodoList = React.createClass({
  getDefaultProps: function() {
    return {
      items: []
    };
  },

  render: function() {
    var items = this.props.items.map(function(i) {
      return <TodoItem key={ i.title } title={ i.title } completed={ i.completed } />;
    });

    return (
      <div>
        <h1>Todo</h1>
        { items }
      </div>
    );
  }
});


// Entry
React.render(
  <TodoList items={ items } />,
  document.getElementById('content')
);

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
      <div className={ classNames.join(" ") }>
        <p>
          <input type="checkbox" checked={ this.state.completed } onChange={ this.toggleCompleted } />
          <label onDoubleClick={ this.startEditing }>{ this.state.title }</label>
          <input value={ this.state.title } className="editor" onChange={ this.nameChanged } onKeyDown={ this.keyDown } />
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

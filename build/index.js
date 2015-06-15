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
            title     : '',
            completed : false
        };
    },

    getInitialState: function() {
        return {
            completed: this.props.completed
        };
    },

    toggleCompleted: function() {
        this.setState({ completed: !this.state.completed });
    },

    render: function() {
        var title = this.props.title;

        if (this.state.completed) {
            var title = React.createElement("strike", null,  this.props.title);
        }

        return (
            React.createElement("div", null, 
                React.createElement("p", null, 
                    React.createElement("input", {type: "checkbox", checked:  this.state.completed, onChange:  this.toggleCompleted}), 
                     title 
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

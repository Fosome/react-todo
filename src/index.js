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
            var title = <strike>{ this.props.title }</strike>;
        }

        return (
            <div>
                <p>
                    <input type="checkbox" checked={ this.state.completed } onChange={ this.toggleCompleted } />
                    { title }
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

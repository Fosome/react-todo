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

    render: function() {
        return (
            <div>
                <p>
                    <input type="checkbox" checked={ this.props.completed } />
                    { this.props.title }
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

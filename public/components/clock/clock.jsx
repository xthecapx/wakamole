define(
  [
    "jQuery",
    "react",
    "reactDOM",
    "marked"
  ], function(
    $,
    React,
    ReactDOM,
    marked
  ) {
    var init = function() {
      var Clock = React.createClass({
        getInitialState: function() {
          return {
            date: new Date(),
            id: 0
          };
        },
        componentDidMount: function() {
            var state = this.state;

            state.id = setInterval(function(){
              var state = this.state;

              state.date = new Date();
              state.n = state.date.toDateString();
              state.time = state.date.toLocaleTimeString();

              this.setState(state);
            }.bind(this), 1000);
            this.setState(state);
          },
          componentWillUnmount: function(){
              clearInterval(this.state.id);
          },
          render: function(){
              return (
                  <div className="text-center wall-clock">
                    <h1>{this.state.n}</h1>
                    <h2>{this.state.time}</h2>
                  </div>
              );
          }
      });

      ReactDOM.render(
        <Clock />,
        document.getElementById('content')
      );
    };

    return {
      init: init
    }
  }
);

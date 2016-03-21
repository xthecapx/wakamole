"use strict";

define(["jQuery", "react", "reactDOM", "marked"], function ($, React, ReactDOM, marked) {
  var init = function init() {
    var Clock = React.createClass({
      displayName: "Clock",

      getInitialState: function getInitialState() {
        return {
          date: new Date(),
          id: 0
        };
      },
      componentDidMount: function componentDidMount() {
        var state = this.state;

        state.id = setInterval(function () {
          var state = this.state;

          state.date = new Date();
          state.n = state.date.toDateString();
          state.time = state.date.toLocaleTimeString();

          this.setState(state);
        }.bind(this), 1000);
        this.setState(state);
      },
      componentWillUnmount: function componentWillUnmount() {
        clearInterval(this.state.id);
      },
      render: function render() {
        return React.createElement(
          "div",
          { className: "text-center wall-clock" },
          React.createElement(
            "h1",
            null,
            this.state.n
          ),
          React.createElement(
            "h2",
            null,
            this.state.time
          )
        );
      }
    });

    ReactDOM.render(React.createElement(Clock, null), document.getElementById('content'));
  };

  return {
    init: init
  };
});

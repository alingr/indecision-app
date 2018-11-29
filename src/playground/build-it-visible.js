class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleVisibility = this.handleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }

  handleVisibility(){
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }

  render() {
    const title = "Visibility Toggle";
    return (
      <div>
        <h1>{title}</h1>
        <button onClick={this.handleVisibility}>{this.state.visibility ? "Hide details" : "Show details"}</button>
        {this.state.visibility && (
          <div>
            <p>Hey. There are some details you can now see!</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

/*
let visibility = false;

const app = {
  title: "Visibility Toggle",
  messages: ["Hey! There are some details", ""],
  options: []
};

const toggleVisibility = () => {
  visibility = !visibility;
  render();
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById("app");

const render = () => {
  const jsx = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={toggleVisibility}>
        {visibility ? "Hide details" : "Show details"}
      </button>
      {visibility && (
        <div>
          <p>Hey. There are some details you can now see!</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(jsx, appRoot);
};

render();

*/

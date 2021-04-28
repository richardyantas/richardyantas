import React from "react";
import { NotionRenderer } from "react-notion";

// import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blockMap: {},
    };
  }

  async componentDidMount() {
    const blogData = await fetch(
      "https://notion-api.splitbee.io/v1/page/9563b7718c044d06b3e707374e8ed141"
    ).then((res) => res.json());

    this.setState({ blockMap: blogData });
  }

  render() {
    return (
      <div>
        <NotionRenderer fullPage blockMap={this.state.blockMap} />
      </div>
    );
  }
}

export default App;

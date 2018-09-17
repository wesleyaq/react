import React, { Component } from 'react';

// Components
import Header from "./Header";
import Footer from "./Footer";
// import Content from "./Global/Content";

// Data
import CONFIG from "../config";

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <main>
        <Header title={CONFIG.SITE.NAME} />
        <div className="pb-40">
          {children}
        </div>
        {/* <Content body={children} /> */}
        <Footer copy={CONFIG.SITE.COPY} />
      </main>
    );
  }
}

export default App;

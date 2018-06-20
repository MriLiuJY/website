import * as React from 'react';

import Header from '../components/Header';

class Home extends React.Component {
  public render() {
    return (
      <div className="Home">
        <p>我是home</p>
        <Header />
      </div>
    );
  }
}

export default Home;

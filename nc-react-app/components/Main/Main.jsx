import React from 'react';
import InitForm from './InitForm/InitForm';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <h1>Let's comb some news!</h1>
        <InitForm />
      </section>
    );
  }
}

export default Main;

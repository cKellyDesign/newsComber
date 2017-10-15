import { connect } from 'react-redux';
import React from 'react';

const mapStateToProps = (state) => {
  return {
    ...state.Progress,
  }
}

// const mapDispatchToProps = (dispatch) => {

// }

class Progress extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <h3>Progress</h3>
      </section>
    );
  }
}

const ProgressContainer = connect(mapStateToProps)(Progress);

export default ProgressContainer;

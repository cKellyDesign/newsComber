import React from 'react';
import { connect } from 'react-redux';
import { setRootUrl } from './../../redux/ActionCreators';
import InitForm from './InitForm/InitForm';

require('./Main.scss');

const mapStateToProps = (state) => {
  return {
    progStep: state.Progress.current_step,
    mainState: {
      ...state.Main,
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setRootSite: (url) => { dispatch(setRootUrl(url)); },
  };
}

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="main">
        <h1>Let's comb through some news!!</h1>
        <InitForm setRootSite={this.props.setRootSite} />
      </section>
    );
  }
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;

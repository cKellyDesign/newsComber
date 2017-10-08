import { connect } from 'react-redux';
import { setRootUrl } from './../ActionCreators';
import Main from './../../components/Main/Main';

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

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;

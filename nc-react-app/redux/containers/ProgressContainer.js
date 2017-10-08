import { connect } from 'react-redux';
import Progress from './../../components/Progress/Progress';

const mapStateToProps = (state) => {
  return {
    ...state.Progress,
  }
}

// const mapDispatchToProps = (dispatch) => {

// }

const ProgressContainer = connect(mapStateToProps)(Progress);

export default ProgressContainer;

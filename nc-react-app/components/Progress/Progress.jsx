import { connect } from 'react-redux';
import React from 'react';

require('./Progress.scss');

const progressSteps = [
  {
    label: 'Define target site'
  },
  {
    label: 'Determine site taxonomy'
  }
];

const mapStateToProps = (state) => {
  return {
    ...state.Progress,
    steps: progressSteps.map((step, i) => { 
      return {
        label: step.label, 
        isCurrent: i === state.Progress.current_step,
        isComplete: i < state.Progress.total_progress
      };
    })
  };
}

// const mapDispatchToProps = (dispatch) => {

// }

class Progress extends React.Component {
  constructor(props) {
    super(props);
    const { steps, current_step, total_progress } = this.props;
    this.state = {
      steps,
      current_step,
      total_progress
    };
  }

  componentWillReceiveProps (nextProps) {
    const { steps, current_step, total_progress } = nextProps;
    this.setState({
      steps,
      current_step,
      total_progress
    });
  }

  render() {
    const { steps } = this.state;
    return (
      <section>
        <h3>Progress</h3>
        <ol id="progressList">
          {steps.map((step, i) =>
            (<li key={i} className={`${step.isCurrent ? 'current ' : ''}${step.isComplete ? 'complete' : ''}`}>
              {step.label}
            </li>)
          )}
        </ol>
      </section>
    );
  }
}

const ProgressContainer = connect(mapStateToProps)(Progress);

export default ProgressContainer;

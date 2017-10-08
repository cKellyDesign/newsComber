import React from 'react';
import MainContainer from './../redux/containers/MainContainer';
import ProgressContainer from './../redux/containers/ProgressContainer';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  setRootSite(root_url) {
    this.setState({
      Main: {
        ...this.state.Main,
        root_url,
      }
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={8}>
            <MainContainer />
          </Col>
          <Col xs={12} md={4}>
            <ProgressContainer />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
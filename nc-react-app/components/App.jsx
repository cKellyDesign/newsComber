import React from 'react';
import Main from './Main/Main';
import Progress from './Progress/Progress'
import { Grid, Row, Col } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={8}>
            <Main />
          </Col>
          <Col xs={12} md={4}>
            <Progress />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';


class InitForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <FormGroup controlId="root_url">
          <ControlLabel>Enter a news site's root url to get started:</ControlLabel>
          <FormControl
            type="url"
            placeholder="http://nbcnews.com"
          />
        </FormGroup>
        <Button bsStyle="primary" type="submit">Get site taxonomy</Button>
      </form>
    );
  }
}

export default InitForm;

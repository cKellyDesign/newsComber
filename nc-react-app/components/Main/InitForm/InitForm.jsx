import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';


class InitForm extends React.Component {
  constructor(props) {
    super(props);
    this.updateRootUrl = this.updateRootUrl.bind(this);
    this.submitSite = this.submitSite.bind(this);
  }

  submitSite(url) {
    $.ajax({
      method: "POST",
      url: 'http://localhost:5000/sites',
      data: { baseurl: url },
      // dataType: "jsonp",
      cache: false
    })
    .done((res) => {
      console.log('RES!!!!', res);
      this.props.setRootSite(url);
    })
    .fail((req, err) => {
      console.log('FAIL!!!', err);
    });
  }

  updateRootUrl(e) {
    e.preventDefault();
    let url = !!this.inputEl.value ? this.inputEl.value : 'http://nbcnews.com';
    this.submitSite(url);
  }

  render() {
    return (
      <form>
        <FormGroup controlId="root_url">
          <ControlLabel>Enter a news site's root url to get started:</ControlLabel>
          <FormControl
            type="url"
            placeholder="http://nbcnews.com"
            inputRef={(el) => { this.inputEl = el}}
          />
        </FormGroup>
        <Button
          bsStyle="primary"
          type="submit"
          onClick={(e) => { this.updateRootUrl(e) }}
        >Get site taxonomy</Button>
      </form>
    );
  }
}

export default InitForm;

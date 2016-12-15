import React from 'react';
import {Button} from 'react-bootstrap';

function Toggle(props) {
  return (
    <div>
      <Button bsStyle="primary"
        bsSize="large"
        onClick={props.toggle}>
        {props.order}
      </Button>
    </div>
  );
}

export default Toggle;

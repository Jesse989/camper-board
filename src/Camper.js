import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';


function Camper(props) {
  const campers = props.campers;
  const camperList = campers.map((camper, i) =>
    <Grid key={i}>
      <Row>
        <Col xs={2}>{i+1}</Col>
        <Col xs={2}><img
          alt="profile pic"
          height="40px"
          src={camper.img} />
        </Col>
        <Col xs={4}>{camper.username}</Col>
        <Col xs={2}>{camper.recent}</Col>
        <Col xs={2}>{camper.alltime}</Col>
      </Row>
    </Grid>
  );
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={2}><h4>Rank:</h4></Col>
            <Col xs={2}><h4>Image:</h4></Col>
            <Col xs={4}><h4>Username:</h4></Col>
            <Col xs={2}><h4>Recent:</h4></Col>
            <Col xs={2}><h4>Alltime:</h4></Col>
          </Row>
        </Grid>
        {camperList}
     </div>
   );
}

export default Camper;

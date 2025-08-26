import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const data = [1,2,3];

return <div>
  <Col xs={12} md={6 lg={4} xl={3} key={data.index}}>
    <ul {...data}/>
  </Col>
</div>

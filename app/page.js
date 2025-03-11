// app/page.js
import React from 'react';
import { Button, Row, Col } from 'antd';

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a la Tienda Friki</h1>
      <Row gutter={[16, 16]}>
        {/* Muestra una lista de productos */}
        {[...Array(6)].map((_, index) => (
          <Col key={index} span={8}>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;

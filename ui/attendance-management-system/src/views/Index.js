/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Notifications</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={()=> window.location.reload(true)}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead>
                  <tr>
                    <th scope="col">Your Exam results for final year has been realeased !!  
                    <a href="#">  Click here to view full notification</a></th>
                  </tr>
                  <tr><th scope="col">Pongal Holidays are from 9 Jan to 17 Jan !!! Happy Pongal !!
                  <a href="#">  Click here to view full notification</a>
                  </th></tr>
                  <tr>
                    <th scope="col">Christmas Holidays are declared from 23 Dec 2022 to 2 Jan 2023. Advance Happy Christmas and New Year to all !!  
                    <a href="#">  Click here to view full notification</a></th>
                  </tr>
                  <tr>
                    <th scope="col">Your Half yearly exams are postponed. We will let you know full details sooner.
                    <a href="#">  Click here to view full notification</a></th>
                  </tr>
                  <tr>
                    <th scope="col">Your Half yearly exams are coming up. Prepare well for exams !!
                    <a href="#">  Click here to view full notification</a></th>
                  </tr>
                  <tr>
                    <th scope="col">Your Half yearly exams are coming up. Prepare well for exams !!
                    <a href="#">  Click here to view full notification</a></th>
                  </tr>
                  <tr>
                    <th scope="col">Your Half yearly exams are coming up. Prepare well for exams !!
                    <a href="#">  Click here to view full notification</a></th>
                  </tr>
                  </thead>
                    
              </Table>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </>
  );
};

export default Index;

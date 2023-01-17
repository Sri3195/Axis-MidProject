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
// react component that copies the given text inside your clipboard
// reactstrap components
import {
  Card,
  CardHeader,
  Container,
  Row,
  Col,
  Button,
  Table,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { useEffect } from "react";
import axios from "axios";

const Teachers = () => {
  const [teachers,setTeachers]=useState([]);
  const url='http://localhost:8000/api/v1/TEACHER/teachers';
  
  /*useEffect(() => {
    fetch(url,{
      method:"GET",
      mode:"cors",
  }).then((response)=>setTeachers(response.data))
    
},[])*/


  useEffect(() => {

        axios.get(url).then(res =>{
             //console.log(res)
            setTeachers(res.data);
            })
    },[])
  /*const seeTeachers = () => {

    fetch(url,{
      method:"GET",
      mode:"cors",
  }).then((response)=>setTeachers(response.data))*/
  
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Teacher Details</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                     
                      size="sm"
                      onClick={() => window.location.reload(true)}
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {teachers.map(t=> <tr>
                    <td>{t.teacherId}</td>
                    <td>{t.teacherName}</td>
                  </tr>)}
                </tbody>
              </Table>
            </Card>
          </Col>
          
        </Row>

      </Container>
    </>
  );
};

export default Teachers;

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
// reactstrap components
import {
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const ViewAttendance = () => {

  const url='http://localhost:8000/api/v1/ATTENDANCE/attendances';
  const [attendances,setAttendances]=useState([]);


  const deleterecord=(dtt,tmm,ttid,subj,ssid,sts)=>{

    if(window.confirm("Are you sure , you want to delete?") == true){
    axios.delete('http://localhost:8000/api/v1/ATTENDANCE/attendance-record',{
        params:{date:dtt,
            time:tmm,
            teacherId:ttid,
            subject:subj,
            studentId:ssid,
            status:sts},

    }).then((response) => { window.alert(response.data);
                            window.location.reload(true);})
    }
    else{
      window.alert("You have cancelled deletion");
    }
}

  useEffect(() => {

    axios.get(url).then(res =>{
         //console.log(res)
        setAttendances(res.data);
        })
},[])
  return (
    <>
      <Header/>
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Attendance Details</h3>
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
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">TeacherId</th>
                    <th scope="col">Subject</th>
                    <th scope="col">StudentId</th>
                    <th scope="col">StudentName</th>
                    <th scope="col">Status</th>
                    <th scope="col">Delete</th>
                    
                  </tr>
                </thead>
                
                <tbody>
                {attendances.map(a=> <tr>
                    <td>{a.date}</td>
                    <td>{a.time}</td>
                    <td>{a.teacherId}</td>
                    <td>{a.subject}</td>
                    <td>{a.studentId}</td>
                    <td>{a.studentName}</td>
                    <td>{a.status}</td>
                    <td><button className="btn btn-danger btn-sm" onClick={()=> deleterecord(a.date,a.time,a.teacherId,a.subject,a.studentId,a.status)}>Delete</button></td>
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

export default ViewAttendance;

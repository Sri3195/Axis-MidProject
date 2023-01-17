import {
  
    CardHeader,
    Table,
    Container,
    Row,
    Col,
    Button,
    Card, CardBody, CardTitle,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,FormGroup,
    Navbar,
    Form,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    DropdownMenu,
    DropdownItem
  } from "reactstrap";
  // core components
  
  import axios from "axios";
  import { useState } from "react";
  import { Link } from "react-router-dom";
//import PercentageHeader from "components/Headers/PercentageHeader";
  
  const CalculateAttendance = () => {
    const [startDate1,setStartDate]=useState('');
    const [endDate1,setEndDate]=useState('');
    const [subject1,setSubject]=useState('');
    const [attendances,setAttendances]=useState([]);


  
    const url='http://localhost:8000/api/v1/ATTENDANCE/calculateAllPercentage';
    
  
    const print = () => {
      if(startDate1==="" || endDate1==="" || subject1===""){
        window.alert("Please provide the data required!");
      }

      else if(endDate1 <=  startDate1){
        window.alert("End Date should be less than Start Date");
      }
      else{
        axios.get(url,{
            params:{startDate:startDate1,
                endDate:endDate1,
                subject:subject1}
        }).then(response => {console.log(response.data);
            setAttendances(response.data)})
        }
           
    }
  

    return (
      <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Link
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            to="/"
          >
            Calculate Attendance
          </Link>
          <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
          </Form>
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      src={require("../../assets/img/theme/team-4-800x800.jpg")}
                    />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">
                      Hi Teacher!
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem to="/auth/login" tag={Link}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Start Date
                        </CardTitle>
                      </div>
                    </Row>
                  <CardBody>
                    
                    <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-watch-time" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Start date"
                    type="date"
                    autoComplete="new-date"
                    onChange={(e)=>setStartDate(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="4">
              <Card className="card-stats mb-4 mb-xl-0">
                <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          End Date
                        </CardTitle>
                      </div>
                    </Row>
                  <CardBody>
                    
                    <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-watch-time" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="End Date"
                    type="date"
                    autoComplete="new-date"
                    onChange={(e)=>setEndDate(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="4">
              <Card className="card-stats mb-4 mb-xl-0">
                <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Subject
                        </CardTitle>
                      </div>
                    </Row>
                  <CardBody>
                    
                    <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-ruler-pencil" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Subject"
                    type="text"
                    autoComplete="new-text"
                    onChange={(e)=>setSubject(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="12">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Attendance Percentage</h3>
                    </div>
                    <div className="col text-right">
                      <Button
                        color="primary"
                        href="#pablo"
                       
                        size="sm"
                        onClick={print}
                      >
                        Calculate
                      </Button>
                    </div>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      
                      <th scope="col">StudentId</th>
                      <th scope="col">TotalNoOfDays</th>
                      <th scope="col">NoOfDaysPresent</th>
                      <th scope="col">Percentage(%)</th>
                      
                    </tr>
                  </thead>
                  
                  <tbody>
                  {attendances.map(a=> <tr>
                    <td>{a.studentId}</td>
                    <td>{a.totalNoOfdays}</td>
                    <td>{a.noofDaysPresent}</td>
                    <td>{a.percentage}</td>

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
  
  export default CalculateAttendance;
  
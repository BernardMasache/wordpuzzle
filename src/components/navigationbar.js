import React from 'react';
import {Navbar, Nav, Form, FormControl, Button, CardGroup} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Mouse from '../images/Mouse-icon-for-web.png';
import Mouse2 from '../images/geometry.jpg';
import Mouse3 from '../images/grammer.png';
import Mouse4 from '../images/Arithmetic_symbols.svg.png';

class Navigationbar extends React.Component{
    constructor(){
        super();
        this.state={
            title: 'Word Puzzle',
            isDisplayed: true
        }
    }

    handleDisplay(e){
      e.preventDefault();

      this.setState({
        isDisplayed: !this.state.isDisplayed
      })
    }
    render(){
      const {isDisplayed} = this.state;
        return(
           
        <div>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home" style={{color: '#d58c0d', fontWeight: "bold"}}>{this.state.title.toUpperCase()}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
                <Form inline>
                <Nav.Link to="#register">Register</Nav.Link>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.handleChange} />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
            <div>
         <h1 className="title" >{this.state.title.toUpperCase()}</h1>
         </div>

         <div>

         <Card className="bg-dark text-white" style={{height: 450}}>
            <Card.Img src={Mouse} alt="Card image" style={{opacity: .4}}/>
            <Card.ImgOverlay style={{textAlign: 'center', marginTop: '3%', paddingTop: '7%'}}>
                <Card.Title><h2>ADVANCE YOUR KNOWLEDGE</h2></Card.Title>
                <Card.Text>
                  Enjoy the school exercise <span style={{color: '#d58c0d'}}>GAME</span>
                </Card.Text>
                
                <Button variant="primary" style={{color: '#d58c0d', background: 'transparent'}}>Signin to start the GAME</Button>
            </Card.ImgOverlay>
            </Card>

         </div>
         <div>
         <Card className="text-center">
  <Card.Header>GRAMMAR | ARITHMETIC | GEOMETRY</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary" onClick={(e) => this.handleDisplay(e)}>Tutorials</Button>
  </Card.Body> 
  <Card.Footer className="text-muted">

  <CardGroup className={`text-muted ${isDisplayed ? 'is-displayed' : ''}`}>
  <Card >
    <Card.Img variant="top" src={Mouse4}  style={{height:200}}/>
    <Card.Body>
      <Card.Title>Arithmetic</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Mouse3} style={{height:200}}/>
    <Card.Body>
      <Card.Title>Grammer</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Mouse2} style={{height:200}}/>
    <Card.Body>
      <Card.Title>Geometry</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>

      </Card.Footer>
</Card>
         </div>

        </div>
        )
    }
}
export default Navigationbar;
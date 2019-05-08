import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, CardGroup} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Mouse from '../images/Mouse-icon-for-web.png';
import Mouse2 from '../images/dell-mouse.jpeg';
import Mouse3 from '../images/dell-mouse.jpeg';
import Mouse4 from '../images/dell-mouse.jpeg';

class Navigationbar extends React.Component{
    constructor(){
        super();
        this.state={
            title: 'Word Puzzle',
        }
    }
    render(){
        return(
           
        <div>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home" style={{color: '#d58c0d'}}>{this.state.title.toUpperCase()}</Navbar.Brand>
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
                <Card.Title>ADVANCE YOUR KNOWLEDGE</Card.Title>
                <Card.Text>
                   <h4> Enjoy the school exercise <span style={{color: '#d58c0d'}}>GAME</span></h4>
                </Card.Text>
                <input type='text' name="signin" /><br/><br/>
                <Button variant="primary" style={{color: '#d58c0d', background: 'transparent'}}>Signin to start the GAME</Button>
            </Card.ImgOverlay>
            </Card>

         </div>
         <div>
         <Card className="text-center">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Tutorials</Button>
  </Card.Body>
  <Card.Footer className="text-muted">

  <CardGroup>
  <Card >
    <Card.Img variant="top" src={Mouse4}  style={{height:200}}/>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
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
      <Card.Title>Card title</Card.Title>
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
      <Card.Title>Card title</Card.Title>
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
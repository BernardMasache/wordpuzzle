import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap';
;


class Preposition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      price:'k345',
      list: [],
      qeustionInstruction: 'Complete the blank space with the correct preposition',
      
      
    };
  }

  changeInputValue(key, value) {
    // update react state
    this.setState({ [key]: value });

    // update localStorage
    localStorage.setItem(key, value);
  }

  inputAnswer() {
    // create a new item
    const newItem = {
      id: 1 + Math.random()*100,
      value: this.state.newItem.slice().toLowerCase(),
    };

    

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list: list,
      newItem: "",
      
    });

     // update localStorage
     localStorage.setItem("list", JSON.stringify(list));
     localStorage.setItem("newItem", "");
    
  }

  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });

    // update localStorage
  localStorage.setItem("list", JSON.stringify(updatedList));
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();

    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
 }

 saveStateToLocalStorage() {
  // for every item in React state
  for (let key in this.state) {
    // save to localStorage
    localStorage.setItem(key, JSON.stringify(this.state[key]));
  }
}

componentWillUnmount() {
  window.removeEventListener(
    "beforeunload",
    this.saveStateToLocalStorage.bind(this)
  );

  // saves if component has a chance to unmount
  this.saveStateToLocalStorage();
}

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

 

  render() {
    
    return (
      <div className="App">
        

          
        
        
        <Container>
        <Row>
          
          <Col xs={12} style={{ padding: 5, textAlign: "left", maxWidth: 500, margin: "auto" }} >
          <p style={{fontWeight: 'bold'}}>{this.state.qeustionInstruction.toUpperCase()}</p>
          1. May I to know  
          
          <input
            type="text"
            placeholder="preposition..."
            value={this.state.newItem}
            onChange={e => this.changeInputValue("newItem", e.target.value)}
          />you are crying.  
          <button
            onClick={() => this.inputAnswer()}
            disabled={!this.state.newItem.length}//if no value in the input field
          >
            {/* &#43;  */}
            answer
          </button>
          <br /> <br />
          <div>
            {this.state.list.map(item => {
              
              return (
                <div key={item.id}>
                  <div className="">
                  <p> May I to know {item.value} you are crying. | <span>{this.state.status}</span><button onClick={() => this.deleteItem(item.id)} style={{display:'block'}}>
                    Restart
                  </button></p>
                 
                  </div>
                  
                  
                </div>
              );
            })}

            
          </div>
          </Col>

        </Row>
        </Container>

        
      </div>
    );
  }
}

export default Preposition;
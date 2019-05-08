import React from 'react';

import Navigationbar from '../components/navigationbar';

class HomeInitialiser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Navigationbar/>
                 
            </div>
        )
    }
}

export default HomeInitialiser;
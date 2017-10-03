import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h1> User AD Roles lookup </h1>
                <Link to="about" className="btn btn-primary btn-lg"> About </Link>
            </div>
        );
    }
}

export default HomePage;
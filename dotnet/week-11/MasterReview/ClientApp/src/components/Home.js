import React, { Component } from 'react';
import { Link } from 'react-router-dom'
export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        check out the teams page :!:!:!:

        <Link to="/teams">
          <div>
            <div className="card" style={{ "width": "18rem" }}>
              <img className="card-img-top" src="http://placekitten.com/100/180" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </Link>

      </div>
    );
  }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./css/attractions.css";

const Attraction = (props) => {
  return (
    <div className='attraction-card red-background'>
      {props.attraction.imageURL && <img src={props.attraction.imageURL} alt={'an image of ' + props.attraction.name + '.'} />}

      <div className='attraction-card-details coral-light-background'>
        <h1 className='attraction-card-title'>{props.attraction.name}</h1>
        <div className='attraction-card-inner'>
          <div className='attraction-card-description'>
            <p>
              {props.attraction.description || 'No description given.'}
            </p>
          </div>
          <div className='attraction-card-booleans'>
            <div className='attraction-card-indoors'>{props.attraction.indoors && `Indoors🌆`}</div> 
            <div className='attraction-card-childFriendly'>{props.attraction.childFriendly && `Child Friendly👍`}</div>
          </div>
          {props.attraction.website && <a href={props.attraction.website} className='attraction-card-website'><button className='attraction-card-button smaller'>🌐 Website</button></a>}
          <div className='attraction-card-addresses'>
              {props.attraction.address} 
              <br />
              {props.attraction.city + ', ' + props.attraction.state + ' ' + props.attraction.zipcode}
          </div>
        </div>
      </div>
      <div className='button-container'>
        <button className='delete-attraction-button attraction-card-button scaling-text' onClick={() => { props.deleteAttraction(props.attraction._id); }}>Delete Attraction</button>
        <Link to={"edit/" + props.attraction._id}><button className='edit-attraction-button attraction-card-button scaling-text'>Edit Attraction</button></Link>
      </div>
    </div>
  );
};

class Attractions extends Component {
  constructor(props) {
    super(props);

    this.deleteAttraction = this.deleteAttraction.bind(this);

    this.state = { attractions: [] };
  }

  componentDidMount() {
    document.getElementById('Message').innerHTML = this.props.message || "Don't see your attraction here?";
    axios.get(process.env.REACT_APP_BACKEND + 'attractions/')
      .then(res => { this.setState({ attractions: res.data }); })
      .catch(err => console.log(err));
  }

  deleteAttraction(id) {
    if (!window.confirm("Are you sure you wish to delete this attraction?")) { return; }

    axios.delete(process.env.REACT_APP_BACKEND + 'attractions/' + id)
      .then(res => console.log(res.data));

    this.setState({
      attractions: this.state.attractions.filter(ele => ele._id !== id)
    });
  }

  //custom functions
  attractionList() {
    return this.state.attractions.map(currentAttraction => {
      return <Attraction attraction={currentAttraction} deleteAttraction={this.deleteAttraction} key={currentAttraction._id} />;
    });
  }

  render() {
    return (
      <div>
        <div className='add-attraction-cta'> {/* CTA is short for Call To Action. */}
          <h2 id='Message'>If you can see this, there was an error.</h2>
          <Link to='/attractions/createAttraction' className='add-attraction-link'><button className='add-attraction-button scaling-text'>Add an attraction!</button></Link>
        </div>
        {this.attractionList()}
      </div>
    );
  }
}

export default Attractions;
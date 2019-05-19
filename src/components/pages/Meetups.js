import React, { Component } from 'react';
import axios from 'axios';

const URL = "https://questioner--api.herokuapp.com/api/v2/meetups/upcoming"

class Meetups extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meetups: [],
            isloaded: false
        }
    }

    componentDidMount() {
        axios
            .get(URL)
            .then(res => {
                const meetups = res.data.data;

                this.setState({
                    meetups: meetups,
                    isloaded: true
                });
            })
            .catch(err => {
                console.log('error')
            });
    }

    renderMeetups() {
        const allMeetups = this.state.meetups
        return allMeetups.forEach((meetup, i) => {
            <div className="" key={meetup.id}>
                <h3>Topic: {meetup.topic}</h3>
                <p>Location: {meetup.location}</p>
                <p>Happen: {meetup.happen_on}</p>
                <img src={meetup.image} alt="meetup-image" />
                <p>Description: {meetup.description}</p>
                <p>Tags: {meetup.tags}</p>
                <span>{meetup.created_on}</span>
            </div>
        })
    }



    render() {

        let isloaded = this.state.isloaded;
        let allMeetups = this.state.meetups;
        if (!isloaded) {
            return <div>Loading..</div>;
        }

        console.log(allMeetups)
        return (
            <div>
                <div className="row">
                    {allMeetups.map(meetup => (
                        <div key={meetup.id} className="col-sm-4">
                            <div className="card" style={{ width: 18 + "rem" }}>
                                <img
                                    className="card-img-top"
                                    src={meetup.image}
                                    alt="Card image cap"
                                    fluid="true"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{meetup.title}</h5>
                                    <p className="card-text">{meetup.description}</p>
                                    <a href="#" className="btn btn-primary">
                                        More details
                                     </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Meetups;
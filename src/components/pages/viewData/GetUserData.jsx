import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class GetUserData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: {}
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/api/books/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    book: res.data
                })
            })
            .catch(err => {
                console.log("Error from ShowBookDetails");
            })
    };

    onDeleteClick (id) {
        axios
            .delete('http://localhost:8082/api/books/'+id)
            .then(res => {
                this.props.history.push("/");
            })
            .catch(err => {
                console.log("Error form ShowCustomerDetails_deleteClick");
            })
    };


    render() {

        const customer = this.state.customer;
        let CustomerItem = <div>
            <table className="table table-hover table-dark">
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>IDNumber</td>
                    <td>{ customer.idNumber }</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Name</td>
                    <td>{ customer.name }</td>
                </tr>
                </tbody>
            </table>
        </div>

        return (
            <div className="ShowBookDetails">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 m-auto">
                            <br /> <br />
                            <Link to="/" className="btn btn-outline-warning float-left">
                                Show Customer List
                            </Link>
                        </div>
                        <br />
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Book's Record</h1>
                            <p className="lead text-center">
                                View Customer's Info
                            </p>
                            <hr /> <br />
                        </div>
                    </div>
                    <div>
                        { CustomerItem }
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,customer._id)}>Delete Customer</button><br />
                        </div>

                        <div className="col-md-6">
                            <Link to={`/edit-book/${customer._id}`} className="btn btn-outline-info btn-lg btn-block">
                                Edit Customer
                            </Link>
                            <br />
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default GetUserData;

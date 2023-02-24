import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AllAuthors = () => {
const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
        .then(res => {
            console.log(res);
            setAuthors(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then(res => {
            console.log(res);
            setAuthors(authors.filter((author) => {
                return author._id !== id;
            }))
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <>
            <Link to="/authors/new">Add an Author</Link>
            <p>We have quotes by:</p>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((author, i) => {
                            const {name, _id} = author;
                            return (
                                <tr key={i}>
                                    <td>{name}</td>
                                    <td>
                                        <Link to={`/authors/${_id}/edit`}>
                                            <button className="btn btn-warning">Edit</button>
                                        </Link>
                                        <button className="btn btn-danger" onClick={()=>{handleDelete(_id)}}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default AllAuthors;
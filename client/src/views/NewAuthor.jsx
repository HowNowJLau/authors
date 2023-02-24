import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const NewAuthor = () => {
    const [formData, setFormData] = useState({
        name : ""
    });
    const [errors, setErrors] = useState(null);
    const navigate = useNavigate();

    const handleOnChange = e => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors", formData)
        .then(res => {
            console.log(res);
            setFormData({name: ""});
            navigate("/authors")
        }).catch(err => {
            console.log(err.response?.data?.errors);
            setErrors(err.response?.data?.errors);
        })
    }

    const {name} = formData;

    return (
        <div className="w-25 p-4">
            <Link to="/authors">Home</Link>
            <p>Add a new author:</p>
            <form onSubmit={handleSubmit}>
                {
                    errors?.name && (
                        <span className="text-danger">{errors.name?.message}</span>
                    )
                }  
                <div className="form-group">  
                    <label className="form-label">Name:</label>
                    <input type="text" name="name" className="form-control mb-2" onChange={handleOnChange} value={name}/>
                    <button className="btn btn-secondary" onClick={()=>{navigate("/authors")}}>Cancel</button>
                    <input type="submit" className="btn btn-primary m-2" value="Submit" />
                </div>
                
            </form>
        </div>
    )
}

export default NewAuthor;
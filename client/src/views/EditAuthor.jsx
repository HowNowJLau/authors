import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditAuthor = () => {
    const [formData, setFormData] = useState(null);
    const [errors, setErrors] = useState(null);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(res => {
            console.log(res);
            setFormData(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, [id])

    const handleSubmit = ((e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, formData, {new:true})
        .then(res => {
            console.log(res);
            navigate("/authors");
        }).catch(err => {
            console.log(err.response?.data?.errors);
            setErrors(err.response?.data?.errors);
        })
    })
    
    const handleOnChange = ((e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    })

    if (formData == null) {
        return <h3>Loading...</h3>
    }
    
    const {name} = formData;
    
    return (
        <div className="w-25 p-4">
            <Link to="/authors">Home</Link>
            <p>Edit this author</p>
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

export default EditAuthor;
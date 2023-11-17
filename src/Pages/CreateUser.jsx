import { useState } from "react";

const CreateUser = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        
    }

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-secondary text-white p-5">
                <h2>Add New User</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className="form-control" placeholder="enter name" value={name} onChange={e => setName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" className="form-control" placeholder="enter email" value={email} onChange={e => setEmail(e.target.value)}/>
                    </div><br />
                    <button className="btn btn-dark">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default CreateUser;
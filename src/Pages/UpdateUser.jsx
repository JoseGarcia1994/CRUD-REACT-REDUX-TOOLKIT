import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const UpdateUser = () => {
    
    const {id} = useParams();
    const users = useSelector(state => state.users);
    const existingUser = users.filter(user => user.id === Number(id))
    const {name, email} = existingUser[0]

    const [updateName, setUpdateName] = useState(name);
    const [newEmail, setNewEmail] = useState(email);

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-secondary text-white p-5">
                <h2>Update User</h2>
                <form /* onSubmit={handleSubmit} */>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className="form-control" placeholder="enter name" value={updateName} onChange={e => setUpdateName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" className="form-control" placeholder="enter email" value={newEmail} onChange={e => setNewEmail(e.target.value)}/>
                    </div><br />
                    <button className="btn btn-dark">Save Changes</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateUser;
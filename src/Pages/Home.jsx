import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {

    const users = useSelector(state => state.users);
 
    return (
        <div className='container'>
            <h2>CRUD</h2>
            <Link to='/create' className='btn btn-success my-3'>Create +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Axtion</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className="btn btn-sm btn-primary">Edit</button>
                                <button className="btn btn-sm btn-danger ms-2">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
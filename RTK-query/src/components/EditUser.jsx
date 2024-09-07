import { useEffect, useState } from "react";
import { useGetUserQuery, useUpdateUserMutation } from "../RTK/userApi";
import { useNavigate, useParams } from "react-router-dom";
const EditUser = () => {
  const { id } = useParams();

  const [user, setUser] = useState({
    id: id,
    name: "",
    email: "",
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const { data } = useGetUserQuery(id);

  useEffect(() => {
    if (data) {
      setUser({ ...user, name: data.name, email: data.email });
    }
  }, [data]);
  const [updateUser] = useUpdateUserMutation();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(user);
    navigate("/");
  };
  return (
    <div className="d-flex justify-content-center mt-5">
      <form className="border border-2 border-dark p-3" onSubmit={handleSubmit}>
        <h3>Edit User</h3>
        <div className="mb-3 mt-3">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 mt-3">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditUser;

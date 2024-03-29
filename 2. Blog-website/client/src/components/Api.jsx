import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Api = () => {
  const [users, setUsers] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8007/users");
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getAllUsers();
  }, []);

  const handleReadMore = (post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="container">
      <h2 className="text-center mb-10 mt-15 text-3xl font-bold underline hover:text-blue-500">We share what we’ve learned</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {users.map((user) => (
          <div key={user._id} className="col">
            <div className="card h-100">
              <img src={`http://localhost:8007/${user.image}`} className="card-img-top img-thumbnail" alt="User" />
              <div className="card-body">
                <h5 className="card-text text-2xl text-center">{user.title}</h5>
                <p className="card-text text-sm text-center">{user.des}</p>
                <p className="card-text text-center text-lg"><small className="text-muted">{user.date}</small></p>
                <button onClick={() => handleReadMore(user)} className="text-xl text-center  font-medium text-red-500 p-2 bg-blue-500 ml-35 rounded-md hover:bg-gray-500  ml-[37%]      ">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPost && (
        <div className="modal d-block">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-center text-3xl font-bold ml-[50%] ">{selectedPost.title}</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body overflow-auto">
                <img src={`http://localhost:8007/${selectedPost.image}`} className="w-100 mb-3" alt="User" />
                <p>{selectedPost.des}</p>
                <p className="text-muted text-center ">Date: {selectedPost.date}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="bg-red-500 text-2xl p-[5px] text-center     " onClick={handleCloseModal}>Back</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Api;

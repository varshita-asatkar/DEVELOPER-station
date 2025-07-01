import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);

  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    imageUrl: ''
  });

  const [newClient, setNewClient] = useState({
    name: '',
    designation: '',
    description: '',
    imageUrl: ''
  });

  useEffect(() => {
    fetchProjects();
    fetchClients();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/projects');
      setProjects(res.data);
    } catch (err) {
      console.error(err);
      alert('Error fetching projects');
    }
  };

  const fetchClients = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/clients');
      setClients(res.data);
    } catch (err) {
      console.error(err);
      alert('Error fetching clients');
    }
  };

  const handleAddProject = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/projects', newProject);
      setNewProject({ name: '', description: '', imageUrl: '' });
      fetchProjects();
      alert('Project added!');
    } catch (err) {
      console.error(err);
      alert('Failed to add project.');
    }
  };

  const handleAddClient = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/clients', newClient);
      setNewClient({ name: '', designation: '', description: '', imageUrl: '' });
      fetchClients();
      alert('Client added!');
    } catch (err) {
      console.error(err);
      alert('Failed to add client.');
    }
  };

  const handleDeleteProject = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/projects/${id}`);
      fetchProjects();
    } catch (err) {
      console.error(err);
      alert('Failed to delete project');
    }
  };

  const handleDeleteClient = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/clients/${id}`);
      fetchClients();
    } catch (err) {
      console.error(err);
      alert('Failed to delete client.');
    }
  };

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>

      <h2>Add New Project</h2>
      <form onSubmit={handleAddProject} className="admin-form">
        <input
          type="text"
          placeholder="Project Name"
          value={newProject.name}
          onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Project Description"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newProject.imageUrl}
          onChange={(e) => setNewProject({ ...newProject, imageUrl: e.target.value })}
          required
        />
        <button type="submit">Add Project</button>
      </form>

      <h2>Existing Projects</h2>
      <div className="admin-section">
        {projects.map((proj) => (
          <div key={proj._id} className="admin-card">
            <img
              src={proj.imageUrl || "/images/ecommerce.jpg"}
              alt={proj.name}
              className="admin-image"
            />
            <h3>{proj.name}</h3>
            <p>{proj.description}</p>
            <button className="read-more-btn">Read More</button>
            <button className="delete-btn" onClick={() => handleDeleteProject(proj._id)}>
              Delete
            </button>
          </div>
        ))}
      </div>

      <h2>Add New Client</h2>
      <form onSubmit={handleAddClient} className="admin-form">
        <input
          type="text"
          placeholder="Client Name"
          value={newClient.name}
          onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Designation"
          value={newClient.designation}
          onChange={(e) => setNewClient({ ...newClient, designation: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={newClient.description}
          onChange={(e) => setNewClient({ ...newClient, description: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newClient.imageUrl}
          onChange={(e) => setNewClient({ ...newClient, imageUrl: e.target.value })}
          required
        />
        <button type="submit">Add Client</button>
      </form>

      <h2>Existing Clients</h2>
      <div className="admin-section">
        {clients.map((client) => (
          <div key={client._id} className="admin-card">
            <img
              src={client.imageUrl || "/images/client-default.jpg"}
              alt={client.name}
              className="admin-image"
            />
            <h3>{client.name}</h3>
            <p><em>{client.designation}</em></p>
            <p>{client.description}</p>
            <button className="delete-btn" onClick={() => handleDeleteClient(client._id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;



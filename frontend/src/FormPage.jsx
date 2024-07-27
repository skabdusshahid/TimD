
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const FormPage = () => {
//   const [data, setData] = useState({ name: '', email: '' });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData({ ...data, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/form', data);
//       alert('Data submitted successfully');
//       navigate('/view');
      
//     } catch (error) {
//       console.error('Error submitting data:', error);
//       alert('Failed to submit data');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name: </label>
//         <input type="text" name="name" value={data.name} onChange={handleChange} />
//       </div>
//       <div>
//         <label>Email: </label>
//         <input type="email" name="email" value={data.email} onChange={handleChange} />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default FormPage;




import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './FormPage.module.css';

const FormPage = () => {
  const [data, setData] = useState({ name: '', email: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/form', data);
      alert('Data submitted successfully');
      navigate('/view');
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('Failed to submit data');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div>
        <label className={styles.inputLabel}>Name:</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>
      <div>
        <label className={styles.inputLabel}>Email:</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

export default FormPage;

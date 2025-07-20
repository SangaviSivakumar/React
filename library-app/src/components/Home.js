import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>🏠 Welcome to the Library</h2>
      <table border="2" >
      <tbody>
        <tr>
          <td><Link to="/">Home</Link></td>
          <td><Link to="/signin">Sign In</Link></td>
          <td><Link to="/signup">Sign Up</Link></td>
          <td><Link to="/dashboard">Dashboard</Link></td>
          <td><Link to="/add-book">Add Book</Link></td>
          <td><Link to="/remove-book">Remove Book</Link></td>
          <td><Link to="/issue-book">Issue Book</Link></td>
          <td><Link to="/return-book">Return Book</Link></td>
        </tr>
      </tbody>
    </table>


      <h3>📋 Menu</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><Link to="/signin"><button>Sign In</button></Link></li>
        <li><Link to="/signup"><button>Sign Up</button></Link></li>
        <li><Link to="/dashboard"><button>Dashboard</button></Link></li>
        <li><Link to="/add-book"><button>Add Book</button></Link></li>
        <li><Link to="/remove-book"><button>Remove Book</button></Link></li>
        <li><Link to="/issue-book"><button>Issue Book</button></Link></li>
        <li><Link to="/return-book"><button>Return Book</button></Link></li>
      </ul>
    </div>
  );
};

export default Home;

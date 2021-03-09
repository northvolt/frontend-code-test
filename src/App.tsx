import React from 'react';
import logo from './logo.png';
import './App.css';
import { useQuery, gql } from '@apollo/client';
const customerQuery = gql`
  query customerData {
    company {
        employees
        launch_sites
        name
        summary
        test_sites
        valuation
        vehicles
      }
  }
`;

function App() {
  const { loading, error, data } = useQuery(customerQuery);
  if (loading) return <p>Loading... 🚀 </p>;
  if (error) return <p>Error 😢</p>;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Customer data</p>
        <p>{JSON.stringify(data,null,100)}</p>
      </header>
    </div>
  );
}

export default App;

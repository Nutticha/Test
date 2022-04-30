// import logo from './logo.svg';
import './App.css';
import React ,{useState , useEffect} from 'react';
import product from './product';


function App() {
  const [data , setdata] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:90/api/user/").then(response =>response.json()).then(result =>setdata(result))
   
  } , []);
  console.log(data);
  
  return (
    <div className="App">
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Category</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) =>(
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

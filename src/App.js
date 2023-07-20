import "./App.css";
import {useState} from 'react';

const App = () => {
  const [data, setData] = useState({data: []});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('https://reqres.in/api/users?page=1', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log('result is: ', JSON.stringify(result, null, 4));

      setData(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(data);

  return (
    <div className='App'>
      {err && <h2>{err}</h2>}


  <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">I-Fetch</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

      <div className="d-flex" role="search">
       
        <button className="btn btn-outline-light" onClick={handleClick} >Get Users Data</button>
      </div>
    </div>
  
</nav>


<div className="container">
<h2 class="text-center my-5">Welcome to Users Fetch Data Section </h2>
<div className="row my-3 mx-4">
    {isLoading && <h2>Loading...</h2>}

    {data.data.map(person => {
      return (

        <div className="col-md-4 my-3 ">
        <div className="card" key={person.id}>
        <img src={person.avatar} className="card-img-top" alt="..."/>
        <div className="card-body">
        <br></br>
          <h5 className="card-title">Name: {person.first_name}  {person.last_name}</h5>
          <h5 className="card-text">Email: {person.email}</h5>
        </div>
        </div>  
          <br />
        </div>
        );
      })}
      </div>

</div>
    </div>
  );
};

export default App;

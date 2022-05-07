
var bcrypt = require('bcryptjs');

const Login = () => {
    const submitHandler = async (e) => {
        e.preventDefault();
        const id = e.target.id.value;
        const pass = e.target.pass.value;
        const response = await fetch('http://localhost:8080/voter/'+id);
        const myJson = await response.json();
        if(myJson.data != undefined)
        {
            bcrypt.compare(pass, myJson.data.pass, function(err, result) {
                console.log(result);
                if(result)
                {
                    //successful login
                    //put the myJson data in a state
                    //set login state to true
                }
            });
        }
       
    }
    return (
        <>
        <h1>Test</h1>
        <form action="" method="get" onSubmit={submitHandler}>
            ID:
            <input type={"textbox"} name="id"></input>
            <br />
            Pass:
            <input type={"password"} name="pass"></input>
            <button type="submit">Login</button>
        </form>
        

        
        </>
    )
  }

export default Login;
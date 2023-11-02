import AllUser from "./AllUser"

const IndexElem = () => {
  return (
    <div>
      <br/>
      <div className="welcome_title">Welcome to our dbms experiment</div>
      <div className="table_div"><AllUser/></div>
      <div>
        <div className="black"><a href='/login'>Login</a></div>
        <div className="black"><a href='/register'>Register</a></div>
        </div>
    </div>
  )
}

export default IndexElem
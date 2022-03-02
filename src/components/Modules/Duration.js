import './module.css';

const Duration = (props) => {
  const selectDuration = (idx) => {
    props.onChangeType(idx);
  }

  return (
    <div className="col-md-3 duration">
      <div onClick={() => {selectDuration(props.id)}} className={`${props.border} ${props.checkout ? "checkout check flex" : "check "}`}>
        <div className='info'>
          <div>
            <h5 className='type'> {props.type} </h5>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr><br></br>
            <h6 className="unlock">Unlock Duration</h6>
            <h5 className="month"> {props.month}  </h5><br></br>
            <hr></hr><br></br>
            <h6 className="interest">Intersts paid {props.interest} times</h6>
            <hr></hr>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Duration;
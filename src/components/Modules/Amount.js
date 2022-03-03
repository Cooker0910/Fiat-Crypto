import './module.css';

const Amount = (props) => {

  const selectAmount = (idx) => {
    console.log(idx)
    props.onChangeType(idx);
  }

  return (
    <div className="col-md-3 duration">
      <div onClick={() => {selectAmount(props.id)}} className={`${props.border} ${props.checkout ? "checkout check" : "check "}`}>
        <div className='info'>
          <div>
            { props.dgtlz ?
              <h5 className='type'> {props.dgtlz} GTLZ required </h5>
            : 
              <br></br>
            }
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr><br></br>
            { props.amount ?
              <h5 className="amount"> {props.amount} $  </h5>
              :
              <h5 className="amount stake"> {props.busd} BUSD  </h5>
            }
            <br></br>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Amount;
import { formatter } from '../utils/formatNumber'


const Card = ({ confirm, recovered, death }) => {
    return (
        <div> 
        <center>
        <div className='row card-columns'>
      <br/>  &emsp;&emsp;&emsp;&emsp; 
                 <div className="card text-white text-center bg-warning w-25">
                <div className="card-header"><h3 className='card-title'>Confirmed</h3></div>
                <div className="card-body">
                    <h3 className="card-text">{formatter.format(confirm)}</h3>
                </div>
            </div> <br/>&emsp;
            <div className="card text-white text-center bg-success w-25">
                <div className="card-header"><h3 className='card-title'>Recovered</h3></div>
                <div className="card-body">
                    <h3 className="card-text">{formatter.format(recovered)}</h3>
                </div>
            </div>
            <br/>&emsp;
            <div className="card text-white text-center bg-danger w-25">
                <div className="card-header"><h3 className='card-title'>Deaths</h3></div>
                <div className="card-body">
                    <h3 className="card-text">{formatter.format(death)}</h3>
                </div>
            </div>
            
        </div> </center>
        </div>
       
        
    )
};

export default Card;
import L from './Video/L.mpeg';

const Sound = () =>{
    return(
        
        <audio   autoPlay loop>
            <source src={L} type="audio/mpeg"/>
            
            </audio>
    )
}

export default Sound;
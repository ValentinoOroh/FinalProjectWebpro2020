import L from './Video/L.mp3';

const Sound = () =>{
    return(
        
        <audio  controls autoPlay>
            <source src={L} type="audio/mp3"/>
            
            </audio>
    )
}

export default Sound;
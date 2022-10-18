

import logo from './logo.svg';
import './App.css';
import Luokka from './Luokka'



const Koulu = (props) => {
  return (
    <>
      <div>Koulun nimi:{props.koulu.nimi}</div>
      <input type="text" onChange={(event)=>{ props.kouluMuuttui(event.target.value) }}  value = {props.koulu.nimi}/>

      <div>Luokat:</div>
      <div>{props.koulu.luokat.map((luokka,index) => <Luokka oppilasMuuttui={props.oppilasMuuttui} luokanIndex = {index} luokka={luokka} />)}</div>
    </>
  );
}

export default Koulu;
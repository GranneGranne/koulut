import logo from './logo.svg';
import './App.css';
import './header.css';
import { useState,useReducer } from "react"
import Koulu from './Koulu';
/* import {useState} from "react"  */
import Nappain from './Nappain';

let oppilas1 = {nimi:"Olli Oppilas"}

let oppilas2 = {nimi:"Mikko Mallikas"}
let oppilas3 = {nimi:"Kalle Kolmonen"}
let oppilas4 = {nimi:"Aku Ankka"}
let oppilas5 = {nimi:"Hessu Hopo"}

let luokka1 = {nimi:"3A",
              opplaidenMäärä:27,
              oppilaat:[oppilas1, oppilas3]
              }

let luokka2 = {nimi:"2B",
              opplaidenMäärä:24,
              oppilaat:[oppilas2]
              }

let luokka3 ={nimi:"1A",
              oppilaidenmäärä:32,
              oppilaat:[oppilas4]}

let luokka4={nimi:"2A",
              oppilaidenmäärä:31,
              oppilaat:[oppilas5]}

let koulu_ = { oppilaidenMäärä:100,
              nimi:"Kangasalan ala-aste",
              luokat:[luokka1,luokka2]}
              
let koulu2 = { oppilaidenMäärä:300,
               nimi:"Sääksjärven ala-aste",
               luokat:[luokka3,luokka4
              
              ]}

              function reducer(state, action) {
                switch (action.type) {
                  case 'KOULU_MUUTTUI':
/*                     let kopioKoulu = [...state];
                    const { kouluMuuttui, index} = action.payload;
                    return (kopioKoulu[kouluMuuttui] = koulu); */
                    return {...state, nimi: action.payload.nimi};
                  case 'OPPILAS_MUUTTUI':
                    console.log('Oppilas muuttuu')
                    let nimi = action.payload.nimi;
                    let kouluKopio = {...state};
                    kouluKopio.luokat(action.payload.luokanIndex).oppilaat(action.payload.oppilaanIndex).nimi = nimi;
                    return kouluKopio;
                  default:
                    throw new Error(
                      'Joko actionia ei ole määritetty tai suoritit jotain uskomatonta'
                    );
                }
              };

              function App() {

                
/* 
                const [koulu, setKoulu] = useState(koulu2)
                const kouluMuuttui = (nimi) => {
                                
                  let kouluKopio = {...koulu}

                  setKoulu(kouluKopio)
                  console.log(kouluKopio)
                }

               
                const oppilasMuuttui = (nimi,oppilaanIndex,luokanIndex) => {
                  let kouluKopio = {...koulu}
                  let luokatKopio = [...koulu.luokat]
                  let oppilaatKopio = [...koulu.luokat[luokanIndex].oppilaat]
                  oppilaatKopio[oppilaanIndex].nimi = nimi

                  kouluKopio.luokat = luokatKopio
                  kouluKopio.luokat[luokanIndex].oppilaat = oppilaatKopio

                  setKoulu(...koulu)
 */
                  const [koulu, dispatch] = useReducer(reducer, koulu_);

                  return (
                  <div>
                  <Koulu koulu={koulu} dispatch={dispatch} />
                  </div>
                  );
                }
                /* return (
                    <div>
                    <Koulu koulu = {koulu} oppilasMuuttui={oppilasMuuttui} kouluMuuttui = {kouluMuuttui}/> 
              
                    </div>
                ); */
              
              export default App;

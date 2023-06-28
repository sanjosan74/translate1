import './App.css';
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Button from 'react-bootstrap/Button';

function App() {

const [to,setTo]=useState("es")
const [from,setFrom]=useState("en")
const [input,setInput]=useState("")
const [output,setOutput]=useState("")

function translat(){
  console.log(to)
  console.log(from)
  console.log(input)
  let apiURL = `https://api.mymemory.translated.net/get?q=${input}&langpair=${from}|${to}`;
  fetch(apiURL).then((res)=>res.json()).then((data)=>{
    setOutput(data.responseData.translatedText);
  })
  console.log(output)
  let utterance;
 
  // speechSynthesis.speak(utterance);
}
function spk(){
  let utterance;
  utterance=new SpeechSynthesisUtterance(output);
  utterance.lang='es';
  speechSynthesis.speak(utterance);

}

  return (
    <div className="app">
      <div>
        Input your English Text here
      </div>
      

<div>
<textarea spellcheck='false' cols="50" rows="2" onInput={(e)=>setInput(e.target.value)}></textarea>
</div>

<div>
<Button style={{marginLeft:"170px"}} id='Tbtn' class='Tbtn' name='Tbtn' onClick={spk}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16">
  <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
  <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
  <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>
</svg></Button>
</div>

<div>
<Button style={{marginLeft:"120px"}} id='Tbtn' class='Tbtn' name='Tbtn' onClick={translat}>Translate to Spanish</Button>
</div>
<div>
<textarea cols="50" rows="1" value={output} ></textarea>
</div>

</div>
  )
}

export default App;

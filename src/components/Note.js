import React ,{ useState } from 'react';
import './homepage.css'



export default function Note(props) {
  

  const [write1, setwrite1] = useState(props.title);
  const [write2, setwrite2] = useState(props.write);
  const [id , setid] = useState(props.id);

  function updateInputValue(evt)
  {
    const val = evt.target.value;
    //console.log(val);
    setwrite1( val)
  }
  function updateInputValue2(evt2)
  {
    const val2 = evt2.target.value;
    //console.log(val2);
    setwrite2( val2)
  }


  function uptadenote()
  {
    console.log("güncellendi");
    document.getElementById("addButton").innerHTML = "Güncellendi"
    fetch('/uptade',{
      method:'POST',
      headers:{"Content-Type":"application/Json"},
      body: JSON.stringify({
        id:id,
        newtitle:updateInputValue.val,
        newwrite:updateInputValue2.val2,
    })
    })
    .then(res => res.json())
    .then(data => console.log(data))

  }

  return (
    <div className='note'>
          <div className='note_title'>
            <textarea className='txt' onInput={auto_grow} id='txtarea' placeholder='Başlık' value={write1} onChange={updateInputValue} ></textarea>
          </div>
          <div className='note_index'>
          <textarea className='txt2' onInput={auto_grow2} id='txtarea2' placeholder='Not Alın...' value={write2} onChange={updateInputValue2} ></textarea>
          </div>
          <div className='footernote'>
            <div id='cancelbutton'>
              <ion-icon  name="close"></ion-icon>
              <h2 id='cancelstrng'>Notu Sil</h2>
            </div>
            <div id='savenote'>
              <button id='addButton' className={"addButton"} onClick={uptadenote} >Güncelle</button>
            </div>
          </div>
      </div>
      
  )

  
}



window.addEventListener('mouseover', (e) =>{
  if(e.target.className === "txt")
  {
    const allobjs = document.getElementsByClassName("txt");
    for(var i = 0; i < allobjs.length; i++){
      allobjs[i].id = "txtarea";
    }
    e.target.id = "clicked";
    //console.log(e.target.id);
  }
  if(e.target.className === "txt2")
  {
    const allobjs2 = document.getElementsByClassName("txt2");
    for(var a = 0; a < allobjs2.length; a++){
      allobjs2[a].id = "txtarea2";
    }
    e.target.id = "clicked2";
    //console.log(e.target.id);
  }

});


function auto_grow() {
  const thsobj = document.getElementById("clicked");
  thsobj.style.height = "5px";
  thsobj.style.height = (thsobj.scrollHeight) -25 +"px";
  document.getElementById("addButton").innerHTML = "Kaydet"
}
function auto_grow2() {
  const thsobj2 = document.getElementById("clicked2");
  thsobj2.style.height = "5px";
  thsobj2.style.height = (thsobj2.scrollHeight)+"px";
  document.getElementById("addButton").innerHTML = "Kaydet"
}




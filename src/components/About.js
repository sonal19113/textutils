import React, { useState } from 'react';

export default function About(props) {
    // const [myStyle, setStyle] = useState(  {color : 'black',
    //                                      backgroundColor: 'white'});

    //  const [btnText, setBtnText] = useState("Dark Mode Enable");
// const toggleStyle= ()=>{
    
//     if(myStyle.color ==='black'){
//         setStyle({
//             color : 'white',
//             backgroundColor: 'black',
//             border: '1 px solid white'
           
//         })
//         setBtnText("Enable Light Mode");
//     }
//     else{
//         setStyle({
//             color : 'black',
//             backgroundColor: 'White' 
//         })
//         setBtnText("Enable Dark Mode");
//     }}
let myStyle={
    color: props.mode==='dark'?'white':'#183654',
    backgroundColor: props.mode==='dark'?'#183654':'white'
}

  return (
      <div className="container my-3">
          <h2 className=" my-3" style={{color: props.mode==='dark'?'white':'#183654'}}>About Us</h2>
    <div className="accordion accordion-flush my-2" id="accordionFlushExample">
       
    <div className="accordion-item my-3">
        <h2 className="accordion-header" id="flush-headingOne">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        <strong>Analyze your text</strong>
        </button>
        </h2>
        <div id="flush-collapseOne"style={myStyle} className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        <strong>Free to use</strong>
        </button>
        </h2>
        <div id="flush-collapseTwo" style={myStyle} className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingThree">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        <strong>Browser Compatible</strong>
        </button>
        </h2>
        <div id="flush-collapseThree" style={myStyle} className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
        </div>
    </div>
 
</div>
{/* <div>
    <button onClick={toggleStyle} type="button"  style={myStyle} className="btn btn-primary my-3">{btnText}</button>
    </div> */}
</div>
  )
}

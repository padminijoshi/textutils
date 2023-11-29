import React, { useState } from 'react'

export default function About(props) {
    //  const[myStyle, setMyStyle] = useState({
    //     color:'white',
    //     backgroundColor:'black'
    //  })
    let myStyle={
      color:props.mode === 'dark'?'#7ED7C1':'#DA0C81',
      backgroundColor:props.mode=== 'dark'?'#DA0C81':'#7ED7C1',
      border: '0px solid',
      borderColor:props.mode === 'dark'?'#7ED7C1':'#DA0C81'
    }
    
  return (
    <div className="container" style={myStyle}>
    <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong>Analyse your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
          Text Utils gives u a way to analyze ur text Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum ex placeat quos
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free  to Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Free to use Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur facere aliquid pariatur, quas eos a eligendi fuga est
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, debitis. Lorem, ipsum.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Brower Compatible Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquid voluptatem mollitia soluta vitae nesciunt minus possimus placeat libero voluptatibus
      </div>
    </div>
  </div>
</div>
    
    
    </div>
  )
}

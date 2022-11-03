import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function Textform(props) {
    const[text,setText]=useState("enter text here");
    //  setText=("new text");

    const handleonclick =()=>{
        console.log("upper case was clicked");
        let newtext=text.toUpperCase();
        setText(newtext);
        //  props.showalert('Converted to upper','success');
    }
    const handleloclick =()=>{
        console.log("upper case was clicked");
        let newtext=text.toLowerCase();
        setText(newtext)
        //  props.showalert('Converted to Lower !','success');
        
    }
    const handleclear =()=>{
        console.log("upper case was clicked");
        let newtext='';
        setText(newtext);
        // props.showalert('Converted to Lower !','success');
       
    }
    const handleonchange=(event)=>{
        console.log("on change");
        setText(event.target.value);
        //  props.showalert('Converted to Lower !','success');
        
    }

    const handlecopy=()=>{
        console.log('I am copy');
        var text =document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
        //  props.showalert('Converted to Lower !','success');
    }

    // const handleextraspaces=()=>{
    //     console.log("remove extra spaces");
    //     var newtext=text.split(/[ ]+/);
    //     setText(newtext.join);
    // }
  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
          <h2>{props.heading}</h2>
          <div className="mb-3">
              <textarea className="form-control" id="mybox" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleonchange} rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleonclick} style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>convert to Uppercase</button>

          <button className="btn btn-primary mx-2" onClick={handleloclick} style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>convert to lowercase</button>

          <button className="btn btn-primary mx-2" onClick={handleclear} style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>clear text</button>
          <button className="btn btn-primary mx-2" onClick={handlecopy} style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>copy text</button>
          {/* <button className="btn btn-primary mx-2" onClick={handleextraspaces}>remove spaces</button> */}
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
              <h1> your text summery</h1>
              <p> {text.split(" ").length} words, {text.length} character</p>
              <p> {0.008 * text.split(" ").length} minutes read</p>
              <h2> preview</h2>
              <p> {text}</p>
          </div>
          </>
  )
}

// import { Outlet, Link } from "react-router-dom";

// const Layout = () => {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About Us</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>

//       <Outlet />
//     </>
//   )
// };

// export default Layout;
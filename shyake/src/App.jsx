import { useState } from "react";

 function InputHello() {
  const [text, setText] = useState("Please find related articles on");
  const [inputlinks, setinputlinks] = useState("")
  const [output, setOutput] = useState("")
  const [outputlink, setOutputlink] = useState("")


  function handleChange(event) {
    setinputlinks(event.target.value);
  }
  function handleClick() {
    var linkarray= inputlinks.split(/\r?\n/)
    const mappedData = linkarray.map("link()")
    console.log(linkarray)
    
    
  }
  return (
    <>
      <p>{inputlinks}</p>
      <textarea value={inputlinks} onChange={handleChange} />
      <button onClick={handleClick}>submit</button>
      <p><i>{output} </i><a href={inputlinks}>(link)</a></p>
    </>
  );
}

export default function App() {
  return (
    <>
    <InputHello />

    </>
  )
}

// function InputHello() {
//   const [text, setText] = useState("Hello world");

//   function handleChange(event) {
//     setText(event.target.value);
//   }

//   return (
//     <>
     
//       <p>{text}</p>
//       <input value={text} onChange={handleChange} />
//     </>
//   );
// }

// function App() {
//   const [a, seta]= useState(0)
//   const [b, setb]= useState(0)
//   const [result, setresult]= useState(null)
//   function handleA(event) {
//     seta(event.target.value);
//   }
//   function handleB(event) {
//     setb(event.target.value);
//   }


//   function add() {
//     setresult(parseInt(a) + parseInt(b))
//   }
//   function subtract() {
//     setresult(parseInt(a) - parseInt(b))
//   }
//   function multiply() {
//     setresult(parseInt(a) * parseInt(b))
//   }
//   function divide() {
//     setresult(parseInt(a) / parseInt(b))
//   }

//   return(
//     <>
//     <h1>ads</h1>
//     <p>{result}</p>
//     <input value={a} onChange={handleA}/>
//     <input value={b} onChange={handleB}/>
//     <button onClick={add}>Add</button>
//     <button onClick={subtract}>subtract</button>
//     <button onClick={multiply}>multiply</button>
//     <button onClick={divide}>divide</button>
//     </>
//   )
// }

// export default App
import { useState } from "react";

 function InputHello() {
  const [inputlinks, setInputlinks] = useState("")
  const [output, setOutput] = useState("")
  const [outputlink, setOutputlink] = useState("")
  const [pre, setPre] = useState("")
  const [namedArray, setNamedArray] = useState([]) 
//   const testArray= [
//     'https://www.cna.com.tw/news/aipl/202408070192.aspx',
//     'https://www.cdns.com.tw/articles/1061237',
//     'https://www.chinatimes.com/realtimenews/20240807003746-260407?ctrack=pc_main_rtime_p02&chdtv',
//     'https://www.ctee.com.tw/news/20240807701190-430101'
// ]

function convertToName(x) {
  const arrayLength = x.length //4
  const resultArray =[]
  function pushToArray(i, n) {
    if(i==arrayLength-1) {
      resultArray.push(
        {
          name:", and " + n,
          link: x[i],
          key: i
        })
    } else {
      resultArray.push(
        {
          name: ", " + n,
          link: x[i],
          key: i
        })
    }
  }
  for (let i=0; i<arrayLength; i++) {
      switch (true) {
          case x[i].includes("cna"):
              pushToArray(i, "Central News Agency")
          break;
          case x[i].includes("cdns"):
            pushToArray(i, "China Daily News")
          break;
          case x[i].includes("chinatimes"):
            pushToArray(i, "China Times")
          break;
          case x[i].includes("ctee"):
            pushToArray(i, "Commercial Times")
          break;
      }
  }
  return resultArray
}

  function handleChange(event) {
    setInputlinks(event.target.value);
  }

  function handleClick() {
    setNamedArray(convertToName(inputlinks.split("\n")))
    console.log(namedArray)
  }
  return (
    <>
      <p>{inputlinks}</p>
      <textarea value={inputlinks} onChange={handleChange} />
      <button onClick={handleClick}>submit</button>
      <p>
      Please find related articles on
      {namedArray.map((link) => (
        <>
       <i>{link.name}</i> (<a href={link.link}>link</a>) 
        </>
      ))}
      </p>
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
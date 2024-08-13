import { useState } from "react";

 function InputHello() {
  const [inputlinks, setInputlinks] = useState("")
  const [namedArray, setNamedArray] = useState([]) 
  // test
  // https://www.cna.com.tw/news/afe/202408090238.aspx
  // https://www.chinatimes.com/realtimenews/20240809003845-260405?chdtv
  // https://www.digitimes.com.tw/TECH/DT/N/SHWNWS.ASP?ID=0000699516_FIA6BW3X0MIZAK7TWGRLP
  // https://news.ltn.com.tw/news/Kaohsiung/paper/1660973
  // https://udn.com/news/story/7327/8151999
  

function convertToName(x) {
  const arrayLength = x.length 
  const resultArray =[]
  function pushToArray(i, n) {
    if(i==0) {
      resultArray.push(
        {
          name: " " + n,
          link: x[i],
          key: i
        })
    }
    else if(i==arrayLength-1) {
      resultArray.push(
        {
          name: n,
          link: x[i],
          key: i,
          and: ", and "
        })
    } 
    else {
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
          case x[i].includes("anntw"):
            pushToArray(i, "Awakening News")
          break;
          case x[i].includes("bnext"):
            pushToArray(i, "BusinssNext")
          break;
          case x[i].includes("businesstoday"):
            pushToArray(i, "Business Today")
          break;
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
          case x[i].includes("cnyes"):
            pushToArray(i, "cnYes")
          break;
          case x[i].includes("cts"):
            pushToArray(i, "CTS News")
          break;
          case x[i].includes("digitimes"):
            pushToArray(i, "DigiTimes")
          break;
          case x[i].includes("money.udn"):
            pushToArray(i, "Economic Daily News")
          break;
          case x[i].includes("epochtimes"):
            pushToArray(i, "Epoch Times")
          break;
          case x[i].includes("ettoday"):
            pushToArray(i, "ETtoday")
          break;
          case x[i].includes("ftvnews"):
            pushToArray(i, "FTV")
          break;
          case x[i].includes("hakkanews"):
            pushToArray(i, "Hakka News")
          break;
          case x[i].includes("iknow"):
            pushToArray(i, "iKnow")
          break;
          case x[i].includes("ltn"):
            pushToArray(i, "Liberty Times")
          break;
          case x[i].includes("mirrormedia"):
            pushToArray(i, "Mirror Media")
          break;
          case x[i].includes("moneydj"):
            pushToArray(i, "MoneyDJ")
          break;
          case x[i].includes("newtalk"):
            pushToArray(i, "Newtalk")
          break;
          case x[i].includes("rti"):
            pushToArray(i, "Radio Taiwan")
          break;
          case x[i].includes("taipeitimes"):
            pushToArray(i, "Taipei Times")
          break;
          case x[i].includes("taisounds"):
            pushToArray(i, "Taisounds")
          break;
          case x[i].includes("storm"):
            pushToArray(i, "The Storm Media")
          break;
          case x[i].includes("ttv"):
            pushToArray(i, "TTV")
          break;
          case x[i].includes("tvbs"):
            pushToArray(i, "TVBS News")
          break;
          case x[i].includes("udn"):
            pushToArray(i, "United Daily News")
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
    console.log(inputlinks.split("\n"))
    console.log(namedArray)
  }
  return (
    <>
      {/* <p>{inputlinks}</p> */}
      <textarea value={inputlinks} onChange={handleChange} />
      <button onClick={handleClick}>submit</button>
      <p>
      Please find related articles on
      {namedArray.map((link) => (
        <>
       {link.and}<i>{link.name}</i> (<a href={link.link}><font color="#0070C0">link</font></a>) 
        </>    
      ))}
      .
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
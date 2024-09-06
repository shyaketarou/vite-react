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
////change pushToArray function to just push the necessary data into resultArray

function pushToArray(i, n) {

  resultArray.push(
      {
          name: n,
          link: x[i],
          key: i,
      })

}
/////////





/////now u might notice we keep doing resultArray.this(), resultArray.that(), and you're wondering if we could simplify it by just writing resultArray.this().that(), the answer is yes u can
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
          case x[i].includes("cnyes"):
            pushToArray(i, "cnYes")
          break;
          case x[i].includes("ctee"):
            pushToArray(i, "Commercial Times")
          break;
          case x[i].includes("cool3c"):
            pushToArray(i, "Cool3C")
          break;
          case x[i].includes("ctimes"):
            pushToArray(i, "CTIMES")
          break;
          case x[i].includes("cts"):
            pushToArray(i, "CTS News")
          break;
          case x[i].includes("ctwant"):
            pushToArray(i, "CTWANT")
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
          case x[i].includes("hoomedia"):
            pushToArray(i, "Hoo Media")
          break;
          case x[i].includes("iknow"):
            pushToArray(i, "iKnow")
          break;
          case x[i].includes("inside"):
            pushToArray(i, "Inside")
          break;
          case x[i].includes("ithome"):
            pushToArray(i, "iThome")
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
          case x[i].includes("nextapple"):
            pushToArray(i, "NextApple")
          break;
          case x[i].includes("nownews"):
            pushToArray(i, "NOWnews")
          break;
          case x[i].includes("pts"):
            pushToArray(i, "PTS")
          break;
          case x[i].includes("rti.org"):
            pushToArray(i, "Radio Taiwan")
          break;
          case x[i].includes("taipeitimes"):
            pushToArray(i, "Taipei Times")
          break;
          case x[i].includes("taisounds"):
            pushToArray(i, "Taisounds")
          break;case x[i].includes("taisounds"):
            pushToArray(i, "Taisounds")
          break;
          case x[i].includes("technews"):
            pushToArray(i, "TechNews")
          break;
          case x[i].includes("storm"):
            pushToArray(i, "The Storm Media")
          break;
          case x[i].includes("tssdnews"):
            pushToArray(i, "TSSDnews")
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
          case x[i].includes("upmedia"):
            pushToArray(i, "Up Media")
          break;
          case x[i].includes("wealth"):
            pushToArray(i, "Wealth Magazine")
          break;
          case x[i].includes("xmedia"):
            pushToArray(i, "X Media")
          break;
          case x[i].includes("ydn"):
            pushToArray(i, "Youth Daily News")
          break;
          //debug 
          default:
            alert('Invalid/unknown links');   
      }
  }
  ////we then sort it alphabetically
resultArray.sort((a, b) => a.name.localeCompare(b.name));
///////


///// then this whole thing adds necessary commas to the resultArray
resultArray.forEach((element, index) => {
  if (index === 0) {
      return;
      //if it's the first one do nothing
  } else if (index === arrayLength - 1) {
      element.and = ", and "
      // Add "and" to the last object

  } else {
      element.name = ", " + element.name 
      //all other objects get a comma 
  }
});
//////
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
      Please find related articles on <span> </span>
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
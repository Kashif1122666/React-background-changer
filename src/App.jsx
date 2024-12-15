import React ,{useState} from "react"
function App() {
  
  
  let colorValue = "123456789abcdefg";
  let hex = "#";
  const [color, setColor] = useState("");
  const changeBackground = ()=> {
   
    for (let i = 0 ; i <  6 ; i++ ){
       const randomNumber = Math.floor(Math.random() * 16 ) ;
       hex += colorValue.charAt(randomNumber);
      }
      setColor(hex);
      document.body.style.backgroundColor=hex;
    };
  return (
    <>
     <div  className="flex gap-16 ml-40 mt-36">
      
        <button onClick={changeBackground} className="border border-black rounded-lg p-2 text-black text-[20px] bg-white" > click me to Change backgroundColor Color =&gt;&gt;&gt; </button>
        <button className="flex flex-col justify-center items-center" style={{ backgroundColor:'white',
                      height:'100px',
                      width:'100px',
                      border:'2px solid black'
    
    }}> <p> color</p> {color}</button>   
     </div>
    </>
  )
}

export default App;

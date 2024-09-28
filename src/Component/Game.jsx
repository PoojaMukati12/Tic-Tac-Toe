import {React,useState} from 'react'
import Square from './Square'

const Game = () => {
    const [num, setnum] = useState([...Array(9).fill(null)]);
    const [con, setcon] = useState(true)
 //   console.log(num);

    const checkwinner=()=>{
      let winner=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,,4,6],
      ]
      for(let i=0;i<winner.length;i++){
        let[a,b,c]=winner[i];
        if( num[a]!= null && num[a]===num[b] && num[b]===num[c] )
            return num[a];
      }
      return false;
    }

    let result=checkwinner();
    
    const handleclick=(index)=>{
        if(num[index]!=null){
            return;
        }
        let copyarray=[...num];
        copyarray[index]=con ? "x" : "0";
        setnum(copyarray);
        setcon(!con)
    }

    const play=()=>{
        setnum([...Array(9).fill(null)]);
    }
  return (
    <>
    <div className="container">
        <h1 className='head'>Tic Tac Toe</h1>
        <h1 className='head'>{con ? "x" : "0"}:Your Turn</h1>
        {
            result ?<div className='win'><h1>{result}:You Winner</h1><button onClick={play}>Play Again</button></div>:
          <>
        <div className="raw">
        <Square onClick={()=>handleclick(0)} value={num[0]} />
        <Square  onClick={()=>handleclick(1)} value={num[1]}/>
        <Square onClick={()=>handleclick(2)} value={num[2]}/>
        </div>
        <div className="raw">
        <Square onClick={()=>handleclick(3)} value={num[3]}/>
        <Square onClick={()=>handleclick(4)} value={num[4]}/>
        <Square onClick={()=>handleclick(5)} value={num[5]}/>
        </div>
        <div className="raw">
        <Square onClick={()=>handleclick(6)} value={num[6]}/>
        <Square onClick={()=>handleclick(7)} value={num[7]}/>
        <Square onClick={()=>handleclick(8)}  value={num[8]}/>
        </div>
          </>
        }
    </div>
    </>

  )
}

export default Game
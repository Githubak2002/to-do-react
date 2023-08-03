import React , {useState} from 'react'
import Card from "./card";

const Todo = () => {


  const [inital,setStat] = useState("");
  const [iarr ,setArr] = useState([]);

  const deleteitem = (key) => {
    let newlist = [...iarr];
    newlist.splice(key,1);
    setArr([...newlist]);
    }

  const oncfun = (inital) => {
    // console.log(inital)
    if(inital !== ""){
        setArr((oldvalues) => {
        return([...oldvalues,inital])
        })
    }
    setStat("");
  }

  return (
    <>
        <div className='flex justify-center items-center'>

      <div className='text-center border border-red-400 my-4 mx-auto sm:w-[340px] rounded-md min-h-[480px]'>

        <h1 className='text-xl font-semibold py-4 border-b-2'>To-DO List</h1>

        <div className='flex justify-center items-center'>
            <input
            className='px-2 py-[6px] border border-black m-2 '
            type="text"
            placeholder='Add an item...'
            value={inital}
            onChange={(event) => {setStat(event.target.value)}}
            />
            <button
                className='border-black border mx-2 px-2 py-[6px]'
                onClick={() => oncfun(inital)}
            >Add
            </button>
        </div>
        
        {
            iarr.map((val,i) => {
                return(
                    <Card 
                    key = {i}
                    val = {val}
                    index = {i}
                    delfun = {deleteitem}
                    />
                )
               
            })
        }

        </div>

    </div>
    </>
    )
}

export default Todo
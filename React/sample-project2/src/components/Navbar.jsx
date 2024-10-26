import React, {useState} from 'react'
const Navbar=({appdata,logo})=>{
    const [numberstate,setNumberstate]=useState(0)
    const [stringstate,setStringstate]=useState("a")
    const [arraystate,setArraystate]=useState(["a",1,2,3])
    console.log(numberstate)
    console.log(stringstate)
    console.log(arraystate)
    return(
        <>
        {appdata.appname} {logo}
        </> 
    )
}
export default Navbar
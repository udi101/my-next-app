"use client"
import { useCallback, useMemo, useState } from "react"
import { useCalc } from "../hooks/useCalc"
import Test from "./test"

const Calc = () => {
    const [res,setRes] = useState<number>(0)
    let data = 2
    let {sum} = useCalc()

const sum1 = (x:number,y:number) => x + y
const summerize = useMemo(() => sum1,[])

    const handleClick = () => {
        setRes(res => sum(res,3))
    }
    const handlePlasivoClick = () => {
        console.log("data is now 12")
        data = 12
    }


    return (
        <>
        <div>This is the Calc component</div>
        {res}
        <div><button onClick={handleClick}>Sum</button></div>
        <div><button onClick={handlePlasivoClick}>Plasivo</button></div>
        <div><Test data={data} sum={summerize} /></div>
        </>
    )
}

export default Calc
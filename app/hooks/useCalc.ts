export const useCalc = () => {
    const x = 5
    const sum = (x:number,y:number):number => {
        return x + y
    }


    return {sum,x}
}
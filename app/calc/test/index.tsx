

import {memo} from 'react'
const Test = ({data, sum}: {data:number, sum: Function}) => {
console.log('Test is rendered')
    return (
        <div>Test Component</div>
    )
}

export default memo(Test)
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

const useCharacterBreadcrumb = () =>{

    const [params, setParams] = useSearchParams()
    const [paramsArr, setParamsArr] = useState<Record<string,string>[]>([])

    useEffect(()=>{
        const newParamsArr: Record<string,string>[] = []
        params.forEach((value,key)=>newParamsArr.push({key,value}))
        setParamsArr(newParamsArr)
    },[params])

    const deleteParam = (param:string) =>{
        params.delete(param)
        setParams(params)
    }

    return {
        paramsArr,
        deleteParam
    }

}

export default useCharacterBreadcrumb;
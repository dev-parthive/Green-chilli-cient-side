import { useEffect } from "react"

const useTitle = title =>{
    useEffect( ()=>{
        document.title = `${title}-Green_Chilli`;
    } , [title])
};

export default useTitle;
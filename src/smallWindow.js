import { useEffect, useState } from "react"

const useSmallWindowDetect = () => {
    const [isSmall , setIsSmall] = useState(false);

    useEffect(() => {
        const handlelChange = () => {
            setIsSmall(window.innerWidth < 1024)
        }

        handlelChange()

        window.addEventListener('resize' , handlelChange);

        return () => window.removeEventListener('resize' , handlelChange)
        
    } , [])

    return (isSmall)
}

export default useSmallWindowDetect
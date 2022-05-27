import {useEffect, useRef} from "react";

export const useOutBoardingClick = (cb:any) => {
    const ref = useRef<HTMLDivElement>(null)

    const handleOutsideClick = (e:any) => {
        if(!e.path.includes(ref.current)) {
            cb()
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)

        return () => {
            document.body.removeEventListener('click', handleOutsideClick)
        }
    }, []);

    return {ref}
}

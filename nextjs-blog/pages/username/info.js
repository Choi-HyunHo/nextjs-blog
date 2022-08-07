import { useRouter } from "next/router";
import { useState } from "react";

const userInfo = () => {
    const router = useRouter()

    const [clicked, setClicked] = useState(false)
    const { status = 'initial'} = router.query

    return (
        <>
            <h1>My Info</h1>
            <h1>click :  {String(clicked)}</h1>
            <h1>Status : {status} </h1>
            <button onClick={() => {
                alert('change')
                setClicked(true)
                location.replace('/username/info?status=change')
            }}>Edit : (replace)</button>
            <br></br>
            <button onClick={() => {
                alert('change')
                setClicked(true)
                router.push('/username/info?status=change')
            }}>Edit : (push)</button>
            <br></br>
            <button onClick={() => {
                alert('change')
                setClicked(true)
                router.push('/username/info?status=change', undefined, {shallow : true})
            }}>Edit : (push)</button>
        </>
    )
}

export async function getServerSideProps(){
    console.log('server')

    return {
        props : {},
    }
}

export default userInfo;
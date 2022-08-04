import Link from 'next/link'
import { useEffect, useState } from 'react'

export async function getStaticProps(){
    console.log('server')

    return {
    props : {time : new Date().toISOString()}
    }
}

export default function ssg({time}) {

    return (
        <div>
            <h1>{time}</h1>
        </div>
    )
}

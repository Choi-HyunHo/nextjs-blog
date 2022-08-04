import Link from 'next/link'
import { useEffect, useState } from 'react'

export async function getStaticProps(){
    console.log('server')

    return {
    props : {time : new Date().toISOString()},
    revalidate : 1, // 1 초
    }
}

export default function isr({time}) {

    return (
        <div>
            <h1>{time}</h1>
        </div>
    )
}

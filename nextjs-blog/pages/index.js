import Link from 'next/link'
import { useEffect, useState } from 'react'

export async function getStaticProps(){
  console.log('server')

  return {
    props : {time : new Date().toISOString()}
  }
}

export default function Home() {

  return (
    <div>
      <h1><Link href="/ssg">SSG로</Link></h1>
      <h1><Link href="/isr">ISR로</Link></h1>
    </div>
  )
}

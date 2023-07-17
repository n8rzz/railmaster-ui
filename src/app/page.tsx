import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Railmaster</h1>
      <br />
      <Link href={'/about'}>About</Link>
      <Link href={'/profile'}>Profile</Link>
    </main>
  )
}

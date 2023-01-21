"use client"

import Image from "next/image"
import { signOut } from "next-auth/react"
import Link from "next/link"

export default function Logged({ image }) {
  return (
    <li className="flex gap-8">
      <button onClick={() => signOut()}>Sign Out</button>
      <Link href={"/dashboard"}>
        <Image
          width={64}
          height={64}
          className="w-12 rounded-full"
          src={image}
          alt=""
          priority
        />
      </Link>
    </li>
  )
}
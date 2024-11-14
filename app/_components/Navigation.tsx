import Link from "next/link";
import React from "react";

// type Props = {}

export default function Navigation({}) {
  return (
    <ul>
      <li>
        <Link href="/cabins">Cabins</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/account">Account</Link>
      </li>
    </ul>
  );
}

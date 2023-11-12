// "use client";

import Image from "next/image";
import Link from "next/link";
import SiteNav from "./site-nav";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href="/">
        <Image
          src="https://placehold.jp/000000/ffffff/150x150.png?text=B&css=%7B%22border-radius%22%3A%2215px%22%7D"
          alt="logo"
          className="h-[35px] w-[35px]"
          width="50"
          height="50"
        />
      </Link>

      {/* <nav>
      <ul className="flex gap-x-5">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/posts">Posts</a>
        </li>
      </ul>
    </nav> */}
      <SiteNav />
    </header>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
        <main className="bg-purple-500">
      <ul className="flex list-none justify-between">
        <li><Link href="#">Home</Link></li>
        <li><Link href="#">Home</Link></li>
        <li><Link href="#">Home</Link></li>
        <li><Link href="#">Home</Link></li>
        <li><Link href="#">Home</Link></li>
      </ul>
    </main>
  );
}

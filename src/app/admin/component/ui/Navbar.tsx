import Link from "next/link";

export default function Home() {
    return (
        <nav className="max-w-full h-18 sm-h-16 container bg-black text-white">
        <ul className="  flex flex-wrap justify-between items-center py-4">
           <Link className={'bg-amber-50 text-black'} href={''}>
               Analytics
           </Link>
            <Link href={''}>
               Payments
            </Link>
            <Link href={''}>
               Logout
            </Link>
        </ul>
        </nav>
);
}

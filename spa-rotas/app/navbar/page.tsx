import Link from "next/link";

export default function NavBar() {
    return (
        <div className="flex flex-row items-center justify-center border-4 border-black bg-white">
            <ul className="flex flex-row items-center justify-center my-4">
                <li className="mx-4"> 
                    <Link href="/cliente"> Cliente </Link>
                </li>
                <li className="mx-4"> 
                    <Link href="/produto"> Produto </Link>
                </li>
                <li className="mx-4"> 
                    <Link href="/fornecedor"> Fornecedor </Link>
                </li>
            </ul>
        </div>
    )
}
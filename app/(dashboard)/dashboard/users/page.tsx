import React from 'react'
import Link from "next/link";

const Users = () => {
    return (
        <div>

            <h1>Dashboard Users</h1>

            <ul className="mb-3">
                <li className="mb-1">
                    <Link href="/app/(dashboard)/dashboard/users/1" className="text-blue-500 hover:underline">User 1</Link>
                </li>
                <li className="mb-1">
                    <Link href="/app/(dashboard)/dashboard/users/2" className="text-blue-500 hover:underline">User 2</Link>
                </li>
                <li className="mb-1">
                    <Link href="/app/(dashboard)/dashboard/users/3" className="text-blue-500 hover:underline">User 3</Link>
                </li>
                <li className="mb-1">
                    <Link href="/app/(dashboard)/dashboard/users/4" className="text-blue-500 hover:underline">User 4</Link>
                </li>
            </ul>

        </div>
    )
}
export default Users
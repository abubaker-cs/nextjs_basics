import React from 'react'
import Hello from "@/components/hello";

const Home = () => {

    console.log('Recorded: Home page');

    return (
        <main>
            <div className="text-5xl underline">Welcome to Next.js 16</div>
            <Hello />
        </main>
    )
}
export default Home

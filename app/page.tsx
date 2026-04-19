import React from 'react'
import Hello from "@/app/components/hello";

const Home = () => {

    console.log('Recorded: Home page');

    return (
        <main>
            <div className="text-5xl underline">Home 101 2</div>
            <Hello />
        </main>
    )
}
export default Home

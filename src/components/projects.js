import React from 'react'

export default function Projects(props) {

    return (
        <div className="flex flex-col justify-start rounded-xl p-8 object-contain max-w-md max-h-md border-2 border-black m-14">
            <img className="rounded-lg min-h-30" src={props.img} alt={props.alt} />
            <p className="font-semibold mt-3"> {props.description} </p>
            <div className="flex justify-around p-10"> <a className="bg-gray-400 rounded-lg p-3 border-2 border-black mt-4" href={props.deploy}>Deployment</a>
                <a className="bg-green-700 rounded-lg p-3 border-2 border-black mt-4" href={props.repo}>Repo</a> </div>
        </div>
    )
}

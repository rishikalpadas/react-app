import React from 'react'

const Card = ({role="developer", name="User", profile="Computer Science Student", avatar}) => {
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src={avatar}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {role}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
        </div>
        <p className="text-gray-300">
          {profile}
        </p>
      </div>
  )
}

export default Card
import React from "react";

export default function TextInput({name,id,value,type,label,inputAction,r}) {
    return(
        <>
        <div className={`${id === "name"?"sm:col-span-2":""} flex flex-col gap-1`}>
          <label htmlFor={id} className="text-xs font-semibold ml-1 mt-4">{label} {r && "*"}</label>
        <input type={type}
          name={name} 
          id={id} 
          value={value} 
          onChange={inputAction}
          className="border border-black p-2"
          required={r}
        />
        </div>
        </>
    )
 }
import React,{useEffect, useState} from 'react'
import { database } from '../firebase';

function FirebaseDB() {
    const [name,setName] = useState('');
    const [age,setAge] = useState('');

    //Create in DB
    let createUserInDB = async() => {
        let res = await database.users.add({name,age})
        // let res = await database.users.doc('11111111').set({name,age}) ///CREATE COMMAND
        console.log(res);
    }
    // Read in DB
    useEffect(async()=>{
        let uid = 'AAxJwdpr6pE771beT9PZ';

        // getting 1 particulater doc in DB
        // let data = await database.users.doc(uid).get();
        // console.log(data.data())

        //print all doc data which present in DB
        let data = await database.users.get();
        data.forEach((obj)=>console.log(obj.data()))
    })

    let update = async() => {
        let uid = 'AAxJwdpr6pE771beT9PZ';
        await database.users.doc(uid).update({ //UPDATE COMMAND
            name,age
        })
    }

    let deletee = async() => {
        let uid = 'AAxJwdpr6pE771beT9PZ';
        await database.users.doc(uid).delete()
    }

     return (
        <>
         <div>
            <label htmlFor="name">Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <label htmlFor="age">Age</label>
            <input type="number" value={age} onChange={(e)=>setAge(e.target.value)}/>
            {/* <button onClick={createUserInDB}>Create</button> */}
             <button onClick={update}>update</button>
            <button onClick={deletee}>Delete</button>
         </div>
        </>
    )
}

export default FirebaseDB

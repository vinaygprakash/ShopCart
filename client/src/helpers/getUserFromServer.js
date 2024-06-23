
// const getUserFromServer = async() =>{
//     const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/auth/user`,{
//         credentials:'include'
//     })
//     const data = await res.json()

//     return data
// }

// const res = await fetch('http://localhost:5173/api/auth/user',{
//             credentials:'include'
//         })
//         const data = await res.json()
    
//         return data
//     }

// export default getUserFromServer
async function getUserFromServer() {
    const res = await fetch('http://localhost:5173/api/auth/user', {
        credentials: 'include'
    });
    const data = await res.json();

    return data;
}

export default getUserFromServer;



export async function getTracks(){
const response = await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/')


if(!response.ok)   {
    throw new Error('Ошибка сервера')
}
   
    const data = await response.json()
    return data


}

export async function registration(email,password,username){
    const response = await fetch('https://skypro-music-api.skyeng.tech/user/signup/',
    {
        method: "POST",
        body: JSON.stringify({
          email: `${email}`,
          password: `${password}`,
          username: `${username}`,
        }),
        headers:{"content-type": "application/json",
    },
}).catch((error)=>{alert(error.message)})
    
   
        const data = await response.json()
        if (response.status===400){
            console.log('400');console.log(data)}
        return data
    }
 
    export async function login(email,password){
        const response = await fetch('https://skypro-music-api.skyeng.tech/user/login/',
        {
            method: "POST",
            body: JSON.stringify({
              email: `${email}`,
              password: `${password}`,
              
            }),
            headers:{"content-type": "application/json",
        },
    }).catch((error)=>{alert(error.message)})
        
       
            const data = await response.json()
            if (response.status===400){
                console.log('400');console.log(data)}
            return data
        }
        
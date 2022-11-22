
export const getProducts = ()=> async()=>{
    try {
        const data = await fetch("http://localhost:3001/getproducts",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                }
        });

        const res = await data.json();
        console.log(res);
        
    } catch (error) {
        console.log("error", error)
    }
}
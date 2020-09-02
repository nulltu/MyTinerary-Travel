const citiesActions ={

    getInfo: ()=>{

        return async(dispatch, getState)=>{

            const responseApi  = await fetch('http://127.0.0.1:5000/api/cities')
            const infoApi = await responseApi.json()
            const dataCity = infoApi.City

            dispatch({
                type:"GETINFO",
                payload: dataCity
            })  
        }
    }
}

export default citiesActions
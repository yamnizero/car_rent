

export async function fetchCars(){
    const  headers = {
        
            'x-rapidapi-key': '67aa25d75dmsh81624a3fb50975fp1c273ajsn6348cc202eee',
            'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
      
    }
    
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
        headers:headers,
    });

    const  result = await response.json();

    return result;
}
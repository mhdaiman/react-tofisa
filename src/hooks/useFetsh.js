import { useEffect , useState } from 'react';

const useFetch = (url) => {
    const [ data, setData ] = useState(null);
    const [ error, setError ] = useState(true);
    const [ isPending, setPending ] = useState(true);
    useEffect(() => {
        setTimeout(()=>{
            fetch(url)
            .then( res => {
                    if( !res.ok ){
                        throw Error ("could not fetsh the data for that resourse");
                    }
                    return res.json()
            }).then( data => {
                console.log(data)
                setData(data)
                setPending(false)
            })
            .catch(err =>{
                setError(err.message)
            })
            },1000)
        },[url]);

        return{ data , error , isPending };
}

export default useFetch;
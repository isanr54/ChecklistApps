import react , {useState,useEffect} from 'react'

const Hooks = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Title Change : ${count}`;
        return () => {
            document.title = 'React JS Hello World'
        }
    }, [])

    return(
        <div className="p-hooks">
            <p>Nilai saya adalah : {count}</p>
            <button onClick={() => setCount(count+1)}>Update Nilai</button>
        </div>
    )
}

export default Hooks;
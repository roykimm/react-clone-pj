import {useState, useEffect} from 'react'

// 재사용 가능한 로직은 use 로 시작하는 function 을 만든다.
const useFetch = (callback, url) => {    // 커스텀 훅은 use로 시작!

    const [loading, setLoading] = useState(false);

    const fetchInitialData = async () => {
        setLoading(true);
        const response = await fetch(url);
        const initialData = await response.json();
        callback(initialData);
        setLoading(false);
    }

    useEffect(() => {
        fetchInitialData();
    },[])   // 로딩타이밍에 한번만 실행됨


    return loading;
}

export default useFetch;
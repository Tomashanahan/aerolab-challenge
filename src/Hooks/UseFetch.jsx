import {useState, useEffect} from "react";

function useFetch(url) {
  const [respons, setRespons] = useState([]);

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: new Headers({
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU4NDA0YjRkYzhhODAwMWE4N2E1YTgiLCJpYXQiOjE2NDk5NTA3OTV9.EZqjg65FEIKnsRah2WhNJ1vNHKrvO3a8puXb4O3K8h0",
      }),
    })
      .then((res) => res.json())
      .then((data) => setRespons(data))
      .catch((e) => console.log(e));
  }, [url]);

  return respons;
}

export default useFetch;

// try{
//     const res = await fetch( url,
//       {
//         method : 'GET',
//         headers: new Headers({
//           'Authorization' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU4NDA0YjRkYzhhODAwMWE4N2E1YTgiLCJpYXQiOjE2NDk5NTA3OTV9.EZqjg65FEIKnsRah2WhNJ1vNHKrvO3a8puXb4O3K8h0'
//         }),
//       }
//     )
//     const data = await res.json()
//     setRespons(data)
// }
// catch (e){
//   console.log(e);
// }

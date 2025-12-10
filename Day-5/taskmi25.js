let arr=[10,20,30]
let [a,b,c]=arr;
console.log(a)
console.log(b)
console.log(c)

console.log("Process 1")
setTimeout(()=>
{
    console.log("Process 2")
    setTimeout(()=>
    {
        console.log("Process 3")
    },2000)
},2000);

// Try to fetch posts (works in Node >=18). If `fetch` is unavailable,
// print a helpful message so the script doesn't crash.
if (typeof fetch === 'function') {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        console.log("Fetched posts count:", data.length)
        // console.log(data) // uncomment to inspect the returned posts
    })
    .catch(err => console.error("Fetch error:", err))
} else {
    console.error("`fetch` is not available in this Node environment. Use Node >=18 or install a fetch polyfill (e.g. `npm install node-fetch`).")
}

let fetch_API=async()=>
{
    const res=await fetch("https://jsonplaceholder.typicode.com/posts");
    const data=await res.json();
    console.log("Fetched posts count (async/await):", data.length)
   
}
fetch_API();
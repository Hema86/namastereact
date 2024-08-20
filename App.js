const heading = React.createElement("h1", {}, "Hello world from React")
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(heading)
console.log(root)
root.render(heading)
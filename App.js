const heading = React.createElement("h1", {
    id:"myH1",
    className:"gen",
    style:{backgroundColor:"red"}
}, "Hello Everyone from React.");

const heading2 = React.createElement("h2",{
    id:"myH2"
},"This is heading 2");

const div = React.createElement("div", {
    id:"container"
}, [heading,heading2]); //pass the child items as array

//console.log(heading);
//console.log(heading.ref, "   ", heading.key);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div); //instead of heading now we will place the div here
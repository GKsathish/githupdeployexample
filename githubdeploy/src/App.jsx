import Posts from "./Components/Posts/Posts";
import Navbar from "./Components/BlogNav/Navbar";
import "./App.css";
 

 
const App = () => {
    return (
        <div className="main-container" style={{backgroundColor: "aliceblue"}}>
            <Navbar />
            <Posts />
        </div>
    );
};
 
export default App;
import {BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom"
import AquamanComp from "./components/aquaman.component"
import BatmanComp from "./components/batman.component"
import HomeComp from "./components/home.component"
import NotFoundComp from "./components/notFound.component"
import SupermanComp from "./components/superman.component"
import WonderWomenComp from "./components/wonderwomen.component"
import "./myroutes.css";

function App() {
    return (
        <div>
            <h1>React Routing</h1>
            <BrowserRouter>
                {/* <ul>
                    <li><Link to="/">Home Component</Link></li>
                    <li><Link to="aquaman">Aquaman Component</Link></li>
                    <li><Link to="batman">Batman Component</Link></li>
                    <li><Link to="superman">Superman Component</Link></li>
                    <li><Link to="wonderwomen">Wonder Woman Component</Link></li>
                    <li><Link to="flash">Flash Component</Link></li>
                    <li><Link to="himani">Himani Component</Link></li>
                </ul> */}
                <ul>
                    <li><NavLink className={({isActive})=> isActive ? 'box' : ''} to="/">Home Component</NavLink></li>
                    <li><NavLink className={({isActive})=> isActive ? 'box' : ''} to="aquaman">Aquaman Component</NavLink></li>
                    <li><NavLink className={({isActive})=> isActive ? 'box' : ''} to="batman">Batman Component</NavLink></li>
                    <li><NavLink className={({isActive})=> isActive ? 'box' : ''} to="superman">Superman Component</NavLink></li>
                    <li><NavLink className={({isActive})=> isActive ? 'box' : ''} to="wonderwomen">Wonder Woman Component</NavLink></li>
                    <li><NavLink className={({isActive})=> isActive ? 'box' : ''} to="flash">Flash Component</NavLink></li>
                    <li><NavLink className={({isActive})=> isActive ? 'box' : ''} to="himani">Himani Component</NavLink></li>
                </ul>
                <Routes>
                    <Route path="" element={<HomeComp/>}/>
                    <Route path="batman" element={<BatmanComp/>}/>
                    <Route path="aquaman" element={<AquamanComp/>}/>
                    <Route path="superman" element={<SupermanComp/>}/>
                    <Route path="wonderWomen" element={<WonderWomenComp/>}/>
                    <Route path="flash" element={<BatmanComp/>}/>
                    <Route path="*" element={<NotFoundComp/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App

//npm i react-router-dom
// Browser Router
  //Routes
import React, { Suspense, useState } from "react"
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom"
// import AquamanComp from "./components/aquaman.component"
// import BatmanComp from "./components/batman.component"
// import BatMovie1Comp from "./components/batmovie1.component"
// import BatMovie2Comp from "./components/batmovie2.component"
// import BatMovie3Comp from "./components/batmovie3.component"
import HomeComp from "./components/home.component"
// import NotFoundComp from "./components/notFound.component"
// import SupermanComp from "./components/superman.component"
// import WonderWomenComp from "./components/wonderwomen.component"
import "./myroutes.css";

// let HomeComp = React.lazy( ()=> import('./components/home.component')) 
let AquamanComp = React.lazy( () => import('./components/aquaman.component'));
let BatmanComp = React.lazy( ()=> import('./components/batman.component')) ;
let BatMovie1Comp = React.lazy( ()=> import('./components/batmovie1.component')) ;
let BatMovie2Comp = React.lazy( ()=> import('./components/batmovie2.component')) ;
let BatMovie3Comp = React.lazy( ()=> import('./components/batmovie3.component')) ;
let NotFoundComp = React.lazy( ()=> import('./components/notFound.component')) ;
let SupermanComp = React.lazy( ()=> import('./components/superman.component')) ;
let WonderWomenComp = React.lazy( ()=> import('./components/wonderwomen.component'));

function App() {
    let[quantity, setQuantity] = useState(0)
    let activeFun1 = ({isActive})=> isActive ? 'box' : 'plainBox';
    let activeFun2 = ({isActive})=> {
      return {
        width: "200px",
        display: "inline-block",
        backgroundColor: isActive ? "crimson" : "darkorange",
        color:  "papayawhip",
        textAlign: "center",
        padding: "5px",
      }
    };
    return (
        <div>
            <h1>React Routing</h1>
            <label htmlFor="qty"> Quantity for wonder women </label>
                <input type="range" id="qty" value={quantity} onChange={(evt)=>setQuantity(evt.target.value)}/>
                <b>{quantity}</b>
            
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
                    <li><NavLink end className={activeFun1} to="/">Home Component</NavLink></li>
                    <li><NavLink style={ activeFun2 } to="/batman">Batman Component</NavLink></li>
                    <li><NavLink className={ activeFun1 } to="/batman/movie1">Batman  movie1 Component</NavLink></li>
                    <li><NavLink className={ activeFun1 } to="/batman/movie2">Batman  movie2 Component</NavLink></li>
                    <li><NavLink className={ activeFun1 } to="/batman/movie3">Batman  movie3 Component</NavLink></li>
                    {/* <li><NavLink className={({isActive})=> isActive ? 'box' : 'plainBox'} to="/" end>Home Component</NavLink></li>
                    <li><NavLink className={({isActive})=> isActive ? 'box' : 'plainBox'} to="batman">Batman Component</NavLink></li> */}
                    <li><NavLink className={({isActive})=> isActive ? 'box' : 'plainBox'} to="aquaman">Aquaman Component</NavLink></li>
                    <li><NavLink className={({isActive})=> isActive ? 'box' : 'plainBox'} to="superman">Superman Component</NavLink></li>
                    <li><NavLink className={({isActive})=> isActive ? 'box' : 'plainBox'} to="wonderwomen">Wonder Woman Component</NavLink></li>
                    <li><NavLink className={({isActive})=> isActive ? 'box' : 'plainBox'} to={"wonderwomen/"+quantity}>Wonder Woman Component with params</NavLink></li>
                    <li><NavLink className={({isActive})=> isActive ? 'box' : 'plainBox'} to="flash">Flash Component</NavLink></li>
                    <li><NavLink className={({isActive})=> isActive ? 'box' : 'plainBox'} to="himani">Himani Component</NavLink></li>
                </ul>
                <Routes>
                    <Route path="" element={<HomeComp/>}/>
                    <Route path="batman" element={<Suspense  fallback={<>loading...</>}><BatmanComp/></Suspense>}>
                        <Route path="/batman/movie1" element={<Suspense fallback={<>loading...</>}><BatMovie1Comp/></Suspense>}></Route>
                        <Route path="/batman/movie2" element={<Suspense fallback={<>loading...</>}><BatMovie2Comp/></Suspense>}></Route>
                        <Route path="/batman/movie3" element={<Suspense fallback={<>loading...</>}><BatMovie3Comp/></Suspense>}></Route>
                    </Route>
                    <Route path="aquaman" element={<Suspense fallback={<>loading...</>}><AquamanComp/></Suspense>}/>
                    <Route path="superman" element={<Suspense fallback={<>loading...</>}><SupermanComp/></Suspense>}/>
                    <Route path="wonderWomen" element={<Suspense fallback={<>loading...</>}><WonderWomenComp/></Suspense>}/>
                    <Route path="wonderWomen/:qty" element={<Suspense fallback={<>loading...</>}><WonderWomenComp/></Suspense>}/>
                    <Route path="flash" element={<Suspense fallback={<>loading...</>}><BatmanComp/></Suspense>}/>
                    <Route path="*" element={<Suspense fallback={<>loading...</>}><NotFoundComp/></Suspense>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App

//npm i react-router-dom
// Browser Router
  //Routes
import data from "./data.json";
import {BrowserRouter, NavLink, Routes, Route} from "react-router-dom";
import HeroComp from "./components/hero";

function App(){
    return <div>
        <h1>Hero List</h1>
       <BrowserRouter>
            {
                data.heroes.map((value,idx)=>{
                    return <ul>
                        <li style={{listStyle:"none"}}>
                            <NavLink to={"/hero/"+value.id}>{value.name}</NavLink>
                            
                        </li>
                    </ul>
                })
            }
            <Routes>
                <Route path="/hero/:hid" element={<HeroComp/>}></Route>
            </Routes>
       </BrowserRouter>
    </div>
}
export default App
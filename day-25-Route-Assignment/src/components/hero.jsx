import { useParams } from "react-router-dom"
import data from "../data.json"

function HeroComp(){
    let params = useParams();
    let hid = params.hid
    return <div>
        <h1>Hero Details</h1>
        {data.heroes.map((value)=>{
                if(hid===value.id){
                return <div>
                    <ul>
                        <li>Name : {value.name}</li>
                        <li>Intelligence : {value.powerstats.intelligence}</li>
                        <li>Speed : {value.powerstats.speed}</li>
                        <li>Gender : {value.appearance.gender}</li>
                    </ul>
                </div>
                }
            })
        }
    </div>
}

export default HeroComp
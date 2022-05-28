import { Link } from "react-router-dom"
import './error.css'
export default function Error(){
    return(
        <div >
            <h1>Not found</h1>

            
                <Link className="error" to="/"> Veja todos os filmes</Link>
         
        </div>
    )
}
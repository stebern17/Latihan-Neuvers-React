import Logo from './../assets/logoneuvers.png'
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <>
        <header>
            <div className="container flex py-5 justify-between">
                <Link to="/">
                <img src={Logo}></img>
                </Link>
                
                <ul className='flex gap-10 font-semibold'>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/Prices"><li>Prices</li></Link>
                    <Link to="/About"><li>About</li></Link>
                </ul>
            </div>
        </header>
        </>
        
    )
}
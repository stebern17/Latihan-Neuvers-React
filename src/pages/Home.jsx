import Hero from './../assets/hero-image.png'
import Button from '../Components/Button'
import BBS from './../assets/bbs.svg'
import BA from './../assets/british_airways.svg'
import Lenovo from './../assets/Lenovo.svg'
import Lufthansa from './../assets/Lufthansa.svg'
import Varta from './../assets/varta.svg'
import Weller from './../assets/weller.svg'
export default function Home() {
    return(
        <>
        <div className="container mt-14 flex-grow">
            <div className="grid grid-cols-2 gap-5">
                <div>
                    <h1 className="text-5xl font-bold">Landing page for your online service</h1>
                    <p className="my-10 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maxime culpa maiores neque eligendi explicabo debitis provident eius doloremque magni?</p>
                    <Button/>

                </div>
                <div>
                    <img src={Hero} alt="Hero-Image" />
                </div>
            </div>
            <div className='flex justify-between mt-20'>
                <img src={BBS} alt="" />
                <img src={BA} alt="" />
                <img src={Lenovo} alt="" />
                <img src={Lufthansa} alt="" />
                <img src={Varta} alt="" />
                <img src={Weller}alt="" />
                
            </div>
        </div>
        </>
    )
}
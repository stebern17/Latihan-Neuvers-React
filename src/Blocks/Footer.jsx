import Logo from './../assets/logoneuvers.png'
import Twitter from './../assets/Twitter.png'
import Facebook from './../assets/Facebook.png'
export default function Footer(){
    return(
        <>
        <section>
            <div className="container">
                <div className="flex justify-between border-t-2 pt-5 pb-2">
                    <img src={Logo} className='max-h-[20px]'>
                    </img>
                    <div>
                        <ul className='flex justify-center gap-5'>
                            <li>Home</li>
                            <li>Prices</li>
                            <li>About</li>
                        </ul>
                        <p className='text-gray-500'>Copyright © 2021 Amiso. All rights reserved.</p>
                    </div>
                    <div className='flex gap-5'>
                        <img src={Twitter} className='max-h-[20px]'>
                        </img>
                        <img src={Facebook} className='max-h-[20px]'>
                        </img>

                    </div>
                </div>

            </div>
        </section>
        </>
    )
}
import PriceButton from "./../Components/PriceButton.jsx";
import CheckCircle from "./../assets/checkcircle.svg";

export default function PricesCard() {
    return (
        <>
        <section className="flex-grow">
            <div className="container">
                <h1 className="text-center text-4xl font-semibold">Lets Start Together</h1>
                <div className="grid grid-cols-3 place-items-center mt-5">
                    <div className="border-2 border-gray-400 rounded-3xl max-w-[20vw] p-10 h-[100%]">
                        <div className="flex gap-3">
                            <h2 className="text-4xl font-bold text-[#059669]">$19</h2>
                            <p className="pt-3 text-gray-500">/month</p>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-3xl font-semibold text-[#059669]">Starter</h3>
                            <p className="mt-4 text-gray-600">Unleash the power of 
                            automation.</p>
                        </div>
                        <div className="mt-5">
                            <ul>
                                <li className="flex gap-1"><img src={CheckCircle} alt="" />Multi-step Zap</li>
                                <li className="flex gap-1"><img src={CheckCircle} alt="" />3 Premium Apps</li>
                                <li className="flex gap-1"><img src={CheckCircle} alt="" />2 User Team </li>
                            </ul>
                            <div className="flex justify-center mt-10">
                            <PriceButton/>
                            </div>
                            
                        </div>
                    </div>
                    <div className="border-2 border-gray-400 rounded-3xl max-w-[20vw] p-10 h-[100%]">
                        <div className="flex gap-3">
                            <h2 className="text-4xl font-bold text-[#059669]">$54</h2>
                            <p className="pt-3 text-gray-500">/month</p>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-3xl font-semibold text-[#059669]">Starter</h3>
                            <p className="mt-4 text-gray-600">Unleash the power of 
                            automation.</p>
                        </div>
                        <div className="mt-5">
                            <ul>
                                <li className="flex gap-1"><img src={CheckCircle} alt="" />Multi-step Zap</li>
                                <li className="flex gap-1"><img src={CheckCircle} alt="" />Unlimited Premium</li>
                                <li className="flex gap-1"><img src={CheckCircle} alt="" />50 User Team </li>
                                <li className="flex gap-1"><img src={CheckCircle} alt="" />Shared Workspace </li>
                            </ul>
                            <div className="flex justify-center mt-10">
                            <PriceButton/>
                            </div>
                            
                        </div>
                    </div>
                    <div className="border-2 border-gray-400 rounded-3xl max-w-[20vw] p-10 h-[100%]">
                        <div className="flex gap-3">
                            <h2 className="text-4xl font-bold text-[#059669]">$89</h2>
                            <p className="pt-3 text-gray-500">/month</p>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-3xl font-semibold text-[#059669]">Starter</h3>
                            <p className="mt-4 text-gray-600">Unleash the power of 
                            automation.</p>
                        </div>
                        <div className="mt-5">
                            <ul>
                                <li className="flex gap-1"><img src={CheckCircle} alt="" />Multi-step Zap</li>
                                <li className="flex gap-1"><img src={CheckCircle} alt="" />Unlimited Premium Apps</li>
                                <li className="flex gap-1"><img src={CheckCircle} alt="" />Unlimited User Team </li>
                                <li className="flex gap-1"><img src={CheckCircle} alt="" />Advance Admin </li>
                                <li className="flex gap-1"><img src={CheckCircle} alt="" />Custom Data Retetion </li>
                                
                            </ul>
                            <div className="flex justify-center mt-10">
                            <PriceButton/>
                            </div>
                            
                        </div>
                    </div>
                </div>
                    
            </div>
        </section>
        </>
    )
}
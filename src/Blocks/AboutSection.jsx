import HeroImage from './../assets/hero-image.png';

export default function AboutSection() {
    return(
        <>
        <section className="flex-grow">
            <div className="container mt-5">
                <h1 className="font-bold text-4xl text-center">About Us</h1>
                <div className="grid grid-cols-2 mt-10">
                    <div>
                        <p>At this company, we're committed to delivering the best in [product/service]. With a focus on innovation and dedication, we have a vision for making a positive impact.</p>
                        <div className="mt-5">
                            <p> 
                                Our Mission:
                            </p>
                            <ul className="list-disc">
                                <li>Best Quality: We always strive for top-notch quality.</li>
                                <li>Innovation: We're constantly seeking new ways to improve.</li>
                                <li>Expert Team: Our team is skilled and dedicated.</li>
                                <li>Your Community: We listen to our customers.</li>
                            </ul>
                        </div>
                    </div>
                    <img src={HeroImage} alt="" />

                </div>
            </div>
        </section>
        </>
    )
}
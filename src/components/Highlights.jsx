import { useGSAP } from "@gsap/react"
import { gsap } from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";






const Highlights = () => {
    useGSAP(()=>{
        gsap.to('#title', {opacity:1, y:0});
        gsap.to('#link', {  opacity:1,  y: 0, duration: 1, stagger: 0.25 });

    }, []);


  return (
    <section id="highlights" className="w-screen overflow-hidden h-full sm:py-32 py-20 sm:px-10 px-5 bg-zinc">
        <div className="screen-max-width">


            <div className="mb-12 w-full  md:flex items-end justify-between">

                <h1 id="title" className=" text-gray lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-bold opacity-0 translate-y-20">Get the Highlights.</h1>
                <div className="flex flex-wrap item-end gap-5">
                    <p id="link" className="text-blue hover:underline cursor-pointer font-thin flex items-center text-xl opacity-0 translate-y-20">Watch the film  <img src={watchImg} alt="watch" className="ml-2" /></p>
                    <p  id="link" className="text-blue hover:underline cursor-pointer font-thin flex items-center text-xl opacity-0 translate-y-20">Watch the event  <img src={rightImg} alt="right" className="ml-2" /></p>

                </div>
            </div>

            <VideoCarousel />

        </div>

    </section>
  )
}

export default Highlights
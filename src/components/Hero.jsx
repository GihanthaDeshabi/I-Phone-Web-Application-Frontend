import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";






const Hero = () => {
   
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo )

    const handleVideoSrcSet = ()=>{
        if(window.innerWidth < 760)
        {
            setVideoSrc(smallHeroVideo);
        }
        else
        {
            setVideoSrc(heroVideo);
        }
    }

    useEffect(()=>{
        window.addEventListener('resize', handleVideoSrcSet);
        return()=>{
            window.removeEventListener('resize', handleVideoSrcSet);
        }

    }, [])





    useGSAP(()=> {
        gsap.to('#hero', { opacity:1, delay:2 });
        gsap.to('#cta', {opacity:1, y:-50, delay:2});
    }, [])


  return (
    <section className="w-full nav-height bg-black relative" >
        <div className="h-5/6 w-full flex items-center justify-center flex-col " >
        <p id='hero' className="text-center font-sanstext-3xl text-gray-100 opacity-0" >iPhone 15 Pro</p>

        <div className="md:w-10/12 w-9/12 " >

        <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}  >
            <source src={videoSrc} type="video/mp4" />

        </video>
        </div>
 </div>

       <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20 " >
        <a href="#highlights"  className="px-5 py-2 font-thin rounded-3xl bg-blue my-5 hover:bg-transparent border border-transparent hover:border-blue hover:text-blue;" > Buy </a>
        <p className="font-thin text-xl ">From $200/month or $1099</p>

       </div>

    </section>
  )
}

export default Hero

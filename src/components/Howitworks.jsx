import { useGSAP } from "@gsap/react"
import { chipImg, frameImg, frameVideo } from "../utils"
import gsap from "gsap";
import { useRef } from "react";
import { animateWithGsap } from "../utils/animations";
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);







const Howitworks = () => {

    const videoRef = useRef();

    useGSAP(()=> {
        gsap.from('#chip', { ScrollTrigger: { trigger: '#chip', start: '20% bottom'}, opacity: 1, scale: 2, duration: 2, ease: 'power2.inOut'});

        animateWithGsap('#g-fadeIn', { opacity: 1, y:0, duration: 2, ease: 'power2.inOut'});

    },[]);


  return (
    <section className="sm:py-32 py-20 sm:px-10 px-5">
        <div className="screen-max-width">
            <div id="chip" className="flex-center w-full my-20 ">
                <img src={chipImg} alt="chip" width={180} height={180} />
            </div>

            <div className="flex flex-col items-center ">
                <h2 id="hiw-title" className="text-4xl md:text-7xl font-mono text-center"> A17 Pro chip. <br /> A monster win for gaming.</h2>

                <p id="hiw-subsitile" className="text-gray font-thin text-xl md:text-2xl py-10 text-center ">It's here. The biggest redesign in the history of Apple GPUs. </p>

            </div>

            <div className="mt-10 md:mt-20 mb-14 ">
                <div className="relative h-full flex-center ">
                    <div className="overflow-hidden">
                        <img src={frameImg} alt="frame " className="bg-transparent relative z-10" />
                        </div>

                        <div id="hiw-video" className="absolute w-[95%] h-[90%] rounded-[56px] overflow-hidden">
                            <video className="pointer-events-none" playsInline preload="none" muted autoPlay  ref={videoRef}> 
                                <source src={frameVideo} type="video/mp4" />
                            </video>
                        </div>
                </div>

                <p className="text-gray font-semibold text-center mt-3">Honkai: Star Rail</p>

            </div>

            <div id="hiw-text-container" className="flex md:flex-row flex-col justify-between items-start gap-24">
                <div className="flex flex-1 justify-center flex-col">
                  <p id="g-fadeIn" className="text-gray text-xl font-thin md:font-thin opacity-0 translate-y-[100px]">
                    A17 Pro is an entirely new class of iPhone chip that delivers our {' '}
                    <span className="text-white font-mono">
                      best graphic performance by far
                    </span>.
                  </p>

                  <p id="g-fadeIn" className="text-gray text-xl font-thin md:font-thin opacity-0 translate-y-[100px]">
                   Mobile {' '}
                    <span className="text-white font-mono">
                      games will look and feel so immersive
                    </span>,
                     with incredibly detailed environments and characters.
                  </p>
                </div>
                

                <div className="flex-1 flex justify-center flex-col opacity-0 translate-y-[100px]" id="g-fadeIn" >
                <p id="hiw-text" className="text-gray text-xl font-normal md:font-sans">New</p>
                <p id="hiw-bigtext" className="text-white text-3xl md:text-5xl font-normal md:font-mono my-2" >Pro-class GPU</p>
                <p id="hiw-text" className="text-gray text-xl font-normal md:font-sans">with 6 cores</p>
              </div>

            
              </div>
        </div>
    </section>
  )
}

export default Howitworks
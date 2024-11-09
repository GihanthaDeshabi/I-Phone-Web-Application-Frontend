import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React, { useRef } from 'react'
import { animateWithGsap } from './../utils/animations';
import { explore1Img, explore2Img, exploreVideo } from '../utils';






const Features = () => {
    const videoRef = useRef();

    useGSAP(()=> {
        gsap.to('#exploreVideo', { scrollTrigger: { trigger: '#exploreVideo', toggleActions: ' play pause reverse restart ', start: '-10% bottom'}, onComplete: ()=> { videoRef.current.play() } });
          animateWithGsap('#features-title', {y: 0, opacity: 1});
          animateWithGsap('#g-grow', {scale: 1, opacity: 1, ease: 'power1'}, {scrub: 5.5});
          animateWithGsap('#g-text', { y: 0, opacity: 1, ease: 'power2.inOut', duration: 1});

    },[]);



  return (
    <section className="h-full sm:py-32 py-20 sm:px-10 px-5 bg-zinc relative overflow-hidden">
        <div className="screen-max-width">
            <div className="mb-12 w-full ">
                <h1 id="features-title" className="text-gray lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-bold opacity-0 translate-y-20" >  Explore the full story. </h1>

            </div>


            <div className="flex flex-col justify-center items-center overflow-hidden">
                <div className="mt-32 mb-24 pl-24">
                    <h2 className="text-5xl  lg:text-7xl font-mono"> i Phone</h2>

                    <h2 className="text-5xl  lg:text-7xl font-mono"> Forged in titanium.</h2>   
                </div>

                <div className="flex items-center justify-center flex-col sm:px-10">
                    <div className="relative h-[50vh] w-full flex items-center">
                        <video playsInline id="exploreVideo " className="w-full h-full object-cover object-center" preload='none' muted autoPlay ref={videoRef} > 
                            <source src={exploreVideo}  type='video/mp4' id="exploreVideo" />
                        </video>
                    </div>

                    <div className="flex flex-col w-full relative">
                        <div className="w-full flex flex-col md:flex-row gap-5 items-center">
                            <div className="overflow-hidden flex-1 h-[50vh] ">
                                <img src={explore1Img} alt="titanium" className="w-full h-full object-cover object-center scale-150 opacity-0" id="g-grow"/>
                            </div>
                            <div className="overflow-hidden flex-1 h-[50vh] " >
                                <img src={explore2Img} alt="titanium 2" className="w-full h-full object-cover object-center scale-150 opacity-0" id="g-grow"  />
                            </div>

                        </div>

                        <div className='w-full flex-center flex-col md:flex-row mt-10 md:mt-16 gap-5'>
                            <div className="flex-1 flex items-center justify-center">
                                <p className= "text-gray max-w-md text-lg md:text-xl font-thin opacity-0 translate-y-[100px]" id="g-text"> iPhone 15 Pro is {' '}
                                    <span className="text-white font-thint"> the first iPhone to feature an aerospace-grade titanium design </span>,using the same alloy that spacecrafts use for missions to Mars.
                                </p>
                            </div>

                            <div className="flex-1 flex items-center justify-center" >
                                <p className=" text-gray max-w-md text-lg md:text-xl font-thin opacity-0 translate-y-[100px]" id="g-text"> Titanium has one of the best strength-to-weight ratios of any metal, making these our {' '}
                                    <span className="text-white font-thin"> lightest Pro models ever. </span> You'll notice the difference the moment you pick one up.
                                </p>
                            </div>



                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>
  )
}

export default Features
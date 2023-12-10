"use client";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function Page() {
	const scrollMInnerRef = useRef(null);
	const contentSectionRef = useRef(null);

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		let ctxt = gsap.context(() => {
			gsap.to("#innerItem", {
				scrollTrigger: {
					scrub: true,
					// trigger: scrollParent.current,
				},
				y: 800,
				zoom: 1.2,
			});
			gsap.to("#textbro", {
				scrollTrigger: {
					scrub: true,
				},
				y: 300,
				zIndex: -20,
			});
			gsap.to("#project1", {
				scrollTrigger: {
					scrub: true,
				},
				y: -800,
			});
			gsap.to("#project2", {
				scrollTrigger: {
					scrub: true,
				},
				y: -800,
			});
			gsap.to(scrollMInnerRef.current, {
				yPercent: 100,
				ease: "sine.inOut",
				repeat: -1,
				duration: 1.5,
			});
		});
		return () => ctxt.revert();
	}, []);

	return (
		<ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
			<div
				id="outerItem"
				className="h-screen w-full bg-red-200 overflow-hidden z-20"
			>
				<div id="innerItem" className="h-screen w-full bg-white z-20">
					<video
						muted
						loop
						style={{ width: "100%", height: "100%" }}
						className="object-cover"
					>
						<source src="/MessingWithYourHead3DShowcase.mp4" />
					</video>
				</div>
				<div className="absolute h-fit w-full text-white flex justify-between bottom-0 z-30 mb-2 mix-blend-difference">
					<h1 className="text-[1rem] font-bold font-ur flex flex-row leading-tight ">
						<div className="relative flex-1 box-border w-1 overflow-hidden block">
							<span
								ref={scrollMInnerRef}
								className="absolute h-[100px] w-10 bg-white"
							></span>
						</div>
						FIND OUT MORE
					</h1>
					<h1 className="font-bold font-ur text-[1rem] leading-tight ">HIRE US</h1>
				</div>
			</div>
			<div
				ref={contentSectionRef}
				className="h-[200vh] w-full -z-10 relative overflow-hidden"
			>
				<div id="textbro" className="-translate-y-[300px]">
					<p className="font-ur text-2xl text-center">ABOUT FRAME</p>
					<h1 className="font-bold text-[10em] text-white  -z-10 font-ur text-center">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</h1>
				</div>

				<div
					id="project1"
					className="h-[200px] w-[360px] mx-auto block left-0 right-0 top-[45%] bg-red-600 absolute"
				></div>
				<div
					id="project2"
					className="h-[200px] w-[360px] mx-auto block left-0 right-0 top-[75%] bg-red-600 absolute"
				></div>
			</div>
		</ReactLenis>
	);
}

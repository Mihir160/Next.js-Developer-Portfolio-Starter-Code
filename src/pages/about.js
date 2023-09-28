import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/mihir.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skill from "@/components/Skill";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springvalue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springvalue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springvalue, value]);
  return <span ref={ref}></span>;
};
const about = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <TransitionEffect></TransitionEffect>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl !text-6xl sm:!text-5xl xs:!text-3xl sm:mb-8"
          ></AnimatedText>
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I am Mihir, a web developer passionate about creating
                beautiful, functional, and user-centered digital experiences
                with 1 year of experience in the field. I am always looking for
                new and innovative ways to bring my clients visions to life.
              </p>
              <p className="my-4 font-medium">
                I believe that design is about more than just making things look
                pretty – it is about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium">
                I focus on achieving my goals along with trying to seek out ways
                in which to develop my skills and learn new things. I am
                friendly, a good thinker, and flexible to work on any shift. I
                can work for extended hours without any breaks, and I also
                believe in teamwork and a strong work ethic. In my spare time, I
                read books, and I love to travel. Although I don’t get to travel
                much, I relish each moment I get to. I am generally pleased with
                my life.
              </p>
            </div>
            <div
              className="col-span-3 relative h-max
            rounded-2xl border-2 border-solid border-dark bg-light p-8
             dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div
                className="absolute top-0 -right-3 -z-10
                w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light"
              />
              <Image
                alt="mihir"
                src={profilePic}
                className="w-full h-auto rounded-2xl"
                property
                sizes="(max-width: 768px) 100vw, (max-width:120px) 50vw, 33vw"
              ></Image>
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3 ">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span
                  className="inline-block text-7xl
                 font-bold md:text-6xl sm:text-5xl xl:text-4xl"
                >
                  0
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Satisfied Clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span
                  className="inline-block text-7xl
                 font-bold md:text-6xl sm:text-5xl xl:text-4xl"
                >
                  <AnimatedNumber value={5} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xl:text-4xl">
                  1
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  year of experience
                </h2>
              </div>
            </div>
          </div>
          <Skill></Skill>
          <Experience></Experience>
          <Education></Education>
        </Layout>
      </main>
    </>
  );
};

export default about;

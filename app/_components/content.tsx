"use client"

import { BackgroundGradient } from "./background-gradient";
import { VisionMission } from "./vision-mission";
import { Faculties } from "./faculties";
import { Service } from "./service";
import Contact from "./contact";
import { Information } from "./information";
import { About } from "./about";
import { HeroSection } from "./hero-section";
import { News } from "./news";

export default function Content() {
    return (
        <main>
            <BackgroundGradient />
            <HeroSection />
            <About />
            <VisionMission />
            <Faculties />
            <Service />
            <News />
            <Information />
            <Contact />
        </main>
    )
}
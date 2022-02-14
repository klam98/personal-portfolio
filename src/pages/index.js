import Achievements from "../components/Achievements/Achievements";
import BgAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import Education from "../components/Education/Education";
import Employment from "../components/Employment/Employment";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
    return (
        <Layout>
            <Section grid id="home">
                <Hero />
                <BgAnimation />
            </Section>
            <Education />
            <Employment />
            <Technologies />
            <Projects />
            <Timeline />
        </Layout>
    );
};

export default Home;

import { BentoGrid, BentoGridItem } from "@/components/lightswind/bento-grid";
import { GlowingCards, GlowingCard } from "@/components/lightswind/glowing-cards";
import { Globe } from "@/components/lightswind/globe";
import { AuroraBackground } from "@/components/lightswind/aurora-background";
import { bentoGridItems, glowingCardsItems } from "@/lib/blocks-data";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Blocks = () => {
    return (
        <>
            <Helmet>
                <title>Advanced Blocks - Lightswind</title>
                <meta name="description" content="A showcase of advanced, interactive, and visually stunning UI blocks built with Lightswind and Tailwind CSS." />
            </Helmet>
            <div className="w-full min-h-screen bg-black text-white">
                <AuroraBackground>
                    <motion.div
                        initial={{ opacity: 0.0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="relative flex flex-col gap-4 items-center justify-center px-4 h-screen"
                    >
                        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
                            Advanced UI Blocks
                        </div>
                        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 text-center">
                            Modern. Interactive. Beautiful.
                        </div>
                    </motion.div>
                </AuroraBackground>

                <div className="container mx-auto px-4 py-20">
                    <section id="bento-grid" className="mb-20">
                        <h2 className="text-4xl font-bold text-center mb-12">Dynamic Bento Grid</h2>
                        <BentoGrid className="max-w-4xl mx-auto">
                            {bentoGridItems.map((item) => (
                                <BentoGridItem
                                    key={item.id}
                                    title={item.title}
                                    description={item.description}
                                    className={item.className}
                                    icon={<item.icon className="h-4 w-4 text-neutral-500" />}
                                    background={
                                        <img
                                            src={item.background}
                                            alt={item.title}
                                            className="absolute -bottom-1/4 -right-1/4 w-full h-full object-cover opacity-20"
                                        />
                                    }
                                />
                            ))}
                        </BentoGrid>
                    </section>

                    <section id="glowing-cards" className="mb-20">
                        <h2 className="text-4xl font-bold text-center mb-12">Interactive Glowing Cards</h2>
                        <GlowingCards>
                            {glowingCardsItems.map((item) => (
                                <GlowingCard key={item.id}>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                        <p className="text-neutral-400">{item.description}</p>
                                    </div>
                                </GlowingCard>
                            ))}
                        </GlowingCards>
                    </section>

                    <section id="interactive-globe" className="relative">
                        <h2 className="text-4xl font-bold text-center mb-12">Interactive Globe</h2>
                        <div className="relative flex flex-col md:flex-row items-center justify-center h-[600px] md:h-[800px] w-full">
                            <div className="max-w-3xl mx-auto text-center pb-8 md:pb-0 md:pr-8 z-10">
                                <h2 className="text-3xl md:text-5xl font-bold">We are Global</h2>
                                <p className="text-lg text-neutral-300 mt-4">
                                    Our platform connects users from every corner of the world.
                                    Experience seamless connectivity and global reach.
                                </p>
                            </div>
                            <div className="absolute inset-0 h-full w-full">
                                <Globe />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Blocks;

import { AuroraBackground } from "@/components/lightswind/aurora-background";
import { GlowingCards, GlowingCard } from "@/components/lightswind/glowing-cards";
import { componentFeatures, showcasedComponents } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/lightswind/button";

export default function Index() {
  return (
    <div className="w-full">
      <div className="relative h-[40rem] flex items-center justify-center">
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
              The Ultimate React UI Library
            </div>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 text-center">
              150+ modern, animated, and production-ready components.
            </div>
            <Button size="lg" asChild>
              <a href="#components">
                Explore Components <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </AuroraBackground>
      </div>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Lightswind UI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {componentFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-500/10 p-6 rounded-lg border border-gray-500/20">
                <feature.icon className="h-8 w-8 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="components" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Component Showcase
          </h2>
          <GlowingCards>
            {showcasedComponents.map((component, index) => (
              <GlowingCard key={index} className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{component.title}</h3>
                  <p className="text-gray-400">{component.description}</p>
                </div>
                <div className="mt-4 flex justify-end">
                    <span className="text-sm text-gray-500 hover:text-white transition-colors cursor-pointer">View Component &rarr;</span>
                </div>
              </GlowingCard>
            ))}
          </GlowingCards>
        </div>
      </section>
    </div>
  );
}

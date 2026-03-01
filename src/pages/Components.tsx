import { Helmet, HelmetProvider } from "react-helmet-async";
import { Button } from "@/components/lightswind/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/lightswind/card";
import { Input } from "@/components/lightswind/input";
import { Alert, AlertTitle, AlertDescription } from "@/components/lightswind/alert";
import { GlowingCards, GlowingCard } from "@/components/lightswind/glowing-cards";
import { ComponentShowcase } from "@/components/docs/ComponentShowcase";
import { Terminal } from "lucide-react";

const Components = () => {
    const buttonCode = `<Button>Click Me</Button>`;
    const cardCode = `<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>`;
    const inputCode = `<Input type="email" placeholder="Email" />`;
    const alertCode = `<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>`;
    const glowingCardsCode = `<GlowingCards>
  <GlowingCard>
    <div className="p-8">
      <h3 className="text-lg font-bold">Glowing Card 1</h3>
      <p className="text-sm text-neutral-400">This is a glowing card.</p>
    </div>
  </GlowingCard>
  <GlowingCard>
    <div className="p-8">
      <h3 className="text-lg font-bold">Glowing Card 2</h3>
      <p className="text-sm text-neutral-400">They look great in dark mode.</p>
    </div>
  </GlowingCard>
</GlowingCards>`;

    return (
        <HelmetProvider>
            <Helmet>
                <title>Components - Lightswind UI</title>
                <meta name="description" content="Explore a showcase of beautifully animated and production-ready React components from Lightswind UI. Buttons, cards, inputs, and more, complete with documentation and usage examples." />
                <meta name="keywords" content="react, components, ui library, lightswind, animated components, tailwind css, developer tools" />
            </Helmet>
            <div className="container mx-auto px-4 py-12">
                <header className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-zinc-300 to-zinc-500 bg-clip-text text-transparent">Component Gallery</h1>
                    <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
                        A curated collection of production-ready components. Easy to use, easy to customize, and built with modern web standards.
                    </p>
                </header>

                <div className="space-y-24">
                    <ComponentShowcase title="Button" description="A clickable element used to trigger an action." code={buttonCode}>
                        <div className="flex gap-4 items-center flex-wrap justify-center">
                            <Button>Default</Button>
                            <Button variant="destructive">Destructive</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="ghost">Ghost</Button>
                            <Button variant="link">Link</Button>
                        </div>
                    </ComponentShowcase>

                    <ComponentShowcase title="Card" description="Displays content and actions on a single topic." code={cardCode}>
                        <Card className="w-full max-w-sm">
                            <CardHeader>
                                <CardTitle>Create project</CardTitle>
                                <CardDescription>Deploy your new project in one-click.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>This is the main content area of the card where you can place forms, text, or images.</p>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button variant="outline">Cancel</Button>
                                <Button>Deploy</Button>
                            </CardFooter>
                        </Card>
                    </ComponentShowcase>

                    <ComponentShowcase title="Input" description="A field for user input." code={inputCode}>
                        <Input type="email" placeholder="Enter your email..." className="w-full max-w-sm" />
                    </ComponentShowcase>

                    <ComponentShowcase title="Alert" description="A component for displaying important messages." code={alertCode}>
                        <div className="w-full max-w-lg space-y-4">
                            <Alert>
                                <Terminal className="h-4 w-4" />
                                <AlertTitle>Heads up!</AlertTitle>
                                <AlertDescription>
                                    You can add components to your app using the cli.
                                </AlertDescription>
                            </Alert>
                             <Alert variant="destructive">
                                <Terminal className="h-4 w-4" />
                                <AlertTitle>Error!</AlertTitle>
                                <AlertDescription>
                                    Your session has expired. Please log in again.
                                </AlertDescription>
                            </Alert>
                        </div>
                    </ComponentShowcase>
                    
                    <ComponentShowcase title="Glowing Cards" description="Cards with an interactive glowing effect on hover." code={glowingCardsCode}>
                        <div className="w-full">
                           <GlowingCards>
                                <GlowingCard>
                                    <div className="flex flex-col items-center justify-center p-8 text-center">
                                        <h3 className="text-2xl font-bold text-white mb-2">Community</h3>
                                        <p className="text-sm text-neutral-400">Join our community of developers and designers.</p>
                                    </div>
                                </GlowingCard>
                                <GlowingCard>
                                    <div className="flex flex-col items-center justify-center p-8 text-center">
                                        <h3 className="text-2xl font-bold text-white mb-2">Showcase</h3>
                                        <p className="text-sm text-neutral-400">See what others are building with Lightswind UI.</p>
                                    </div>
                                </GlowingCard>
                                <GlowingCard>
                                    <div className="flex flex-col items-center justify-center p-8 text-center">
                                        <h3 className="text-2xl font-bold text-white mb-2">Contribute</h3>
                                        <p className="text-sm text-neutral-400">Help us improve and grow the component library.</p>
                                    </div>
                                </GlowingCard>
                            </GlowingCards>
                        </div>
                    </ComponentShowcase>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Components;

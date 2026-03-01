import React from "react";
import { CodeBlock } from "./CodeBlock";
import { Card, CardContent } from "@/components/lightswind/card";

interface ComponentShowcaseProps {
    title: string;
    description: string;
    code: string;
    children: React.ReactNode;
}

export const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({ title, description, code, children }) => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="lg:sticky top-24">
                <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>
                <p className="mt-2 text-lg text-zinc-400">{description}</p>
                <div className="mt-6">
                    <h3 className="font-semibold text-white mb-2">Preview</h3>
                    <Card className="bg-zinc-900/50 border-zinc-800">
                        <CardContent className="p-6 flex items-center justify-center min-h-[200px]">
                            {children}
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div>
                <h3 className="font-semibold text-white mb-2">Code</h3>
                <CodeBlock code={code} />
            </div>
        </section>
    );
};

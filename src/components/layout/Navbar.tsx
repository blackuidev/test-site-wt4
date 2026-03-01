import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AlignJustify, X, Code } from "lucide-react";
import { Button } from "../lightswind/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { title: "Home", href: "/" },
    { title: "Components", href: "/components" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
        `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-zinc-400'}`;


    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
                            <Code className="h-6 w-6 text-indigo-400"/>
                            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Lightswind</span>
                        </Link>
                        <nav className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.title}
                                    to={link.href}
                                    className={navLinkClasses}
                                >
                                    {link.title}
                                </NavLink>
                            ))}
                        </nav>
                        <div className="flex items-center gap-4">
                            <div className="hidden md:block">
                                <Button>Get Started</Button>
                            </div>
                            <div className="md:hidden">
                                <button onClick={toggleNavbar} className="text-white p-2">
                                    <span className="sr-only">Toggle menu</span>
                                    {isOpen ? <X /> : <AlignJustify />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden fixed top-16 left-0 right-0 bg-black/95 z-40 border-b border-zinc-800"
                    >
                        <nav className="flex flex-col items-center space-y-4 p-6">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.title}
                                    to={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={({isActive}) => `text-lg ${isActive ? 'text-indigo-400' : 'text-zinc-300'} hover:text-indigo-400 transition-colors`}
                                >
                                    {link.title}
                                </NavLink>
                            ))}
                            <Button className="w-full mt-4">Get Started</Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

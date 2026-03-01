import { Link } from "react-router-dom";
import { Code, Github, Star } from "lucide-react";
import { Button } from "@/components/lightswind/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4 mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <Code className="h-6 w-6" />
          <span className="font-bold inline-block">Lightswind UI</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" asChild>
            <a href="https://github.com/blackuidev/test-site-wt4" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </Button>
          <Button variant="default" size="sm" asChild>
             <a href="https://github.com/blackuidev/test-site-wt4" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span>Star on GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}

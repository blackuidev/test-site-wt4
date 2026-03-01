import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from '@/components/lightswind/oneDark';
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
    code: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div className="relative group">
            <SyntaxHighlighter
                language="tsx"
                style={oneDark}
                customStyle={{
                    backgroundColor: '#111113',
                    borderRadius: '0.5rem',
                    padding: '1.5rem',
                    border: '1px solid #27272a',
                    fontSize: '0.875rem',
                }}
                codeTagProps={{
                    style: {
                        fontFamily: '"Fira Code", monospace',
                    }
                }}
            >
                {code}
            </SyntaxHighlighter>
            <button
                onClick={handleCopy}
                className="absolute top-4 right-4 p-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all opacity-0 group-hover:opacity-100"
                aria-label="Copy code"
            >
                {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
        </div>
    );
};

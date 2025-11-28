import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, User } from 'lucide-react';
import { askTrickCoach } from '../services/geminiService';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
}

const AiCoach: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Yo! Ich bin Coach C.I. 🛹 Was geht? Brauchst du Hilfe beim Kickflip oder suchst du neue Hardware?", sender: 'ai' }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    const response = await askTrickCoach(input);
    const aiMessage: Message = { id: Date.now() + 1, text: response, sender: 'ai' };
    
    setMessages(prev => [...prev, aiMessage]);
    setLoading(false);
  };

  return (
    <section id="coach" className="py-24 bg-neutral-900 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-skate-accent rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-skate-red rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
            <motion.div 
                initial={{ rotate: -5, scale: 0.9 }}
                whileInView={{ rotate: 0, scale: 1 }}
                className="inline-block bg-white text-black px-4 py-1 font-marker text-xl mb-4 transform -rotate-3"
            >
                BETA VERSION
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-headline text-white uppercase italic">
                AI TRICK COACH
            </h2>
            <p className="text-gray-400 font-body text-xl max-w-lg mx-auto mt-4">
                Steckst du fest? Frag unseren AI Coach nach Tipps für Tricks, Spots oder Gear.
            </p>
        </div>

        {/* Chat Interface */}
        <div className="bg-black border-2 border-white/20 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] h-[500px] flex flex-col">
            {/* Header */}
            <div className="bg-skate-black border-b border-white/20 p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-headline tracking-widest text-gray-300">C.I. SYSTEM ONLINE</span>
                </div>
                <div className="font-mono text-xs text-gray-500">v1.0.4</div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-noise">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`flex max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                            <div className={`flex-shrink-0 w-8 h-8 rounded-none border border-white flex items-center justify-center ${msg.sender === 'user' ? 'bg-skate-accent ml-3' : 'bg-skate-red mr-3'}`}>
                                {msg.sender === 'user' ? <User size={16} className="text-black"/> : <Bot size={16} className="text-white"/>}
                            </div>
                            <div className={`p-4 border ${msg.sender === 'user' ? 'border-skate-accent bg-skate-accent/10 text-white' : 'border-white bg-white/10 text-white'}`}>
                                <p className="font-body text-lg leading-snug">{msg.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
                {loading && (
                    <div className="flex justify-start">
                         <div className="flex items-center space-x-2 text-gray-500 font-mono text-sm ml-12">
                            <span>Coach is thinking</span>
                            <span className="animate-bounce">.</span>
                            <span className="animate-bounce delay-100">.</span>
                            <span className="animate-bounce delay-200">.</span>
                         </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-white/20 bg-skate-black flex gap-4">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Wie mache ich einen Tre Flip?"
                    className="flex-1 bg-transparent border-b-2 border-gray-600 focus:border-skate-accent outline-none text-white font-body text-xl p-2 placeholder-gray-600 transition-colors"
                />
                <button 
                    type="submit" 
                    disabled={loading}
                    className="bg-white hover:bg-skate-accent text-black p-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed border-2 border-transparent hover:border-black"
                >
                    <Send size={20} />
                </button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default AiCoach;
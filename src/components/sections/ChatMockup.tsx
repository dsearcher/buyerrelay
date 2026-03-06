'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  sender: 'ai' | 'lead';
  text: string;
  delay: number;
}

const conversation: Message[] = [
  {
    sender: 'ai',
    text: "Hi Sarah! I'm reaching out from BuyerRelay about your home search in Austin. Are you still looking?",
    delay: 0,
  },
  {
    sender: 'lead',
    text: "Yes! We're looking for a 3-bed in South Austin under $450K",
    delay: 1200,
  },
  {
    sender: 'ai',
    text: "Great taste! South Austin is hot right now. What's your timeline -- are you pre-approved yet?",
    delay: 2400,
  },
  {
    sender: 'lead',
    text: 'We got pre-approved last week actually',
    delay: 3800,
  },
  {
    sender: 'ai',
    text: "Perfect -- you're a serious buyer! Let me connect you with an agent who specializes in South Austin. Can I book you a call for tomorrow at 2pm?",
    delay: 5000,
  },
  {
    sender: 'lead',
    text: 'That works!',
    delay: 6200,
  },
  {
    sender: 'ai',
    text: "Done! You'll get a calendar invite shortly. Talk soon, Sarah!",
    delay: 7200,
  },
];

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-2 h-2 rounded-full bg-[var(--color-text-muted)]"
          style={{
            animation: 'typing-dot 1.2s ease-in-out infinite',
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
}

export function ChatMockup() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showTyping, setShowTyping] = useState(true);
  const chatBodyRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    // Show typing indicator first, then first AI message
    const initialTimeout = setTimeout(() => {
      setShowTyping(false);
      setVisibleCount(1);
    }, 600);
    timeoutsRef.current.push(initialTimeout);

    conversation.forEach((msg, index) => {
      if (index === 0) return; // Already handled

      const isAI = msg.sender === 'ai';
      const typingDelay = isAI ? 600 : 0;

      if (isAI) {
        // Show typing indicator before AI message
        const typingTimeout = setTimeout(() => {
          setShowTyping(true);
        }, msg.delay);
        timeoutsRef.current.push(typingTimeout);
      }

      const messageTimeout = setTimeout(
        () => {
          setShowTyping(false);
          setVisibleCount(index + 1);
        },
        msg.delay + typingDelay
      );
      timeoutsRef.current.push(messageTimeout);
    });

    return () => {
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, []);

  // Auto-scroll on new messages
  useEffect(() => {
    chatBodyRef.current?.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [visibleCount, showTyping]);

  const visibleMessages = conversation.slice(0, visibleCount);

  return (
    <div className="bg-[var(--color-bg-elevated)] rounded-[20px] shadow-[var(--shadow-brand-xl)] border border-[var(--color-border)]/50 overflow-hidden">
      {/* Header bar */}
      <div className="px-5 py-3 border-b border-[var(--color-border)]/50 flex items-center gap-3">
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-success)]" />
        <span className="font-[var(--font-heading)] font-semibold text-sm text-[var(--color-text-primary)]">
          BuyerRelay AI
        </span>
        <span className="text-xs text-[var(--color-success)]">Online</span>
      </div>

      {/* Chat body */}
      <div
        ref={chatBodyRef}
        className="px-5 py-4 space-y-3 min-h-[320px] md:min-h-[380px] max-h-[420px] overflow-y-auto bg-[#F8FAFC]"
      >
        <AnimatePresence mode="popLayout">
          {visibleMessages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`flex ${msg.sender === 'lead' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] px-4 py-2.5 text-sm ${
                  msg.sender === 'ai'
                    ? 'bg-white rounded-2xl rounded-tl-sm text-[var(--color-text-primary)] shadow-[var(--shadow-brand-sm)]'
                    : 'bg-[var(--color-primary)] text-white rounded-2xl rounded-tr-sm'
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}

          {showTyping && (
            <motion.div
              key="typing"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="flex justify-start"
            >
              <div className="bg-white rounded-2xl rounded-tl-sm shadow-[var(--shadow-brand-sm)]">
                <TypingIndicator />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}

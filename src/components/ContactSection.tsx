import { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ContactSectionProps {
  initialMode?: string;
}

export function ContactSection({ initialMode: _initialMode }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmittedName(name);
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Failed to send message. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative bg-[#F3F1EA] text-[#15120E] py-16 sm:py-32 md:py-48 lg:py-60 overflow-hidden border-t border-[#D8D2C2]">
      
      <div className="site-container relative z-10 px-1.5 sm:px-8 max-w-4xl mx-auto">

        {/* Section Header: Expansive Negative Space & Monumental Typography */}
        <ScrollReveal scaleFrom={0.92} blurFrom={14} className="text-center max-w-3xl mx-auto mb-10 sm:mb-20 md:mb-28">
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.04] sm:leading-[1.02] text-[#15120E]">
            Let&apos;s talk.
          </h2>

          <p className="mt-4 sm:mt-8 text-sm sm:text-lg md:text-xl lg:text-2xl text-[#554E44] font-light leading-relaxed max-w-2xl mx-auto">
            Have a robot or workcell with recurring failures? Let&apos;s explore a pilot.
          </p>
        </ScrollReveal>

        {/* Ultra-Minimalist, Frictionless Form (Clean, Open, Intimidation-Free) */}
        <ScrollReveal delay={120} scaleFrom={0.93} blurFrom={16} className="max-w-2xl mx-auto">
          
          {submitted ? (
            <div className="text-center py-10 sm:py-16 px-5 sm:px-8 rounded-2xl sm:rounded-3xl bg-white border border-[#D8D2C2] shadow-sm space-y-4 sm:space-y-6 animate-in fade-in duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#FFB800]/15 text-[#FFB800] flex items-center justify-center mx-auto border border-[#FFB800]/40">
                <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              
              <h3 className="text-xl sm:text-3xl font-extrabold text-[#15120E] tracking-tight">
                Message Received
              </h3>
              
              <p className="text-xs sm:text-base text-[#554E44] font-light leading-relaxed max-w-md mx-auto">
                Thank you{submittedName ? `, ${submittedName}` : ''}. We will review your note and reach out within 24 hours to schedule a direct technical discussion.
              </p>

              <div className="pt-2 sm:pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setError('');
                  }}
                  className="px-5 py-2 sm:px-6 sm:py-2.5 text-xs font-mono font-medium text-[#15120E] bg-[#FAF8F3] hover:bg-[#EFECE3] border border-[#D8D2C2] rounded-full transition-all cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            </div>
          ) : (
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-6"
            >
              <input type="hidden" name="access_key" value="19661b88-58a6-43d1-a590-1b69127b74bb" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              {/* 2 Clean Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name *"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm bg-white border border-[#D8D2C2] rounded-xl sm:rounded-2xl focus:outline-none focus:border-[#15120E] focus:ring-1 focus:ring-[#15120E] text-[#15120E] placeholder:text-[#8A8275] transition-all shadow-2xs"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address *"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm bg-white border border-[#D8D2C2] rounded-xl sm:rounded-2xl focus:outline-none focus:border-[#15120E] focus:ring-1 focus:ring-[#15120E] text-[#15120E] placeholder:text-[#8A8275] transition-all shadow-2xs"
                  />
                </div>
              </div>

              {/* 1 Natural Context Textarea */}
              <div>
                <textarea
                  rows={3}
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your robot, workcell, or failure mode (optional)..."
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm bg-white border border-[#D8D2C2] rounded-xl sm:rounded-2xl focus:outline-none focus:border-[#15120E] focus:ring-1 focus:ring-[#15120E] text-[#15120E] placeholder:text-[#8A8275] leading-relaxed resize-none transition-all shadow-2xs"
                />
              </div>

              {error && (
                <div className="text-xs text-[#A63232] font-mono bg-[#FDF2F2] p-3 rounded-xl border border-[#F5C2C2] text-center">
                  {error}
                </div>
              )}

              {/* Large, Beautiful Minimalist Action Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold tracking-wide text-white bg-[#15120E] hover:bg-[#2A241D] active:scale-[0.99] rounded-xl sm:rounded-2xl transition-all shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span>Sending...</span>
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[10px] sm:text-[11px] font-mono text-[#8A8275] text-center pt-1 sm:pt-2">
                Direct technical dialogue with the founders.
              </p>
            </form>
          )}

        </ScrollReveal>

      </div>
    </section>
  );
}

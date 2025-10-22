interface ChatHeaderProps {
  isCompact?: boolean;
}

export const ChatHeader = ({ isCompact = false }: ChatHeaderProps) => {
  return (
    <header className={`relative w-full px-4 border-b border-primary/10 overflow-hidden transition-all duration-500 ${
      isCompact ? 'py-4' : 'py-16'
    }`}>
      {/* Radial background glow */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
        isCompact ? 'opacity-30' : 'opacity-100'
      }`}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-30"
             style={{
               background: 'radial-gradient(ellipse at center, hsl(30 100% 50% / 0.3), hsl(15 100% 45% / 0.2), hsl(0 100% 50% / 0.1), transparent)'
             }} />
      </div>

      {/* Neural particle effects - hide when compact */}
      {!isCompact && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/40 rounded-full particle-float"
              style={{
                left: `${10 + i * 8}%`,
                top: `${20 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${6 + (i % 4)}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Neural threads/connections - hide when compact */}
      {!isCompact && (
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="thread-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: 'hsl(30 100% 50%)', stopOpacity: 0 }} />
                <stop offset="50%" style={{ stopColor: 'hsl(15 100% 45%)', stopOpacity: 0.4 }} />
                <stop offset="100%" style={{ stopColor: 'hsl(0 100% 50%)', stopOpacity: 0 }} />
              </linearGradient>
            </defs>
            <line x1="10%" y1="30%" x2="90%" y2="70%" stroke="url(#thread-gradient)" strokeWidth="1" />
            <line x1="20%" y1="60%" x2="80%" y2="40%" stroke="url(#thread-gradient)" strokeWidth="1" />
            <line x1="30%" y1="20%" x2="70%" y2="80%" stroke="url(#thread-gradient)" strokeWidth="1" />
          </svg>
        </div>
      )}

      <div className={`relative z-10 max-w-4xl mx-auto transition-all duration-500 ${
        isCompact ? 'text-left' : 'text-center'
      }`}>
        {/* Main title with bio-neural glow */}
        <h1 className={`font-orbitron font-black tracking-widest transition-all duration-500 ${
          isCompact ? 'text-3xl mb-0' : 'text-7xl md:text-8xl mb-4 title-glow'
        }`}
            style={{
              background: 'linear-gradient(135deg, hsl(30 100% 50%), hsl(15 100% 45%), hsl(0 100% 50%))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '0.15em'
            }}>
          ONTIC
        </h1>
        
        {/* Holographic subtitle - hide when compact */}
        {!isCompact && (
          <>
            <p className="font-rajdhani text-base md:text-lg tracking-[0.3em] uppercase opacity-70 text-foreground/80"
               style={{
                 textShadow: '0 0 20px hsl(var(--primary) / 0.3)',
                 fontWeight: 300
               }}>
              Conversational Biological Intelligence
            </p>

            {/* Subtle underline accent */}
            <div className="mt-6 w-32 h-[1px] mx-auto bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
          </>
        )}
      </div>
    </header>
  );
};

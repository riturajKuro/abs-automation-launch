const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Animated Cog Graphics */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 opacity-[0.03] animate-spin-slow">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M50 10 L55 25 L70 25 L57.5 35 L62.5 50 L50 40 L37.5 50 L42.5 35 L30 25 L45 25 Z"
            fill="currentColor"
            className="text-primary"
          />
          <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/50" />
          <g transform="translate(50,50)">
            {[...Array(12)].map((_, i) => (
              <rect
                key={i}
                x="-2"
                y="-35"
                width="4"
                height="10"
                fill="currentColor"
                className="text-primary"
                transform={`rotate(${i * 30})`}
              />
            ))}
          </g>
        </svg>
      </div>

      <div className="absolute bottom-1/3 left-1/3 w-64 h-64 opacity-[0.02] animate-spin-reverse">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" />
          <g transform="translate(50,50)">
            {[...Array(8)].map((_, i) => (
              <rect
                key={i}
                x="-3"
                y="-40"
                width="6"
                height="12"
                rx="2"
                fill="currentColor"
                className="text-accent"
                transform={`rotate(${i * 45})`}
              />
            ))}
          </g>
          <circle cx="50" cy="50" r="12" fill="currentColor" className="text-accent/80" />
        </svg>
      </div>

      <div className="absolute top-2/3 right-1/3 w-48 h-48 opacity-[0.025] animate-spin-slow" style={{ animationDelay: '2s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <g transform="translate(50,50)">
            {[...Array(10)].map((_, i) => (
              <g key={i} transform={`rotate(${i * 36})`}>
                <rect x="-2.5" y="-38" width="5" height="15" rx="2" fill="currentColor" className="text-primary/60" />
                <circle cx="0" cy="-32" r="3" fill="currentColor" className="text-primary" />
              </g>
            ))}
            <circle cx="0" cy="0" r="20" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary/40" />
          </g>
        </svg>
      </div>

      {/* Gradient Orbs with Parallax */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] animate-pulse-slow" />
    </div>
  );
};

export default AnimatedBackground;

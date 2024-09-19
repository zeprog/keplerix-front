'use client';

export default function StarBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
      {/* Анимированные планеты */}
      <div className="absolute top-5 left-10 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-80 animate-orbit-slow" />
      <div className="absolute top-40 right-20 w-56 h-56 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full blur-2xl opacity-90 animate-orbit-fast" />
      <div className="absolute bottom-10 left-20 w-56 h-56 bg-gradient-to-br from-teal-500 to-green-500 rounded-full blur-2xl opacity-70 animate-spin-slow" />

      {children}

      {Array.from({ length: 200 }).map((_, index) => (
        <div
          key={index}
          className="absolute bg-white rounded-full opacity-50 star-blur"
          style={{
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
            width: `${Math.random() * 2 + 1}px`, // Random size between 1px and 3px
            height: `${Math.random() * 2 + 1}px`, // Same as above
            animation: `star-fall ${Math.random() * 2 + 10}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      <style jsx>{`
        .animate-orbit-slow {
          animation: orbit-slow 15s linear infinite;
        }

        .animate-orbit-fast {
          animation: orbit-fast 8s linear infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .star-blur {
          filter: blur(1px);
        }

        @keyframes orbit-slow {
          0% {
            transform: rotate(0deg) translateX(100px);
          }
          100% {
            transform: rotate(360deg) translateX(100px);
          }
        }

        @keyframes orbit-fast {
          0% {
            transform: rotate(0deg) translateX(200px);
          }
          100% {
            transform: rotate(360deg) translateX(200px);
          }
        }

        @keyframes spin-slow {
          0% {
            transform: rotate(0deg) translateX(100px);
          }
          100% {
            transform: rotate(360deg) translateX(100px);
          }
        }

        @keyframes star-fall {
          0% {
            transform: translateY(0) scale(1);
          }
          100% {
            transform: translateY(100vh) scale(2);
          }
        }
      `}</style>
    </div>
  );
}
import { useEffect, useRef, useState } from "react";

export const LazyVideo = ({ testId, src, poster, ariaLabel, className = "" }) => {
  const ref = useRef(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative">
      {load ? (
        <video
          data-testid={testId}
          className={`w-full h-auto block aspect-video object-cover ${className}`}
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={ariaLabel}
        />
      ) : (
        <img
          data-testid={`${testId}-poster`}
          src={poster}
          alt={ariaLabel}
          loading="lazy"
          className="w-full h-auto block aspect-video object-cover"
        />
      )}
    </div>
  );
};
    
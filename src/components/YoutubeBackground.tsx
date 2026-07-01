import { useEffect, useRef, useState, CSSProperties } from "react";

interface YoutubeBackgroundProps {
  videoId: string;
  startSeconds?: number;
  endSeconds?: number;
  className?: string;
  style?: CSSProperties;
}

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT?: any;
  }
}

export function YoutubeBackground({
  videoId,
  startSeconds = 0,
  endSeconds,
  className = "",
  style = {},
}: YoutubeBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const [apiLoaded, setApiLoaded] = useState(false);
  const checkIntervalRef = useRef<any>(null);

  // Load YouTube Iframe API
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      setApiLoaded(true);
      return;
    }

    // Check if script already injected
    const existingScript = document.getElementById("youtube-iframe-api-script");
    if (!existingScript) {
      const tag = document.createElement("script");
      tag.id = "youtube-iframe-api-script";
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    // Polling for YT readiness because onYouTubeIframeAPIReady might be triggered before our component mounts
    checkIntervalRef.current = setInterval(() => {
      if (window.YT && window.YT.Player) {
        setApiLoaded(true);
        clearInterval(checkIntervalRef.current);
      }
    }, 100);

    const prevCallback = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (prevCallback) prevCallback();
      setApiLoaded(true);
    };

    return () => {
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
      }
    };
  }, []);

  // Initialize player when API is loaded
  useEffect(() => {
    if (!apiLoaded || !containerRef.current) return;

    let timeUpdateInterval: any = null;

    // Create a unique element ID for the player
    const elementId = `yt-player-${Math.random().toString(36).substring(2, 9)}`;
    const child = document.createElement("div");
    child.id = elementId;
    child.style.width = "100%";
    child.style.height = "100%";
    child.style.position = "absolute";
    child.style.top = "0";
    child.style.left = "0";
    containerRef.current.appendChild(child);

    playerRef.current = new window.YT.Player(elementId, {
      videoId,
      playerVars: {
        autoplay: 1,
        mute: 1,
        controls: 0,
        showinfo: 0,
        rel: 0,
        playsinline: 1,
        iv_load_policy: 3,
        modestbranding: 1,
        disablekb: 1,
        fs: 0,
        start: startSeconds,
        ...(endSeconds ? { end: endSeconds } : {}),
      },
      events: {
        onReady: (event: any) => {
          event.target.mute();
          event.target.playVideo();
          
          if (endSeconds) {
            timeUpdateInterval = setInterval(() => {
              if (playerRef.current && typeof playerRef.current.getCurrentTime === 'function') {
                const currentTime = playerRef.current.getCurrentTime();
                if (currentTime >= endSeconds - 0.5) {
                  playerRef.current.seekTo(startSeconds);
                  playerRef.current.playVideo();
                }
              }
            }, 250);
          }
        },
        onStateChange: (event: any) => {
          if (event.data === window.YT.PlayerState.ENDED) {
            event.target.seekTo(startSeconds);
            event.target.playVideo();
          }
          if (event.data === window.YT.PlayerState.PAUSED) {
            event.target.playVideo();
          }
        },
      },
    });

    return () => {
      if (timeUpdateInterval) {
        clearInterval(timeUpdateInterval);
      }
      if (playerRef.current && typeof playerRef.current.destroy === "function") {
        try {
          playerRef.current.destroy();
        } catch (e) {
          console.error(e);
        }
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [apiLoaded, videoId, startSeconds, endSeconds]);

  return (
    <div
      ref={containerRef}
      className={`absolute overflow-hidden pointer-events-none select-none ${className}`}
      style={{
        ...style,
      }}
    />
  );
}

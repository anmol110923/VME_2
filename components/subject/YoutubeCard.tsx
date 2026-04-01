import { Play } from "lucide-react";
import type { VideoLink } from "@/lib/types";

function getYoutubeVideoId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname === "www.youtube.com" || u.hostname === "youtube.com") {
      const v = u.searchParams.get("v");
      if (v) return v;
      if (u.pathname.startsWith("/embed/")) {
        const id = u.pathname.split("/").filter(Boolean)[1];
        return id ?? null;
      }
    }
    if (u.hostname === "youtu.be") {
      return u.pathname.slice(1).split("/")[0] || null;
    }
  } catch {
    return null;
  }
  return null;
}

interface YoutubeCardProps {
  video: VideoLink;
}

export function YoutubeCard({ video }: YoutubeCardProps) {
  const videoId = getYoutubeVideoId(video.url);
  const thumbnailUrl = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : null;

  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-xl border border-border bg-card overflow-hidden shadow-sm block transition-all hover:border-primary/30 hover:shadow-md"
    >
      <div className="aspect-video relative bg-muted">
        {thumbnailUrl ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumbnailUrl}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="rounded-full bg-primary p-3 text-white">
                <Play className="h-6 w-6 fill-current" />
              </span>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
            <Play className="h-12 w-12" />
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {video.title}
        </h3>
      </div>
    </a>
  );
}

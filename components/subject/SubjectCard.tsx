import Link from "next/link";
import type { Subject } from "@/lib/types";

interface SubjectCardProps {
  subject: Subject;
  sem: string;
  branch: string;
}

const resourceDots: { key: keyof Subject; label: string; color: string }[] = [
  { key: "notes",          label: "Notes",     color: "bg-blue-400" },
  { key: "practicalFiles", label: "Practical", color: "bg-emerald-400" },
  { key: "pyqs",           label: "PYQs",      color: "bg-amber-400" },
  { key: "endSemSaviour",  label: "Videos",    color: "bg-rose-400" },
];

export function SubjectCard({ subject, sem, branch }: SubjectCardProps) {
  const availableResources = resourceDots.filter(
    (r) => Array.isArray(subject[r.key]) && (subject[r.key] as unknown[]).length > 0
  );

  return (
    <Link
      href={`/semester/${sem}/${branch}/${subject.slug}`}
      className="group rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/40 hover:shadow-md block"
    >
      <div className="flex items-start justify-between gap-3 mb-1">
        <h2 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
          {subject.title}
        </h2>
        <span className="shrink-0 text-xs font-medium text-muted-foreground bg-muted rounded-md px-2 py-0.5 mt-0.5">
          {subject.credits}cr
        </span>
      </div>
      <p className="text-xs text-muted-foreground font-mono mb-4">{subject.code}</p>
      {availableResources.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap">
          {availableResources.map((r) => (
            <span key={r.key} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className={`inline-block h-1.5 w-1.5 rounded-full ${r.color}`} />
              {r.label}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
import Link from "next/link";

const semesters = [
  { sem: 1, label: "Semester 1", href: "/semester/1" },
  { sem: 2, label: "Semester 2", href: "/semester/2" },
  { sem: 3, label: "Semester 3", href: "/semester/3" },
  { sem: 4, label: "Semester 4", href: "/semester/4" },
  { sem: 5, label: "Semester 5", href: "/semester/5" },
  { sem: 6, label: "Semester 6", href: "/semester/6" },
  { sem: 7, label: "Semester 7", comingSoon: true },
  { sem: 8, label: "Semester 8", comingSoon: true },
];

export function SemesterCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {semesters.map(({ sem, label, href, comingSoon }) =>
        comingSoon ? (
          <div
            key={sem}
            className="rounded-xl border border-border bg-card p-6 shadow-sm opacity-60"
          >
            <h2 className="font-display text-xl font-semibold text-foreground mb-1">
              {label}
            </h2>
            <p className="text-sm text-muted-foreground font-medium">Coming Soon</p>
          </div>
        ) : (
          <Link
            key={sem}
            href={href!}
            className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
          >
            <h2 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
              {label}
            </h2>
            <p className="text-sm text-muted-foreground">View branches & subjects</p>
          </Link>
        )
      )}
    </div>
  );
}
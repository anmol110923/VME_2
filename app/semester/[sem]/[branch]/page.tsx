import { notFound } from "next/navigation";
import { BackButton } from "@/components/ui/BackButton";
import { Breadcrumb, buildBreadcrumbForBranch } from "@/components/layout/Breadcrumb";
import { SubjectCard } from "@/components/subject/SubjectCard";
import { getSubjectsForBranchSem, getValidSemesters, getBranches } from "@/lib/content";
import { BRANCHES } from "@/constants/branches";

interface PageProps {
  params: Promise<{ sem: string; branch: string }>;
}

export async function generateStaticParams() {
  const branches = getBranches();
  const params: { sem: string; branch: string }[] = [];
  for (const sem of getValidSemesters()) {
    for (const branch of branches) {
      params.push({ sem: String(sem), branch });
    }
  }
  return params;
}

export default async function BranchSubjectsPage({ params }: PageProps) {
  const { sem, branch } = await params;
  const semNum = parseInt(sem, 10);

  if (!getValidSemesters().includes(semNum) || !BRANCHES[branch]) {
    notFound();
  }

  const subjects = getSubjectsForBranchSem(semNum, branch);
  const branchName = BRANCHES[branch];

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <BackButton href={`/semester/${sem}`} />
      <Breadcrumb items={buildBreadcrumbForBranch(sem, branch)} />
      <h1 className="font-display text-2xl font-bold text-foreground mb-8">
        Semester {sem} — {branchName} Subjects
      </h1>

      {subjects.length === 0 ? (
        <div className="rounded-xl border border-border bg-card p-12 text-center">
          <p className="text-muted-foreground">No subjects added yet.</p>
          <p className="text-sm text-muted-foreground mt-2">Coming soon.</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => (
            <SubjectCard key={subject.slug} subject={subject} sem={sem} branch={branch} />
          ))}
        </div>
      )}
    </div>
  );
}
import { notFound } from "next/navigation";
import { BackButton } from "@/components/ui/BackButton";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { BranchGrid } from "@/components/branch/BranchGrid";
import { getValidSemesters, getAllSemesterParams } from "@/lib/content";

interface PageProps {
  params: Promise<{ sem: string }>;
}

export async function generateStaticParams() {
  return getAllSemesterParams();
}

export default async function SemesterBranchPage({ params }: PageProps) {
  const { sem } = await params;
  const semNum = parseInt(sem, 10);

  if (!getValidSemesters().includes(semNum)) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <BackButton href="/" />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: `Semester ${sem}` },
        ]}
      />
      <h1 className="font-display text-2xl font-bold text-foreground mb-8">
        Select Your Branch — Semester {sem}
      </h1>
      <BranchGrid sem={sem} />
    </div>
  );
}
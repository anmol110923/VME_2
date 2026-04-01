import { notFound } from "next/navigation";
import { BackButton } from "@/components/ui/BackButton";
import { Breadcrumb, buildBreadcrumbForSubject } from "@/components/layout/Breadcrumb";
import { SubjectDetail } from "@/components/subject/SubjectDetail";
import { getSubjectBySlug, getValidSemesters, getAllSubjectParams } from "@/lib/content";
import { BRANCHES } from "@/constants/branches";

interface PageProps {
  params: Promise<{ sem: string; branch: string; subject: string }>;
}

export async function generateStaticParams() {
  return getAllSubjectParams();
}

export default async function SubjectDetailPage({ params }: PageProps) {
  const { sem, branch, subject: subjectSlug } = await params;
  const semNum = parseInt(sem, 10);

  if (!getValidSemesters().includes(semNum) || !BRANCHES[branch]) {
    notFound();
  }

  const subject = getSubjectBySlug(semNum, branch, subjectSlug);
  if (!subject) notFound();

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <BackButton href={`/semester/${sem}/${branch}`} />
      <Breadcrumb items={buildBreadcrumbForSubject(sem, branch, subject.title)} />
      <SubjectDetail subject={subject} />
    </div>
  );
}
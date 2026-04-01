import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Subject } from "./types";
import { BRANCH_SLUGS } from "@/constants/branches";

const CONTENT_DIR = path.join(process.cwd(), "content");
const VALID_SEMS = [1, 2, 3, 4, 5, 6, 7, 8];

export function getValidSemesters(): number[] {
  return VALID_SEMS;
}

export function getAllSemesterParams(): { sem: string }[] {
  return VALID_SEMS.map((s) => ({ sem: String(s) }));
}

export function getBranches(): string[] {
  return BRANCH_SLUGS;
}

export function getAllBranchParams(sem: number): { sem: string; branch: string }[] {
  return BRANCH_SLUGS.map((branch) => ({ sem: String(sem), branch }));
}

export function getSubjectsForBranchSem(sem: number, branch: string): Subject[] {
  const dir = path.join(CONTENT_DIR, `sem${sem}`, branch);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data } = matter(raw);
    const slug = file.replace(/\.mdx$/, "");
    return { ...data, slug, units: data.units ?? [] } as Subject;
  });
}

export function getSubjectBySlug(
  sem: number,
  branch: string,
  slug: string
): Subject | null {
  const filePath = path.join(CONTENT_DIR, `sem${sem}`, branch, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(raw);
  return { ...data, slug, units: data.units ?? [] } as Subject;
}

export function getAllSubjectParams(): {
  sem: string;
  branch: string;
  subject: string;
}[] {
  const params: { sem: string; branch: string; subject: string }[] = [];
  for (const sem of VALID_SEMS) {
    for (const branch of BRANCH_SLUGS) {
      const subjects = getSubjectsForBranchSem(sem, branch);
      for (const s of subjects) {
        params.push({ sem: String(sem), branch, subject: s.slug });
      }
    }
  }
  return params;
}
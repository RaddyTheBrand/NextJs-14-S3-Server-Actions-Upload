"use client";
import { UploadForm } from "@/app/upload/(form)/form";

export default function Page() {
  return(
    <>
      <h1>Upload Files to S3 Bucket</h1>
      <UploadForm />
    </>
  )
}
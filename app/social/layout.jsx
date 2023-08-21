"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Detail from "./detail";

export default function SocialLayout({ telegram, instagram }) {
  const router = useSearchParams();
  const [socialType] = router.getAll("socialType");
  return (
    <>
      <Detail>
        {socialType === "telegram" && telegram}
        {socialType === "instagram" && instagram}
      </Detail>
    </>
  );
}

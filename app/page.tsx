"use client";

import { useEffect } from "react";
import { ClipLoader } from "react-spinners";

export default function Home() {
  const appStoreUrl =
    "https://apps.apple.com/tr/app/%EC%82%90%EB%BD%80-pippo-%EA%B0%95%EC%95%84%EC%A7%80-%EC%86%8C%EB%B3%80%EA%B2%80%EC%82%AC-%EA%B1%B4%EA%B0%95-%EC%B2%B4%ED%81%AC%EC%82%90%EB%BD%80/id6477411423";
  const playStoreUrl =
    "https://play.google.com/store/apps/details?id=net.petpulslab.pippo&hl=ko&gl=US";

  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (/android/i.test(userAgent)) {
      window.location.href = playStoreUrl;
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      window.location.href = appStoreUrl;
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-2xl font-bold mb-4">
        삐뽀설치페이지로 이동중입니다.
      </div>
      <ClipLoader size={150} color="#e62f8b" />
    </div>
  );
}

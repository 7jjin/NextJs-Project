"use client";
import { useRouter } from "next/navigation";

export default function HomeButton() {
  const router = useRouter();
  const handleClick = () => {
    console.log("뒤로");
    router.push("/");
  };
  return (
    <>
      <button onClick={handleClick}>홈으로</button>
    </>
  );
}

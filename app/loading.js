import Image from "next/image";
export default function Loading() { return <div className="loading-screen"><Image src="/images/logo-placeholder.svg" alt="" width={60} height={60} /><p>Preparing a brighter learning experience...</p><span /></div>; }

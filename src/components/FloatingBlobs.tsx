export default function FloatingBlobs() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div
        className="absolute w-[700px] h-[700px] rounded-full blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,120,212,0.05) 0%, transparent 70%)",
          top: "-10%",
          right: "-10%",
          animation: "blobFloat 14s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[60px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,166,251,0.04) 0%, transparent 70%)",
          bottom: "10%",
          left: "-5%",
          animation: "blobFloat 18s ease-in-out infinite 3s",
        }}
      />
    </div>
  );
}

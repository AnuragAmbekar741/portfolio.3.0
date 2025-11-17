import { BackgroundRippleEffect } from "@/components/ui/RippleEffectBg";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <BackgroundRippleEffect cellSize={50} />
      <div className="relative z-10">{/* Your content */}</div>
    </div>
  );
}

import Fireworks from 'react-canvas-confetti/dist/presets/fireworks';

export default function CanvasConfetti() {
  return <Fireworks autorun={{ speed: 1, duration: 5000 }} />;
}

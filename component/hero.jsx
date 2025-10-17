import Aurora from './background.jsx';
import { useRive, Fit, Layout } from '@rive-app/react-canvas';
import flower from '../src/assets/leaf.png';

const Flower = ({ top, left }) => (
  <img
    src={flower}
    alt="flower"
    className="absolute z-10"
    style={{
      top: `${top}%`,
      left: `${left}%`,
      width: '100px',
      height: '100px',
    }}
  />
);

export default function Hero() {
  const { RiveComponent } = useRive({
    src:"../src/assets/hero_header.riv",
    layout: new Layout({
      fit: Fit.Cover, // Changed to Cover for better visibility
    }),
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  const flowers = [
    { top: 10, left: 10 },
    { top: 80, left: 80 },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Aurora background - positioned absolutely */}
      <div className="absolute inset-0 z-0 h-screen">
        <Aurora
          colorStops={["#2b56ab", "#b19eef", "#2563EB"]}
          blend={0.3}
          amplitude={1}
          speed={0.5}
        />
      </div>

      {/* Flowers */}
      {flowers.map((flower, index) => (
        <Flower key={index} top={flower.top} left={flower.left} />
      ))}

      {/* Rive animation - positioned on top with proper sizing */}
      <div className="relative z-20 w-full h-screen">
        <RiveComponent 
          style={{ 
            width: '100%', 
            height: '100%' 
          }} 
        />
      </div>
    
    </div>
  );
}

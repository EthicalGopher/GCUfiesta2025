import Aurora from './background.jsx';
import { useRive, Fit, Layout } from '@rive-app/react-canvas';
import leaf from '../src/assets/leaf.png';

const Leaf = ({ top, left,degree }) => (
  <img
    src={leaf}
    alt="leaf"
    className="absolute z-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32"
    style={{
      top: `${top}%`,
      left: `${left}%`,
      transform: `rotate(${degree}deg)`,
      
    }}
  />
);

export default function Hero() {
  const { RiveComponent } = useRive({
    src:"hero_header.riv",
    layout: new Layout({
      fit: Fit.Cover, // Changed to Cover for better visibility
    }),
    stateMachines: "State Machine 1",
    autoplay: true,
  });



  return (
    <div className="relative min-h-screen">
      {/* Aurora background - positioned absolutely */}
      <div className="absolute inset-0 z-0 md:visible invisible max-h-96">
        <Aurora
          colorStops={["#3b82f6", "#8b5cf6", "#2563eb"]}
          blend={0.02}
          amplitude={1}
          speed={0.2}
        />
      </div>
      <div className="">

      <Leaf top={10} left={10} degree={0} />
      <Leaf top={80} left={80} degree={90} />
      </div>

      {/* Rive animation - positioned on top with proper sizing */}
      <div className="w-full  h-screen flex justify-center items-center">
      <div className=" relative z-20 w-full xl:h-full lg:h-100 md:h-96 h-60 w-full">
        
        <RiveComponent 
          style={{ 
            width: '100%', 
            height: '100%' 
          }} 
        />
        </div>
      </div>
    
    </div>
  );
}

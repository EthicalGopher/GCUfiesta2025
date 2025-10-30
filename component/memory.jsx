import { useState, useEffect } from "react";


const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isMobile, setIsMobile] = useState(false);

  const images = [
    { src: "https://images2.imgbox.com/01/d7/HArIwlSo_o.png", category: "cosplay", title: "Tokyo Ghoul",description: "Cosplay of Ken Kaneki" },
        { src: "https://images2.imgbox.com/9c/62/xAWc2zGh_o.png", category: "cosplay", title: "Cosplay",description:"Anime Cosplay" },
    { src: "https://images2.imgbox.com/8b/8e/RKrrG7CN_o.png", category: "cosplay", title: "Naruto", description: "Cosplay of Naruto"},
    { src: "https://thumbs2.imgbox.com/bf/d7/UHaj0WaG_t.png",category: "cosplay",title: "Call of Duty", description: "Cosplay of ghost" },
     { src: "https://images2.imgbox.com/d5/5d/XJSw8qC1_o.png",category: "yukata", title: "Yukata ", description: "Display of beautiful yukatas" },
    { src: "https://images2.imgbox.com/da/2f/EIDp165Q_o.png", category: "games", title: "Japanese Games",description: "Traditional Japanese Games" },
    { src:"https://images2.imgbox.com/d0/85/m6uaHl0N_o.jpg",category:"cosplay",title:"Chainsaw Man",description:"Cosplay of Makima"}
      ];

  const [visibleImages, setVisibleImages] = useState(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      return 3;
    } else {
      return images.length;
    }
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Assuming 768px as mobile breakpoint
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLoadMore = () => {
    setVisibleImages(prevCount => prevCount + 3);
  };

  useEffect(() => {
    if (isMobile) {
      setVisibleImages(3);
    }
  }, [activeCategory, isMobile]);
    
      const categories = [
        { id: "all", label: "All", colorClass: "bg-primary" },
        { id: "cosplay", label: "Cosplay", colorClass: "bg-primary" },
        { id: "games", label: "Games", colorClass: "bg-primary" },
        { id: "yukata", label: "Yukata", colorClass: "bg-primary" },
  ];

  const filteredImages = activeCategory === "all" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const displayedImages = isMobile ? filteredImages.slice(0, visibleImages) : filteredImages;

  return (
    <section id="gallery" className="py-20 px-4 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold font-['Cinzel'] mb-6 text-black">
            Photo Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Relive the magical moments from our previous festivals
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? `${cat.colorClass} text-white scale-110 shadow-lg`
                  : "bg-card text-foreground hover:scale-105 hover:shadow-md"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-scale aspect-[4/3]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2 font-['Cinzel']">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-cultural opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-bl-full" />
            </div>
          ))}
        </div>

        {/* Load More (Placeholder) */}
        {isMobile && visibleImages < filteredImages.length && (
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              className="px-8 py-4 bg-card border-2 border-primary text-foreground rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              Load More Photos
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;

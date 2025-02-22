import React, { useState, useEffect } from 'react';
import { ChefHat, Search } from 'lucide-react';
import SearchResults from './components/SearchResults';
import AuthModal from './components/AuthModal';
import { recipes } from './data/recipes';

function App() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070",
      prompt: "Discover Culinary Excellence",
      title: "Featured Recipes"
    },
    {
      image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&q=80&w=2070",
      prompt: "Explore Global Flavors",
      title: "World Cuisine"
    },
    {
      image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&q=80&w=2070",
      prompt: "Master the Art of Cooking",
      title: "Cooking Techniques"
    }
  ];

  const categories = [
    {
      title: "South Indian Delights",
      description: "Explore the rich flavors of traditional South Indian cuisine, from crispy dosas to aromatic idlis.",
      images: [
        "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=600",
      ]
    },
    {
      title: "Quick & Easy Snacks",
      description: "Perfect for busy days, these 5-minute snacks are both delicious and satisfying.",
      images: [
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1523294587484-bae6cc870010?auto=format&fit=crop&q=80&w=600",
      ]
    },
    {
      title: "Fresh & Healthy Salads",
      description: "Vibrant, nutritious salads that bring together the finest ingredients and flavors.",
      images: [
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=600",
      ]
    },
    {
      title: "Gourmet Desserts",
      description: "Indulge in exquisite desserts that combine artistry with irresistible flavors.",
      images: [
        "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600",
      ]
    }
  ];

  const handleSave = () => {
    setShowLoginPrompt(true);
    setTimeout(() => setShowLoginPrompt(false), 3000);
  };

  // Auto slider effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <ChefHat className="h-8 w-8 text-amber-500" />
                <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
                  Recipedia
                </span>
              </div>
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="text-slate-300 hover:text-amber-400 transition-colors"
              >
                Explore
              </button>
            </div>

            {showSearch && (
              <div className="relative flex-1 max-w-xl mx-8 animate-fadeIn">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search for recipes..."
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-slate-800 border border-slate-600 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            )}
            
            <div className="flex items-center space-x-4 ml-auto">
              <button
                onClick={() => setShowLoginModal(true)}
                className="px-6 py-2 rounded-full border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900 transition-all duration-300"
              >
                Login
              </button>
              <button
                onClick={() => setShowSignupModal(true)}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-300 text-slate-900 hover:from-amber-400 hover:to-amber-200 transition-all duration-300"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {searchQuery ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <SearchResults recipes={recipes} query={searchQuery} onSave={handleSave} />
          </div>
        ) : (
          <>
            {/* Hero Section with Auto Slider */}
            <section className="relative h-screen">
              <div className="absolute inset-0 transition-all duration-700 transform">
                <img
                  src={heroSlides[currentImageIndex].image}
                  alt="Featured Recipe"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900/80" />
              </div>
              
              {/* Slider Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <div className="max-w-4xl animate-fadeIn">
                  <h2 className="text-2xl font-semibold text-amber-400 mb-4 font-['Playfair_Display']">
                    {heroSlides[currentImageIndex].title}
                  </h2>
                  <h1 className="text-6xl font-bold text-white mb-8 font-['Playfair_Display']">
                    {heroSlides[currentImageIndex].prompt}
                  </h1>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="absolute inset-x-0 bottom-10 flex justify-center space-x-4">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-amber-500 w-8' : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </section>

            {/* Category Sections */}
            {categories.map((category, index) => (
              <section key={index} className="py-20 bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className={`flex flex-col lg:flex-row items-center gap-12 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}>
                    <div className="flex-1">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                          <img
                            src={category.images[0]}
                            alt={category.title}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                          <img
                            src={category.images[1]}
                            alt={category.title}
                            className="w-full h-64 object-cover rounded-lg"
                          />
                        </div>
                        <div className="pt-8">
                          <img
                            src={category.images[2]}
                            alt={category.title}
                            className="w-full h-80 object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 text-center lg:text-left">
                      <h2 className="text-4xl font-bold text-white mb-6 font-['Playfair_Display']">
                        {category.title}
                      </h2>
                      <p className="text-xl text-slate-300 leading-relaxed">
                        {category.description}
                      </p>
                      <button className="mt-8 px-8 py-3 rounded-full bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400 transition-colors duration-300">
                        Explore Recipes
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </>
        )}
      </main>

      {/* Login Prompt */}
      <div
        className={`fixed bottom-4 right-4 bg-slate-800 text-slate-200 rounded-lg shadow-lg p-4 transform transition-all duration-300 ${
          showLoginPrompt ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        Please login to save recipes
      </div>

      {/* Auth Modals */}
      <AuthModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        type="login"
      />
      <AuthModal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        type="signup"
      />
    </div>
  );
}

export default App;
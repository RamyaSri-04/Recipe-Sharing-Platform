import React from 'react';
import { BookmarkPlus } from 'lucide-react';
import { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
  onSave: () => void;
  className?: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onSave, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm overflow-hidden group ${className}`}>
      <div className="relative aspect-video overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={onSave}
          className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow-sm hover:bg-white transition-colors"
        >
          <BookmarkPlus className="h-5 w-5 text-gray-700" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{recipe.description}</p>
        <div className="mt-4 flex items-center text-sm text-gray-500">
          <span>{recipe.cookTime} mins</span>
          <span className="mx-2">•</span>
          <span>{recipe.difficulty}</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
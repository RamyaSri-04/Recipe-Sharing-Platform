import React from 'react';
import { Recipe } from '../types';
import RecipeCard from './RecipeCard';

interface SearchResultsProps {
  recipes: Recipe[];
  query: string;
  onSave: () => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ recipes, query, onSave }) => {
  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(query.toLowerCase()) ||
    recipe.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-semibold mb-8">
        Search Results for "{query}"
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRecipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            recipe={recipe}
            onSave={onSave}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
import React, { useState, useMemo } from 'react';
import { Recipe } from '../types';
import { RECIPES } from '../data/recipes';
import { Search, SlidersHorizontal, Eye, AlertCircle } from 'lucide-react';

interface RecipeBrowserProps {
  onSelectRecipe: (recipe: Recipe) => void;
}

export default function RecipeBrowser({ onSelectRecipe }: RecipeBrowserProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'breakfast' | 'lunch' | 'snacks' | 'dinner'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [proteinFilter, setProteinFilter] = useState<string>('all');
  const [fatFilter, setFatFilter] = useState<string>('all');
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // Filter Logic
  const filteredRecipes = useMemo(() => {
    return RECIPES.filter((r) => {
      // 1. Category Filter
      if (activeCategory !== 'all' && r.category !== activeCategory) {
        return false;
      }

      // 2. Search Query Filter (name or ingredients list match)
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = r.name.toLowerCase().includes(query);
        const matchesIngredients = r.ingredients.some((ing) => ing.name.toLowerCase().includes(query));
        if (!matchesName && !matchesIngredients) {
          return false;
        }
      }

      // 3. Protein Base Sub-filter
      if (proteinFilter !== 'all') {
        const nameLower = r.name.toLowerCase();
        const ingredientsLower = r.ingredients.map((ing) => ing.name.toLowerCase()).join(' ');

        if (proteinFilter === 'egg') {
          const isEgg = nameLower.includes('egg') || nameLower.includes('omelette') || nameLower.includes('bhurji') || ingredientsLower.includes('egg');
          if (!isEgg) return false;
        } else if (proteinFilter === 'paneer') {
          const isPaneer = nameLower.includes('paneer') || ingredientsLower.includes('paneer');
          if (!isPaneer) return false;
        } else if (proteinFilter === 'chicken') {
          const isChicken = nameLower.includes('chicken') || ingredientsLower.includes('chicken');
          if (!isChicken) return false;
        } else if (proteinFilter === 'mutton') {
          const isMutton = nameLower.includes('mutton') || ingredientsLower.includes('mutton') || nameLower.includes('kheema');
          if (!isMutton) return false;
        } else if (proteinFilter === 'seafood') {
          const isSeafood = nameLower.includes('fish') || nameLower.includes('prawn') || ingredientsLower.includes('fish') || ingredientsLower.includes('prawn');
          if (!isSeafood) return false;
        }
      }

      // 4. Oil/Fat Base Sub-filter
      if (fatFilter !== 'all') {
        const ingredientsLower = r.ingredients.map((ing) => ing.name.toLowerCase()).join(' ');
        if (fatFilter === 'ghee' && !ingredientsLower.includes('ghee')) return false;
        if (fatFilter === 'butter' && !ingredientsLower.includes('butter')) return false;
        if (fatFilter === 'coconut_oil' && !ingredientsLower.includes('coconut oil') && !ingredientsLower.includes('coco-oil')) return false;
      }

      return true;
    });
  }, [activeCategory, searchQuery, proteinFilter, fatFilter]);

  const getDigestiveTag = (name: string, description: string): { label: string; style: string } => {
    const fullText = (name + ' ' + description).toLowerCase();
    if (fullText.includes('gourd') || fullText.includes('sorakaya') || fullText.includes('beerakaya') || fullText.includes('potlakaya')) {
      return { label: "Alkaline Gourd Shield", style: "border-[#2D4032]/25 bg-[#2D4032]/5 text-[#2D4032]" };
    }
    if (fullText.includes('spinach') || fullText.includes('palak') || fullText.includes('amaranth') || fullText.includes('cabbage')) {
      return { label: "Ulcer-soothing Greens", style: "border-[#2D4032]/30 bg-[#2D4032]/10 text-[#2D4032]" };
    }
    if (fullText.includes('shredded') || fullText.includes('minced') || fullText.includes('kheema') || fullText.includes('paste')) {
      return { label: "Mechanical Pre-digested", style: "border-[#8B4513]/25 bg-[#F9F7F2] text-[#8B4513]" };
    }
    if (fullText.includes('soup') || fullText.includes('broth') || fullText.includes('stew')) {
      return { label: "High-absorption Liquid", style: "border-[#2D4032]/20 bg-emerald-50 text-[#2D4032]" };
    }
    return { label: "Gentle Gastric Fiber", style: "border-[#1A1A1A]/10 bg-[#F9F7F2]/40 text-[#1A1A1A]/80" };
  };

  return (
    <div id="recipe-browser-root" className="space-y-6">
      {/* Category Selection Tabs - Modern Editorial Underlines */}
      <div className="flex space-x-1.5 overflow-x-auto pb-1" id="meal-type-nav">
        {['all', 'breakfast', 'lunch', 'snacks', 'dinner'].map((cat) => (
          <button
            key={cat}
            id={`tab-btn-${cat}`}
            onClick={() => setActiveCategory(cat as any)}
            className={`px-5 py-2 rounded-none text-xs font-serif capitalize transition-all select-none shrink-0 border-b-2 tracking-wide ${
              activeCategory === cat
                ? 'font-bold text-[#2D4032] border-[#2D4032] italic text-sm'
                : 'text-[#1A1A1A]/50 border-transparent hover:text-[#1A1A1A]'
            }`}
          >
            {cat === 'all' ? 'All Recipes (60)' : cat}
          </button>
        ))}
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white border border-[#1A1A1A]/10 p-5 space-y-4 shadow-xs">
        <div className="flex items-center space-x-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#1A1A1A]/40 absolute left-3 top-3.5" />
            <input
              type="text"
              placeholder="Search companion recipes or ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              id="search-input"
              className="w-full text-xs pl-9 pr-4 py-3 bg-[#F9F7F2]/40 border border-[#1A1A1A]/10 rounded-none focus:outline-none focus:border-[#2D4032] focus:bg-white transition font-sans"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            id="btn-toggle-filters"
            className={`px-4 py-3 border transition flex items-center space-x-2 text-xs font-bold uppercase tracking-wider ${
              showFilters || proteinFilter !== 'all' || fatFilter !== 'all'
                ? 'border-[#2D4032] bg-[#2D4032]/5 text-[#2D4032]'
                : 'border-[#1A1A1A]/10 bg-white text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="hidden sm:inline">Refinement</span>
          </button>
        </div>

        {/* Collapsible advanced filters */}
        {showFilters && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#1A1A1A]/10 animate-fadeIn" id="advanced-filters">
            {/* Protein Filter */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-[#1A1A1A]/60 uppercase tracking-widest block">Protein Core Base</label>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { value: 'all', label: 'All Core' },
                  { value: 'egg', label: 'Fresh Egg' },
                  { value: 'paneer', label: 'Cottage Paneer' },
                  { value: 'chicken', label: 'Chicken' },
                  { value: 'mutton', label: 'Mutton' },
                  { value: 'seafood', label: 'Prawn/Fish' },
                ].map((item) => (
                  <button
                    key={item.value}
                    id={`filter-protein-${item.value}`}
                    onClick={() => setProteinFilter(item.value)}
                    className={`px-3 py-1.5 border text-[10px] uppercase font-bold tracking-wider transition ${
                      proteinFilter === item.value
                        ? 'border-[#2D4032] bg-[#2D4032]/10 text-[#2D4032]'
                        : 'border-[#1A1A1A]/5 bg-[#F9F7F2]/40 hover:bg-[#F9F7F2] text-[#1A1A1A]/70'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Fat Filter */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-[#1A1A1A]/60 uppercase tracking-widest block">Essential Lipid Medium</label>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { value: 'all', label: 'All Mediums' },
                  { value: 'ghee', label: 'Pure Ghee' },
                  { value: 'butter', label: 'Grass-fed Butter' },
                  { value: 'coconut_oil', label: 'Coconut Oil' },
                ].map((item) => (
                  <button
                    key={item.value}
                    id={`filter-fat-${item.value}`}
                    onClick={() => setFatFilter(item.value)}
                    className={`px-3 py-1.5 border text-[10px] uppercase font-bold tracking-wider transition ${
                      fatFilter === item.value
                        ? 'border-[#2D4032] bg-[#2D4032]/10 text-[#2D4032]'
                        : 'border-[#1A1A1A]/5 bg-[#F9F7F2]/40 hover:bg-[#F9F7F2] text-[#1A1A1A]/70'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Recipe List Counter */}
      <div className="flex justify-between items-center text-xs text-[#1A1A1A]/50 font-serif italic px-1">
        <span>Displaying {filteredRecipes.length} premium therapeutic recipes</span>
        {(searchQuery || proteinFilter !== 'all' || fatFilter !== 'all') && (
          <button
            onClick={() => {
              setSearchQuery('');
              setProteinFilter('all');
              setFatFilter('all');
            }}
            id="btn-clear-all-filters"
            className="text-[#8B4513] hover:underline font-bold font-sans uppercase tracking-wider text-[10px]"
          >
            Clear Search
          </button>
        )}
      </div>

      {/* Grid of Recipes */}
      {filteredRecipes.length === 0 ? (
        <div className="bg-white border border-[#1A1A1A]/10 p-12 text-center" id="no-recipes-found">
          <AlertCircle className="w-10 h-10 text-[#1A1A1A]/20 mx-auto mb-3" />
          <h3 className="text-sm font-serif italic font-bold text-[#1A1A1A]">No matching therapeutic recipes found</h3>
          <p className="text-xs text-[#1A1A1A]/60 mt-1.5 max-w-sm mx-auto">Try relaxing your refinement filters or search criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="recipes-grid">
          {filteredRecipes.map((r) => {
            const tag = getDigestiveTag(r.name, r.gastricSafeNote);

            return (
              <div
                key={r.id}
                id={`recipe-card-${r.id}`}
                className="bg-white border border-[#1A1A1A]/10 hover:border-[#2D4032] transition-colors duration-300 flex flex-col h-full overflow-hidden"
              >
                {/* Content block with distinct high-contrast print spacing */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-[#1A1A1A]/5 pb-1.5">
                      <span className="text-[9px] uppercase font-mono font-bold text-[#1A1A1A]/50 tracking-widest">
                        {r.category}
                      </span>
                      <span className="text-[10px] text-[#2D4032] font-semibold uppercase tracking-wider font-sans">
                        ⏱ {r.prepTime + r.cookTime} min
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-lg text-[#1A1A1A] line-clamp-2 leading-snug group-hover:text-[#2D4032]" title={r.name}>
                      {r.name}
                    </h3>

                    {/* Specialized Digestibility Tag as a neat printed stamp */}
                    <div className="pt-0.5">
                      <span className={`inline-block text-[10px] px-2.5 py-0.5 rounded-none border font-bold uppercase tracking-tight ${tag.style}`}>
                        {tag.label}
                      </span>
                    </div>
                  </div>

                  {/* Macros Strip of ledger proportions */}
                  <div className="bg-[#F9F7F2]/50 p-2.5 border border-[#1A1A1A]/10 flex justify-between text-center font-serif text-[#1A1A1A]">
                    <div>
                      <span className="text-[8px] text-[#1A1A1A]/50 block uppercase font-sans tracking-tight">Kcal</span>
                      <span className="text-xs font-bold">{r.nutrients.calories}</span>
                    </div>
                    <div>
                      <span className="text-[8px] text-[#2D4032] block uppercase font-sans tracking-tight">Fat</span>
                      <span className="text-xs font-bold text-[#2D4032]">{r.nutrients.fat}g</span>
                    </div>
                    <div>
                      <span className="text-[8px] text-[#1A1A1A]/50 block uppercase font-sans tracking-tight">Prot</span>
                      <span className="text-xs font-bold">{r.nutrients.protein}g</span>
                    </div>
                    <div>
                      <span className="text-[8px] text-[#8B4513] block uppercase font-sans tracking-tight">Carbs</span>
                      <span className="text-xs font-bold text-[#8B4513]">{r.nutrients.netCarbs}g</span>
                    </div>
                  </div>
                </div>

                {/* Footer Action - Thin top border strip */}
                <button
                  onClick={() => onSelectRecipe(r)}
                  id={`btn-open-recipe-${r.id}`}
                  className="w-full py-3.5 border-t border-[#1A1A1A]/10 hover:bg-[#2D4032]/5 text-[11px] font-sans uppercase tracking-[0.15em] font-bold text-[#2D4032] hover:text-[#1E2B21] flex items-center justify-center space-x-1.5 transition select-none"
                >
                  <Eye className="w-4 h-4" />
                  <span>Begin Culinary Guide</span>
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

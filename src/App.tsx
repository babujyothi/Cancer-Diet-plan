/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Recipe, MealLog } from './types';
import GuidelinesPanel from './components/GuidelinesPanel';
import HydrationTracker from './components/HydrationTracker';
import MealTracker from './components/MealTracker';
import RecipeBrowser from './components/RecipeBrowser';
import RecipeDetail from './components/RecipeDetail';
import { BookOpen, UtensilsCrossed, Heart } from 'lucide-react';

export default function App() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  // Load persistent states
  const [currentWaterMl, setCurrentWaterMl] = useState<number>(() => {
    const saved = localStorage.getItem('vrk_water_ml');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [mealLogs, setMealLogs] = useState<MealLog[]>(() => {
    const saved = localStorage.getItem('vrk_meal_logs');
    return saved ? JSON.parse(saved) : [];
  });

  // Save states
  useEffect(() => {
    localStorage.setItem('vrk_water_ml', currentWaterMl.toString());
  }, [currentWaterMl]);

  useEffect(() => {
    localStorage.setItem('vrk_meal_logs', JSON.stringify(mealLogs));
  }, [mealLogs]);

  // Methods
  const handleAddWater = (amountMl: number) => {
    setCurrentWaterMl((prev) => prev + amountMl);
  };

  const handleLogMeal = (recipe: Recipe) => {
    const newLog: MealLog = {
      id: Math.random().toString(36).substring(2, 9),
      recipeId: recipe.id,
      recipeName: recipe.name,
      category: recipe.category,
      timestamp: new Date().toISOString(),
      servings: 1,
      fatGrams: recipe.nutrients.fat,
      proteinGrams: recipe.nutrients.protein,
      netCarbsGrams: recipe.nutrients.netCarbs,
      calories: recipe.nutrients.calories,
    };

    setMealLogs((prev) => [newLog, ...prev]);

    // Automatically trigger "Just Ate" lockout timer to block direct hydration drinking
    const lockoutButton = document.getElementById('btn-meal-lock');
    if (lockoutButton) {
      lockoutButton.click();
    }
  };

  const handleRemoveLog = (id: string) => {
    setMealLogs((prev) => prev.filter((log) => log.id !== id));
  };

  const handleClearLogs = () => {
    if (confirm('Are you sure you want to reset today\'s food and hydration log?')) {
      setMealLogs([]);
      setCurrentWaterMl(0);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#1A1A1A] font-sans antialiased border-[12px] border-[#2D4032]" id="app-wrapper">
      {/* Clinic Header Banner */}
      <header className="border-b border-[#1A1A1A]/10 py-8 px-4 md:px-12 bg-[#F9F7F2]/50" id="app-header">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4 text-center md:text-left">
            <div className="bg-[#2D4032] text-[#FDFCF8] p-3.5 shadow-md border border-[#1A1A1A]/10" id="header-logo-container">
              <BookOpen className="w-6 h-6" id="logo-icon" />
            </div>
            <div>
              <h1 className="font-serif italic text-4xl mb-1 text-[#2D4032] tracking-tight" id="header-title">
                VRK Gastric Diet Cookbook
              </h1>
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#1A1A1A]/70" id="header-subtitle">
                Comprehensive Companion Guide & Protective Kitchen • Gastric Reoccurrence Adaptations
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-xs bg-[#2D4032]/5 px-4 py-2 border border-[#2D4032]/20 text-[#2D4032] uppercase tracking-wider font-semibold" id="header-badge">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 shrink-0" />
            <span>100% Grains, Tamarind, & Sugar Free</span>
          </div>
        </div>
      </header>

      {/* Main Container Grid */}
      <main className="max-w-7xl mx-auto px-4 md:px-12 py-10" id="app-main-grid">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT PANEL: Clinical Guides, Hydration and Daily Budgets */}
          <section className="lg:col-span-5 space-y-8" id="left-sidebar-panel">
            {/* 1. VRK Pillars / Gastric Rules */}
            <GuidelinesPanel />

            {/* 2. Hydration Sip-Pacing Tracker */}
            <HydrationTracker 
              currentWaterMl={currentWaterMl} 
              onAddWater={handleAddWater} 
            />

            {/* 3. Daily Fat Budget & Reflux Overload Alert */}
            <MealTracker 
              logs={mealLogs} 
              onRemoveLog={handleRemoveLog} 
              onClearLogs={handleClearLogs} 
            />
          </section>

          {/* RIGHT PANEL: Interactive Cookbook Browser & Cooking Assistant */}
          <section className="lg:col-span-7 space-y-8" id="right-work-space">
            {selectedRecipe ? (
              <RecipeDetail
                recipe={selectedRecipe}
                onBack={() => setSelectedRecipe(null)}
                onLogMeal={handleLogMeal}
              />
            ) : (
              <div className="space-y-8">
                {/* Promo intro box styled like a physical editorial block */}
                <div className="bg-[#F9F7F2] border border-[#1A1A1A]/10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6" id="intro-promo-banner">
                  <div className="space-y-2">
                    <h2 className="font-serif italic text-2xl text-[#2D4032]">Choose a Therapeutic Meal</h2>
                    <p className="text-xs text-[#1A1A1A]/80 leading-relaxed max-w-md">
                      Explore 60 exact VRK recipes soft-cooked and crafted with perfect, reflux-safe ratios. Tap on any meal to launch the companion kitchen guide.
                    </p>
                  </div>
                  <div className="shrink-0 bg-[#2D4032]/5 text-[#2D4032] p-4 border border-[#2D4032]/20">
                    <UtensilsCrossed className="w-5 h-5" />
                  </div>
                </div>

                <RecipeBrowser 
                  onSelectRecipe={(recipe) => setSelectedRecipe(recipe)} 
                />
              </div>
            )}
          </section>

        </div>
      </main>

      {/* Humble Footer */}
      <footer className="border-t border-[#1A1A1A]/10 bg-[#F9F7F2]/30 py-8 text-center text-xs text-[#1A1A1A]/60" id="app-footer">
        <p className="font-serif italic text-sm text-[#2D4032]">Veeramachaneni Ramakrishna Diet guidelines adjusted for post-gastric recovery schedules.</p>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-[#1A1A1A]/40">Verify all supplements and electrolytes with a clinical nutritionist.</p>
      </footer>
    </div>
  );
}

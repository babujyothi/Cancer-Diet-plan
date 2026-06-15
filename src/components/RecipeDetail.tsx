import React, { useState, useEffect } from 'react';
import { Recipe } from '../types';
import { Clock, ArrowLeft, ChevronRight, Play, Pause, RotateCcw, AlertOctagon, Check, Flame } from 'lucide-react';

interface RecipeDetailProps {
  recipe: Recipe;
  onBack: () => void;
  onLogMeal: (recipe: Recipe) => void;
}

export default function RecipeDetail({ recipe, onBack, onLogMeal }: RecipeDetailProps) {
  const [cookingMode, setCookingMode] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});

  // Timer State
  const [timerSecondsLeft, setTimerSecondsLeft] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  // Initialize or reset timer when recipe or step changes
  useEffect(() => {
    // Determine step cook time if in cooking mode, or fall back to standard cookTime
    const initialTime = cookingMode ? 2 * 60 : recipe.cookTime * 60; // default to minutes
    setTimerSecondsLeft(initialTime);
    setIsTimerRunning(false);
  }, [recipe, cookingMode, currentStep]);

  // Timer Countdown Effect
  useEffect(() => {
    let timerId: any = null;
    if (isTimerRunning && timerSecondsLeft > 0) {
      timerId = setInterval(() => {
        setTimerSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (timerSecondsLeft === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      // Play a soft synthetic beep using browser AudioContext
      try {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(880, audioCtx.currentTime); // A5 note
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.3);
      } catch (e) {
        console.log('Audio feedback not supported in iframe', e);
      }
    }
    return () => clearInterval(timerId);
  }, [isTimerRunning, timerSecondsLeft]);

  const toggleTimer = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  const resetTimer = (secs: number = recipe.cookTime * 60) => {
    setTimerSecondsLeft(secs);
    setIsTimerRunning(false);
  };

  const toggleIngredient = (name: string) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const getCombinedSteps = () => {
    return [...recipe.prepSteps, ...recipe.cookSteps];
  };

  const totalSteps = getCombinedSteps().length;
  const activeStepText = getCombinedSteps()[currentStep];

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div id="recipe-detail-root" className="bg-[#FDFCF8] border border-[#1A1A1A]/10 p-6 md:p-8 space-y-6">
      {/* Back Link Row */}
      <div className="flex items-center justify-between pb-4 border-b border-[#1A1A1A]/10">
        <button
          onClick={onBack}
          id="btn-back-to-browser"
          className="flex items-center space-x-1.5 text-[#1A1A1A]/60 hover:text-[#2D4032] text-xs font-serif font-bold uppercase tracking-wider py-1 px-1 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>← Back to Cookbook</span>
        </button>

        <span className="capitalize text-[10px] bg-[#2D4032] px-2.5 py-0.5 text-[#FDFCF8] font-bold font-mono uppercase tracking-widest">
          {recipe.category}
        </span>
      </div>

      {/* Main Recipe Info Panel */}
      {!cookingMode ? (
        <div className="space-y-8 animate-fadeIn" id="recipe-standard-view">
          
          {/* Header Block matching Palak Chicken exactly */}
          <div className="pb-6 border-b border-[#1A1A1A]/10">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/60 font-semibold block mb-1">Selected Recipe</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#2D4032] mt-1 uppercase font-black tracking-tight leading-none" id="recipe-name">
              {recipe.name}
            </h2>
            <p className="text-xs italic text-[#1A1A1A]/60 mt-3 font-serif">
              Servings: {recipe.servings} Person • Prep time: {recipe.prepTime} mins • Cook time: {recipe.cookTime} mins
            </p>
          </div>

          {/* Gastric Note Callout - Styled like a physical booklet insert */}
          <div className="border border-[#8B4513]/25 bg-[#F9F7F2]/60 p-5 flex items-start space-x-3.5" id="gastric-health-alert">
            <AlertOctagon className="w-5 h-5 text-[#8B4513] mt-0.5 shrink-0" />
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#8B4513] block">Gastric Protective Measures</span>
              <p className="text-xs text-[#1A1A1A]/85 mt-1 leading-relaxed font-serif italic">
                "{recipe.gastricSafeNote}"
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Ingredients Checkoff */}
            <div className="md:col-span-7 space-y-4">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/70 border-b border-[#1A1A1A]/15 pb-1 block">
                Required Ingredients
              </h3>
              <div className="space-y-1" id="ingredients-list">
                {recipe.ingredients.map((ing, i) => (
                  <label
                    key={i}
                    id={`ing-item-${i}`}
                    className={`flex items-start space-x-3 py-2 px-1.5 border-b border-[#1A1A1A]/5 cursor-pointer transition select-none ${
                      checkedIngredients[ing.name]
                        ? 'text-[#1A1A1A]/35 line-through italic'
                        : 'hover:bg-[#F9F7F2]/50 text-[#1A1A1A]'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={!!checkedIngredients[ing.name]}
                      onChange={() => toggleIngredient(ing.name)}
                      className="mt-0.5 rounded border-[#1A1A1A]/20 text-[#2D4032] focus:ring-[#2D4032] w-3.5 h-3.5"
                    />
                    <div className="text-xs leading-none">
                      <span className="font-mono font-bold text-[#8B4513] mr-1">{ing.amount}</span> {ing.name}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Equipment & Nutrition Column */}
            <div className="md:col-span-5 space-y-6">
              {/* Equipment Grid */}
              <div className="bg-[#F9F7F2] p-5 border border-[#1A1A1A]/10 space-y-3">
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/70 border-b border-[#1A1A1A]/10 pb-1">
                  Preparation Meta
                </h3>
                <ul className="space-y-1.5 text-xs text-[#1A1A1A]/80 font-mono" id="equipment-list">
                  {recipe.equipment.map((eq, i) => (
                    <li key={i} className="flex items-center space-x-1.5">
                      <div className="w-1.5 h-1.5 bg-[#2D4032] shrink-0" />
                      <span className="truncate">{eq}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exact Nutrition - Styled exactly like the design's "Nutritional Audit" */}
              <div className="bg-[#2D4032] text-[#FDFCF8] p-5 border border-[#1A1A1A]/10">
                <h3 className="text-[10px] font-bold uppercase tracking-widest mb-4 text-[#FDFCF8] opacity-75 border-b border-white/20 pb-1">
                  Nutritional Audit
                </h3>
                <div className="grid grid-cols-2 gap-y-4 text-left" id="macros-grid">
                  <div>
                    <p className="text-2xl font-serif text-white">{recipe.nutrients.calories}</p>
                    <p className="text-[9px] uppercase tracking-wider text-white/70 font-sans">Calories</p>
                  </div>
                  <div>
                    <p className="text-2xl font-serif text-white">{recipe.nutrients.fat}g</p>
                    <p className="text-[9px] uppercase tracking-wider text-white/70 font-sans">Healthy Fats</p>
                  </div>
                  <div>
                    <p className="text-2xl font-serif text-white">{recipe.nutrients.protein}g</p>
                    <p className="text-[9px] uppercase tracking-wider text-white/70 font-sans">Protein</p>
                  </div>
                  <div>
                    <p className="text-2xl font-serif text-white">{recipe.nutrients.netCarbs}g</p>
                    <p className="text-[9px] uppercase tracking-wider text-white/70 font-sans">Net Carbs</p>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-white/20 text-[10px] text-[#FDFCF8]/90 font-sans tracking-wide leading-relaxed">
                  <strong>Therapeutic Profile:</strong> {recipe.nutrients.vitamins}. Rich in digestive co-factors.
                </div>
              </div>
            </div>
          </div>

          {/* Sauté / Stew Instructions Outline - Staged beautifully */}
          <div className="space-y-5 pt-3 border-t border-[#1A1A1A]/10 animate-fadeIn" id="instructions-outline">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]/85">
              Cooking Methodology Summary
            </h3>

            <div className="space-y-4">
              {recipe.prepSteps.map((step, i) => (
                <div key={`p-${i}`} className="flex items-start gap-4 text-xs text-[#1A1A1A]/80">
                  <span className="font-serif italic text-2xl text-[#2D4032]/40 shrink-0 leading-none">
                    P{i + 1}
                  </span>
                  <p className="leading-relaxed pt-0.5">{step}</p>
                </div>
              ))}
              {recipe.cookSteps.map((step, i) => (
                <div key={`c-${i}`} className="flex items-start gap-4 text-xs text-[#1A1A1A] font-medium">
                  <span className="font-serif italic text-2xl text-[#8B4513]/40 shrink-0 leading-none">
                    C{i + 1}
                  </span>
                  <p className="leading-relaxed pt-0.5">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-[#1A1A1A]/10 font-sans" id="detail-actions">
            <button
              onClick={() => setCookingMode(true)}
              id="btn-cook-mode"
              className="flex-1 py-3.5 px-6 bg-[#2D4032] hover:bg-[#1E2B21] text-[#FDFCF8] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-2"
            >
              <Flame className="w-4 h-4" />
              <span>Begin Interactive Cooking Guide</span>
            </button>
            <button
              onClick={() => onLogMeal(recipe)}
              id="btn-log-meal-direct"
              className="py-3.5 px-6 border border-[#1A1A1A]/15 bg-white text-[#1A1A1A] hover:bg-[#F9F7F2] font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              Consume & Log Meal
            </button>
          </div>
        </div>
      ) : (
        /* Cooking Companion Mode - Heavy Editorial Splendour */
        <div className="space-y-8 animate-fadeIn" id="recipe-cooking-mode">
          <div className="flex items-start justify-between pb-4 border-b border-[#1A1A1A]/10">
            <div>
              <span className="text-[9px] font-bold text-[#8B4513] tracking-widest uppercase block mb-1">
                Active Step-by-Step Guidance
              </span>
              <h2 className="text-2xl font-serif text-[#2D4032] font-bold">{recipe.name}</h2>
            </div>
            <button
              onClick={() => setCookingMode(false)}
              id="btn-exit-cooking-mode"
              className="text-xs uppercase tracking-widest font-mono font-bold text-[#1A1A1A]/50 hover:text-red-700 transition"
            >
              Exit Assistant
            </button>
          </div>

          {/* Step Progress Indicators */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#1A1A1A]/60">
              <span>Section: Step {currentStep + 1} of {totalSteps}</span>
              <span>{Math.round(((currentStep + 1) / totalSteps) * 100)}% Complete</span>
            </div>
            {/* Minimalist print progress bars */}
            <div className="flex space-x-1 h-2 pt-0.5 bg-[#F9F7F2] border border-[#1A1A1A]/10 p-0.5">
              {getCombinedSteps().map((_, idx) => (
                <div
                  key={idx}
                  className={`flex-1 transition-all duration-300 ${
                    idx === currentStep
                      ? 'bg-[#2D4032]'
                      : idx < currentStep
                      ? 'bg-[#2D4032]/45'
                      : 'bg-transparent'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Active Step Page - Styled exactly like the Method steps of the design */}
          <div className="border border-[#1A1A1A]/10 bg-[#F9F7F2]/50 p-8 md:p-10 flex gap-6" id="active-step-panel">
            <span className="text-5xl font-serif italic text-[#2D4032] opacity-30 shrink-0 leading-none">
              {(currentStep + 1).toString().padStart(2, '0')}
            </span>
            <div className="space-y-2">
              <h4 className="font-bold text-xs uppercase tracking-widest text-[#8B4513]">
                {currentStep < recipe.prepSteps.length ? 'Preparatory Method' : 'Active Heat Sauté'}
              </h4>
              <p className="text-base text-[#1A1A1A] leading-relaxed italic font-serif" id="active-step-text">
                {activeStepText}
              </p>
            </div>
          </div>

          {/* Kitchen Timer Component - Styled like high contrast print element */}
          <div className="border border-[#1A1A1A]/10 bg-[#FDFCF8] p-4 flex items-center justify-between" id="kitchen-timer">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-[#2D4032]/5 text-[#2D4032] border border-[#2D4032]/20">
                <Clock className="w-5 h-5 shrink-0" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-[#1A1A1A]/70 block">Mechanical Interval</span>
                <span className="text-[10px] text-[#1A1A1A]/50 font-mono">Use for step durations</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className={`text-2xl font-bold font-mono tracking-wider ${timerSecondsLeft === 0 ? 'text-[#8B4513] animate-pulse' : 'text-[#1A1A1A]'}`}>
                {formatTimer(timerSecondsLeft)}
              </span>

              <div className="flex space-x-1">
                <button
                  onClick={toggleTimer}
                  disabled={timerSecondsLeft === 0}
                  id="btn-timer-toggle"
                  className="p-2 border border-[#1A1A1A]/15 text-[#1A1A1A] bg-white hover:bg-[#F9F7F2] transition disabled:opacity-45"
                >
                  {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => resetTimer(recipe.cookTime * 60)}
                  id="btn-timer-reset"
                  className="p-2 border border-[#1A1A1A]/15 text-[#1A1A1A]/50 bg-white hover:text-[#1A1A1A] transition"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Navigating Controls */}
          <div className="flex items-center justify-between pt-6 border-t border-[#1A1A1A]/10 font-sans">
            <button
              onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
              disabled={currentStep === 0}
              id="btn-cooking-prev"
              className="py-3 px-5 border border-[#1A1A1A]/15 bg-white hover:bg-[#F9F7F2] disabled:opacity-45 text-xs font-bold uppercase tracking-wider transition-colors select-none"
            >
              Previous Step
            </button>

            {currentStep < totalSteps - 1 ? (
              <button
                onClick={() => setCurrentStep((prev) => prev + 1)}
                id="btn-cooking-next"
                className="py-3 px-6 bg-[#2D4032] hover:bg-[#1E2B21] text-[#FDFCF8] text-xs font-bold uppercase tracking-wider transition-colors flex items-center space-x-1.5"
              >
                <span>Explore Next Step</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => {
                  onLogMeal(recipe);
                  setCookingMode(false);
                }}
                id="btn-cooking-done"
                className="py-3 px-6 bg-[#2D4032] hover:bg-[#1E2B21] text-[#FDFCF8] text-xs font-bold uppercase tracking-wider transition-colors flex items-center space-x-1.5"
              >
                <Check className="w-4 h-4" />
                <span>Harvest & Complete Log</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import { MealLog } from '../types';
import { Utensils, AlertCircle, Trash2, HeartPulse } from 'lucide-react';

interface MealTrackerProps {
  logs: MealLog[];
  onRemoveLog: (id: string) => void;
  onClearLogs: () => void;
}

export default function MealTracker({ logs, onRemoveLog, onClearLogs }: MealTrackerProps) {
  // Aggregate daily nutrients
  const totals = logs.reduce(
    (acc, log) => {
      acc.calories += log.calories;
      acc.fat += log.fatGrams;
      acc.protein += log.proteinGrams;
      acc.netCarbs += log.netCarbsGrams;
      return acc;
    },
    { calories: 0, fat: 0, protein: 0, netCarbs: 0 }
  );

  // Define targets based on VRK Guidelines (70g-100g fat, <20g carbs)
  const fatMinTarget = 70;
  const fatMaxTarget = 100;
  const netCarbsLimit = 20;

  // Detect acid reflux fat overload: single meal with fat > 25g
  const reflexRiskMeal = logs.find((log) => log.fatGrams > 25);

  return (
    <div id="meal-tracker-container" className="bg-white border border-[#1A1A1A]/10 p-6 md:p-8 space-y-6">
      {/* Tracker Card Header */}
      <div className="flex items-start justify-between pb-4 border-b border-[#1A1A1A]/10">
        <div className="space-y-1">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#8B4513] font-bold">Nutrient Ledger</span>
          <h2 className="font-serif text-2xl text-[#2D4032]" id="tracker-title">Daily Meal Tracker</h2>
          <p className="text-xs text-[#1A1A1A]/60 font-sans">Spreading fat loads to support digestion</p>
        </div>
        {logs.length > 0 && (
          <button
            onClick={onClearLogs}
            id="btn-clear-tracker"
            className="text-[10px] uppercase tracking-wider font-mono font-bold bg-[#8B4513]/10 hover:bg-[#8B4513]/15 text-[#8B4513] border border-[#8B4513]/25 px-2.5 py-1.5 transition flex items-center gap-1"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Reset Day</span>
          </button>
        )}
      </div>

      {/* Grid of Nutrients styled like ledger cells */}
      <div className="grid grid-cols-4 border border-[#1A1A1A]/10 divide-x divide-[#1A1A1A]/10 bg-[#F9F7F2]/30 text-center font-serif">
        {/* Calories */}
        <div className="p-4">
          <span className="text-[9px] uppercase font-sans tracking-widest font-bold text-[#1A1A1A]/50 block">Calories</span>
          <span className="text-xl font-bold text-[#1A1A1A] block mt-1" id="total-kcal">
            {totals.calories}
          </span>
          <span className="text-[9px] font-sans text-[#1A1A1A]/60 block mt-0.5">kcal</span>
        </div>

        {/* Fat - The Key VRK Driver */}
        <div className="p-4 bg-[#2D4032]/5">
          <span className="text-[9px] uppercase font-sans tracking-widest font-bold text-[#2D4032] block">Golden Fat</span>
          <span className="text-xl font-bold text-[#2D4032] block mt-1" id="total-fat">
            {totals.fat}g
          </span>
          <span className="text-[9px] font-sans text-[#2D4032]/85 block font-bold mt-0.5">
            {fatMinTarget}-{fatMaxTarget}g Gol
          </span>
        </div>

        {/* Protein */}
        <div className="p-4">
          <span className="text-[9px] uppercase font-sans tracking-widest font-bold text-[#1A1A1A]/50 block">Protein</span>
          <span className="text-xl font-bold text-[#1A1A1A] block mt-1" id="total-protein">
            {totals.protein}g
          </span>
          <span className="text-[9px] font-sans text-[#1A1A1A]/60 block mt-0.5">muscle</span>
        </div>

        {/* Net Carbs */}
        <div className="p-4">
          <span className="text-[9px] uppercase font-sans tracking-widest font-bold text-red-800 block">Net Carbs</span>
          <span className="text-xl font-bold text-red-950 block mt-1" id="total-carbs">
            {totals.netCarbs}g
          </span>
          <span className="text-[9px] font-sans text-red-800 block font-bold mt-0.5">Lmt: &lt;{netCarbsLimit}g</span>
        </div>
      </div>

      {/* Acid Reflux Fat Overload Alert */}
      {reflexRiskMeal && (
        <div className="border border-[#8B4513]/25 bg-amber-50/70 p-4 space-y-2.5" id="reflux-warning">
          <div className="flex items-center space-x-2 text-[#8B4513]">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span className="text-xs uppercase tracking-wider font-bold">Reflux Warning: High Meal Lipid Density</span>
          </div>
          <p className="text-xs text-[#1A1A1A]/85 leading-relaxed font-serif italic">
            "Your logged option <strong>"{reflexRiskMeal.recipeName}"</strong> contains {reflexRiskMeal.fatGrams}g of pure fat. Splitting this into 2 spaced half-portions protects the mucosal lining from gastric sluggishness."
          </p>
          <p className="text-[11px] text-[#2D4032] bg-[#2D4032]/5 border border-[#2D4032]/10 p-2.5 font-sans font-medium">
            💡 <strong>Surgical Guard:</strong> Divide your cooked batch into half-servings. Consume the remainder 3 hours later to maximize painless assimilation.
          </p>
        </div>
      )}

      {/* Progress towards targets - Classic print sliders */}
      <div className="space-y-4 pt-2 border-t border-[#1A1A1A]/10" id="target-bars">
        <h4 className="text-xs uppercase tracking-widest font-mono text-[#1A1A1A]/50 font-bold">Purity Audit Status</h4>

        {/* Fat Progress */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <span className="text-[#1A1A1A]/70 font-serif italic">VRK Daily Golden Fat Balance</span>
            <span className="font-mono font-bold text-[#1A1A1A]">
              {totals.fat}g / {fatMinTarget}g (Minimum standard)
            </span>
          </div>
          <div className="w-full bg-[#F9F7F2] h-3.5 border border-[#1A1A1A]/10 p-0.5">
            <div
              className={`h-full transition-all duration-300 ${
                totals.fat >= fatMinTarget
                  ? 'bg-[#2D4032]'
                  : totals.fat > 40
                  ? 'bg-[#8B4513]'
                  : 'bg-[#1A1A1A]/30'
              }`}
              style={{ width: `${Math.min(100, (totals.fat / fatMinTarget) * 100)}%` }}
            />
          </div>
        </div>

        {/* Carbs Progress */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <span className="text-red-900 font-serif italic">Therapeutic Ketogenic Limit (Net Carbs)</span>
            <span className={`font-mono font-bold ${totals.netCarbs >= netCarbsLimit ? 'text-red-700' : 'text-[#1A1A1A]'}`}>
              {totals.netCarbs}g / {netCarbsLimit}g (Hard Roof)
            </span>
          </div>
          <div className="w-full bg-[#F9F7F2] h-3.5 border border-[#1A1A1A]/10 p-0.5">
            <div
              className={`h-full transition-all duration-300 ${
                totals.netCarbs >= netCarbsLimit ? 'bg-red-700' : 'bg-[#2D4032]'
              }`}
              style={{ width: `${Math.min(100, (totals.netCarbs / netCarbsLimit) * 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Logged Item List */}
      <div className="space-y-3 pt-2 border-t border-[#1A1A1A]/10">
        <span className="text-xs uppercase tracking-widest font-mono text-[#1A1A1A]/60 block">Logged Food Log</span>
        {logs.length === 0 ? (
          <div className="text-center py-8 border border-dashed border-[#1A1A1A]/20 bg-[#F9F7F2]/30" id="empty-logs">
            <HeartPulse className="w-8 h-8 text-[#1A1A1A]/30 mx-auto mb-2" />
            <p className="text-xs font-serif italic text-[#1A1A1A]/50">No culinary components logged today. Prepare a recipe from the browser to write to this book log!</p>
          </div>
        ) : (
          <div className="divide-y divide-[#1A1A1A]/10 max-h-48 overflow-y-auto pr-1" id="log-list">
            {logs.map((log) => (
              <div key={log.id} className="flex items-center justify-between py-2.5 text-xs font-sans" id={`log-item-${log.id}`}>
                <div className="flex-1 min-w-0 pr-2">
                  <div className="flex items-center space-x-1.5">
                    <span className="capitalize text-[9px] bg-[#2D4032] text-white px-2 py-0.5 font-bold font-mono uppercase tracking-tight">
                      {log.category}
                    </span>
                    <span className="font-serif font-bold text-[#1A1A1A] truncate block">{log.recipeName}</span>
                  </div>
                  <div className="text-[10px] text-[#1A1A1A]/55 flex space-x-2 mt-1 font-mono">
                    <span>F: {log.fatGrams}g</span>
                    <span>•</span>
                    <span>P: {log.proteinGrams}g</span>
                    <span>•</span>
                    <span>C: {log.netCarbsGrams}g</span>
                    <span>•</span>
                    <span>{log.calories} kcal</span>
                  </div>
                </div>
                <button
                  onClick={() => onRemoveLog(log.id)}
                  id={`btn-remove-log-${log.id}`}
                  className="text-[#1A1A1A]/30 hover:text-red-700 transition p-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

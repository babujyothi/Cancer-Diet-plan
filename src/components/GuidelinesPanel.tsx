import React, { useState } from 'react';
import { ShieldCheck, Flame, Droplet, Sparkles, AlertTriangle } from 'lucide-react';

export default function GuidelinesPanel() {
  const [activeTab, setActiveTab] = useState<'pillars' | 'gastric' | 'allowed'>('pillars');

  return (
    <div id="guidelines-card" className="bg-white border border-[#1A1A1A]/10 p-6 md:p-8 space-y-6">
      {/* Editorial Card Header */}
      <div className="flex items-start justify-between pb-4 border-b border-[#1A1A1A]/10">
        <div className="space-y-1">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#8B4513] font-bold">Clinical Protocol</span>
          <h2 className="font-serif text-2xl text-[#2D4032] font-medium" id="guidelines-title">Gastric Safeguards & Pillars</h2>
          <p className="text-xs text-[#1A1A1A]/60">Veeramachaneni Diet adaptations for gentle digestive transit</p>
        </div>
        <div className="text-[#2D4032]/80 bg-[#2D4032]/5 p-2.5 border border-[#2D4032]/15">
          <ShieldCheck className="w-5 h-5" id="guardianship-icon" />
        </div>
      </div>

      {/* Tabs styled like traditional index separators */}
      <div className="flex border-b border-[#1A1A1A]/10 text-xs font-serif" id="guidelines-tabs">
        <button
          onClick={() => setActiveTab('pillars')}
          id="btn-tab-pillars"
          className={`flex-1 pb-2.5 text-center transition-all ${
            activeTab === 'pillars'
              ? 'text-[#2D4032] font-bold border-b-2 border-[#2D4032] italic text-sm'
              : 'text-[#1A1A1A]/50 hover:text-[#1A1A1A] font-medium'
          }`}
        >
          The 4 Pillars
        </button>
        <button
          onClick={() => setActiveTab('gastric')}
          id="btn-tab-gastric"
          className={`flex-1 pb-2.5 text-center transition-all ${
            activeTab === 'gastric'
              ? 'text-[#2D4032] font-bold border-b-2 border-[#2D4032] italic text-sm'
              : 'text-[#1A1A1A]/50 hover:text-[#1A1A1A] font-medium'
          }`}
        >
          Gastric Safeguards
        </button>
        <button
          onClick={() => setActiveTab('allowed')}
          id="btn-tab-allowed"
          className={`flex-1 pb-2.5 text-center transition-all ${
            activeTab === 'allowed'
              ? 'text-[#2D4032] font-bold border-b-2 border-[#2D4032] italic text-sm'
              : 'text-[#1A1A1A]/50 hover:text-[#1A1A1A] font-medium'
          }`}
        >
          Approved Elements
        </button>
      </div>

      {/* Tab Content 1: 4 Pillars */}
      {activeTab === 'pillars' && (
        <div className="space-y-6 pt-2 animate-fadeIn" id="pillars-content">
          <div className="flex items-start gap-4 pb-4 border-b border-[#1A1A1A]/5">
            <span className="font-serif italic text-3xl text-[#2D4032]/40 shrink-0 leading-none">01</span>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-tight text-[#2D4032]">Pillar 1: Golden Fats Dose (70g - 100g)</h4>
              <p className="text-xs text-[#1A1A1A]/75 mt-1 leading-relaxed">
                Consume pure Ghee, grass-fed Butter, or cold-pressed Coconut Oil daily. Fat is your primary clean energy source. No carbohydrates or grains are allowed.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 pb-4 border-b border-[#1A1A1A]/5">
            <span className="font-serif italic text-3xl text-[#2D4032]/40 shrink-0 leading-none">02</span>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-tight text-[#2D4032]">Pillar 2: Hyper Hydration (4 Liters)</h4>
              <p className="text-xs text-[#1A1A1A]/75 mt-1 leading-relaxed">
                Sip 4 liters of water daily. For Gastric cases, this must be taken slowly <span className="italic font-semibold">between</span> meals, never during meals to safeguard gastric acid concentration.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 pb-4 border-b border-[#1A1A1A]/5">
            <span className="font-serif italic text-3xl text-[#2D4032]/40 shrink-0 leading-none">03</span>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-tight text-[#2D4032]">Pillar 3: Sunshine Lemons (3 Lemons)</h4>
              <p className="text-xs text-[#1A1A1A]/75 mt-1 leading-relaxed">
                Extract juice from 3 fresh lemons daily. Rich in organic Vitamin C and behaves as a potent alkaline converter inside the digestive tract. Raw intake only, no sugar!
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="font-serif italic text-3xl text-[#2D4032]/40 shrink-0 leading-none">04</span>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-tight text-[#2D4032]">Pillar 4: Micronutrient Shield</h4>
              <p className="text-xs text-[#1A1A1A]/75 mt-1 leading-relaxed">
                Take high-quality multivitamins, mineral supplements, and sea salt daily to prevent system depletion during deep ketogenesis.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab Content 2: Gastric Reoccurrence Safeguards */}
      {activeTab === 'gastric' && (
        <div className="space-y-4 pt-2 animate-fadeIn" id="gastric-content">
          <div className="border border-[#2D4032]/30 bg-[#2D4032]/5 p-5 space-y-3">
            <div className="flex items-center space-x-2 text-[#2D4032]">
              <AlertTriangle className="w-5 h-5" />
              <h3 className="font-serif italic text-base font-bold">Gastric Adaptation Mandates</h3>
            </div>
            <p className="text-xs text-[#1A1A1A]/85 leading-relaxed">
              Active recovery or mucosal sensitivity requires gentle mechanical tweaks to the standard heavy VRK physical diet to ease pyloric transit.
            </p>

            <ul className="space-y-3.5 text-xs text-[#1A1A1A]/90 pt-2 border-t border-[#2D4032]/10">
              <li className="flex items-start gap-2.5">
                <span className="text-[#8B4513] font-serif font-bold">•</span>
                <span className="leading-relaxed">
                  <strong>Soft-Sautéed & Well-Cooked Veggies:</strong> Raw fibers scratch sensitive linings. Steaming or puréeing ensures a pre-digested state.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#8B4513] font-serif font-bold">•</span>
                <span className="leading-relaxed">
                  <strong>Distribute Fat (Anti-Reflux Window):</strong> Refrain from single large doses. Spacing lipids into smaller 20-25g portions across 3-4 meals blocks mechanical stomach backup.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#8B4513] font-serif font-bold">•</span>
                <span className="leading-relaxed">
                  <strong>The Liquid Sipping Shield:</strong> Strictly pause water 30 mins before and 45 mins after eating. Diluting enzymes induces gas swelling and acid backflow.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#8B4513] font-serif font-bold">•</span>
                <span className="leading-relaxed">
                  <strong>Lemon Citrus over Glandular Tamarind:</strong> Swapping heavy tartaric tamarinds with pristine fresh lemon juice offers high alkalinity conversion.
                </span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Tab Content 3: Allowed Elements */}
      {activeTab === 'allowed' && (
        <div className="space-y-4 pt-2 animate-fadeIn" id="allowed-content">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#F9F7F2] p-4 border border-[#1A1A1A]/10">
              <span className="font-serif text-[#2D4032] italic text-sm block mb-2 border-b border-[#2D4032]/20 pb-1">Approved Lipids</span>
              <ul className="space-y-1.5 text-[11px] text-[#1A1A1A]/80 font-mono">
                <li>• Pure Cow Ghee</li>
                <li>• Unsalted Cow Butter</li>
                <li>• Virgin Coconut Oil</li>
                <li>• Extra Virgin Olive Oil</li>
              </ul>
            </div>
            <div className="bg-[#F9F7F2] p-4 border border-[#1A1A1A]/10">
              <span className="font-serif text-[#2D4032] italic text-sm block mb-2 border-b border-[#2D4032]/20 pb-1">Soft Protein Core</span>
              <ul className="space-y-1.5 text-[11px] text-[#1A1A1A]/80 font-mono">
                <li>• Organic Fresh Eggs</li>
                <li>• Creamy Block Paneer</li>
                <li>• Pure Chicken Breast</li>
                <li>• Delicate Prawn/Fish</li>
              </ul>
            </div>
          </div>

          <div className="border-2 border-dashed border-red-700/20 bg-red-50/20 p-4">
            <span className="font-serif text-red-800 text-xs font-bold block mb-2">Zero-Tolerance Exclusions</span>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-[10px] text-red-950 font-bold uppercase tracking-wide">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-red-700"></div>
                <span>No Grain / Flour</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-red-700"></div>
                <span>No Pulses / Dals</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-red-700"></div>
                <span>No Refined Sugar</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-red-700"></div>
                <span>No Sour Tamarind</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

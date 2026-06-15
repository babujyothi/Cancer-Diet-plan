import React, { useState, useEffect } from 'react';
import { Droplet, Beer, Clock, AlertOctagon } from 'lucide-react';

interface HydrationTrackerProps {
  currentWaterMl: number;
  onAddWater: (amountMl: number) => void;
}

export default function HydrationTracker({ currentWaterMl, onAddWater }: HydrationTrackerProps) {
  const goalMl = 4000; // 4 Liters rule
  const percentage = Math.min(100, Math.round((currentWaterMl / goalMl) * 100));

  // Lockout State: 45 minutes = 2700 seconds
  const [lockoutSecondsLeft, setLockoutSecondsLeft] = useState<number>(0);
  const [isLockoutActive, setIsLockoutActive] = useState<boolean>(false);

  // Sip reminder timer: 15 minutes = 900 seconds
  const [sipSecondsLeft, setSipSecondsLeft] = useState<number>(900);

  // Handle countdowns
  useEffect(() => {
    const interval = setInterval(() => {
      // Lockout Countdown
      if (lockoutSecondsLeft > 0) {
        setLockoutSecondsLeft((prev) => prev - 1);
      } else if (isLockoutActive) {
        setIsLockoutActive(false);
      }

      // Sip Advisor Countdown
      if (sipSecondsLeft > 0) {
        setSipSecondsLeft((prev) => prev - 1);
      } else {
        // Reset to 15 mins
        setSipSecondsLeft(900);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [lockoutSecondsLeft, isLockoutActive, sipSecondsLeft]);

  const triggerPostMealLockout = () => {
    // 45 mins lockout
    setLockoutSecondsLeft(45 * 60);
    setIsLockoutActive(true);
  };

  const cancelLockout = () => {
    setLockoutSecondsLeft(0);
    setIsLockoutActive(false);
  };

  const formatTime = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div id="hydration-card" className="bg-white border border-[#1A1A1A]/10 p-6 md:p-8 space-y-6">
      {/* Title block */}
      <div className="flex items-start justify-between pb-4 border-b border-[#1A1A1A]/10">
        <div className="space-y-1">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#8B4513] font-bold">Liquid Shield</span>
          <h2 className="font-serif text-2xl text-[#2D4032]" id="water-title">Hydration Pacing</h2>
          <p className="text-xs text-[#1A1A1A]/60">Required: 4.0L (4,000 ml) post-gastric pacing</p>
        </div>
        <div className="text-right">
          <span className="font-serif italic text-3xl font-bold text-[#1A1A1A]" id="water-display">
            {currentWaterMl} <span className="text-xs font-sans tracking-tight text-[#1A1A1A]/50 font-normal">/ {goalMl} ml</span>
          </span>
          <span className="text-[11px] uppercase tracking-wider text-[#2D4032] font-semibold block mt-1">{percentage}% Met</span>
        </div>
      </div>

      {/* Progress Bar - Thin Print Aesthetic */}
      <div className="space-y-2">
        <div className="w-full bg-[#F9F7F2] h-4.5 p-0.5 border border-[#1A1A1A]/10">
          <div
            className="bg-[#2D4032] h-3.5 transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-[#1A1A1A]/50 font-mono">
          <span>0 ml</span>
          <span>2,000 ml</span>
          <span>4,000 ml (Golden Target)</span>
        </div>
      </div>

      {/* Warnings & Lockouts for Gastric reoccurrence */}
      {isLockoutActive ? (
        <div className="bg-amber-50/70 border border-[#8B4513]/25 p-4 space-y-3" id="reflux-blocker">
          <div className="flex items-center space-x-2 text-[#8B4513]">
            <AlertOctagon className="w-5 h-5 shrink-0" />
            <span className="text-xs uppercase tracking-wider font-bold">Post-Meal Reflux Lockout Active</span>
          </div>
          <p className="text-xs text-[#1A1A1A]/85 leading-relaxed italic font-serif">
            "Your stomach is currently digesting a solid meal. Diluting digestive juices or bloating stomach volume will trigger immediately heavy gastric acid reoccurrence."
          </p>
          <div className="flex items-center justify-between pt-1 border-t border-[#8B4513]/10">
            <span className="text-xs font-mono font-bold text-[#2D4032] bg-[#2D4032]/5 px-2.5 py-1 border border-[#2D4032]/10">
              Sip Safe clock: {formatTime(lockoutSecondsLeft)}
            </span>
            <button
              onClick={cancelLockout}
              id="btn-cancel-lockout"
              className="text-[10px] text-[#1A1A1A]/50 hover:text-red-700 underline font-mono tracking-tighter"
            >
              Force Override
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-[#2D4032]/5 border border-[#2D4032]/15 p-4 flex items-center justify-between" id="sip-manager">
          <div className="flex items-center space-x-3">
            <div className="bg-[#2D4032]/10 p-2 text-[#2D4032]">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#2D4032] block uppercase tracking-tight">Sip-Pacing Coach</span>
              <span className="text-[10px] text-[#1A1A1A]/70">Take 3 gentle, slow sips, and pause for mucosal safety</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs font-mono font-bold text-[#2D4032] border border-[#2D4032]/20 bg-white px-2.5 py-1">
              Next Sip: {formatTime(sipSecondsLeft)}
            </span>
          </div>
        </div>
      )}

      {/* Quick Logs in blocks */}
      <div className="space-y-3">
        <span className="text-xs uppercase tracking-widest font-mono text-[#1A1A1A]/60 block">Ingest Paced Hydration</span>
        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={() => onAddWater(250)}
            disabled={isLockoutActive}
            id="btn-add-250"
            className="flex flex-col items-center justify-center p-3 border border-[#1A1A1A]/10 bg-[#FDFCF8] hover:bg-[#F9F7F2] active:bg-[#F5F2EA] transition-all text-xs disabled:opacity-30 disabled:pointer-events-none"
          >
            <Droplet className="w-4 h-4 text-[#2D4032] mb-1" />
            <span className="font-bold">+250ml</span>
            <span className="text-[9px] font-mono text-[#1A1A1A]/50 mt-0.5">1 Cup</span>
          </button>
          <button
            onClick={() => onAddWater(500)}
            disabled={isLockoutActive}
            id="btn-add-500"
            className="flex flex-col items-center justify-center p-3 border border-[#1A1A1A]/10 bg-[#FDFCF8] hover:bg-[#F9F7F2] active:bg-[#F5F2EA] transition-all text-xs disabled:opacity-30 disabled:pointer-events-none"
          >
            <Beer className="w-4 h-4 text-[#2D4032] mb-1" />
            <span className="font-bold">+500ml</span>
            <span className="text-[9px] font-mono text-[#1A1A1A]/50 mt-0.5">Tumbler</span>
          </button>
          <button
            onClick={() => onAddWater(1000)}
            disabled={isLockoutActive}
            id="btn-add-1000"
            className="flex flex-col items-center justify-center p-3 border border-[#1A1A1A]/10 bg-[#FDFCF8] hover:bg-[#F9F7F2] active:bg-[#F5F2EA] transition-all text-xs disabled:opacity-30 disabled:pointer-events-none"
          >
            <Beer className="w-5 h-5 text-[#2D4032] mb-1" />
            <span className="font-bold">+1.0L</span>
            <span className="text-[9px] font-mono text-[#1A1A1A]/50 mt-0.5">Carafe</span>
          </button>
          <button
            onClick={triggerPostMealLockout}
            id="btn-meal-lock"
            className="flex flex-col items-center justify-center p-3 border border-[#8B4513]/25 bg-[#2D4032]/5 hover:bg-[#2D4032]/10 active:scale-95 transition-all text-xs text-[#2D4032] font-semibold"
          >
            <Clock className="w-4 h-4 text-[#8B4513] mb-1" />
            <span className="font-bold">Just Ate</span>
            <span className="text-[9px] font-mono text-[#8B4513] mt-0.5">Lock 45m</span>
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";

function MessySpreadsheet() {
  const rows = Array.from({ length: 22 });
  const cols = Array.from({ length: 10 });

  const cellData: Record<string, string> = {
    "0-0": "Project", "0-1": "Client", "0-2": "Invoice", "0-3": "Paid?", "0-4": "Expenses", "0-5": "Hours", "0-6": "Rate", "0-7": "Total?", "0-8": "Notes", "0-9": "Status",
    "1-0": "Brand refresh", "1-1": "Acme Co", "1-2": "£4,200", "1-3": "YES", "1-4": "see tab 3", "1-5": "32", "1-6": "£85", "1-7": "=C2-E2??", "1-8": "check expenses!!", "1-9": "done?",
    "2-0": "Website v2", "2-1": "Bloom", "2-2": "£6,500", "2-3": "partial", "2-4": "£340", "2-5": "67", "2-6": "£85", "2-7": "£6,160", "2-8": "2nd invoice pending", "2-9": "ongoing",
    "3-0": "Logo + brand", "3-1": "???", "3-2": "£1,800", "3-3": "NO", "3-4": "", "3-5": "14", "3-6": "£90", "3-7": "", "3-8": "chase tom!!!", "3-9": "overdue",
    "4-0": "SEO audit", "4-1": "RetailCo", "4-2": "£2,100", "4-3": "yes i think", "4-4": "£120", "4-5": "19", "4-6": "£85", "4-7": "£1,980", "4-8": "", "4-9": "",
    "5-0": "Copy rewrite", "5-1": "Bloom", "5-2": "£3,400", "5-3": "YES", "5-4": "freelancer £800", "5-5": "28", "5-6": "£90", "5-7": "=C6-E6", "5-8": "used Jake for copy", "5-9": "invoiced",
    "6-0": "Social pack", "6-1": "Acme Co", "6-2": "£950", "6-3": "no", "6-4": "", "6-5": "9", "6-6": "£85", "6-7": "950", "6-8": "small job", "6-9": "???",
    "7-0": "Dashboard UI", "7-1": "TechStart", "7-2": "£8,000", "7-3": "50% paid", "7-4": "£1,200", "7-5": "88", "7-6": "£90", "7-7": "tbc", "7-8": "scope creep — 20hrs extra", "7-9": "in progress",
    "8-0": "Pitch deck", "8-1": "???", "8-2": "£1,200", "8-3": "yes", "8-4": "£0", "8-5": "12", "8-6": "£85", "8-7": "£1,200", "8-8": "quick job", "8-9": "done",
    "9-0": "Email templates", "9-1": "RetailCo", "9-2": "£2,800", "9-3": "YES", "9-4": "tools £45", "9-5": "24", "9-6": "£90", "9-7": "=2800-45", "9-8": "", "9-9": "paid",
    "10-0": "App redesign", "10-1": "TechStart", "10-2": "£12,000", "10-3": "no", "10-4": "check sheet 2", "10-5": "130", "10-6": "£90", "10-7": "???", "10-8": "NEED TO FOLLOW UP", "10-9": "overdue!!",
    "11-0": "Brand guidelines", "11-1": "Bloom", "11-2": "£3,200", "11-3": "partial £1,600", "11-4": "£230", "11-5": "31", "11-6": "£85", "11-7": "=3200-230", "11-8": "", "11-9": "in progress",
    "12-0": "", "12-2": "TOTAL:", "12-7": "=SUM(H2:H12)", "12-8": "but missing data", "12-9": "🤷",
    "13-0": "NOTE: expenses not", "13-1": "fully tracked", "13-2": "see other", "13-3": "spreadsheet", "13-4": "for details",
    "14-0": "OVERDUE:", "14-2": "Logo + brand", "14-3": "App redesign", "14-4": "Social pack?",
    "15-0": "", "16-0": "MTD income estimate:", "16-2": "£46,150??",
    "17-0": "actual profit:", "17-2": "no idea lol",
  };

  const highlightCells = new Set(["0-0","0-1","0-2","0-3","0-4","0-5","0-6","0-7","0-8","0-9","12-2","14-0","16-0","17-0"]);
  const redCells = new Set(["3-3","3-8","3-9","7-8","10-8","10-9","14-2","14-3"]);
  const yellowCells = new Set(["1-7","7-7","10-7","12-7","17-2"]);

  return (
    <div className="h-full w-full overflow-hidden bg-white font-mono text-[9px] select-none">
      {/* Toolbar */}
      <div className="flex items-center gap-1 border-b border-gray-300 bg-gray-100 px-2 py-1">
        <div className="flex gap-0.5">
          {["File","Edit","View","Insert","Format","Data","Tools","Help"].map(m => (
            <span key={m} className="rounded px-1.5 py-0.5 text-[8px] text-gray-600 hover:bg-gray-200">{m}</span>
          ))}
        </div>
      </div>
      {/* Formula bar */}
      <div className="flex items-center gap-2 border-b border-gray-300 bg-gray-50 px-2 py-0.5">
        <span className="w-10 rounded border border-gray-300 bg-white px-1 text-center text-[8px] text-gray-500">A1</span>
        <span className="text-gray-400">fx</span>
        <span className="flex-1 rounded border border-blue-400 bg-white px-1 text-[8px] text-gray-600">=SUM(H2:H12) — but missing data from sheet 2</span>
      </div>
      {/* Grid */}
      <div className="overflow-auto">
        {/* Column headers */}
        <div className="flex border-b border-gray-300 bg-gray-100 sticky top-0 z-10">
          <div className="w-5 shrink-0 border-r border-gray-300" />
          {cols.map((_, ci) => (
            <div key={ci} className="w-[88px] shrink-0 border-r border-gray-300 py-0.5 text-center text-[8px] font-semibold text-gray-500">
              {String.fromCharCode(65 + ci)}
            </div>
          ))}
        </div>
        {rows.map((_, ri) => (
          <div key={ri} className="flex border-b border-gray-200">
            <div className="w-5 shrink-0 border-r border-gray-300 bg-gray-100 py-0.5 text-center text-[8px] text-gray-400">{ri + 1}</div>
            {cols.map((_, ci) => {
              const key = `${ri}-${ci}`;
              const val = cellData[key] ?? "";
              const isHeader = highlightCells.has(key);
              const isRed = redCells.has(key);
              const isYellow = yellowCells.has(key);
              return (
                <div
                  key={ci}
                  className={`w-[88px] shrink-0 truncate border-r border-gray-200 px-1 py-0.5 text-[8px] ${
                    isHeader ? "bg-gray-200 font-bold text-gray-800" :
                    isRed ? "bg-red-100 text-red-700" :
                    isYellow ? "bg-yellow-100 text-yellow-700 font-semibold" :
                    "text-gray-600"
                  }`}
                >
                  {val}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      {/* Sheet tabs */}
      <div className="flex items-center gap-0 border-t border-gray-300 bg-gray-100 px-1 py-0.5">
        {["Projects 2024","Expenses","Old invoices","TAX stuff","FINAL v3","FINAL v4 REAL"].map((tab, i) => (
          <div key={tab} className={`cursor-pointer border-r border-gray-300 px-2 py-0.5 text-[8px] ${i === 0 ? "bg-white font-semibold text-blue-600" : "text-gray-500 hover:bg-gray-200"}`}>
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
}

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDragging(true);
  };

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragging) return;
    updatePosition(e.clientX);
  }, [dragging, updatePosition]);

  const onMouseUp = useCallback(() => setDragging(false), []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  return (
    <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <div className="mb-10 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">Before vs after</p>
        <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">From spreadsheet chaos to instant clarity</h2>
        <p className="mt-3 text-sm text-gray-500">Drag the slider to see the difference</p>
      </div>

      <div
        ref={containerRef}
        className={`relative h-[420px] overflow-hidden rounded-2xl border border-gray-200 shadow-2xl sm:h-[520px] ${dragging ? "cursor-grabbing" : "cursor-ew-resize"}`}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchMove={onTouchMove}
        onTouchEnd={onMouseUp}
      >
        {/* AFTER — full width underneath */}
        <div className="absolute inset-0">
          <Image
            src="/hero-dashboard.png"
            alt="SummitHQ clean dashboard"
            fill
            className="object-cover object-left-top"
            sizes="(max-width: 1024px) 100vw, 900px"
          />
          {/* After label */}
          <div className="absolute bottom-4 right-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow">
            After — SummitHQ
          </div>
        </div>

        {/* BEFORE — clipped to left of slider */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <MessySpreadsheet />
          {/* Before label */}
          <div className="absolute bottom-4 left-4 rounded-full bg-gray-700 px-3 py-1 text-xs font-semibold text-white shadow">
            Before — spreadsheets
          </div>
        </div>

        {/* Divider line */}
        <div
          className="absolute inset-y-0 z-20 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
          style={{ left: `${position}%` }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 z-30 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white shadow-[0_2px_16px_rgba(0,0,0,0.2)] ring-1 ring-gray-200"
          style={{ left: `${position}%` }}
          onMouseDown={onMouseDown}
          onTouchStart={(e) => { e.stopPropagation(); setDragging(true); }}
        >
          <svg viewBox="0 0 20 20" className="h-5 w-5 text-gray-500" fill="none">
            <path d="M7 4l-3 6 3 6M13 4l3 6-3 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

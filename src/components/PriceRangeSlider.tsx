import { useState, useEffect, useRef } from 'react';

interface PriceRangeSliderProps {
    min: number;
    max: number;
    value: [number, number];
    onChange: (value: [number, number]) => void;
}

export const PriceRangeSlider = ({ min, max, value, onChange }: PriceRangeSliderProps) => {
    const [minVal, setMinVal] = useState(value[0]);
    const [maxVal, setMaxVal] = useState(value[1]);
    const minValRef = useRef(value[0]);
    const maxValRef = useRef(value[1]);
    const range = useRef<HTMLDivElement>(null);

    // Convert to percentage
    const getPercent = (value: number) => Math.round(((value - min) / (max - min)) * 100);

    // Set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, min, max]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, min, max]);

    // Update parent only when user stops interacting (optional) or immediately
    // Here we update immediately for responsiveness, but could debounce if heavy
    useEffect(() => {
        onChange([minVal, maxVal]);
    }, [minVal, maxVal]); // Warning: this might cause loops if onChange updates props -> resets state.
    // Better pattern: Props drive state? Or internal state drives props?
    // Let's rely on props => state for initialization, and internal state for smooth drag.

    // Actually, to keep it simple and controlled:
    // We bind inputs to local state, and call onChange. 
    // If parent updates props, we update local state (if we want 2-way sync).

    return (
        <div className="flex flex-col w-full max-w-md mx-auto px-4 py-4">
            <div className="relative w-full h-8 mb-4">
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={minVal}
                    onChange={(event) => {
                        const value = Math.min(Number(event.target.value), maxVal - 1);
                        setMinVal(value);
                        minValRef.current = value;
                    }}
                    className="thumb thumb--left"
                    style={{ zIndex: minVal > max - 100 ? 5 : undefined }}
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={maxVal}
                    onChange={(event) => {
                        const value = Math.max(Number(event.target.value), minVal + 1);
                        setMaxVal(value);
                        maxValRef.current = value;
                    }}
                    className="thumb thumb--right"
                />

                <div className="relative w-full">
                    <div className="absolute top-1 left-0 right-0 h-1.5 bg-slate-200 rounded-full z-0" />
                    <div
                        ref={range}
                        className="absolute top-1 h-1.5 bg-brand-500 rounded-full z-10"
                    />
                </div>
            </div>

            <div className="flex justify-between items-center text-sm font-medium text-slate-700">
                <div className="bg-white border border-slate-200 px-3 py-1 rounded-lg shadow-sm">
                    {minVal} €
                </div>
                <div className="text-slate-400 text-xs uppercase tracking-wider">Prix</div>
                <div className="bg-white border border-slate-200 px-3 py-1 rounded-lg shadow-sm">
                    {maxVal} €
                </div>
            </div>

            <style>{`
        .thumb {
          -webkit-appearance: none;
          -webkit-tap-highlight-color: transparent;
          pointer-events: none;
          position: absolute;
          height: 0;
          width: 100%;
          outline: none;
          z-index: 2; /* below range bar by default, but thumbs need to be clickable */
        }
        
        .thumb {
            /* Fix: input range itself should be invisible but handles visible */
            z-index: 3;
        }

        .thumb--left {
          z-index: 4;
        }

        .thumb--right {
          z-index: 5;
        }

        /* Webkit */
        .thumb::-webkit-slider-thumb {
          -webkit-appearance: none;
          -webkit-tap-highlight-color: transparent;
          background-color: white;
          border: 2px solid #16a34a; /* brand-600 */
          border-radius: 50%;
          box-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0,0,0,0.1);
          cursor: pointer;
          height: 24px;
          width: 24px;
          margin-top: -10px; /* Center partially */
          pointer-events: all;
          position: relative;
        }
        
        /* Firefox */
        .thumb::-moz-range-thumb {
          background-color: white;
          border: 2px solid #16a34a;
          border-radius: 50%;
          box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          height: 24px;
          width: 24px;
          pointer-events: all;
          position: relative;
        }
      `}</style>
        </div>
    );
};

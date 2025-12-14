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
        <div className="flex flex-col w-full px-2 py-4">
            <div className="flex justify-between items-end mb-6">
                <div>
                    <span className="text-2xl font-bold text-slate-900">{minVal}€</span>
                    <span className="text-slate-400 text-sm mx-1">-</span>
                    <span className="text-2xl font-bold text-slate-900">{maxVal}€</span>
                </div>
            </div>

            <div className="relative w-full h-6">
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

                <div className="relative w-full h-1.5 rounded-full bg-slate-100 mt-2">
                    <div
                        ref={range}
                        className="absolute top-0 h-full bg-brand-500 rounded-full z-10"
                    />
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
          z-index: 3;
        }

        .thumb--left { z-index: 4; }
        .thumb--right { z-index: 5; }

        /* Webkit */
        .thumb::-webkit-slider-thumb {
          -webkit-appearance: none;
          -webkit-tap-highlight-color: transparent;
          background-color: #16a34a; /* brand-600 */
          border: 2px solid white;
          border-radius: 50%;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          cursor: pointer;
          height: 20px;
          width: 20px;
          margin-top: 1px; /* Align with track */
          pointer-events: all;
          position: relative;
          transition: transform 0.1s ease;
        }
        
        .thumb::-webkit-slider-thumb:active {
            transform: scale(1.2);
            cursor: grabbing;
        }

        /* Firefox */
        .thumb::-moz-range-thumb {
          background-color: #16a34a;
          border: 2px solid white;
          border-radius: 50%;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          cursor: pointer;
          height: 20px;
          width: 20px;
          pointer-events: all;
          position: relative;
          transition: transform 0.1s ease;
        }

        .thumb::-moz-range-thumb:active {
            transform: scale(1.2);
            cursor: grabbing;
        }
      `}</style>
        </div>
    );
};

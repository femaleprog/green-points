
// Import base images statically for safety/fallback
import eggImg from '@/assets/persona/egg.png';
import chickImg from '@/assets/persona/chick.png';
import adultImg from '@/assets/persona/adult.png';
import glowupImg from '@/assets/persona/glowup.png';

// Import all generated combinations eagerly
const comboImages = import.meta.glob('/src/assets/persona/combos/*.png', { eager: true, import: 'default' }) as Record<string, string>;

// Mapping item IDs to filename keywords used in Python script
const ITEM_KEYWORD_MAP: Record<string, string> = {
    'hat_red': 'hat',
    'glasses_cool': 'glasses',
    'bowtie_red': 'bowtie'
};

const BASE_IMAGES: Record<string, string> = {
    'egg': eggImg,
    'chick': chickImg,
    'teen': adultImg, // Placeholder reuse
    'adult': adultImg,
    'glowup': glowupImg
};

export const getPersonaImage = (stage: string, equippedItems: string[]) => {
    // 1. Identify active keywords
    const keywords = equippedItems
        .map(id => ITEM_KEYWORD_MAP[id])
        .filter(Boolean)
        .sort(); // Sorting is crucial because filenames are sorted (e.g., adult_bowtie_glasses.png)

    // 2. If no accessories, return base image
    if (keywords.length === 0) {
        return BASE_IMAGES[stage] || BASE_IMAGES['egg'];
    }

    // 3. Search for a matching filename in the glob results
    // We look for a file that contains the stage and all keywords, regardless of order.
    // The glob keys are full paths like "/src/assets/persona/combos/chick_hat_glasses.png"

    const matchingKey = Object.keys(comboImages).find(path => {
        // Extract filename from path
        const filename = path.split('/').pop()?.replace('.png', '') || '';
        const parts = filename.split('_');

        // Check if stage matches (it should be the first part usually, or at least present)
        // Strictly, our format is stage_part1_part2. So stage should be parts[0].
        if (parts[0] !== stage) return false;

        // Check if all keywords are present in the filename parts
        // And importantly, ensuring no EXTRA parts (except stage) exist?
        // If file is "chick_hat_glasses_bowtie", but we only have "hat" and "glasses", it's not a match.
        // So the set of (parts - stage) must equal set of keywords.

        const fileKeywords = parts.slice(1);
        if (fileKeywords.length !== keywords.length) return false;

        return keywords.every(k => fileKeywords.includes(k));
    });

    // 4. Return the matched URL or fallback
    if (matchingKey) return comboImages[matchingKey];

    return BASE_IMAGES[stage] || BASE_IMAGES['egg'];
};

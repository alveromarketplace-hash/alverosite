/**
 * Generates a deterministic rating and review count based on a string ID.
 * This ensures the same product always has the same rating across the app.
 * 
 * @param {string} id - The product ID
 * @returns {Object} { rating: string, reviews: number }
 */
export const getProductRating = (id) => {
    if (!id) return { rating: "4.5", reviews: 42 };

    // Simple hash function
    let hash = 0;
    for (let i = 0; i < id.length; i++) {
        hash = ((hash << 5) - hash) + id.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
    }

    // Normalize hash to 0-1 range
    const seed = Math.abs(hash) / 2147483647;

    // Generate rating between 3.8 and 5.0
    const rating = (seed * (5.0 - 3.8) + 3.8).toFixed(1);

    // Generate review count between 10 and 500
    const reviews = Math.floor(seed * (500 - 10) + 10);

    return { rating, reviews };
};

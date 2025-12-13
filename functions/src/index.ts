import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();
const db = admin.firestore();

// Types locally defined for the function stub
interface Purchase {
    userId: string;
    totalPoints: number;
}

/**
 * Cloud Function: onPurchaseCreated
 * Triggered when a new document is added to /purchases/{purchaseId}
 * Updates the user's total points balance.
 */
export const onPurchaseCreated = functions.firestore
    .document("purchases/{purchaseId}")
    .onCreate(async (snap, context) => {
        const purchase = snap.data() as Purchase;
        const userId = purchase.userId;
        const newPoints = purchase.totalPoints;

        if (!userId || newPoints <= 0) {
            console.log("No points to add or invalid user.");
            return null;
        }

        const userRef = db.collection("users").doc(userId);

        try {
            await db.runTransaction(async (transaction) => {
                const userDoc = await transaction.get(userRef);
                if (!userDoc.exists) {
                    throw new Error("User does not exist!");
                }

                const currentPoints = userDoc.data()?.points || 0;
                transaction.update(userRef, {
                    points: currentPoints + newPoints
                });
            });
            console.log(`Successfully added ${newPoints} points to user ${userId}`);
        } catch (error) {
            console.error("Transaction failed: ", error);
        }
    });

/**
 * HTTP Function to manually trigger sync (for testing)
 * In a real app, this might be a scheduled pub/sub job or called via webhook
 */
export const triggerSync = functions.https.onRequest(async (req, res) => {
    // Logic to call external APIs (Auchan/Carrefour) would go here
    // For now, just a stub
    res.json({ message: "Sync triggered. (Stub)" });
});

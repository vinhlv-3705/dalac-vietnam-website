import { Router, type IRouter, Request, Response } from "express";
import { db } from "@workspace/db";
import { userProfilesTable, insertUserProfileSchema, updateUserProfileSchema } from "@workspace/db/schema";
import { eq } from "drizzle-orm";
import { logger } from "../lib/logger";

const router: IRouter = Router();

// GET /api/profiles/:userId - Get user profile
router.get("/:userId", async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params as { userId: string };
    
    const profile = await db.select()
      .from(userProfilesTable)
      .where(eq(userProfilesTable.userId, userId))
      .limit(1);

    if (profile.length === 0) {
      res.status(404).json({ error: "Profile not found" });
      return;
    }

    res.json(profile[0]);
  } catch (error) {
    logger.error({ error, userId: req.params.userId }, "Failed to get profile");
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST /api/profiles - Create or update user profile
router.post("/", async (req: Request, res: Response) => {
  try {
    const validatedData = insertUserProfileSchema.parse(req.body);
    
    // Check if profile already exists
    const existingProfile = await db.select()
      .from(userProfilesTable)
      .where(eq(userProfilesTable.userId, validatedData.userId as string))
      .limit(1);

    let profile;
    if (existingProfile.length > 0) {
      // Update existing profile
      profile = await db.update(userProfilesTable)
        .set({ 
          ...validatedData, 
          updatedAt: new Date() 
        })
        .where(eq(userProfilesTable.userId, validatedData.userId as string))
        .returning();
    } else {
      // Create new profile
      profile = await db.insert(userProfilesTable)
        .values(validatedData)
        .returning();
    }

    res.json(profile[0]);
  } catch (error) {
    logger.error({ error, body: req.body }, "Failed to create/update profile");
    res.status(500).json({ error: "Internal server error" });
  }
});

// PUT /api/profiles/:userId - Update user profile
router.put("/:userId", async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params as { userId: string };
    const validatedData = updateUserProfileSchema.parse(req.body);
    
    // Check if profile exists
    const existingProfile = await db.select()
      .from(userProfilesTable)
      .where(eq(userProfilesTable.userId, userId))
      .limit(1);

    if (existingProfile.length === 0) {
      res.status(404).json({ error: "Profile not found" });
      return;
    }

    const updatedProfile = await db.update(userProfilesTable)
      .set({ 
        ...validatedData, 
        updatedAt: new Date() 
      })
      .where(eq(userProfilesTable.userId, userId))
      .returning();

    res.json(updatedProfile[0]);
  } catch (error) {
    logger.error({ error, userId: req.params.userId, body: req.body }, "Failed to update profile");
    res.status(500).json({ error: "Internal server error" });
  }
});

// DELETE /api/profiles/:userId - Delete user profile
router.delete("/:userId", async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params as { userId: string };
    
    const deletedProfile = await db.delete(userProfilesTable)
      .where(eq(userProfilesTable.userId, userId))
      .returning();

    if (deletedProfile.length === 0) {
      res.status(404).json({ error: "Profile not found" });
      return;
    }

    res.json({ message: "Profile deleted successfully" });
  } catch (error) {
    logger.error({ error, userId: req.params.userId }, "Failed to delete profile");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;

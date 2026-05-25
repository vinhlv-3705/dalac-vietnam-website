import { pgTable, text, timestamp, serial, varchar } from "drizzle-orm/pg-core";
import { z } from "zod";

export const userProfilesTable = pgTable("user_profiles", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 50 }),
  address: text("address"),
  bio: text("bio"),
  position: varchar("position", { length: 100 }),
  department: varchar("department", { length: 100 }),
  avatar: text("avatar"),
  joinDate: timestamp("join_date").defaultNow(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertUserProfileSchema = z.object({
  userId: z.string().max(255),
  name: z.string().max(255),
  email: z.string().email().max(255),
  phone: z.string().max(50).nullable().optional(),
  address: z.string().nullable().optional(),
  bio: z.string().nullable().optional(),
  position: z.string().max(100).nullable().optional(),
  department: z.string().max(100).nullable().optional(),
  avatar: z.string().nullable().optional(),
  joinDate: z.coerce.date().optional(),
});

export const updateUserProfileSchema = insertUserProfileSchema.partial();

export type InsertUserProfile = z.infer<typeof insertUserProfileSchema>;
export type UpdateUserProfile = z.infer<typeof updateUserProfileSchema>;
export type UserProfile = typeof userProfilesTable.$inferSelect;

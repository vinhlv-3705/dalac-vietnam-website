const API_BASE_URL = '/api';

export interface ProfileData {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  bio?: string;
  position?: string;
  department?: string;
  avatar?: string;
  joinDate?: string;
}

export interface UserProfile extends ProfileData {
  id: number;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

class ProfilesAPI {
  private getHeaders() {
    return {
      'Content-Type': 'application/json',
    };
  }

  async getProfile(userId: string): Promise<UserProfile | null> {
    try {
      const response = await fetch(`${API_BASE_URL}/profiles/${userId}`, {
        headers: this.getHeaders(),
      });

      if (!response.ok) {
        if (response.status === 404) {
          return null;
        }
        throw new Error(`Failed to fetch profile: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching profile:', error);
      throw error;
    }
  }

  async createOrUpdateProfile(userId: string, data: ProfileData): Promise<UserProfile> {
    try {
      const response = await fetch(`${API_BASE_URL}/profiles`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify({ ...data, userId }),
      });

      if (!response.ok) {
        throw new Error(`Failed to create/update profile: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error creating/updating profile:', error);
      throw error;
    }
  }

  async updateProfile(userId: string, data: Partial<ProfileData>): Promise<UserProfile> {
    try {
      const response = await fetch(`${API_BASE_URL}/profiles/${userId}`, {
        method: 'PUT',
        headers: this.getHeaders(),
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Failed to update profile: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  }

  async deleteProfile(userId: string): Promise<void> {
    try {
      const response = await fetch(`${API_BASE_URL}/profiles/${userId}`, {
        method: 'DELETE',
        headers: this.getHeaders(),
      });

      if (!response.ok) {
        throw new Error(`Failed to delete profile: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error deleting profile:', error);
      throw error;
    }
  }
}

export const profilesAPI = new ProfilesAPI();

import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Phone, MapPin, Calendar, Briefcase, Save, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

interface ProfileData {
  name: string;
  email: string;
  phone: string;
  address: string;
  bio: string;
  position: string;
  department: string;
  joinDate: string;
  avatar: string;
}

export default function Profile() {
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    address: "",
    bio: "",
    position: user?.role || "",
    department: "",
    joinDate: "2024-01-15",
    avatar: ""
  });

  const [tempData, setTempData] = useState<ProfileData>(profileData);

  useEffect(() => {
    // Load profile data from localStorage on mount
    const savedProfile = localStorage.getItem(`profile_${user?.id}`);
    if (savedProfile) {
      const data = JSON.parse(savedProfile);
      setProfileData(data);
      setTempData(data);
    }
  }, [user?.id]);

  const handleEdit = () => {
    setTempData(profileData);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setTempData(profileData);
    setIsEditing(false);
  };

  const handleSave = () => {
    setProfileData(tempData);
    localStorage.setItem(`profile_${user?.id}`, JSON.stringify(tempData));
    
    // Update user context with new name
    if (updateUser && tempData.name !== user?.name) {
      updateUser({ ...user!, name: tempData.name });
    }
    
    setIsEditing(false);
  };

  const handleInputChange = (field: keyof ProfileData, value: string) => {
    setTempData(prev => ({ ...prev, [field]: value }));
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-[#0D1B3E] text-[#EDE5D0] flex items-center justify-center">
        <Card className="bg-[#070F24] border-[#C9A84C] text-[#EDE5D0] max-w-md">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="mb-4">Please log in to view your profile.</p>
              <Link href="/login">
                <Button className="bg-[#C9A84C] hover:bg-[#E8C96C] text-[#070F24]">
                  Sign In
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D1B3E] text-[#EDE5D0] py-8">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-[#EDE5D0] hover:text-[#C9A84C] p-2">
              <ArrowLeft size={20} />
            </Button>
          </Link>
          <h1 className="text-3xl font-display font-bold">Profile Settings</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="bg-[#070F24] border-[#C9A84C]">
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={profileData.avatar} alt={profileData.name} />
                  <AvatarFallback className="bg-[#C9A84C] text-[#070F24] text-2xl font-bold">
                    {profileData.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-[#EDE5D0]">{profileData.name}</CardTitle>
                <CardDescription className="text-[#B8C4D4]">
                  {profileData.position}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-[#B8C4D4]">
                  <Mail size={14} />
                  <span>{profileData.email}</span>
                </div>
                {profileData.phone && (
                  <div className="flex items-center gap-2 text-sm text-[#B8C4D4]">
                    <Phone size={14} />
                    <span>{profileData.phone}</span>
                  </div>
                )}
                {profileData.address && (
                  <div className="flex items-center gap-2 text-sm text-[#B8C4D4]">
                    <MapPin size={14} />
                    <span>{profileData.address}</span>
                  </div>
                )}
                <Separator className="bg-[#C9A84C]/20" />
                <div className="flex items-center gap-2 text-sm text-[#B8C4D4]">
                  <Calendar size={14} />
                  <span>Joined {new Date(profileData.joinDate).toLocaleDateString()}</span>
                </div>
                {profileData.department && (
                  <div className="flex items-center gap-2">
                    <Briefcase size={14} className="text-[#B8C4D4]" />
                    <Badge variant="secondary" className="bg-[#C9A84C]/20 text-[#C9A84C] border-[#C9A84C]">
                      {profileData.department}
                    </Badge>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Edit Form */}
          <div className="lg:col-span-2">
            <Card className="bg-[#070F24] border-[#C9A84C]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-[#EDE5D0]">Personal Information</CardTitle>
                    <CardDescription className="text-[#B8C4D4]">
                      Update your personal details and preferences
                    </CardDescription>
                  </div>
                  {!isEditing ? (
                    <Button onClick={handleEdit} className="bg-[#C9A84C] hover:bg-[#E8C96C] text-[#070F24]">
                      Edit Profile
                    </Button>
                  ) : (
                    <div className="flex gap-2">
                      <Button onClick={handleSave} className="bg-[#C9A84C] hover:bg-[#E8C96C] text-[#070F24]">
                        <Save size={16} className="mr-2" />
                        Save
                      </Button>
                      <Button onClick={handleCancel} variant="outline" className="border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C]/10">
                        Cancel
                      </Button>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#EDE5D0]">Full Name</Label>
                    <Input
                      id="name"
                      value={isEditing ? tempData.name : profileData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      disabled={!isEditing}
                      className="bg-[#0D1B3E] border-[#C9A84C]/30 text-[#EDE5D0] disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#EDE5D0]">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={isEditing ? tempData.email : profileData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      disabled={!isEditing}
                      className="bg-[#0D1B3E] border-[#C9A84C]/30 text-[#EDE5D0] disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#EDE5D0]">Phone Number</Label>
                    <Input
                      id="phone"
                      value={isEditing ? tempData.phone : profileData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      disabled={!isEditing}
                      className="bg-[#0D1B3E] border-[#C9A84C]/30 text-[#EDE5D0] disabled:opacity-50"
                      placeholder="Add phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position" className="text-[#EDE5D0]">Position</Label>
                    <Input
                      id="position"
                      value={isEditing ? tempData.position : profileData.position}
                      onChange={(e) => handleInputChange("position", e.target.value)}
                      disabled={!isEditing}
                      className="bg-[#0D1B3E] border-[#C9A84C]/30 text-[#EDE5D0] disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="department" className="text-[#EDE5D0]">Department</Label>
                    <Input
                      id="department"
                      value={isEditing ? tempData.department : profileData.department}
                      onChange={(e) => handleInputChange("department", e.target.value)}
                      disabled={!isEditing}
                      className="bg-[#0D1B3E] border-[#C9A84C]/30 text-[#EDE5D0] disabled:opacity-50"
                      placeholder="Add department"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="avatar" className="text-[#EDE5D0]">Avatar URL</Label>
                    <Input
                      id="avatar"
                      value={isEditing ? tempData.avatar : profileData.avatar}
                      onChange={(e) => handleInputChange("avatar", e.target.value)}
                      disabled={!isEditing}
                      className="bg-[#0D1B3E] border-[#C9A84C]/30 text-[#EDE5D0] disabled:opacity-50"
                      placeholder="Add avatar URL"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-[#EDE5D0]">Address</Label>
                  <Input
                    id="address"
                    value={isEditing ? tempData.address : profileData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    disabled={!isEditing}
                    className="bg-[#0D1B3E] border-[#C9A84C]/30 text-[#EDE5D0] disabled:opacity-50"
                    placeholder="Add address"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio" className="text-[#EDE5D0]">Bio</Label>
                  <Textarea
                    id="bio"
                    value={isEditing ? tempData.bio : profileData.bio}
                    onChange={(e) => handleInputChange("bio", e.target.value)}
                    disabled={!isEditing}
                    className="bg-[#0D1B3E] border-[#C9A84C]/30 text-[#EDE5D0] disabled:opacity-50 min-h-25"
                    placeholder="Tell us about yourself..."
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

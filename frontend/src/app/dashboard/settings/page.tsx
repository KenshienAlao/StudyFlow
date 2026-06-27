"use client";
import { Structure } from "@/components/structure";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useGetProfile, useUpdateProfile } from "@/hooks/use-profile";
import { UpdateScheme } from "@/validation/profile.validation";
import { useTheme } from "next-themes";
import { FormEvent } from "react";
import { toast } from "react-toastify";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const { mutate: updateProfile, isPending: updateProfilePending } =
    useUpdateProfile();
  const { data: user, isPending: getProfilePending } = useGetProfile();

  if (getProfilePending) {
    return <div>Loading...</div>;
  }
  // const [notifications, setNotifications] = useState({
  //   email: true,
  //   push: true,
  //   reminders: true,
  // });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const validate = UpdateScheme.safeParse(data);
    if (!validate.success) {
      toast.error(validate.error.issues[0].message);
      return;
    }
    console.log(validate.data);
    updateProfile(validate.data);
  };

  return (
    <Structure>
      <div className="space-y-8 max-w-2xl">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account and preferences
          </p>
        </div>

        {/* Profile Section */}
        <form onSubmit={onSubmit}>
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Profile
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {" "}
                  First name{" "}
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Your name"
                  defaultValue={user?.firstName}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {" "}
                  Last name{" "}
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Your last name"
                  defaultValue={user?.lastName}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {" "}
                  Date of Birth{" "}
                </label>
                <Input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  placeholder="Your date of birth"
                  defaultValue={user?.dateOfBirth}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {" "}
                  Gender{" "}
                </label>
                <select
                  defaultValue={user?.gender}
                  id="gender"
                  name="gender"
                  required
                  className="w-full h-10 px-3 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-sm cursor-pointer"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
              <div className="pt-4">
                <Button type="submit" disabled={updateProfilePending}>
                  {updateProfilePending ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </div>
          </Card>
        </form>
        {/* Appearance Section */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Appearance
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Dark Mode</p>
                <p className="text-sm text-muted-foreground">
                  Switch between light and dark themes
                </p>
              </div>
              <Switch
                checked={theme === "dark"}
                onCheckedChange={(value) =>
                  value ? setTheme("dark") : setTheme("light")
                }
              />
            </div>
          </div>
        </Card>

        {/* Notifications Section */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Notifications
          </h2>
          <div className="space-y-4">
            {[
              {
                key: "email",
                label: "Email Notifications",
                description: "Receive updates via email",
              },
              {
                key: "push",
                label: "Push Notifications",
                description: "Receive browser notifications",
              },
              {
                key: "reminders",
                label: "Study Reminders",
                description: "Get reminded about your study sessions",
              },
            ].map((notif) => (
              <div
                key={notif.key}
                className="flex items-center justify-between"
              >
                <div>
                  <p className="font-medium text-foreground">{notif.label}</p>
                  <p className="text-sm text-muted-foreground">
                    {notif.description}
                  </p>
                </div>
                {/* <Switch
                  checked={notifications[notif.key as keyof typeof notifications]}
                  onCheckedChange={(checked) =>
                    setNotifications({
                      ...notifications,
                      [notif.key]: checked,
                    })
                  }
                /> */}
              </div>
            ))}
          </div>
        </Card>

        {/* Account Section */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Account
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {" "}
                Email{" "}
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                defaultValue={user?.email}
                disabled
                className="disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            <div>
              <p className="font-medium text-foreground mb-2">
                Change Password
              </p>
              <Button variant="outline">Update Password</Button>
            </div>
            <div className="pt-4 border-t border-border">
              <p className="font-medium text-foreground mb-2">
                Two-Factor Authentication
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Add an extra layer of security to your account
              </p>
              <Button variant="outline">Enable 2FA</Button>
            </div>
          </div>
        </Card>

        {/* Security Section */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Security
          </h2>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-foreground mb-2">
                Active Sessions
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Manage your active sessions across devices
              </p>
              <Button variant="outline">View Sessions</Button>
            </div>
            <div className="pt-4 border-t border-border">
              <p className="font-medium text-foreground mb-2">
                Download Your Data
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Export all your study data and notes
              </p>
              <Button variant="outline">Download Data</Button>
            </div>
          </div>
        </Card>

        {/* Danger Zone */}
        <Card className="p-6 border-destructive/50 bg-destructive/5">
          <h2 className="text-xl font-semibold text-destructive mb-6">
            Danger Zone
          </h2>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-foreground mb-2">Delete Account</p>
              <p className="text-sm text-muted-foreground mb-4">
                Permanently delete your account and all associated data
              </p>
              <Button variant="destructive">Delete Account</Button>
            </div>
          </div>
        </Card>
      </div>
    </Structure>
  );
}

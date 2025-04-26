
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        // Check if error is due to user not found
        if (error.message.includes('Invalid login credentials')) {
          toast({
            title: "Account Not Found",
            description: "Please sign up first to create your account.",
            variant: "destructive",
          });
          navigate("/signup");
          return;
        }
        
        toast({
          title: "Error",
          description: "Invalid email or password",
          variant: "destructive",
        });
        return;
      }

      if (data.user) {
        // Check if user profile exists
        const { data: userProfile } = await supabase
          .from('users')
          .select('id')
          .eq('id', data.user.id)
          .single();

        if (!userProfile) {
          // If no profile exists, sign out and redirect to signup
          await supabase.auth.signOut();
          toast({
            title: "Profile Not Found",
            description: "Please create an account first.",
            variant: "destructive",
          });
          navigate("/signup");
          return;
        }

        toast({
          title: "Success",
          description: "Logged in successfully!",
        });
        navigate("/account");
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
};

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Signin to your PopX account
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label className="text-[#6C25FF]">Email address*</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="py-6"
              required
            />
          </div>
          <div className="space-y-2">
            <Label className="text-[#6C25FF]">Password*</Label>
            <Input
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="py-6"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#6C25FF] hover:bg-[#5a1fd9] text-white py-6 mt-4"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;

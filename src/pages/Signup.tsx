
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";

const Signup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.password) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    // In a real app, you would create the account here
    navigate("/account");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Create your PopX account
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label className="text-[#6C25FF]">Full Name*</Label>
            <Input
              placeholder="Marry Doe"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              className="py-6"
              required
            />
          </div>
          <div className="space-y-2">
            <Label className="text-[#6C25FF]">Phone number*</Label>
            <Input
              type="tel"
              placeholder="Marry Doe"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="py-6"
              required
            />
          </div>
          <div className="space-y-2">
            <Label className="text-[#6C25FF]">Email address*</Label>
            <Input
              type="email"
              placeholder="Marry Doe"
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
              placeholder="Marry Doe"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="py-6"
              required
            />
          </div>
          <div className="space-y-2">
            <Label className="text-[#6C25FF]">Company name</Label>
            <Input
              placeholder="Marry Doe"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              className="py-6"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-[#6C25FF]">Are you an Agency?*</Label>
            <RadioGroup
              value={formData.isAgency}
              onValueChange={(value) =>
                setFormData({ ...formData, isAgency: value })
              }
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="yes" className="text-[#6C25FF]" />
                <Label htmlFor="yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" className="text-[#6C25FF]" />
                <Label htmlFor="no">No</Label>
              </div>
            </RadioGroup>
          </div>
          <Button
            type="submit"
            className="w-full bg-[#6C25FF] hover:bg-[#5a1fd9] text-white py-6 mt-4"
          >
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

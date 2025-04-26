import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Account = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    checkUser();
    fetchUserData();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      navigate("/login");
    }
  };

  const fetchUserData = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      // Get complete profile data
      const { data } = await supabase
        .from('users')
        .select('*')  // Select all fields
        .eq('id', user.id)
        .single();

      console.log('Profile data:', data); // For debugging

      if (data) {
        setUserData({
          full_name: data.full_name || 'User',
          email: user.email,
          description: `I am ${data.full_name || 'a user'}, ${data.is_agency ? 'an agency professional' : 'a business professional'} ${data.company ? `at ${data.company}` : ''}.`
        });
      }
    }
  }; // Removed extra curly brace here

  return (
    <div className="min-h-screen bg-[#F7F8F9] p-4">
      <div className="max-w-md mx-auto relative">
        <div className="absolute top-0 right-0">
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            className="text-[#6C25FF] hover:bg-[#6C25FF]/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </Button>
        </div>
        
        <h1 className="text-xl font-semibold mb-4 text-[#1D2226]">Account Settings</h1>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="relative">
              <Avatar className="h-16 w-16 rounded-full border-2 border-[#6C25FF] overflow-hidden">
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
              <div className="absolute -bottom-1 -right-1 bg-[#6C25FF] rounded-full p-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-lg font-medium text-[#1D2226]">
                {userData?.full_name}
              </h2>
              <p className="text-[#1D2226] opacity-80">
                {userData?.email}
              </p>
              <p className="mt-4 text-[#1D2226] opacity-70 text-sm leading-relaxed">
                {userData?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
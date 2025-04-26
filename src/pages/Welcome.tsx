
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Welcome to PopX</h1>
        <p className="text-gray-600">Get started with your account</p>
        <div className="space-y-4">
          <Button
            onClick={() => navigate("/signup")}
            className="w-full bg-[#6C25FF] hover:bg-[#5a1fd9] text-white py-6"
          >
            Create Account
          </Button>
          <Button
            onClick={() => navigate("/login")}
            variant="outline"
            className="w-full py-6"
          >
            Already Registered? Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

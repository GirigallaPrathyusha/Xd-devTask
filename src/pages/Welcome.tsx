
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Welcome = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Welcome to PopX</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="space-y-3">
          <Link to="/signup" className="block w-full">
            <Button
              className="w-full bg-[#6C25FF] hover:bg-[#5a1fd9] text-white py-6"
            >
              Create Account
            </Button>
          </Link>
          <Link to="/login" className="block w-full">
            <Button
              variant="secondary"
              className="w-full bg-[#EEEBFF] hover:bg-[#e5e0ff] text-[#6C25FF] py-6"
            >
              Already Registered? Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

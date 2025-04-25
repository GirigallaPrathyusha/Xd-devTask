
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Account = () => {
  return (
    <div className="min-h-screen p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6">Account Settings</h1>
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <div className="relative">
              <Avatar className="h-16 w-16">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>MD</AvatarFallback>
              </Avatar>
              <Badge className="absolute -bottom-1 -right-1 bg-[#6C25FF]">
                A
              </Badge>
            </div>
            <div>
              <h2 className="font-semibold text-lg">Marry Doe</h2>
              <p className="text-gray-600">Marry@Gmail.Com</p>
            </div>
          </div>
          <p className="mt-4 text-gray-600">
            Lorem Ipsum Dolor Sit Amet, Consetetut Sadipiscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
};

export default Account;

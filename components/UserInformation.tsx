import { currentUser } from "@clerk/nextjs/server"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

async function UserInformation() {

    const user= await currentUser();
    const firstName = user?.firstName;
    const lastName = user?.lastName;
    const imageUrl = user?.imageUrl;
    const userName = user?.username;


  return (
    <div className="flex flex-col justify-center items-center bg-white mr-6 rounded-lg  border py-4"> 
        <Avatar>
            {user?.id ?(
                <AvatarImage src={imageUrl} />)
            :(
                <AvatarImage src="https://github.com/shadcn.png" />
            )}
            <AvatarImage src={imageUrl} />
            <AvatarFallback>{firstName?.[0]}{lastName?.[0]}</AvatarFallback>
        </Avatar>

        <SignedIn>
        <div className="text-center ">
            <p>{userName}</p>
            <p className="font-semibold ">{firstName} {lastName}</p>
            <p>{user?.emailAddresses[0]?.emailAddress}</p>
        </div> 
        </SignedIn>

        <SignedOut>
            <div className="text-center space-y-2">  
                <p className="font-semibold">You are not signed in</p>
                <Button asChild className=" bg-blue-700 text-white hover:bg-blue-700">
                    <SignInButton>Sign In</SignInButton>
                    </Button>
            </div>
        </SignedOut>

        <hr  className="w-full border-gray-200 my-5"/>

        <div className="flex justify-between text-sm px-4 w-full">
            <p className="text-semibold text-gray-400">Posts</p>
            <p className="text-blue-400">0</p>
        </div>

        <div className="flex justify-between text-sm px-4 w-full">
            <p className="text-semibold text-gray-400">Comments</p>
            <p className="text-blue-400">0</p>
        </div>

    </div>
  )
}

export default UserInformation;
import UserInformation from "@/components/UserInformation";


export default function Home() {
  return (
  
      <div className="grid grid-cols-8 mt-5 sm:px-5 ">
        
       
       <section className="hidden md:inline md:col-span-2">
        {/* User Information*/}
        <UserInformation />
       </section>
       <section className="col-span md:col-span-6 xl:col-span-4 xl:max-w-full mx-auto w-full">
        {/*post form*/}

        {/*posts*/}

       </section>
       <section className="hidden xl:inline justify-center xl:col-span-2">
        {/*widgets*/}
       </section>
          
    </div>
        
  );
}

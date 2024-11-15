import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";


const LoginLinks = () => {
    return (
        <div className="col-span-3 space-y-6 ">
            <div className="space-y-3">
                <h2 className="text-xl font-semibold mb-2">Login with</h2>
                <button className="text-lg font-medium btn bg-inherit w-full "><FaGoogle className="h-8 w-8 border rounded-full p-[5px]"></FaGoogle> Login with Google</button>
                <button className="text-lg font-medium btn bg-inherit w-full "><FaGithub className="h-8 w-8 border rounded-full p-[5px]"></FaGithub> Login with Github</button>
            </div>
            <div className="flex flex-col space-y-1 text-left">
                <h2 className="font-semibold text-xl mb-2">Find Us On</h2>
                <button className="btn text-lg font-medium bg-inherit w-full justify-start"><FaFacebookF className="w-8 mr-2 ml-3 bg-slate-100  h-8 border rounded-full p-[5px] mr"></FaFacebookF> Facebook</button>
                <button className="btn text-lg font-medium bg-inherit w-full justify-start"><FaInstagram className="w-8 mr-2 ml-3 bg-slate-100  h-8 border rounded-full p-[5px]"></FaInstagram> Instragram</button>
                <button className="btn text-lg font-medium bg-inherit w-full justify-start"><FaTwitter className="w-8 mr-2 ml-3 bg-slate-100  h-8 border rounded-full p-[5px]"></FaTwitter> Twitter</button>
            </div>
        </div>
    );
};

export default LoginLinks;
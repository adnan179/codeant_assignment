import githubIcon from "../../public/github_icon.svg";
import bitbucketIcon from "../../public/bitbucket_icon.svg";
import azureIcon from "../../public/azure_icon.svg";
import gitlabsIcon from "../../public/gitlab_icon.svg";
import Image from "next/image";

//data for the sign in links with icons and texts
const links = [
  {
    icon: githubIcon,
    name: "Sign in with Github"
  },
  {
    icon: bitbucketIcon,
    name: "Sign in with Bitbucket"
  },
  {
    icon: azureIcon,
    name: "Sign in with Azure Devops"
  },
  {
    icon: gitlabsIcon,
    name: "Sign in with GitLab"
  },
];
const LoginLinks: React.FC = () => {
  return (
    <div className=" bg-white flex flex-col w-full border border-t-0 border-[#D8DAE5] rounded py-5">
      <div className="flex flex-col gap-3 w-full px-8">
        {links.map(l => (
          <button key={l.name} className="flex py-2 gap-2 justify-center items-center border border-[#D8DAE5] rounded hover:bg-[#F5F5F5]">
            <Image src={l.icon} alt={l.name} />
            <p className="text-[#171717] text-[16px] font-semibold">{l.name}</p>
          </button>
        ))}
      </div>
    </div>
  )
}

export default LoginLinks;
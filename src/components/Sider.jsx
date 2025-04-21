import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { FaSkype } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
function Sider() {
  return (
    <div className="lg:fixed left-0 bottom-0 px-8 sm:static " >
     <div className="flex flex-col items-center  ">
     <div className="flex gap-3 lg:flex-col text-pink sm:flex-row ">
        <a href="https://github.com/nishu2525" target="blank"><FaGithub size={25} /></a>
        <a href="https://www.linkedin.com/in/nishad-umap-68233319b/" target="blank"><FaLinkedin size={25} /></a>
        <a href="mailto:umapnishad1@gmail.com" target="blank"><BiLogoGmail size={25} /></a>
        <a href="https://wa.me/+919307992632" target="blank"><FaWhatsapp size={25} /></a>
        <a href="https://join.skype.com/invite/ts52WLSrYAs3" target="blank"><FaSkype size={25} /></a>
        <a href="https://www.instagram.com/nishad_umap?igsh=MTluaGk3dWt6eXA5OA==" className="pb-2" target="blank"><FaInstagram size={25} /></a>
      </div>
        <div className=" lg:flex lg:w-[1px] lg:h-36 bg-pink sm:hidden"></div>
     </div>
    </div>
  );
}

export default Sider;

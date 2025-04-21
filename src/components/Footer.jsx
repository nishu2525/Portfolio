import { Sidebar } from "flowbite-react"
import Sider from "./Sider"


function Footer() {
  return (
    <div className="py-5">
     <div className="h-[1px] w-full bg-[#374151] mx-auto my-5"></div>
      <Sider/>
     <div className="flex flex-col items-center justify-center text-[#9ca4b0] py-2">
      <h1>Designed & Developed By </h1>
      <h1> &#169; Nishad Umap &#128526;</h1>
     </div>
    </div>
  )
}

export default Footer

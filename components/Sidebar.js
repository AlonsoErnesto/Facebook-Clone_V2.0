import {useSession } from "next-auth/react";
import SidebarRow from "./SidebarRow"
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon
} from "@heroicons/react/outline"

import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon
} from "@heroicons/react/solid"

const Sidebar = () => {
  
  const {  session } = useSession();

  return(
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow src={session?.user.image} title={session?.user.name}/>
      <SidebarRow Icon={UsersIcon} title="Amigos" />
      <SidebarRow Icon={UserGroupIcon} title="Grupos" />      
      <SidebarRow Icon={ShoppingBagIcon} title="Tiendas"/>
      <SidebarRow Icon={DesktopComputerIcon} title="Ver"/>
      <SidebarRow Icon={CalendarIcon} title="Eventos"/>
      <SidebarRow Icon={ClockIcon} title="Recuerdos"/>
      <SidebarRow Icon={ChevronDownIcon} title="Ver mas"/>
    </div>
  );}

export default Sidebar;

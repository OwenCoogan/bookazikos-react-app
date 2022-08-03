
import {
  Link,
} from "react-router-dom";
import { SidebarLinkVariant } from '../@types';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function SidebarLink(
  path: any ,
  variant : SidebarLinkVariant
){
  variant = variant || "dashboard";
  return (
    <li className="hover:bg-gray-100">
				<Link
          to={path}
					className="h-16 px-6 flex justify-center items-center w-full
					focus:text-orange-500">
            {
              variant === "dashboard" ?? (<DashboardIcon/>)
            }
            {
              variant === "settings" ?? (<SettingsIcon/>)
            }
            {
              variant === "notifications" ?? (<SettingsIcon/>)
            }
            {
              variant === "profile" ?? (<AccountCircleIcon/>)
            }

				</Link>
			</li>
  )
}

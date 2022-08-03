import { SidebarLinkVariant } from '../@types/@types';

export default function SidebarLink({
  children,
  variant,
}: {
  children?: React.ReactNode,
  variant: SidebarLinkVariant,
}
){
  variant = variant || "dashboard";
  return (
    <li className="hover:bg-gray-100">
      {children}
			</li>
  )
}

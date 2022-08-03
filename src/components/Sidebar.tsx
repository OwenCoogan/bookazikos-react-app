import SidebarLink from './Sidebar-Link';


export default function Sidebar(){
  return (
	<aside
		className="flex flex-col items-center bg-white text-gray-700 shadow h-full">

		<div className="h-16 flex items-center w-full">
			<a className="h-6 w-6 mx-auto" href="http://svelte.dev/">
				<img
					className="h-6 w-6 mx-auto"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/512px-Svelte_Logo.svg.png"
					alt="svelte logo" />
			</a>
		</div>

		<ul>
      <SidebarLink
        path={'/dashboard'}
        variant="dashboard"
      />
      <SidebarLink
        RouteLink={'/settings'}
        variant="settings"
      />

		</ul>

		<div className="mt-auto h-16 flex items-center w-full">
			<button
				className="h-16 w-10 mx-auto flex justify-center items-center focus:text-orange-500 hover:bg-red-200 focus:outline-none">
				<svg
					className="h-5 w-5 text-red-700"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round">
					<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
					<polyline points="16 17 21 12 16 7"></polyline>
					<line x1="21" y1="12" x2="9" y2="12"></line>
				</svg>

			</button>
		</div>
	</aside>
  );
}

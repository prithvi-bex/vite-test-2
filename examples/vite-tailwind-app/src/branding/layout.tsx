import { SidebarNav } from '@components/sidebar-nav';
import { Separator } from 'bootes-studio-ui-components';
import { Outlet } from 'react-router-dom';

const sidebarNavComponentsItems = [
    {
        title: "Botões",
        href: "/components/button",
    },
    {
        title: "Formulário",
        href: "/components/form",
    },
]

// interface AppLayoutProps {
//   children: React.ReactNode
// }

const Layout = () => {
    // const [mode, setMode] = useState('light');

    // const toggleDarkMode = () => {
    //   setMode(mode === 'light' ? 'dark' : 'light');
    // };

    return (
        // <div className={`h-full w-full ${mode}`}>
        //   <div className='w-full h-10 bg-background flex justify-between items-center border-0 border-solid border-b-0'>

        //   </div>
        //   <div className={`h-full w-full flex justify-center items-center bg-background`}>
        //     <div className={`flex flex-col align-center justify-center items-center`}>
        //       <div className="text-3xl font-bold underline">
        //         Built using shadcn-ui-library-starter
        //       </div>
        //       <div className='py-4'>
        //         <Button onClick={toggleDarkMode} className='animate-pulse'>
        //           <span>Toggle Dark Mode</span>
        //         </Button>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <div className="space-y-6 p-10 pb-16 h-full w-full">
            <div className="space-y-0.5">
                <h2 className="text-5xl font-bold">Bootes Studio UI</h2>
                <p className="text-muted-foreground">
                    UI library for React with Tailwind CSS, Vite, TypeScript and Shadcn-ui components.
                </p>
            </div>
            <Separator className="my-6" />
            <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                <aside className="-mx-4 lg:w-1/5">
                    <SidebarNav items={sidebarNavComponentsItems} />
                </aside>
                <div className="flex-1">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout
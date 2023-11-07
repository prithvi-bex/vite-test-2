import './App.css'
import { Link, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from '@/branding/layout';
import ButtonComponent from '@/branding/components/button';
import Home from '@/branding';
import FormComponent from './branding/components/form';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='components/button' element={<ButtonComponent />} />
      <Route path="components/form" element={<FormComponent />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  )
)

export default function App() {
  // const [mode, setMode] = useState('light');

  // const toggleDarkMode = () => {
  //   setMode(mode === 'light' ? 'dark' : 'light');
  // };

  return (
    // <div className="space-y-6 p-10 pb-16 h-full w-full">
    //   <div className="space-y-0.5">
    //     <h2 className="text-5xl font-bold">Bootes Studio UI</h2>
    //     <p className="text-muted-foreground">
    //       UI library for React with Tailwind CSS, Vite, TypeScript and Shadcn-ui components.
    //     </p>
    //   </div>
    //   <Separator className="my-6" />
    //   <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
    //     <aside className="-mx-4 lg:w-1/5">
    //       <SidebarNav items={sidebarNavComponentsItems} />
    //     </aside>
    //     <div className="flex-1">
    //       <div className="flex gap-4">
    //         <a
    //           href={"https://shadcn-ui-library-starter.vercel.app/"}
    //           target="_blank"
    //           rel="noreferrer"
    //           className={buttonVariants({ size: "default" })}
    //         >
    //           Documentation
    //         </a>
    //         <a
    //           target="_blank"
    //           rel="noreferrer"
    //           href={"https://google.com"}
    //           className={buttonVariants({ variant: "outline" })}
    //         >
    //           GitHub
    //         </a>
    //         <Button variant='secondary' className="animate-pulse">
    //           <span>Secondary</span>
    //         </Button>
    //         <Button variant='destructive'>Destructive</Button>
    //         <Button variant='ghost'>Ghost</Button>
    //         <Button variant='link'>Link</Button>
    //         <Button variant='link' className="text-secondary-foreground">Link Secondary</Button>
    //       </div>

    //     </div>
    //   </div>
    // </div>
    <>
      <RouterProvider router={router} />
    </>
  )
}


function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
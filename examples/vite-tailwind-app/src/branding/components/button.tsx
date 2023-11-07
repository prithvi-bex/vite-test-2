import { Button, buttonVariants } from 'bootes-studio-ui-components';
const ButtonComponent = () => {
    return (
        <div className="flex gap-4">
            <a
                href={"https://shadcn-ui-library-starter.vercel.app/"}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ size: "default" })}
            >
                Documentation
            </a>
            <a
                target="_blank"
                rel="noreferrer"
                href={"https://google.com"}
                className={buttonVariants({ variant: "outline" })}
            >
                GitHub
            </a>
            <Button variant='secondary' className="animate-pulse">
                <span>Secondary</span>
            </Button>
            <Button variant='destructive'>Destructive</Button>
            <Button variant='ghost'>Ghost</Button>
            <Button variant='link'>Link</Button>
            <Button variant='link' className="text-secondary-foreground">Link Secondary</Button>
        </div>
    )
}
export default ButtonComponent
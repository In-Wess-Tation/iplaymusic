import Navigation from "./Navigation";

const Footer = () => {
    return (
        <footer className="w-full h-20 bg-white dark:bg-kinda-black fixed bottom-0 shadow-2xl shadow-neutral-500 dark:shadow-black z-50">
            <Navigation />
        </footer>
    );
}

export default Footer;
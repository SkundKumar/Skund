import { Fugaz_One } from 'next/font/google';
import BouncingTags from "./BouncingTags";
import FlowingMenu from "@/components/FlowingMenu";
const fugaz = Fugaz_One({ subsets: ['latin'], weight: '400' });
const Outro = () => {
    const demoItems = [
  { link: '/Resume_Skund Kumar_22.10.2025.pdf', text: 'Resume', image: 'https://imgs.search.brave.com/JuZc6w4y39auGfpCmvafVxLQ20P4B3YOznEkL__h45U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/SnA0NDFEc3MyQmdB/QUFBTS90eXBlLWNh/dC5naWY.gif' },
  { link: 'mailto:skund.kr@gmail.com', text: 'Contact', image: 'https://imgs.search.brave.com/DnUFUALGthuW2AL1MfO0qWr-9hEM0nuY2qi9GW1U7xU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/bzlMNGNLVHNXOWdB/QUFBTS9kYW4tZGEu/Z2lm.gif' },
  { link: 'https://github.com/SkundKumar', text: 'Github', image: '/git.png' },
  { link: 'https://www.linkedin.com/in/skund-kumar-43b997279/', text: 'Linkedin', image: '/lkd.png' }
];
    return (
        <div className={`w-screen flex border-t-2 ${fugaz.className}`}>
            <div className="w-screen flex " >
                <BouncingTags/>
                 <FlowingMenu items={demoItems} />
            </div>
           
        </div>
    );
}

export default Outro
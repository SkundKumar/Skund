import { Fugaz_One } from 'next/font/google';
import BouncingTags from "./BouncingTags";
import FlowingMenu from "@/components/FlowingMenu";
const fugaz = Fugaz_One({ subsets: ['latin'], weight: '400' });
const Outro = () => {
    const demoItems = [
  { link: '#', text: 'Resume', image: 'https://picsum.photos/600/400?random=1' },
  { link: '#', text: 'Contact', image: 'https://picsum.photos/600/400?random=2' },
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
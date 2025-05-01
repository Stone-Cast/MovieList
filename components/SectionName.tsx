import { bebasNeue } from "@/app/fonts/fonts";

const SectionName = ({ name }: { name: string }) => {
    return (
        <div className="flex justify-center">
            <div className="max-w-[1550px] w-full">
                <span
                    className={`${bebasNeue.className} mx-2 text-2xl md:text-4xl capitalize`}
                >
                    {name}
                </span>
            </div>
        </div>
    );
};

export default SectionName;

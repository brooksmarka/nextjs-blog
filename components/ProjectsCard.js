import { cn } from "../lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import FramerWrapper from "./FramerWrapper";
import { ArrowUpRight } from "lucide-react";

const ProjectCards = ({ value, num }) => {
  return (
    <FramerWrapper className={"w-[520px] h-[300px] max-lg:w-full max-lg:h-auto"} y={0} scale={0.8} delay={num / 4} duration={0.15}>
      <Card className="w-full h-full">
        <CardHeader>
          <CardTitle>{value.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-base font-poppins">{value.description}</p>
          <div className="w-full h-fit flex mt-2 justify-center flex-row gap-3">
            {value.tags.map((item, index) => (
              <span className={`inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium ${
                  item === 'Node.js' && 'bg-slate-100 text-slate-800' || 
                  item === 'Express.js' && 'bg-green-100 text-green-800' || 
                  item === 'Vite' && 'bg-violet-100 text-violet-800' || 
                  item === 'Javascript' && 'bg-teal-100 text-teal-800' || 
                  item === 'AWS Amplify' && 'bg-yellow-100 text-yellow-800 ' || 
                  item === 'Mapbox' && 'bg-cyan-100 text-cyan-800' ||
                  item === 'TelegramBot' && 'bg-orange-100 text-orange-800' ||
                  item === 'Docker' && 'bg-rose-100 text-rose-800' ||
                  item === 'Typescript' && 'bg-red-100 text-red-800' || 'bg-gray-100 text-gray-800'
                }`} key={index}>{item}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="items-center justify-center flex">
          <Link
            href={value.link}
            target="_blank"
            className={cn(buttonVariants({ variant: "default", size: "lg" }), "flex")}
          >
            Visit Project <ArrowUpRight className="h-5 w-5 ml-1" />
          </Link>
        </CardFooter>
      </Card>
    </FramerWrapper>
  );
};

export default ProjectCards;

import Image from "next/image";
import Section from "@/components/Section";
import { HeroBlockProps } from "@/types/blocks";
import { getImageUrl } from "@/utils/api";

export default function HeroBlock({
  heroHeading,
  profileImage,
  profileName,
  bioIntro,
  bioSecondary,
}: HeroBlockProps) {
  return (
    <Section id="about-me">
      <h1 className="text-2xl lg:text-5xl font-bold bg-gradient-to-r from-secondary to-primary inline-block text-transparent bg-clip-text font-mono text-pretty mb-12">
        {heroHeading}
      </h1>
      <div className="flex lg:flex-row flex-col gap-12 items-center">
        <div className="col-span-2">
          <div className="p-2 bg-gradient-to-r from-primary to-secondary rounded-full">
            <Image
              src={getImageUrl(profileImage, 300, 300)}
              alt="profile picture"
              width={300}
              height={300}
              className="rounded-full aspect-square object-cover bg-slate-100 min-w-48"
            />
          </div>
        </div>
        <div className="sm:col-span-6 lg:col-span-5 font-mono">
          <h2 className="text-xl lg:text-3xl mb-2 font-bold">{profileName}</h2>
          <p className="mb-4">{bioIntro}</p>
          <p>{bioSecondary}</p>
        </div>
      </div>
    </Section>
  );
}

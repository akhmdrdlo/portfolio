import { Composition, Folder } from "remotion";
import { Showreel, SCENES, SHOWREEL_DURATION } from "./Showreel";
import { Reel, REEL_DURATION } from "./Reel";
import { Intro } from "./scenes/Intro";
import { Who } from "./scenes/Who";
import { Design } from "./scenes/Design";
import { Photo } from "./scenes/Photo";
import { Motion } from "./scenes/Motion";
import { Tech } from "./scenes/Tech";
import { Outro } from "./scenes/Outro";

const base = { width: 1920, height: 1080, fps: 30 } as const;

export const RemotionRoot: React.FC = () => (
  <>
    <Folder name="Showreel-Scenes">
      <Composition id="Intro" component={Intro} durationInFrames={SCENES.intro} {...base} />
      <Composition id="Who" component={Who} durationInFrames={SCENES.who} {...base} />
      <Composition id="Design" component={Design} durationInFrames={SCENES.design} {...base} />
      <Composition id="Photo" component={Photo} durationInFrames={SCENES.photo} {...base} />
      <Composition id="Motion" component={Motion} durationInFrames={SCENES.motion} {...base} />
      <Composition id="Tech" component={Tech} durationInFrames={SCENES.tech} {...base} />
      <Composition id="Outro" component={Outro} durationInFrames={SCENES.outro} {...base} />
    </Folder>
    <Composition id="Showreel" component={Showreel} durationInFrames={SHOWREEL_DURATION} {...base} />
    <Composition id="ShowreelV3" component={Reel} durationInFrames={REEL_DURATION} {...base} />
  </>
);

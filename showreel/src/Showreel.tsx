import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";
import { Intro } from "./scenes/Intro";
import { Who } from "./scenes/Who";
import { Design } from "./scenes/Design";
import { Photo } from "./scenes/Photo";
import { Motion } from "./scenes/Motion";
import { Tech } from "./scenes/Tech";
import { Outro } from "./scenes/Outro";

const T = 15;
const timing = linearTiming({ durationInFrames: T });

/** Scene lengths in frames (30fps). Total = sum − 6 transitions × 15. */
export const SCENES = { intro: 90, who: 150, design: 210, photo: 160, motion: 300, tech: 150, outro: 150 } as const;
export const SHOWREEL_DURATION = Object.values(SCENES).reduce((a, b) => a + b, 0) - 6 * T;

export const Showreel = () => (
  <TransitionSeries>
    <TransitionSeries.Sequence name="Intro" durationInFrames={90}>
      <Intro />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={wipe({ direction: "from-bottom-left" })} timing={timing} />
    <TransitionSeries.Sequence name="Who" durationInFrames={150}>
      <Who />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={slide({ direction: "from-bottom" })} timing={timing} />
    <TransitionSeries.Sequence name="Design" durationInFrames={210}>
      <Design />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={wipe({ direction: "from-right" })} timing={timing} />
    <TransitionSeries.Sequence name="Photo" durationInFrames={160}>
      <Photo />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={wipe({ direction: "from-bottom-left" })} timing={timing} />
    <TransitionSeries.Sequence name="Motion" durationInFrames={300}>
      <Motion />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={timing} />
    <TransitionSeries.Sequence name="Tech" durationInFrames={150}>
      <Tech />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={wipe({ direction: "from-top-right" })} timing={timing} />
    <TransitionSeries.Sequence name="Outro" durationInFrames={150}>
      <Outro />
    </TransitionSeries.Sequence>
  </TransitionSeries>
);

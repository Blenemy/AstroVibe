import Insight from "../../../components/Insight/Insight";

import ariesInsight from "../../../assets/Aries.png";
import leoInsight from "../../../assets/Leo.png";
import cancerInsight from "../../../assets/Cancer.png";
import cancerInsightWithRating from "../../../assets/CancerWithRatings.png";
import geminiInsight from "../../../assets/Gemini.png";

import constellation_1 from "../../../assets/Constellation 1.png";
import constellation_2 from "../../../assets/Constellation 2.png";
import constellation_3 from "../../../assets/Constellation 3.png";

import "./DailyInsights.scss";

const INSIGHTS_LIST = [
  {
    text: "Begin every day with a celestial roadmap. AstroVibe offers you free daily horoscope readings, preparing you for what’s to come in love, work, and fortune.",
    src: ariesInsight.src,
  },
  {
    text: "Delve deeper into your own universe with a premium, personalized horoscope based on your exact birth details, revealing your emotional and intellectual landscape along with key events that could shape your future.",
    src: leoInsight.src,
  },
  {
    text: "Explore the companionship of the cosmos. Check your zodiac compatibility with friends, loved ones, and colleagues to understand your shared stars' guidance.",
    src: cancerInsight.src,
  },
  {
    text: "With our premium compatibility analysis, uncover the nuanced layers of your relationships. Our in-depth reports compare emotional, physical, and intellectual compatibilities to bring clarity to all your connections.",
    src: cancerInsightWithRating.src,
  },
  {
    text: "Immerse yourself in the characteristics and wisdom of all 12 zodiac signs. AstroVibe provides detailed profiles, including personality traits, love life, career paths, and lucky numbers.",
    src: geminiInsight.src,
  },
];

const DailyInsights = () => {
  return (
    <section className="daily-insights">
      <div className="daily-insights__content">
        <h2 className="daily-insights__title">
          Daily Insights and Personalized Horoscopes
        </h2>

        <div className="daily-insights__list">
          {INSIGHTS_LIST.map((insight, index) => (
            <Insight
              text={insight.text}
              image={insight.src}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>
        <img
          src={constellation_1.src}
          alt="constellation"
          className="daily-insights__constellation-image daily-insights__constellation-image_1"
        />
        <img
          src={constellation_2.src}
          alt="constellation"
          className="daily-insights__constellation-image daily-insights__constellation-image_2"
        />
        <img
          src={constellation_3.src}
          alt="constellation"
          className="daily-insights__constellation-image daily-insights__constellation-image_3"
        />
      </div>
    </section>
  );
};

export default DailyInsights;

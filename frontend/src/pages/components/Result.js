import "../static/result.css";

import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";
// import {
//   Chart as ChartJS,
//   RadialLinearScale,
//   PointElement,
//   LineElement,
//   Filler,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Radar } from "react-chartjs-2";

// ChartJS.register(
//   RadialLinearScale,
//   PointElement,
//   LineElement,
//   Filler,
//   Tooltip,
//   Legend
// );
export default function Result({ insomniaResult, OSAResult, COMISAResult }) {
  const data = [
    {
      data: {
        Insomnia: insomniaResult / 100,
        OSA: OSAResult / 100,
        COMISA: COMISAResult / 100,
      },
      meta: { color: "red" },
    },
  ];

  const captions = {
    Insomnia: "Insomnia",
    OSA: "OSA",
    COMISA: "COMISA",
  };
  const insomnia_text =
    "You are suspected of insomnia. Insomnia means symptoms rather than disease names. It's hard to fall asleep, wake up often, or wake up too early to fall asleep again. Or, it refers to symptoms that seem to have slept well, but are difficult to wake up the next morning and are tired. This causes difficulties in daytime activities, and if symptoms that are sleepy, tired, and difficult to concentrate persist more than three times a week or more for three months, it is diagnosed as chronic insomnia. More than 20% of the population have experienced insomnia more than once in their lives, and about 5% have chronic insomnia.\
The causes of chronic insomnia vary, and the causative diseases, symptoms, and damage situations vary depending on gender and age. Without proper treatment, physical symptoms such as cardiovascular disease, cerebrovascular disease, and metabolic disease and decline in memory can occur, depression and anxiety symptoms can occur or worsen. If you take sleeping pills for a long time or take health functional foods arbitrarily because you have insomnia without accurate diagnosis, secondary health harm may occur.\
The best way to prevent and improve insomnia is to maintain a regular bed-wake times, regardless of weekdays and weekends. When insomnia occurs, the habit of going to bed earlier than usual and lying down and waiting to fall asleep is very bad, even if you are not sleepy to compensate for sleep. Rather, by reducing the amount of time lying in bed, sleep is deepened and improves insomnia by less waking. No matter how much you haven’t slept, waking up at a fixed time the next day is the first step in overcoming insomnia.\
";
  const osa_text =
    "Sleep breathing disorders include snoring, apnea, or ventilation difficulties. In particular, obstructive sleep apnea (OSA) is a chronic disease that occur snoring or respiratory disorders due to narrowing of the upper airway through which air flows during sleep. If you are obese or have a thick and short neck, snoring begins at a young age. As you get older, the muscle elasticity of upper airway decreases and if the airways continue to narrow and clog during sleep, you cannot breathe, and oxygen saturation in the body decreases. As the brain senses this, it gives strength to the diaphragm and chest muscles to breathe again, and the brain wakes up. It occurs hundreds times per every night. Most of the people with OSA may sleep without recognizing the awakening. However, when you wake up the next morning, you seem to have slept well, but your head is heavy and you feel tired during the day. Some people may not feel it at all, which prolongs your OSA and results in negative health consequences.\
The problem is that if hypoxia and frequent arousals from this OSA persist for years to decades, the risks of developing serious diseases such as high blood pressure, coronary artery disease, diabetes, stroke, or depression may increase. Even if the patient does not feel it himself, if snoring or breathing problems while sleeping are observed, active treatment should be provided.\
To prevent and improve OSA, you should abstain from drinking before bed, maintain an appropriate weight, and exercise regularly. If you lie on your side while sleeping, snoring may improve, but it is not a method that can be used for a long time. If you experience daytime fatigue, drowsiness, headache, etc., or are accompanied by metabolic diseases, you should consult a doctor and conduct a polysomnography to receive appropriate treatment.\
";
  const comisa_text =
    "More than 45% of people who complain of insomnia are accompanied by OSA. In particular, postmenopausal women and men after the age of 50 complaining of insomnia are much more likely to be caused by OSA or accompanied by OSA. In this case, it is necessary to treat insomnia and OSA at the same time to improve sleep. Treatment methods may vary depending on the aspect of insomnia and the degree of OSA, which is an area that requires professional diagnosis and treatment by a physician";

  //   const data = {
  //     labels: ["Insomnia", "OSA", "COMISA"],
  //     datasets: [
  //       {
  //         label: "Sleep Disorder",
  //         data: [insomniaResult / 100, OSAResult / 100, COMISAResult / 100],
  //         backgroundColor: "rgba(255, 99, 132, 0.2)",
  //         borderColor: "rgba(255, 99, 132, 1)",
  //         pointBackgroundColor: "rgba(34, 202, 236, 1)",
  //         poingBorderColor: "#fff",
  //         pointHoverBackgroundColor: "#fff",
  //         pointHoverBorderColor: "rgba(34, 202, 236, 1)",
  //       },
  //     ],
  //   };

  //   const options = {
  //     scale: {
  //       ticks: {
  //         beginAtZero: true,
  //         min: 0,
  //         max: 1,
  //         stepSize: 0.05,
  //         showLabelBackdrop: false,
  //         backdropColor: "rgba(203, 197, 11, 1)",
  //       },
  //     },
  //   };

  return (
    <>
      <h1 className="h1">RESULT:</h1>
      <RadarChart captions={captions} data={data} size={450} />
      {/* <div style={{ width: "40%", height: "40%" }}>
        <Radar data={data} options={options} />
      </div> */}
      <h1 className="h1" style={{ margin: "10px" }}>
        INSOMNIA: {insomniaResult}%
      </h1>
      <h1 className="h1" style={{ margin: "10px" }}>
        OSA: {OSAResult}%
      </h1>
      <h1 className="h1" style={{ margin: "10px" }}>
        COMISA: {COMISAResult}%
      </h1>

      <div
        align="center"
        style={{ width: "50%", textAlign: "justify", marginTop: "20px" }}
      >
        <h2 className="h2">Insomnia</h2>
        <p className="p">{insomnia_text}</p>
      </div>

      <div
        align="center"
        style={{ width: "50%", textAlign: "justify", marginTop: "20px" }}
      >
        <h2 className="h2">Obstructive sleep apnea (OSA)</h2>
        <p className="p">{osa_text}</p>
      </div>

      <div
        align="center"
        style={{ width: "50%", textAlign: "justify", marginTop: "20px" }}
      >
        <h2 className="h2">Comorbid insomnia and sleep apnea (COMISA)</h2>
        <p className="p">{comisa_text}</p>
      </div>
    </>
  );
}

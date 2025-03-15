import React from "react";
import "./Section.css";
import sections from "./Data";

const Sections = () => {
  return (
    <div className="sections-container">
      {sections.sections.map((section, index) => (
        <div
          key={index}
          className="section"
          //   style={{ backgroundColor: index % 2 !== 0 ? "#fafafa" : "#fff" }}
        >
          <h2 className="section-title">{section.title}</h2>
          {section.subtitles.map((subtitle, i) => (
            <div key={i} className="subtitle-container">
              <h3 className="section-subtitle">{subtitle.subtitle}</h3>
              {splitParagraph(subtitle.paragraph).map((para, j) => (
                <p key={j} className="section-paragraph">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

// Function to split large paragraphs into smaller ones
const splitParagraph = (text, maxLength = 200) => {
  const sentences = text.split(". ");
  let paragraphs = [];
  let currentParagraph = "";

  sentences.forEach((sentence) => {
    if (currentParagraph.length + sentence.length < maxLength) {
      currentParagraph += (currentParagraph ? ". " : "") + sentence;
    } else {
      paragraphs.push(currentParagraph);
      currentParagraph = sentence;
    }
  });

  if (currentParagraph) paragraphs.push(currentParagraph);
  return paragraphs;
};

export default Sections;

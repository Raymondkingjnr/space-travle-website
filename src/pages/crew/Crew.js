import React, { useEffect, useState } from "react";
import "./crew.css";
import Navbar from "../../componenets/navbar/Navbar";
import { data } from "../../data";

function Crew() {
  const crews = data.crew;

  const [people, setPeople] = useState(crews);
  const [index, setIndex] = useState(0);

  ///////

  useEffect(() => {
    const lastIndex = people.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }

    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);

    return () => clearInterval(slider);
  }, [index]);

  return (
    <div className="crew-bg">
      <Navbar />
      <div className="crew-conatiner">
        <main className="crew-header">
          <p>
            <span>03</span>Meet your crew
          </p>
        </main>

        <div className="crew-content_container">
          {people.map((item, itemIndex) => {
            const { id, name, images, role, bio } = item;

            ///////

            let position = "nextSlide";

            if (itemIndex === index) {
              position = "activeSlide";
            }

            if (
              itemIndex === index - 1 ||
              (index === 0 && itemIndex === people.length - 1)
            ) {
              position = "lastIndex";
            }

            ///////

            return (
              <article className={position} key={id}>
                <aside>
                  <h3>{role}</h3>
                  <h2>{name}</h2>
                  <p>{bio}</p>
                </aside>
                <img src={images} alt="people" />
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Crew;

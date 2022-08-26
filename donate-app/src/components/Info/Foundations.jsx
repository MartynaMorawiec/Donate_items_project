import React from "react";

const Foundations = () => {
  return (
    <div>
      <div className="help">
        <p className="help__description">
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
          współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
          czego potrzebują.
        </p>
      </div>
      {foundations.map((element) => {
        return (
          <div className="help__content" key={element.title}>
            <div>
              <h4 className="help__title">{element.title}</h4>
              <p className="help__text">{element.text}</p>
            </div>
            <div className="help__details">{element.details}</div>
          </div>
        );
      })}
    </div>
  );
};

const foundations = [
  {
    title: 'Fundacja "Dbam o zdrowie"',
    text: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
    details: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
  },
  {
    title: "Fundacja “Dla dzieci”",
    text: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
    details: " ubrania, jedzenie, sprzęt AGD, meble, zabawki",
  },
  {
    title: "Fundacja “Bez domu”",
    text: " Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
    details: "ubrania, jedzenie, ciepłe koce",
  },
  {
    title: 'Fundacja "Dla zdrowia"',
    text: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
    details: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
  },
  {
    title: "Fundacja “Pomoc dzieciom”",
    text: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
    details: " ubrania, jedzenie, sprzęt AGD, meble, zabawki",
  },
  {
    title: "Fundacja “Schronienie”",
    text: " Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
    details: "ubrania, jedzenie, ciepłe koce",
  },
  {
    title: 'Fundacja "Health"',
    text: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
    details: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
  },
  {
    title: "Fundacja “Children”",
    text: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
    details: " ubrania, jedzenie, sprzęt AGD, meble, zabawki",
  },
  {
    title: "Fundacja “Shelter”",
    text: " Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
    details: "ubrania, jedzenie, ciepłe koce",
  },
];

export default Foundations;

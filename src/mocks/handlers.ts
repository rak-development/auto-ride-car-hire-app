import { http, HttpResponse } from "msw";

export const handlers = [

  http.get("http://localhost:8000/assets/db/circle-content-data-en.json", () => {
    return HttpResponse.json({
      header: "Core Values",
  subheader: "That make us the best transportation company in the area",
  coreValues: [
    {
      id: 1,
      title: "FIRST-RATE CUSTOMER SERVICE"
    },
    {
      id: 2,
      title: "CLEAN AND WELL-MAINTAINED VEHICLES"
    },
    {
      id: 3,
      title: "INNOVATIVE USE OF TECHNOLOGY"
    },
    {
      id: 4,
      title: "PUNCTUALITY AND VERACITY"
    },
    {
      id: 5,
      title: "PURSUIT OF CONTINUOUS IMPROVEMENT"
    },
    {
      id: 6,
      title: "SAFETY AS OUR HIGHEST PRIORITY"
    },
    {
      id: 7,
      title: "HIGHLY TRAINED PROFESSIONAL DRIVERS"
    }
  ]
    })
  }),

  http.get("http://localhost:8000/assets/db/circle-content-data-pl.json", () => {
    return HttpResponse.json({
      header: "Podstawowe wartości",
      subheader: "To czyni nas najlepszą firmą transportową w okolicy",
      coreValues: [
        {
          id: 1,
          title: "OBSŁUGA KLIENTA NAJWYŻSZEJ JAKOŚCI"
        },
        {
          id: 2,
          title: "CZYSTE I DOBRZE UTRZYMANE POJAZDY"
        },
        {
          id: 3,
          title: "INNOWACYJNE WYKORZYSTANIE TECHNOLOGII"
        },
        {
          id: 4,
          title: "PUNKTUALNOŚĆ I PRAWDZIWOŚĆ"
        },
        {
          id: 5,
          title: "DĄŻENIE DO CIĄGŁEJ DOSKONAŁOŚCI"
        },
        {
          id: 6,
          title: "BEZPIECZEŃSTWO NASZYM NAJWYŻSZYYM PRIORYTETEM"
        },
        {
          id: 7,
          title: "WYSOKO WYSZKOLENI, PROFESJONALNI KIEROWCY"
        }
      ]
    })
  }),

  http.get("http://localhost:8000/assets/db/contact-box-data-en.json", () => {
    return HttpResponse.json([
      {
        title: "Address",
        icon: "fa-map-location-dot",
        text: "Jasionka 942, 36-002 Jasionka"
      },
      {
        title: "Phones",
        icon: "fa-phone",
        text: "BOOK A RIDE: 123 456 789 \nOFFICE: (+48) 17 123 45 61"
      },
      {
        title: "Working Hours",
        icon: "fa-clock",
        text: "24/7"
      }
    ]
    )
  }),

  http.get("http://localhost:8000/assets/db/contact-box-data-pl.json", () => {
    return HttpResponse.json([
      {
        title: "Adres",
        icon: "fa-map-location-dot",
        text: "Jasionka 942, 36-002 Jasionka"
      },
      {
        title: "Telefony",
        icon: "fa-phone",
        text: "REZERWACJA: 123 456 789 \nBIURO: (+48) 17 123 45 61"
      },
      {
        title: "Godziny otwarcia",
        icon: "fa-clock",
        text: "24/7"
      }
    ]
    
    )
  }),

  http.get("http://localhost:8000/assets/db/contact-list-data.json", () => {
    return HttpResponse.json([
      {
        type: "contact-data",
        text: "Jasionka 942, 36-002 Jasionka",
        icon: "fa-location-dot"
      },
      {
        type: "contact-data",
        text: "(+48) 17 123 45 61",
        icon: "fa-phone"
      },
      {
        type: "contact-data",
        text: "123 456 789",
        icon: "fa-mobile-screen-button"
      },
      {
        type: "contact-data",
        text: "contact@autoride.com",
        icon: "fa-envelope"
      },
      {
        type: "contact-data",
        text: "24/7",
        icon: "fa-clock"
      }
    ]
    )
  }),

  http.get("http://localhost:8000/assets/db/introduction-data-en.json", () => {
    return HttpResponse.json({
      title: "From Sedans \nto Coach \nBuses.",
      content: [
        {
          id: 1,
          title: "Expect the Best",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus nibh. Suspendisse imperdiet, nulla ut dictum venenatis, nunc velit rhoncus neque, eu commodo augue sapien quis ipsum."
        },
        {
          id: 2,
          title: "Travel in Comfort",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus nibh. Suspendisse imperdiet, nulla ut dictum venenatis, nunc velit rhoncus neque, eu commodo augue sapien quis ipsum. Vivamus pharetra sagittis dolor sit amet malesuada. Morbi consequat aliquet dignissim."
        }
      ],
      images: [
        {
          id: 1,
          title: "Welcome",
          image: "/assets/images/AutoRide-Introduction-01.jpeg"
        },
        {
          id: 2,
          title: "Car",
          image: "/assets/images/AutoRide-Introduction-02.jpeg"
        }
      ],
      quote: {
         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum eros et tellus aliquet tincidunt.",
          author: "ANNA CRIADO - CHAIRMAN & CEO"
      }
    })
  }),

  http.get("http://localhost:8000/assets/db/introduction-data-pl.json", () => {
    return HttpResponse.json({
      title: "Od sedanów po autokary.",
      content: [
        {
          id: 1,
          title: "Oczekuj najlepszego",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus nibh. Suspendisse imperdiet, nulla ut dictum venenatis, nunc velit rhoncus neque, eu commodo augue sapien quis ipsum."
        },
        {
          id: 2,
          title: "Podróżuj w komforcie",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus nibh. Suspendisse imperdiet, nulla ut dictum venenatis, nunc velit rhoncus neque, eu commodo augue sapien quis ipsum. Vivamus pharetra sagittis dolor sit amet malesuada. Morbi consequat aliquet dignissim."
        }
      ],
      images: [
        {
          id: 1,
          title: "Welcome",
          image: "/assets/images/AutoRide-Introduction-01.jpeg"
        },
        {
          id: 2,
          title: "Car",
          image: "/assets/images/AutoRide-Introduction-02.jpeg"
        }
      ],
      quote: {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum eros et tellus aliquet tincidunt.",
        author: "ANNA CRIADO - CHAIRMAN & CEO"
      }
    })
  }),

  http.get("http://localhost:8000/assets/db/key-features-data-en.json", () => {
    return HttpResponse.json([
      {
        id: 1,
        icon: "fa-car",
        header: "Safety First",
        body: "Experienced staff and professionally trained chauffeurs"
      },
      {
        id: 2,
        icon: "fa-coins",
        header: "Reasonable Rates",
        body: "We can offer you the right vehicle at the right price to fit your budget"
      },
      {
        id: 3,
        icon: "fa-bus",
        header: "Largest Fleet",
        body: "We offer an extensive fleet of vehicles including sedans, limousines and coach buses"
      },
      {
        id: 4,
        icon: "fa-road-circle-exclamation",
        header: "Nationwide Service",
        body: "We provide our transportation services nationwide"
      }
    ]
    )
  }),

  http.get("http://localhost:8000/assets/db/key-features-data-pl.json", () => {
    return HttpResponse.json([
      {
        id: 1,
        icon: "fa-car",
        header: "Bezpieczeństwo przede wszystkim",
        body: "Doświadczona kadra i profesjonalnie przeszkoleni kierowcy"
      },
      {
        id: 2,
        icon: "fa-coins",
        header: "Rozsądne stawki",
        body: "Oferujemy odpowiedni pojazd w odpowiedniej cenie, aby dopasować się do Twojego budżetu"
      },
      {
        id: 3,
        icon: "fa-bus",
        header: "Największa flota",
        body: "Dysponujemy rozbudowaną flotą pojazdów obejmującą sedany, limuzyny oraz autokary"
      },
      {
        id: 4,
        icon: "fa-road-circle-exclamation",
        header: "Ogólnonarodowy serwis",
        body: "Nasze usługi transportowe świadczymy na terenie całego kraju"
      }
    ]
    
    )
  }),

  http.get("http://localhost:8000/assets/db/our-fleet-data.json", () => {
    return HttpResponse.json([
      {
        id: 1,
        image: "/assets/images/our-fleet/AutoRide-Audi-A8.jpg",
        title: "Audi A8",
        passengerNumber: 5,
        luggageNumber: 6
      },
      {
        id: 2,
        image: "/assets/images/our-fleet/AutoRide-Audi-Q7.jpg",
        title: "Audi Q7",
        passengerNumber: 7,
        luggageNumber: 10
      },
      {
        id: 3,
        image: "/assets/images/our-fleet/AutoRide-BMW-5.jpg",
        title: "BMW 5",
        passengerNumber: 5,
        luggageNumber: 5
      },
      {
        id: 4,
        image: "/assets/images/our-fleet/AutoRide-BMW-X5.jpg",
        title: "BMW X5",
        passengerNumber: 5,
        luggageNumber: 8
      },
      {
        id: 5,
        image: "/assets/images/our-fleet/AutoRide-Mercedes-E.jpg",
        title: "Mercedes E",
        passengerNumber: 5,
        luggageNumber: 5
      },
      {
        id: 6,
        image: "/assets/images/our-fleet/AutoRide-Mercedes-GLE.jpg",
        title: "Mercedes GLE",
        passengerNumber: 5,
        luggageNumber: 8
      }
    ]
    )
  }),


  http.get("http://localhost:8000/assets/db/services-list-data-en.json", () => {
    return HttpResponse.json([
      {
        type: "service-data",
        text: "Experiential Tours"
      },
      {
        type: "service-data",
        text: "Wedding Limousine"
      },
      {
        type: "service-data",
        text: "Corporate Travel"
      },
      {
        type: "service-data",
        text: "Special Events"
      },
      {
        type: "service-data",
        text: "Airport Transportation"
      },
      {
        type: "service-data",
        text: "Nationwide Transportation"
      },
      {
        type: "service-data",
        text: "Handicap Transportation"
      }
    ]
    )
  }),

  http.get("http://localhost:8000/assets/db/services-list-data-pl.json", () => {
    return HttpResponse.json([
      {
        type: "service-data",
        text: "Wycieczki eksperymentalne"
      },
      {
        type: "service-data",
        text: "Limuzyna ślubna"
      },
      {
        type: "service-data",
        text: "Podróże służbowe"
      },
      {
        type: "service-data",
        text: "Wydarzenia specjalne"
      },
      {
        type: "service-data",
        text: "Transport na lotnisko"
      },
      {
        type: "service-data",
        text: "Ogólnokrajowy transport"
      },
      {
        type: "service-data",
        text: "Transport dla osób niepełnosprawnych"
      }
    ]
    
    )
  }),

  http.get("http://localhost:8000/assets/db/testimonials-data.json", () => {
    return HttpResponse.json([
      {
        id: 1,
        text: "Praesent odio sapien, iaculis a luctus id, posuere non erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque sit amet ipsum commodo.",
        author: "Peter Stanbridge"
      },
      {
        id: 2,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus nibh arcu, at facilisis felis consectetur non. Proin viverra in ipsum ut lobortis. Duis diam quam, aliquet.",
        author: "John Stone"
      },
      {
        id: 3,
        text: "Morbi pulvinar justo vitae condimentum viverra. Donec tincidunt feugiat lectus, ut vehicula nibh viverra quis. Sed dignissim dolor dolor, et dapibus dui iaculis ac. Nam felis nisl, pharetra id mattis facilisis.",
        author: "Ponnappa Priya"
      },
      {
        id: 4,
        text: "Morbi sapien turpis, posuere vitae neque nec, feugiat fringilla risus. Pellentesque tincidunt eros sed mi porta, vitae dignissim nunc sollicitudin. Proin tempus ut erat at facilisis. Quisque porttitor hendrerit elementum.",
        author: "Mia Wong"
      }
    ]
    )
  }),

  http.get("http://localhost:8000/assets/db/what-we-offer-data-en.json", () => {
    return HttpResponse.json(
      [
        {
          id: 1,
          colSize: 6,
          title: "Airport Transfer",
          image: "/assets/images/what-we-offer/AutoRide-Airport-Transfer.jpg"
        },
        {
          id: 2,
          colSize: 6,
          title: "Worldwide Transportation",
          image: "/assets/images/what-we-offer/AutoRide-Worldwide-Transportation.jpg"
        },
        {
          id: 3,
          colSize: 6,
          title: "Corporate Travel",
          image: "/assets/images/what-we-offer/AutoRide-Corporate-Travel.jpg"
        },
        {
          id: 4,
          colSize: 3,
          title: "Charter Service",
          image: "/assets/images/what-we-offer/AutoRide-Charter-Service.jpg"
        },
        {
          id: 5,
          colSize: 3,
          title: "Special Event",
          image: "/assets/images/what-we-offer/AutoRide-Special-Event-Limousine.jpg"
        }
      ]
      
    )
  }),

  http.get("http://localhost:8000/assets/db/what-we-offer-data-pl.json", () => {
    return HttpResponse.json(
      [
        {
          id: 1,
          colSize: 6,
          title: "Transfer lotniczy",
          image: "/assets/images/what-we-offer/AutoRide-Airport-Transfer.jpg"
        },
        {
          id: 2,
          colSize: 6,
          title: "Transport na całym świecie",
          image: "/assets/images/what-we-offer/AutoRide-Worldwide-Transportation.jpg"
        },
        {
          id: 3,
          colSize: 6,
          title: "Podróż służbowa",
          image: "/assets/images/what-we-offer/AutoRide-Corporate-Travel.jpg"
        },
        {
          id: 4,
          colSize: 3,
          title: "Usługa czarterowa",
          image: "/assets/images/what-we-offer/AutoRide-Charter-Service.jpg"
        },
        {
          id: 5,
          colSize: 3,
          title: "Specjalne wydarzenia",
          image: "/assets/images/what-we-offer/AutoRide-Special-Event-Limousine.jpg"
        }
      ]      
    )
  }),














];

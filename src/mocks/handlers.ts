import { http } from "msw";

export const handlers = [
  // Handles a POST request
  http.post("http://localhost:8000/postToThisEndpoint", () => {
    // return new Response(null, {
    //   status: 200,
    // })
  }),

  // Handles a GET request
  http.get("http://localhost:8000/getSomeData", () => {
    // return new Response(null, {
    //   status: 200
    // })
  }),

  http.get("http://localhost:8000/2b30d9432e01253fcd41.png", async ({request}) => {
    console.log('logo')
    console.log(request)
    // return new Response(null, {
    //   status: 200
    // })
  }),

  http.get("http://localhost:8000/0d080eee90bada797d36.png", () => {
    // return new Response(null, {
    //   status: 200
    // })
  }),

  http.get("http://localhost:8000/AutoRide-Logo-Favicon.png", () => {
    // return new Response(null, {
    //   status: 200
    // })
  }),

  http.get("http://localhost:8000/183462841813346eb406.jpeg", () => {
    // return new Response(null, {
    //   status: 200
    // })
  }),

  http.get("http://localhost:8000/assets/db/introduction-data-en.json", () => {
    // return new Response(null, {
    //   status: 200
    // })
  }),

  http.get("http://localhost:8000/assets/db/what-we-offer-data-en.json", () => {
    // return new Response(null, {
    //   status: 200
    // })
  }),

  http.get("http://localhost:8000/assets/db/circle-content-data-en.json", () => {
    // return new Response(null, {
    //   status: 200
    // })
  }),

  http.get("http://localhost:8000/assets/db/testimonials-data.json", () => {
    // return new Response(null, {
    //   status: 200
    // })
  }),

  http.get("http://localhost:8000/assets/db/key-features-data-en.json", () => {
    // return new Response(null, {
    //   status: 200
    // })
  }),

  http.get("http://localhost:8000/assets/db/our-fleet-data.json", () => {
    // return new Response(null, {
    //   status: 200
    // })
  }),

  http.get("http://localhost:8000/assets/db/contact-box-data-en.json", () => {
    // return new Response(null, {
    //   status: 200
    // })
  }),

  http.get("http://localhost:8000/assets/db/services-list-data-en.json", () => {
    // return new Response(null, {
    //   status: 200
    // })
  }),

  http.get("http://localhost:8000/assets/db/contact-list-data.json", () => {
    // return new Response(null, {
    //   status: 200
    // })
  }),

  http.get("http://localhost:8000/assets/images/what-we-offer/AutoRide-Airport-Transfer.jpg", () => {
    // return new Response(null, {
    //   status: 200
    // })
  }),

  http.get("http://localhost:8000/assets/images/what-we-offer/AutoRide-Worldwide-Transportation.jpg", () => {
    // return new Response(null, {
    //   status: 200
    // })
  }),

  http.get("http://localhost:8000/assets/images/what-we-offer/AutoRide-Corporate-Travel.jpg", () => {
    // return new Response(null, {
    //   status: 200
    // })
  }),


];

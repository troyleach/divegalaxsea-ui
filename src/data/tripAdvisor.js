const baseUrl = 'https://www.tripadvisor.com'

export default function tripAdvisor(props) {
  return (
    {
      "title": "Review us at...",
      "image": "3-TA_logo_green_background.png",
      "reviewUrl": "https://www.tripadvisor.com/Attraction_Review-g150809-d3493106-Reviews-Dive_Galaxsea-Cozumel_Yucatan_Peninsula.html",
      "quotes": [
        {
          "date": "September 25, 2019",
          "url": `${baseUrl}/ShowUserReviews-g150809-d3493106-r707046038-Dive_Galaxsea-Cozumel_Yucatan_Peninsula.html`,
          "partial_entry": "First of all, this was my first time diving after a 12-year break. I recently decided to get back into the sport and was apprehensive about the kind of experience I was going to have. My last time diving was with an operation in Florida...",
        },
        {
          "date": "January 11, 2019",
          "url": `${baseUrl}/ShowUserReviews-g150809-d3493106-r645231527-Dive_Galaxsea-Cozumel_Yucatan_Peninsula.html`,
          "partial_entry": "Great dives and Kim is extremely knowledgeable. She is fun and friendly and helpful!! This was our kids third/fourth dives and these dives were AWESOME!!! We would highly recommend her services and we will definitely plan to come back and see her again!!! NO DOUBT!"
        }
      ]
    }
  );
}
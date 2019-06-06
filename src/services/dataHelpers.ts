interface Tip {
    id: number;
    status: string;
    submitter_api_key: null;
    timestamp: number;
    tip: string;
    tweeted: number;
    twitter_tweet_id: number;
  }
export function postData(url = ``, data = {}, uuid: string, phrase: string) {
  if (phrase !== "") {
      // Default options are marked with *
      return fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          headers: {
              "Accept": "application/json",
              "Authorization": "Basic " + "MWM2ODgwMTMtNzNhYy00MDdkLTg0MTgtZmM5OWVkNjA1MzlhOjI2Mzk1dXJNdGl1L0xmbW1CNVAweHU0TzFub3FIajVrOWVCdDEySEZNakt2ZUx5VXlJMHBxcWpPSXlYMlJPT01wcEhvc3k2eVV1cVRSYWk5OHM0ZWF3PT0=",
              "Content-Type": "application/json;charset=UTF-8"
          },
          body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
          .then(response => response.json()); // parses response to JSON
  } else {
      // Default options are marked with *
      return fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          headers: {
              "Accept": "application/json",
              "Content-Type": "application/json;charset=UTF-8"
          },
          body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
          .then(response => response.json()); // parses response to JSON
  }
}


export  async function getData(url: string): Promise<Tip[]> {
    return new Promise(resolve => fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            "Accept": "application/json",
            "Authorization": "Basic " + "MWM2ODgwMTMtNzNhYy00MDdkLTg0MTgtZmM5OWVkNjA1MzlhOjI2Mzk1dXJNdGl1L0xmbW1CNVAweHU0TzFub3FIajVrOWVCdDEySEZNakt2ZUx5VXlJMHBxcWpPSXlYMlJPT01wcEhvc3k2eVV1cVRSYWk5OHM0ZWF3PT0=",
            "Content-Type": "application/json;charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(resolve))
}





// export function getData(url = ``, uuid: string, phrase: string) {
//   if (phrase !== "") {
//       // Default options are marked with *
//       return fetch(url, {
//           method: "GET", // *GET, POST, PUT, DELETE, etc.
//           cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//           headers: {
//               "Accept": "application/json",
//               "Authorization": "Basic " + "MWM2ODgwMTMtNzNhYy00MDdkLTg0MTgtZmM5OWVkNjA1MzlhOjI2Mzk1dXJNdGl1L0xmbW1CNVAweHU0TzFub3FIajVrOWVCdDEySEZNakt2ZUx5VXlJMHBxcWpPSXlYMlJPT01wcEhvc3k2eVV1cVRSYWk5OHM0ZWF3PT0=",
//               "Content-Type": "application/json;charset=UTF-8"

//           }
//       })
//           .then(response => {
//               if (response.ok) {
//                   return response.json() // parses response to JSON
//               } else {
//                   return response.status;
//               }
//           });
//   } else {
//       return fetch(url, {
//           method: "GET", // *GET, POST, PUT, DELETE, etc.
//           cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//           headers: {
//               "Accept": "application/json",
//               "Content-Type": "application/json;charset=UTF-8"
//           }
//       })
//           .then(response => {
//               if (response.ok) {
//                   return response.json() // parses response to JSON
//               } else {
//                   return response.status;
//               }
//           });
//           //.then(response => response.json()); // parses response to JSON
//   }
// }
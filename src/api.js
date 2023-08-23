export const WEBSERIES='https://academics.newtonschool.co/api/v1/ott/show?filter={"type" : "web series"}'
const BASE_URL = 'https://academics.newtonschool.co/api/v1/ott';
// export const PROJECT_ID = 'https://academics.newtonschool.co/api/v1/ott/show/:id';
export const PROJECT_ID='xybcw190kyb8'
//https://academics.newtonschool.co/api/v1/ott/show/:id
export const fetchShows = async (page, limit) => {
  try {
    const response = await fetch(`${BASE_URL}/show?page=${page}&limit=${limit}`, {
      headers: {
        projectId: PROJECT_ID,
      },
    });
    const data = await response.json();
    // console.log(data.data);
    return data
  } catch (error) {
    console.error('Error fetching shows:', error);
    return [];
  }
};

// export const fetchShowById = async (id) => {
//   try {
//     const response = await fetch(`${BASE_URL}/show/:id`, {
//       headers: {
//         projectId: PROJECT_ID,
//       },
//     });
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error('Error fetching show by ID:', error);
//     return null;
//   }
// };


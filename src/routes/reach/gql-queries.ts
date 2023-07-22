export const gqlQueries = {
  getReachFeatures: (reachId: number): string => `{
        reach(id: ${reachId}) {
          pois {
            approximate
            character
            description
            difficulty
            distance
            id
            name
            rloc
            photo {
              poi_name
              subject
              description
              author
              caption
              photo_date
              image {
                uri {
                  thumb
                  medium
                  big
                }
              }
              id
            }
          }
        }
      }
    `,
};

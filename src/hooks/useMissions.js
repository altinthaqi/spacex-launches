import { useQuery, gql } from "@apollo/client";

const GET_MISSIONS = gql`
  {
    launchesPast(limit: 15) {
      mission_name
      launch_site {
        site_name_long
      }
      links {
        flickr_images
      }
      rocket {
        rocket {
          id
          name
        }
      }
      launch_year
      details
      mission_id
    }
  }
`;

export const useMissions = () => {
  const { data, error, loading } = useQuery(GET_MISSIONS);

  return {
    error,
    data,
    loading,
  };
};

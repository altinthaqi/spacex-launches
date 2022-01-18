import { useQuery, gql } from "@apollo/client";

const GET_ROCKET = gql`
  query getRocket($id: ID!) {
    rocket(id: $id) {
      company
      country
      description
      engines {
        propellant_1
      }
      height {
        feet
        meters
      }
    }
  }
`;

export const useRocket = (id) => {
  const { data, error, loading } = useQuery(GET_ROCKET, {
    variables: {
      id,
    },
  });

  return {
    error,
    data,
    loading,
  };
};

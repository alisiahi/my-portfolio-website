import { GraphQLClient, gql } from "graphql-request";

const api_endpoint =
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clsobi8vo17bh01w6hhm3od7g/master";

const graphqlClient = new GraphQLClient(api_endpoint);

export const getPersonalInfo = async () => {
  const query = gql`
    query Personalinfos {
      personalinfos {
        address
        birthdate
        description
        email
        fullname
        heading
        languages
        lastedu
        phonenumber
      }
    }
  `;

  const response = await graphqlClient.request(query);
  return response;
};

export const getExperiences = async () => {
  const query = gql`
    query Experiences {
      experiences {
        company
        role
        duration
      }
    }
  `;

  const response = await graphqlClient.request(query);
  return response;
};

export const getEducations = async () => {
  const query = gql`
    query Educations {
      educations {
        university
        major
        duration
      }
    }
  `;

  const response = await graphqlClient.request(query);
  return response;
};

export const getSkills = async () => {
  const query = gql`
    query Skills {
      skills {
        name
      }
    }
  `;

  const response = await graphqlClient.request(query);
  return response;
};

export const getProjects = async () => {
  const query = gql`
    query Projects {
      projects {
        id
        title
        category
        githublink
        livelink
        image {
          url
        }
        description {
          html
        }
      }
    }
  `;

  const response = await graphqlClient.request(query);
  return response;
};

export const submitContactForm = async (formValue: {
  name: string;
  email: string;
  message: string;
}) => {
  const mutationQuery = gql`
    mutation CreateContact($name: String!, $email: String!, $message: String!) {
      createContact(data: { name: $name, email: $email, message: $message }) {
        id
      }
    }
  `;

  const variables = {
    name: formValue.name,
    email: formValue.email,
    message: formValue.message,
  };

  const response = await graphqlClient.request(mutationQuery, variables);
  return response;
};

export const getCVlink = async () => {
  const query = gql`
    query Assets {
      assets(where: { fileName: "CV.pdf" }) {
        url
      }
    }
  `;

  const response = await graphqlClient.request(query);
  return response;
};

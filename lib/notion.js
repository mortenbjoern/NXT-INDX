import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_KEY,
});

export const getDatabase = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      or: [
        {
          property: 'Published',
          checkbox: {
            equals: true,
          },
        },
      ],
    },
  });
  return response.results;
};

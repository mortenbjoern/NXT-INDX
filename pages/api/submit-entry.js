const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ message: `${req.method} requests are not allowed` });
  }
  try {
    const { url, title, company, location } = JSON.parse(req.body);
    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      icon: {
        type: 'emoji',
        emoji: '🆕',
      },
      properties: {
        Company: {
          rich_text: [
            {
              text: {
                content: company,
              },
            },
          ],
        },
        Company_Location: {
          rich_text: [
            {
              text: {
                content: location,
              },
            },
          ],
        },
        Position: {
          title: [
            {
              text: {
                content: title,
              },
            },
          ],
        },
        Position_Link: {
          url: url,
        },
      },
    });
    res.status(201).json({ msg: 'Success' });
  } catch (error) {
    res.status(500).json({ msg: 'There was an error' });
  }
}

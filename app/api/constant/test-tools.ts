import activities_introduction from './activities_introduction.json'
import activities_period from './activities_period.json'
import activities_description from './activities_description.json'

const tools = [
  {
    type: 'function',
    function: {
      name: 'get_activities_introduction',
      description: 'Get the current activities in a given activity data.',
      parameters: {
        type: 'object',
        properties: {
          activity: {
            type: 'string',
            enum: [
              activities_introduction[0]['activity'],
              activities_introduction[1]['activity']
            ],
            description: 'The activity title'
          },
          description: {
            type: 'string',
            enum: [
              activities_introduction[0]['description'],
              activities_introduction[1]['description']
            ],
            description: `
                      If activity is about {activities_introduction[0]["activity"]} return {activities_introduction[0]["description"]}.
                      else if activity is about {activities_introduction[1]["activity"]} return {activities_introduction[1]["description"]}.
                    `
          }
        },
        required: ['activity']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'get_activities_period',
      description:
        'If User asking about activity period getting the current activity period in a given activity data.',
      parameters: {
        type: 'object',
        properties: {
          activity: {
            type: 'string',
            enum: [
              activities_period[0]['activity'],
              activities_period[1]['activity']
            ],
            description: 'The activity title'
          },
          implementation_period: {
            type: 'string',
            enum: [
              activities_period[0]['implementation_period'],
              activities_period[1]['implementation_period']
            ],
            description: `
                      If activity is about implementation period and {activities_period[0]["activity"]} return {activities_period[0]["implementation_period"]}.
                      else if activity is about implementation period and {activities_period[1]["activity"]} return {activities_period[1]["implementation_period"]}.
                    `
          }
        },
        required: ['activity', 'implementation_period']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'get_activities_description',
      description:
        'If User asking about activity description getting the current activity period in a given activity data.',
      parameters: {
        type: 'object',
        properties: {
          activity: {
            type: 'string',
            enum: [
              activities_description[0]['activity'],
              activities_description[1]['activity']
            ],
            description: 'The activity title'
          },
          description: {
            type: 'string',
            enum: [
              activities_description[0]['description'],
              activities_description[1]['description']
            ],
            description: `
                      If activity is about {activities_description[0]["activity"]} return {activities_description[0]["description"]}.
                      else if activity is about {activities_description[1]["activity"]} return {activities_description[1]["description"]}.
                    `
          }
        },
        required: ['activity', 'description']
      }
    }
  }
]

export default tools

import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
  version: 1,
  tables: [
    {
      name: 'notes',
      columns: [
        {name:'id', type: 'number', isIndexed: true},
        {name:'content', type: 'string', isIndexed: true},
        // {name:'content', type: 'string', isIndexed: true},
      ]
    },
    {
      name: 'tags',
      columns: [
        {name: 'id', type: 'number', isIndexed: true},
        {name: 'text', type: 'string', isIndexed: true},
      ]
    }
    
    // We'll add tableSchemas here later
  ]
})


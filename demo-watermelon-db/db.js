import { Platform } from 'react-native'
import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import schema from './model/schema'
import migrations from './model/migrations'
// import Post from './model/Post' // ⬅️ You'll import your Models here

// First, create the adapter to the underlying database:
const adapter = new SQLiteAdapter({
  schema,
  // (You might want to comment it out for development purposes -- see Migrations documentation)
  migrations,
  // (optional database name or file system path)
  // dbName: 'myapp',
  // (recommended option, should work flawlessly out of the box on iOS. On Android,
  // additional installation steps have to be taken - disable if you run into issues...)
  jsi: true, /* Platform.OS === 'ios' */
  // (optional, but you should implement this method)
  onSetUpError: error => {
    // Database failed to load -- offer the user to reload the app or log out
  }
})


// import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs'

// const adapter = new LokiJSAdapter({
//   schema,
//   // (You might want to comment out migrations for development purposes -- see Migrations documentation)
//   migrations,
//   useWebWorker: false,
//   useIncrementalIndexedDB: true,
//   // dbName: 'myapp', // optional db name

//   // --- Optional, but recommended event handlers:

//   onQuotaExceededError: (error) => {
//     // Browser ran out of disk space -- offer the user to reload the app or log out
//   },
//   onSetUpError: (error) => {
//     // Database failed to load -- offer the user to reload the app or log out
//   },
//   extraIncrementalIDBOptions: {
//     onDidOverwrite: () => {
//       // Called when this adapter is forced to overwrite contents of IndexedDB.
//       // This happens if there's another open tab of the same app that's making changes.
//       // Try to synchronize the app now, and if user is offline, alert them that if they close this
//       // tab, some data may be lost
//     },
//     onversionchange: () => {
//       // database was deleted in another browser tab (user logged out), so we must make sure we delete
//       // it in this tab as well - usually best to just refresh the page
//       if (checkIfUserIsLoggedIn()) {
//         window.location.reload()
//       }
//     },
//   }
// })

// Then, make a Watermelon database from it!
export const database = new Database({
  adapter,
  modelClasses: [
    // Post, // ⬅️ You'll add Models to Watermelon here
  ],
})
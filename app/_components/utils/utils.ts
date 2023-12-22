import { cache } from 'react'
import { db } from '@/firebase';
import { collectionGroup, getDocs, limit, orderBy, query } from 'firebase/firestore';

 
export const getData = cache(async (data: any) => {
    try {
        console.log('trying to fetch data from get data');
    
        // Fetch latest 4 articles
        const articlesQuery = query(collectionGroup(db, data), orderBy('createdAt', 'desc'), limit(4));
        const articlesSnapshot = await getDocs(articlesQuery);
    
        return articlesSnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
    
      } catch (error) {
        console.error('Error fetching data:', error);
      }
})

// export const fetchData: any = async (data: string) => {
//     try {
//       console.log('trying to fetch data');
  
//       // Fetch latest 4 articles
//       const articlesQuery = query(collectionGroup(db, data), orderBy('createdAt', 'desc'), limit(4));
//       const articlesSnapshot = await getDocs(articlesQuery);
  
//       return articlesSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         data: doc.data(),
//       }));
  
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
  
//   }
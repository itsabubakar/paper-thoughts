import { collectionGroup, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";

export async function GET(request: any, { params }: any) {
    const collection = params.collection;

    try {
        console.log('trying to fetch data');

        // Fetch latest 4 articles
        const articlesQuery = query(collectionGroup(db, collection), orderBy('createdAt', 'desc'), limit(4));
        const articlesSnapshot = await getDocs(articlesQuery);

        const articles = articlesSnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
        }));
        console.log('fetched')

        return new Response(JSON.stringify(articles));
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


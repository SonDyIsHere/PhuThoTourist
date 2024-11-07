import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import {
    collection,
    getDocs,
    doc,
    getDoc,
    orderBy,
    limit,
    query,
    where
} from 'firebase/firestore';
import db from '../firebaseConfig';
import { Blog, BlogResponse } from '../utils/types';



const blogsApi = createApi({
    reducerPath: 'blogsApi',
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        fetchBlogsPaginated: builder.query<BlogResponse, { page: number; limit: number; tag?: string }>({
            async queryFn({ page, limit, tag }) {
                try {
                    const blogsCollection = collection(db, 'blogs');
                    let blogsQuery = query(
                        blogsCollection,
                        orderBy('postedDate', 'desc')
                    );

                    if (tag) {
                        blogsQuery = query(
                            blogsQuery,
                            where('tags', 'array-contains', tag)
                        );
                    }

                    const blogsSnapshot = await getDocs(blogsQuery);

                    const allBlogs: Blog[] = blogsSnapshot.docs.map((doc) => {
                        const data = doc.data();
                        return {
                            id: doc.id,
                            ...data,
                            postedDate: data.postedDate
                                .toDate()
                                .toISOString()
                                .split('T')[0]
                        } as Blog;
                    });

                    const start = (page - 1) * limit;
                    const end = start + limit;
                    const paginatedBlogs = allBlogs.slice(start, end);

                    console.log(paginatedBlogs);
                    return {
                        data: {
                            blogs: paginatedBlogs,
                            total: allBlogs.length
                        } as BlogResponse
                    };
                } catch (error) {
                    console.log(error);
                    return { error: { message: (error as Error).message } };
                }
            }
        }),
        fetchBlogById: builder.query<Blog, string>({
            async queryFn(id) {
                try {
                    const blogDoc = doc(db, 'blogs', id);
                    const blogSnapshot = await getDoc(blogDoc);
                    // console.log(blogDoc, blogSnapshot);

                    if (blogSnapshot.exists()) {
                        const blogData = {
                            id: blogSnapshot.id,
                            ...blogSnapshot.data(),
                            postedDate: blogSnapshot
                                .data()
                                .postedDate.toDate()
                                .toISOString()
                                .split('T')[0]
                        } as Blog;

                        return { data: blogData };
                    } else {
                        return { error: { message: 'Blog not found' } };
                    }
                } catch (error) {
                    return { error: { message: (error as Error).message } };
                }
            }
        }),
        fetchRecentBlogs: builder.query<Blog[], number | undefined>({
            async queryFn(num) {
                try {
                    const blogsCollection = collection(db, 'blogs');
                    const recentBlogsQuery = query(
                        blogsCollection,
                        orderBy('postedDate', 'desc'),
                        limit(num ?? 3)
                    );

                    const blogsSnapshot = await getDocs(recentBlogsQuery);

                    const recentBlogs: Blog[] = blogsSnapshot.docs.map(
                        (doc) => {
                            const data = doc.data();
                            return {
                                id: doc.id,
                                ...data,
                                postedDate: data.postedDate
                                    .toDate()
                                    .toISOString()
                                    .split('T')[0]
                            } as Blog;
                        }
                    );

                    return { data: recentBlogs };
                } catch (error) {
                    console.error(error);
                    return { error: { message: (error as Error).message } };
                }
            }
        })
    })
});



export const {
    useFetchBlogsPaginatedQuery,
    useFetchBlogByIdQuery,
    useFetchRecentBlogsQuery
} = blogsApi;
export default blogsApi;
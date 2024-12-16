import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import {
    collection,
    query,
    where,
    orderBy,
    limit as firebaseLimit,
    startAfter,
    doc,
    getDoc,
    getDocs
} from 'firebase/firestore';
import db from '../firebaseConfig';
import { Blog, BlogResponse } from '../utils/types';

const blogsApi = createApi({
    reducerPath: 'blogsApi',
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        // Fetch blogs with pagination
        fetchBlogsPaginated: builder.query<BlogResponse, { page: number; limit: number; tag?: string }>({
            async queryFn({ page, limit, tag }) {
                try {
                    const blogsCollection = collection(db, 'blogs');
                    const validLimit = Math.max(1, limit); // Ensure limit is valid

                    let blogsQuery = query(
                        blogsCollection,
                        orderBy('postedDate', 'desc'),
                        firebaseLimit(validLimit)
                    );

                    if (tag) {
                        blogsQuery = query(blogsQuery, where('tags', 'array-contains', tag));
                    }

                    // Pagination logic
                    if (page > 1) {
                        const previousPageSnapshot = await getDocs(
                            query(blogsCollection, orderBy('postedDate', 'desc'), firebaseLimit((page - 1) * validLimit))
                        );

                        if (previousPageSnapshot.docs.length > 0) {
                            const lastVisible = previousPageSnapshot.docs[previousPageSnapshot.docs.length - 1];
                            blogsQuery = query(blogsQuery, startAfter(lastVisible));
                        }
                    }

                    const blogsSnapshot = await getDocs(blogsQuery);

                    const paginatedBlogs: Blog[] = blogsSnapshot.docs.map((doc) => {
                        const data = doc.data();
                        const postedDate = data.postedDate?.toDate
                            ? data.postedDate.toDate().toISOString().split('T')[0]
                            : null;

                        return {
                            id: doc.id,
                            ...data,
                            postedDate
                        } as Blog;
                    });

                    return {
                        data: {
                            blogs: paginatedBlogs,
                            total: blogsSnapshot.size
                        } as BlogResponse
                    };
                } catch (error) {
                    return { error: { message: (error as Error).message } };
                }
            }
        }),

        // Fetch blog by ID
        fetchBlogById: builder.query<Blog, string>({
            async queryFn(id) {
                try {
                    const blogDoc = doc(db, 'blogs', id);
                    const blogSnapshot = await getDoc(blogDoc);

                    if (blogSnapshot.exists() && blogSnapshot.data()) {
                        const blogData = {
                            id: blogSnapshot.id,
                            ...blogSnapshot.data(),
                            postedDate: blogSnapshot.data().postedDate?.toDate
                                ? blogSnapshot.data().postedDate.toDate().toISOString().split('T')[0]
                                : null
                        } as Blog;

                        return { data: blogData };
                    } else {
                        return { error: { message: 'Blog not found or invalid data' } };
                    }
                } catch (error) {
                    return { error: { message: (error as Error).message } };
                }
            }
        }),

        // Fetch recent blogs
        fetchRecentBlogs: builder.query<Blog[], number | undefined>({
            async queryFn(num = 3) {
                try {
                    const blogsCollection = collection(db, 'blogs');
                    const recentBlogsQuery = query(
                        blogsCollection,
                        orderBy('postedDate', 'desc'),
                        firebaseLimit(num)
                    );

                    const blogsSnapshot = await getDocs(recentBlogsQuery);

                    const recentBlogs: Blog[] = blogsSnapshot.docs.map((doc) => {
                        const data = doc.data();
                        const postedDate = data.postedDate?.toDate
                            ? data.postedDate.toDate().toISOString().split('T')[0]
                            : null;

                        return {
                            id: doc.id,
                            ...data,
                            postedDate
                        } as Blog;
                    });

                    return { data: recentBlogs };
                } catch (error) {
                    return { error: { message: (error as Error).message } };
                }
            }
        })
    })
});

// Export hooks
export const {
    useFetchBlogsPaginatedQuery,
    useFetchBlogByIdQuery,
    useFetchRecentBlogsQuery
} = blogsApi;

export default blogsApi;

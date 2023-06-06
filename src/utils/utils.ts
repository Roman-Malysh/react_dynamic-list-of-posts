import { User } from '../types/User';
import { Post } from '../types/Post';
import { Comment } from '../types/Comment';
import { client } from './fetchClient';

export const getUsers = async () => {
  const response = await client.get<User[]>('/users');

  return response;
};

export const getPosts = async (userId: number) => {
  const response = await client.get<Post[]>(`/posts?userId=${userId}`);

  return response;
};

export const getComments = async (postId: number) => {
  const response = await client.get<Comment[]>(`/comments?postId=${postId}`);

  return response;
};

export const deleteComment = async (commentID: number) => {
  const response = await client.delete(`/comments/${commentID}`);

  return response;
};

export const postComment = async (comment :Comment) => {
  const response = await client.post<Comment>('/comments', comment);

  return response;
};

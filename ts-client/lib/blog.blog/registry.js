import { MsgDeletePost } from "./types/blog/blog/tx";
import { QueryParamsResponse } from "./types/blog/blog/query";
import { QueryShowPostRequest } from "./types/blog/blog/query";
import { QueryShowPostResponse } from "./types/blog/blog/query";
import { Post } from "./types/blog/blog/post";
import { MsgUpdatePost } from "./types/blog/blog/tx";
import { MsgDeletePostResponse } from "./types/blog/blog/tx";
import { GenesisState } from "./types/blog/blog/genesis";
import { MsgUpdateParams } from "./types/blog/blog/tx";
import { MsgUpdateParamsResponse } from "./types/blog/blog/tx";
import { QueryListPostResponse } from "./types/blog/blog/query";
import { MsgCreatePost } from "./types/blog/blog/tx";
import { Params } from "./types/blog/blog/params";
import { MsgCreatePostResponse } from "./types/blog/blog/tx";
import { MsgUpdatePostResponse } from "./types/blog/blog/tx";
import { QueryParamsRequest } from "./types/blog/blog/query";
import { QueryListPostRequest } from "./types/blog/blog/query";
const msgTypes = [
    ["/blog.blog.MsgDeletePost", MsgDeletePost],
    ["/blog.blog.QueryParamsResponse", QueryParamsResponse],
    ["/blog.blog.QueryShowPostRequest", QueryShowPostRequest],
    ["/blog.blog.QueryShowPostResponse", QueryShowPostResponse],
    ["/blog.blog.Post", Post],
    ["/blog.blog.MsgUpdatePost", MsgUpdatePost],
    ["/blog.blog.MsgDeletePostResponse", MsgDeletePostResponse],
    ["/blog.blog.GenesisState", GenesisState],
    ["/blog.blog.MsgUpdateParams", MsgUpdateParams],
    ["/blog.blog.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/blog.blog.QueryListPostResponse", QueryListPostResponse],
    ["/blog.blog.MsgCreatePost", MsgCreatePost],
    ["/blog.blog.Params", Params],
    ["/blog.blog.MsgCreatePostResponse", MsgCreatePostResponse],
    ["/blog.blog.MsgUpdatePostResponse", MsgUpdatePostResponse],
    ["/blog.blog.QueryParamsRequest", QueryParamsRequest],
    ["/blog.blog.QueryListPostRequest", QueryListPostRequest],
];
export { msgTypes };

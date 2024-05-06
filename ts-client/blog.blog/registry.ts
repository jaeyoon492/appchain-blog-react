import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryListPostRequest } from "./types/blog/blog/query";
import { MsgCreatePost } from "./types/blog/blog/tx";
import { MsgUpdateParams } from "./types/blog/blog/tx";
import { QueryShowPostResponse } from "./types/blog/blog/query";
import { MsgCreatePostResponse } from "./types/blog/blog/tx";
import { MsgUpdatePostResponse } from "./types/blog/blog/tx";
import { GenesisState } from "./types/blog/blog/genesis";
import { Params } from "./types/blog/blog/params";
import { QueryParamsRequest } from "./types/blog/blog/query";
import { QueryParamsResponse } from "./types/blog/blog/query";
import { MsgUpdateParamsResponse } from "./types/blog/blog/tx";
import { MsgDeletePostResponse } from "./types/blog/blog/tx";
import { Post } from "./types/blog/blog/post";
import { MsgDeletePost } from "./types/blog/blog/tx";
import { MsgUpdatePost } from "./types/blog/blog/tx";
import { QueryShowPostRequest } from "./types/blog/blog/query";
import { QueryListPostResponse } from "./types/blog/blog/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/blog.blog.QueryListPostRequest", QueryListPostRequest],
    ["/blog.blog.MsgCreatePost", MsgCreatePost],
    ["/blog.blog.MsgUpdateParams", MsgUpdateParams],
    ["/blog.blog.QueryShowPostResponse", QueryShowPostResponse],
    ["/blog.blog.MsgCreatePostResponse", MsgCreatePostResponse],
    ["/blog.blog.MsgUpdatePostResponse", MsgUpdatePostResponse],
    ["/blog.blog.GenesisState", GenesisState],
    ["/blog.blog.Params", Params],
    ["/blog.blog.QueryParamsRequest", QueryParamsRequest],
    ["/blog.blog.QueryParamsResponse", QueryParamsResponse],
    ["/blog.blog.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/blog.blog.MsgDeletePostResponse", MsgDeletePostResponse],
    ["/blog.blog.Post", Post],
    ["/blog.blog.MsgDeletePost", MsgDeletePost],
    ["/blog.blog.MsgUpdatePost", MsgUpdatePost],
    ["/blog.blog.QueryShowPostRequest", QueryShowPostRequest],
    ["/blog.blog.QueryListPostResponse", QueryListPostResponse],
    
];

export { msgTypes }
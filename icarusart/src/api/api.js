import request from "../utils/request";
import requestSameToTm from "../utils/requestSameToTm";
/**
 * *获取画布信息
 * @param {*} token_id [必填] 主画布token_id
 * @returns
 */
export function getCanvas(token_id) {
  return request({
    method: "get",
    url: "/get_canvas",
    params: {
      token_id,
    },
  });
}
/**
 * *获取用户信息
 * @param {*} user_address [必填] 用户地址
 * @returns
 */
export function getInfo(user_address) {
  return request({
    method: "get",
    url: "/get_info",

    params: {
      user_address,
    },
  });
}
/**
 * *取消关注当前用户（和tm个人主页一样的接口）
 */
export function unFollowCurrentUser(user_address, current_address) {
  return requestSameToTm({
    method: "post",
    url: "/unfollow_current",
    data: {
      user_address,
      current_address,
    },
  });
}
/**
 * *关注当前用户（和tm个人主页一样的接口）
 */
export function followCurrentUser(user_address, current_address) {
  return requestSameToTm({
    method: "post",
    url: "/follow_current",
    data: {
      user_address,
      current_address,
    },
  });
}

/**
 * *获取用户的信息（和tm个人主页一样的接口）
 */
export function getUserInfoSameToTm(user_address) {
  return requestSameToTm({
    method: "get",
    url: "/get_user_info",

    params: {
      user_address,
    },
  });
}
/**
 * *获取用户资产
 * @param {*} user_address [必填] 用户地址(用来获取用户资产)
 * @param {*} page 要访问的页数，默认是1
 * @param {*} state 要筛选的状态，可选参数"purchase"：直接购买， "auction"：正在拍卖，"auctioned"：即将拍卖，"enjoy"：暂不出售
 * @param {*} pic 筛选展示的内容，“canvas”展示主画布，“layer”展示图层,"single"展示单一铸币
 * @returns
 */
export function getPic(user_address, page, state, pic) {
  return request({
    method: "get",
    url: "/get_pic",

    params: {
      user_address,
      page,
      state,
      pic,
    },
  });
}
/**
 * *获取token_id
 * @returns
 */
export function getToken(type, user_address) {
  return request({
    method: "post",
    url: "/get_token",
    data: {
      type,
      user_address,
    },
  });
}
/**
 * *根据tokenid获取作品
 * @param {*} token_id [必填] token_id
 * @returns
 */
export function getWorks(token_id) {
  return request({
    method: "get",
    url: "/get_works",

    params: {
      token_id,
    },
  });
}
/**
 * *保存用户信息
 * @param {*} area
 * @param {*} avatar
 * @param {*} email
 * @param {*} introduce
 * @param {*} name
 * @param {*} ts
 * @param {*} user_address
 * @param {*} web
 * @returns 创建用户返回“1” 更新用户信息返回“0”
 */
export function saveInfo(
  area,
  avatar,
  email,
  introduce,
  name,
  ts,
  user_address,
  web
) {
  return request({
    method: "post",
    url: "/save_info",
    data: {
      area,
      avatar,
      email,
      introduce,
      name,
      ts,
      user_address,
      web,
    },
  });
}
/**
 * *画廊图片展示
 * @param {*} page 要访问的页数，默认是1
 * @param {*} state 要筛选的状态，可选参数 "purchase"：直接购买， "auction"：正在拍卖，"auctioned"：即将拍卖，"enjoy"：暂不出售
 * @param {*} pic 筛选展示的内容，“canvas“展示主画布，”layer“展示图层,"single"展示单一图片
 * @returns
 */
export function showPic(page, state, pic) {
  return request({
    method: "get",
    url: "/show_pic",

    params: {
      page,
      state,
      pic,
    },
  });
}
/**
 * *获取单一铸币token_id
 * @param {*} user_address
 * @param {*} type
 * @param {*} name
 * @param {*} introduce
 * @param {*} width
 * @param {*} height
 * @param {*} create_time
 * @param {*} str
 * @returns
 */
export function singleToken(
  user_address,
  type,
  name,
  introduce,
  width,
  height,
  create_time,
  str
) {
  return request({
    method: "post",
    url: "/single_token",
    data: {
      user_address,
      type,
      name,
      introduce,
      width,
      height,
      create_time,
      str,
    },
  });
}
/**
 * *更新数据库
 * @param {*} token_id
 * @param {*} address_from
 * @param {*} address_to
 * @returns
 */
export function updateColl(token_id, address_from, address_to) {
  return request({
    method: "post",
    url: "/update_coll",
    data: {
      token_id,
      address_from,
      address_to,
    },
  });
}
/**
 * *获取创建的作品
 * @param {*} user_address [必填] 用户地址(用来获取用户资产)
 * @param {*} page [必填] 要访问的页数，默认是1
 * @param {*} state 要筛选的状态，可选参数"purchase"：直接购买， "auction"：正在拍卖，"auctioned"：即将拍卖，"enjoy"：暂不出售
 * @param {*} pic 筛选展示的内容，“canvas”展示主画布，“layer”展示图层,"single"展示单一铸币
 * @returns
 */
export function getCreated(user_address, page, state, pic) {
  return request({
    method: "get",
    url: "/get_created",

    params: {
      user_address,
      page,
      state,
      pic,
    },
  });
}
/**
 * *burn NFT
 * @param {*} token_id token_id
 * @returns
 */
export function burnNFT(token_id) {
  return request({
    method: "post",
    url: "/burn_nft",
    data: {
      token_id,
    },
  });
}
/**
 * *用户收藏作品
 * @param {*} token_id
 * @param {*} user_address
 * @returns
 */
export function appendWorks(token_id, user_address) {
  return request({
    method: "post",
    url: "/append_works",
    data: {
      token_id,
      user_address,
    },
  });
}
/**
 * *获取粉丝列表
 * @param {*} user_address [必填] 用户地址
 * @returns
 */
export function getFans(user_address) {
  return request({
    method: "get",
    url: "/get_fans",

    params: {
      user_address,
    },
  });
}
/**
 * *获取用户关注列表
 * @param {*} user_address [必填] 用户地址
 * @returns
 */
export function getFollows(user_address) {
  return request({
    method: "get",
    url: "/get_follows",

    params: {
      user_address,
    },
  });
}
/**
 * *用户取消关注艺术家
 * @param {*} from 发起取消关注动作的用户
 * @param {*} to 发起取消关注动作的用户
 * @returns
 */
export function unfollowUser(from, to) {
  return request({
    method: "post",
    url: "/unfollow_user",
    data: {
      from,
      to,
    },
  });
}
/**
 * *用户关注艺术家
 * @param {*} from 发起关注动作的用户
 * @param {*} to 被关注的用户
 * @returns
 */
export function followUser(from, to) {
  return request({
    method: "post",
    url: "/follow_user",
    data: {
      from,
      to,
    },
  });
}
/**
 * *用户取消收藏作品
 * @param {*} token_id
 * @param {*} user_address
 * @returns
 */
export function removeWorks(token_id, user_address) {
  return request({
    method: "post",
    url: "/remove_works",
    data: {
      token_id,
      user_address,
    },
  });
}
/**
 * *获取用户收藏的作品
 * @param {*} user_address [必填] 用户地址(用来获取用户资产)
 * @param {*} page [必填] 要访问的页数，默认是1
 * @param {*} state 要筛选的状态，可选参数"purchase"：直接购买， "auction"：正在拍卖，"auctioned"：即将拍卖，"enjoy"：暂不出售
 * @param {*} pic 筛选展示的内容，“canvas”展示主画布，“layer”展示图层,"single"展示单一铸币
 * @returns
 */
export function getCollection(user_address, page, state, pic) {
  return request({
    method: "get",
    url: "/get_collection",

    params: {
      user_address,
      page,
      state,
      pic,
    },
  });
}

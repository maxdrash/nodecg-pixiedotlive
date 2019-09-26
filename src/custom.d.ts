declare module '*.svg' {
  const content: any
  export default content
}

declare module 'nodecg-twitchie-graphics' {
  export interface Replicant<T> {
    value?: T
    namespace?: string
    on(event: 'change', listener: (newValue: T, oldValue?: T) => void): void
  }

  export interface TwitchChannelInfo {
    broadcaster_language: string
    broadcaster_software: string
    broadcaster_type: string
    created_at: string
    description: string
    display_name?: string
    followers: number
    game: string
    language: string
    logo: string
    mature: boolean
    name: string
    partner: boolean
    privacy_options_enabled: boolean
    private_video: boolean
    profile_banner: string
    profile_banner_background_color: string
    status: string
    updated_at: string
    url: string
    video_banner: string
    views: number
    _id: string
  }

  export interface TwitchUser {
    bio?: string
    display_name?: string
    created_at: string
    logo: string
    name: string
    type: string
    updated_at: string
    _id: string
  }

  export interface TwitchChannelFollower {
    created_at: string
    notifications: boolean
    user: TwitchUser
  }

  export type TwitchChannelFollowersFeed = TwitchChannelFollower[]

  export interface TwitchChannelSubscriber {
    username: string
    months: string
    message: string
  }

  export interface TwitchStreamInfo {
    average_fps: number
    broadcast_platform: string
    channel: TwitchChannelInfo
    community_id: string
    created_at: string
    delay: number
    game: string
    is_playlist: boolean
    preview: {
      small: string
      medium: string
      large: string
      template: string
    }
    stream_type: string
    video_height: number
    viewers: number
    _id: string
  }

  export interface TwitchieBRBStatus {
    away: boolean
    message: string
  }

  export interface TwitchieSocialAccount {
    service: string
    username: string
  }

  export type TwitchieSocialAccounts = TwitchieSocialAccount[]

  export type TwitchieTimer = string

  export interface Twitchie {
    on: typeof listenFor

    channel: {
      info: Replicant<TwitchChannelInfo>
      followers: Replicant<TwitchChannelFollowersFeed>
    }
    stream: {
      info: Replicant<TwitchStreamInfo>
    }
    chat: {
      badges: Replicant<any>
      cheermotes: Replicant<any>
    }
    brb: Replicant<TwitchieBRBStatus>
    timer: Replicant<TwitchieTimer>
    social: Replicant<TwitchieSocialAccounts>
  }

  declare type ListenCallback = <T>(value: T) => void
  export function listenFor(event: string, callback: ListenCallback<any>): void
  export function listenFor(event: 'channel.follower', callback: ListenCallback<TwitchChannelFollower>): void
  export function listenFor(event: 'channel.subscriber', callback: ListenCallback<TwitchChannelSubscriber>): void
  export function listenFor(event: 'chat.chat', callback: ListenCallback<any>): void
  export function listenFor(event: 'chat.cheer', callback: ListenCallback<any>): void
  export function listenFor(event: 'chat.join', callback: ListenCallback<any>): void
  export function listenFor(event: 'chat.ban', callback: ListenCallback<any>): void
  export function listenFor(event: 'chat.timeout', callback: ListenCallback<any>): void

  const twitchie: Twitchie
  export default twitchie
}

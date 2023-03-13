export const enum StorageKey {
  Options = 'options',
  LegacyAPI = 'legacy-api',
  API = 'api',
}

export const enum V2EX {
  API = 'https://www.v2ex.com/api',
  APIV2 = 'https://www.v2ex.com/api/v2',
}

export const enum Menu {
  Root = 'menu',
  Decode = 'menu/decode',
}

export const emoticons = [
  {
    title: 'Smileys',
    list: [
      '😀',
      '😃',
      '😄',
      '😁',
      '😆',
      '😅',
      '🤣',
      '😂',
      '🙂',
      '🙃',
      '😉',
      '😮',
      '😲',
      '😳',
      '😱',
      '😭',
      '😞',
      '😓',
      '😩',
      '😚',
      '🤭',
      '😏',
      '😒',
      '😡',
      '😤',
    ],
  },
  {
    title: 'Others',
    list: ['👻', '👋', '🤚', '🖐', '🖖', '🐶', '🐔', '🤡', '💩'],
  },
]

export const READABLE_CONTENT_HEIGHT = 250
export const MAX_CONTENT_HEIGHT = 550
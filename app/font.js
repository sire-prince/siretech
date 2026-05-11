// lib/fonts.js
import localFont from 'next/font/local'

export const eudoxusSans = localFont({
  src: [
    {
      path: '../assets/fonts/eudoxus-sans-light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/eudoxus-sans-regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/eudoxus-sans-bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-eudoxus-sans',
})

export const sora = localFont({
  src: [
    {
      path: '../assets/fonts/sora-regular.ttf',
      weight: '400',
      style: 'normal',
    },
  
  ],
  variable: '--font-sora',
})

// export const jetbrainsMono = localFont({
//   src: [
//     {
//       path: '../app/fonts/jetbrains-mono-regular.ttf',
//       weight: '400',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-jetbrains-mono',
// })
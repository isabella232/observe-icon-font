# observe-icon-font
> A combination of [maki](https://github.com/mapbox/maki), [temaki](https://github.com/bhousel/temaki), and [fontawesome](https://github.com/FortAwesome/Font-Awesome) icons for [Observe](https://github.com/developmentseed/observe)

## Updating the icons
1. `npm run get-svg`
1. Go to https://icomoon.io/app
1. Create a new set, and upload all the collecticons SVGs
1. Click **Generate Font**
1. Click **Preferences** and update font name to `ObserveIcons`
1. Download font. Unpack the zip and move the fonts directory and style.css file into the font directory in this repo
1. `npm run generate-component`

## License
[ISC](LICENSE.md)

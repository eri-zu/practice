//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from '_MyLibs/Util/Base.es6';

// import Render from './Render.es6';

export default class Controller extends Base {

  constructor() {

    super();

    this.name = 'Orientation';

    this.setup();
    this.setEvents();

  }

  setup() {

    // this.append();

    // this.r = new Render(this.$contents);

  }

  append() {

    var $wrap = $('#inner');
    var html = `<div id="landscape"><div class="logo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.8 45.24"><defs><style>.logo_svg1{fill:#d0b263}.logo_svg2{fill:#fff;stroke:#fff;stroke-miterlimit:10;stroke-width:.98px}</style></defs><title>logo</title><g id="レイヤー_2" data-name="レイヤー 2"><g id="Header"><path class="logo_svg1" d="M4.91,17.22c-1.9.16-3-.87-3-2.6V12.86l2-.17v1.79c0,.68.36,1,1,.94a1,1,0,0,0,1-1.1V5.91L8,5.73V14A3.09,3.09,0,0,1,4.91,17.22Z" /><path class="logo_svg1" d="M9.59,16.57v-11l2.12-.18v11Z" /><path class="logo_svg1" d="M20.12,15.67v-8l-.46,2.43-1.21,5.68L16.84,16,15.7,10.48l-.45-2.35v8l-1.9.16v-11L16.21,5l1.18,5.47.36,2,.37-2.06,1.16-5.67,2.84-.24v11Z" /><path class="logo_svg1" d="M30.31,14.81l-3.59.3v-11l3.55-.3c1.56-.14,2.51.59,2.51,2.1V7.13a1.82,1.82,0,0,1-1.35,2,1.56,1.56,0,0,1,1.41,1.75v1.43A2.44,2.44,0,0,1,30.31,14.81Zm.44-8.54c0-.5-.22-.78-.75-.73l-1.15.1v3l1.06-.09a.82.82,0,0,0,.84-.93Zm0,4.59c0-.58-.3-.85-.84-.8l-1.1.09v3.1l1.2-.1c.53-.05.74-.34.74-.86Z" /><path class="logo_svg1" d="M34.33,14.47v-11L39.77,3V4.79l-3.32.28V7.79l2.29-.19V9.21l-2.29.2v3.05l3.32-.29V14Z" /><path class="logo_svg1" d="M45.63,13.5l-.37-2.12-2,.17-.41,2.19-2,.17L43.14,2.74l2.37-.2,2.28,10.78ZM44.3,5.61l-.77,4.3L45,9.79Z" /><path class="logo_svg1" d="M55.8,12.64v-8l-.46,2.43-1.21,5.67-1.61.14L51.38,7.44l-.45-2.35v8L49,13.21v-11L51.89,2l1.18,5.47.36,2L53.8,7.4,55,1.73l2.83-.24v11Z" /><path class="logo_svg1" d="M11.91,23.26V44.81l-5,.43V23.69L2,24.11V19.85l14.86-1.27v4.26Z" /><path class="logo_svg1" d="M27.83,43.46l-.89-5-4.74.41-1,5.16-4.66.39L22,18.14l5.59-.47L32.89,43ZM24.69,24.89,22.89,35l3.41-.29Z" /><path class="logo_svg1" d="M43.81,32.21l-3.25.28v9.88l-5,.43V17l8.23-.7c3.78-.32,6.07,1.58,6.07,5.3v4.34C49.88,29.6,47.59,31.89,43.81,32.21Zm1.25-10.14c0-1.28-.52-1.89-1.77-1.79l-2.73.23v8.26l2.73-.23c1.25-.11,1.77-.81,1.77-2.09Z" /><path class="logo_svg1" d="M55.77,33.87,54.4,34l-1.49-7.28V15.51l4.38-.37v11.2ZM53.2,41.3V36.8L57,36.48V41Z" /><path class="logo_svg2" d="M3.53,16.26c-1.89.16-3-.86-3-2.59V11.9l2-.17v1.8c0,.67.35,1,1,.93a1,1,0,0,0,1-1.1V5l2.13-.18v8.27A3.09,3.09,0,0,1,3.53,16.26Z" /><path class="logo_svg2" d="M8.21,15.61v-11l2.12-.18v11Z" /><path class="logo_svg2" d="M18.74,14.72v-8l-.46,2.43-1.21,5.67L15.46,15,14.32,9.52l-.45-2.35v8L12,15.29v-11l2.85-.25L16,9.54l.36,2,.38-2.06,1.16-5.67,2.83-.24v11Z" /><path class="logo_svg2" d="M28.93,13.85l-3.59.31v-11l3.55-.3c1.56-.13,2.52.59,2.52,2.11V6.17a1.83,1.83,0,0,1-1.35,2,1.57,1.57,0,0,1,1.4,1.75v1.43A2.44,2.44,0,0,1,28.93,13.85Zm.44-8.54c0-.5-.22-.77-.75-.73l-1.14.1v3l1.06-.09a.83.83,0,0,0,.83-.93Zm0,4.59c0-.57-.29-.84-.84-.8l-1.09.09v3.1l1.19-.1c.53,0,.74-.34.74-.85Z" /><path class="logo_svg2" d="M33,13.51v-11l5.44-.46V3.83l-3.32.29V6.83l2.29-.19V8.25l-2.29.2V11.5l3.32-.28v1.83Z" /><path class="logo_svg2" d="M44.25,12.55l-.37-2.13-2,.17-.41,2.19-2,.17L41.76,1.78l2.37-.2,2.28,10.78Zm-1.33-7.9L42.15,9l1.46-.12Z" /><path class="logo_svg2" d="M54.43,11.68v-8L54,6.15l-1.21,5.67L51.14,12,50,6.49l-.44-2.35v8l-1.9.16v-11L50.51,1l1.18,5.47.36,2,.38-2.06L53.59.78,56.43.54v11Z" /><path class="logo_svg2" d="M10.53,22.3V43.85l-5,.43V22.73l-4.94.42V18.89l14.86-1.27v4.27Z" /><path class="logo_svg2" d="M26.45,42.5l-.89-5-4.73.4-1,5.16-4.66.4,5.38-26.27,5.59-.48,5.34,25.36ZM23.32,23.93,21.51,34l3.41-.29Z" /><path class="logo_svg2" d="M42.43,31.26l-3.25.27v9.89l-5,.42V16l8.23-.7c3.78-.32,6.07,1.57,6.07,5.29V25C48.5,28.65,46.21,30.94,42.43,31.26Zm1.25-10.15c0-1.28-.52-1.89-1.77-1.78l-2.73.23v8.25l2.73-.23c1.25-.11,1.77-.81,1.77-2.09Z" /><path class="logo_svg2" d="M54.39,32.91,53,33l-1.48-7.28V14.55l4.37-.37v11.2Zm-2.57,7.43V35.85l3.77-.33V40Z" /><path d="M3.53,16.26c-1.89.16-3-.86-3-2.59V11.9l2-.17v1.8c0,.67.35,1,1,.93a1,1,0,0,0,1-1.1V5l2.13-.18v8.27A3.09,3.09,0,0,1,3.53,16.26Z" /><path d="M8.21,15.61v-11l2.12-.18v11Z" /><path d="M18.74,14.72v-8l-.46,2.43-1.21,5.67L15.46,15,14.32,9.52l-.45-2.35v8L12,15.29v-11l2.85-.25L16,9.54l.36,2,.38-2.06,1.16-5.67,2.83-.24v11Z" /><path d="M28.93,13.85l-3.59.31v-11l3.55-.3c1.56-.13,2.52.59,2.52,2.11V6.17a1.83,1.83,0,0,1-1.35,2,1.57,1.57,0,0,1,1.4,1.75v1.43A2.44,2.44,0,0,1,28.93,13.85Zm.44-8.54c0-.5-.22-.77-.75-.73l-1.14.1v3l1.06-.09a.83.83,0,0,0,.83-.93Zm0,4.59c0-.57-.29-.84-.84-.8l-1.09.09v3.1l1.19-.1c.53,0,.74-.34.74-.85Z" /><path d="M33,13.51v-11l5.44-.46V3.83l-3.32.29V6.83l2.29-.19V8.25l-2.29.2V11.5l3.32-.28v1.83Z" /><path d="M44.25,12.55l-.37-2.13-2,.17-.41,2.19-2,.17L41.76,1.78l2.37-.2,2.28,10.78Zm-1.33-7.9L42.15,9l1.46-.12Z" /><path d="M54.43,11.68v-8L54,6.15l-1.21,5.67L51.14,12,50,6.49l-.44-2.35v8l-1.9.16v-11L50.51,1l1.18,5.47.36,2,.38-2.06L53.59.78,56.43.54v11Z" /><path d="M10.53,22.3V43.85l-5,.43V22.73l-4.94.42V18.89l14.86-1.27v4.27Z" /><path d="M26.45,42.5l-.89-5-4.73.4-1,5.16-4.66.4,5.38-26.27,5.59-.48,5.34,25.36ZM23.32,23.93,21.51,34l3.41-.29Z" /><path d="M42.43,31.26l-3.25.27v9.89l-5,.42V16l8.23-.7c3.78-.32,6.07,1.57,6.07,5.29V25C48.5,28.65,46.21,30.94,42.43,31.26Zm1.25-10.15c0-1.28-.52-1.89-1.77-1.78l-2.73.23v8.25l2.73-.23c1.25-.11,1.77-.81,1.77-2.09Z" /><path d="M54.39,32.91,53,33l-1.48-7.28V14.55l4.37-.37v11.2Zm-2.57,7.43V35.85l3.77-.33V40Z" /></g></g></svg></div><div class="box"><div class="tit"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420.5 85.15"><title>text_landscape</title><g id="レイヤー_2" data-name="レイヤー 2"><g id="content"><path d="M166.46,30.39l-14.92,1.3L148,28.47V24.11l3.82-.34v2.42l1.68,1.53,13-1.13Zm-.7-14.83-17.09,1.49V13.23l17.09-1.5Z" /><path d="M190.42,24.54l-3.6,4.07-3.51.3V25l1.56-.13,1.7-1.87v-7l-2.49-2.25-2.24.2V25.6l-2.58,3.67-5.62.49-3.39-3.69V15.5l4.64-5.09,10.84-.95,4.69,4.26ZM178.19,24V14.17l-1.72.16L174,17v7l1.38,1.64,1.79-.15Z" /><path d="M214.05,13l-1.67.15v6.29L207,26.48l-9.69.85V23.44l7.88-.69,3.26-4.32V13.48l-9,.79V20.1l-4,.35V14.61l-1.7.15v-4l1.7-.14V8.46l4-.35v2.15l9-.79V7.32l4-.35V9.12L214.05,9Z" /><path d="M237.19,8.76l-3.35.3-3.69,2.58V24.45l-4,.35V14.46l-5.28,3.7-4.39.38v-4l3.33-.29,12.94-9.1,4.42-.39Z" /><path d="M258.92,15.8l-5,.44-8.45-2.84v9.71l-3.91.34v-19l3.91-.35V9.21l9,3,4.43-.39Z" /><path d="M269.27,21.39l-3.82.34L262.53,19V2.25l3.82-.34v15l.86.79,2.06-.18Zm13.49-7.65-2.06.18v3.76l-2.85,3-5.36.47-3-2.56V14.2l3-3.23,4.37-.38V6.09l-8,.7V3l8-.7V.34L280.7,0V1.92l2.06-.18V5.57l-2.06.18v4.5l2.06-.18Zm-5.93,2.83V14.26l-2.8.24-.93.9v1.52l.93.78,1.83-.17Z" /><path d="M20,83.4l-4.82.43-4.82-5.15-5.27,6-5,.44v-4l3.26-.29L13.4,69.65v-.72L.16,70.08V66.24L18,64.68V70l-5,5.76Z" /><path d="M41.83,71.55l-8.53,6.5,2.37,4-4.55.4-5.74-10,4.32-.38L31.44,75l6.38-5v-3L22.18,68.29v-4l19.65-1.72Z" /><path d="M64.08,72.12,46,73.7V69.61L64.08,68Z" /><path d="M86.69,71.43l-5,.44L73.29,69v9.71l-3.92.34v-19l3.92-.35v5.14l9,3,4.44-.39Z" /><path d="M108.12,67,102,76.23l-11.84,1v-4l9.85-.87,4.14-6.11V61.8L89.29,63.1v-4l18.83-1.65Z" /><path d="M128.27,64.4l-2.09.18v9.53l-3.44.3V64.88l-2.26.2L117.2,74.9l-3.89.34V71.8l1.51-.14,2.06-6.27-3.69.33V62.25l9.55-.83V59.74l3.44-.3v1.68l2.09-.18Z" /><path d="M151.53,65.17l-6.81,7.32-11.95,1v-4l10.32-.91,4.46-4.75V53.21l4-.35Zm-9.87-6.24-8.58.75v-4l8.58-.75Z" /><path d="M175.56,61.94l-4.64.4.59,2.44-3.81.33-.61-2.43-5.75.5-1.47,1.42v2.06l1.25,1,13.55-1.19v3.78l-15.18,1.33-3.49-3V63.1l3.85-3.52V56.84l-4.62.4v-3.8l4.62-.41v-1.9l4-.34v1.9l11.07-1v3.8l-11.07,1v2.67l11.75-1Z" /><path d="M180.8,63l-.59,6.57h-2l.59-6.57Zm10.89-7.54L189,60.92l1.07-.09v8.49l-2.45.21V62.81l-2-.87.14-.26-1.16.23-.11-.85-.93.09v8.73l-2.4.21V61.36l-2.69.23V59l2-3-1.95-.54V52.51L181,48.58l2.15,1-2.29,3.62,1.23.34,2.53-3.91,2.13,1-5.14,8.17,2.63-.23-.23-2,2-.44.48,4.19,3-5.86ZM186.5,68.88l-2,.36-.57-6.47,2-.36Zm4.85-20.23-3.78,7.62-2.38-1,3.87-7.6Zm9.21,17.14-1,2.92-6.75-1.88-.25,2-2.22-.12,1.36-11.33,2.29.08-.79,6.34,1.45.41V54.36l-3.15.27V51.94l1.38-.12L192,48.25l2.29-.74,1,4.1,1.36-.12,1-4.28,2.29.35L199,51.28l1.13-.1v2.7l-2.87.25V57.5l2.4-.21V60l-2.4.21v4.64Z" /><path d="M209.7,67.17l-3.4.29-2.92-2.71V48l3.83-.33v15l.86.76,1.63-.14Zm13.55-1.35-10.41.91-3-2.79V59.3l3.76-.33v2.72l1.2,1.07,8.48-.74Zm-.11-14.45-13.31,1.16v-3.8l13.31-1.16Z" /><path d="M245.26,59.48l-4.55,5-9,.79-4.58-4.15V45.43l3.85-.34v14l2.36,2.12,5.74-.5,2.31-2.53V55.27l3.9-.34Z" /><path d="M267.94,47.09l-10.35.9-3.39,3.4v5.34l3.19,2.44,8.6-.76v3.83l-10.16.89-5.48-4.48V50.3l2-1.85-4.67.41V45l20.31-1.78Z" /><path d="M289.82,60.15,274.9,61.46l-3.55-3.22V53.87l3.83-.33V56l1.67,1.53,13-1.14Zm-4.66-14.48L272,46.82V43l13.13-1.15ZM291,42.8l-4.8.42V40.07l4.8-.42Zm0,4.28-4.8.42V44.33l4.8-.42Z" /><path d="M304.48,46.74l-10.34.91V39.41l10.34-.91v1.74l-2.08.19v.63l2.08-.18v3.46l-2.08.18v.68l2.08-.18ZM314.92,58.3l-9.8.86V55.81l-4.26.37.88.94-4.07,3.37-2-2.07,2.54-2-3.24.29V48.21l18.63-1.63v8.49l-4.91.43v.86l6.27-.55Zm-15.12-17v-.64l-2.49.22v.64Zm1.74,1.93v-.68l-4.23.37v.68Zm-1.74,2.21v-.68l-2.49.22v.68ZM310,49.18v-.64l-11.52,1v.63Zm0,2.28v-.68l-11.52,1v.68Zm0,2.27v-.64l-11.52,1v.63Zm4.92-12.45-7,.61-.59,1.43-2.81-.93,2-4.79,2.88.82-.32.7,5.89-.51Zm-.59,4.17-8.49.74V43.63l8.49-.74Z" /><path d="M336.24,56.09l-6.29.55-11.72-6V45.13L330,36.91l6.29-.55v3.87l-5,.44L322,47.16v.72l9.37,4.77,4.91-.43Z" /><path d="M356.41,38.73l-3.08.27v.93l-7.83.69-.88,14.74-3.8.33L341.68,41l-1.5.13v-3.8l1.73-.15.11-1.94,3.82-.33-.11,1.93,7.56-.66V34.21l3.12-.27Zm3.08,15.33-9.71.85-3-2.77V48.48l3.87-.34V50.2l1,.95,7.88-.69Zm0-9.33-12.67,1.11V42.27l12.67-1.11Zm1.18-6.37-3.15.28v-4.8l3.15-.28Z" /><path d="M384.16,38l-4.07.35.41,6.51-11.84,1-.88,1v1.83l.88.78,13.13-1.14v3.8l-14.67,1.28L364,50.57v-4.8l3.31-3.6,9-.79-.18-2.72-12.25,1.07V35.91l12-1-.16-2.61,4-.35.18,2.61,4.3-.38Z" /><path d="M396.74,50.8l-5.43.48-3.49-3.23V32.39l3.83-.34V46.13l1.4,1.28,3.69-.32Zm10-2.87-3.83.34v-12L401.52,35,398,35.3V31.56l5.21-.45,3.51,3.27Z" /><path d="M420.5,46.14l-2.9,3.15-4.14.36L410.54,47V42.92l2.92-3.18,4.14-.36,2.9,2.69Zm-2.51-.8v-2L416.54,42l-2,.18-1.45,1.58v2l1.45,1.35,2-.18Z" /></g></g></svg></div><div class="img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 182.99 193.43"><defs><style>.landscape_svg1,.landscape_svg2,.landscape_svg3,.landscape_svg8{fill:none;stroke:#000;stroke-width:3px}.landscape_svg1,.landscape_svg2,.landscape_svg3{stroke-miterlimit:10}.landscape_svg2{stroke-dasharray:5.62 5.62}.landscape_svg3{stroke-dasharray:6.02 6.02}.landscape_svg4{fill:#ccc}.landscape_svg5{fill:#4d4d4d}.landscape_svg6{fill:#ffeb01}.landscape_svg7{fill:gray}.landscape_svg8{stroke-linejoin:round}.landscape_svg9{fill:#333}.landscape_svg10{fill:#1a1a1a}</style></defs><title>landscape</title><g id="レイヤー_2" data-name="レイヤー 2"><g id="content"><polyline class="landscape_svg1" points="4.49 146.73 1.5 146.99 1.5 143.99" /><line class="landscape_svg2" x1="1.5" y1="138.37" x2="1.5" y2="62.55" /><polyline class="landscape_svg1" points="1.5 59.74 1.5 56.74 4.49 56.48" /><line class="landscape_svg3" x1="10.49" y1="55.96" x2="175.5" y2="41.52" /><polyline class="landscape_svg1" points="178.5 41.26 181.49 41 181.49 44" /><line class="landscape_svg2" x1="181.49" y1="49.61" x2="181.49" y2="125.44" /><polyline class="landscape_svg1" points="181.49 128.24 181.49 131.24 178.5 131.5" /><line class="landscape_svg3" x1="172.5" y1="132.03" x2="7.49" y2="146.47" /><polygon class="landscape_svg4" points="142.12 185.54 51.87 193.44 51.87 13.45 142.12 5.55 142.12 185.54" /><polygon class="landscape_svg5" points="136.62 180.04 46.37 187.94 46.37 7.95 136.62 0.05 136.62 180.04" /><polygon class="landscape_svg6" points="130.81 151.97 52.18 158.85 52.18 21.92 130.81 15.04 130.81 151.97" /><path class="landscape_svg7" d="M99.1,164.17,83.89,165.5a5.3,5.3,0,0,0-4.75,5.17A4.28,4.28,0,0,0,83.89,175l15.21-1.33a5.29,5.29,0,0,0,4.75-5.16A4.29,4.29,0,0,0,99.1,164.17Z" /><path class="landscape_svg8" d="M175.13,25.08a15.83,15.83,0,0,0-17.55-16l-3.53.31" /><polyline class="landscape_svg8" points="160.32 15.1 154.05 9.38 160.32 2.56" /><path class="landscape_svg8" d="M11,162.89a15.82,15.82,0,0,0,17.55,16l3.53-.31" /><polyline class="landscape_svg8" points="25.81 172.87 32.08 178.59 25.81 185.41" /><polygon class="landscape_svg9" points="136.99 0 141.99 6 141.99 185 136.62 180.04 136.99 0" /><polygon class="landscape_svg10" points="46.37 187.94 51.87 193.44 142.12 185.54 136.62 180.04 46.37 187.94" /></g></g></svg></div></div></div>`;

    $wrap.append(html);

  }

  setEvents() {


  }

}
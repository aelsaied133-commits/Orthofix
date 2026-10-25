import * as React from 'react';

type P = React.SVGProps<SVGSVGElement> & { size?: number | string; strokeWidth?: number | string };
const mk = (name: string, nodes: React.ReactNode) => {
  const C = ({ size = 24, strokeWidth = 2, className, ...rest }: P) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true" {...rest}>{nodes}</svg>
  );
  C.displayName = name;
  return C;
};
const p = (d: string, k?: number) => <path key={k} d={d} />;
const c = (cx: number, cy: number, r: number, k?: number) => <circle key={k} cx={cx} cy={cy} r={r} />;
const l = (x1: number, y1: number, x2: number, y2: number, k?: number) => <line key={k} x1={x1} y1={y1} x2={x2} y2={y2} />;
const r = (x: number, y: number, w: number, h: number, rx = 2, k?: number) => <rect key={k} x={x} y={y} width={w} height={h} rx={rx} />;

export const AlertCircle = mk('AlertCircle', <>{c(12,12,10)}{l(12,8,12,12)}{l(12,16,12.01,16)}</>);
export const AlertTriangle = mk('AlertTriangle', <>{p('m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3')}{l(12,9,12,13)}{l(12,17,12.01,17)}</>);
export const ArrowDown = mk('ArrowDown', <>{p('M12 5v14')}{p('m19 12-7 7-7-7')}</>);
export const ArrowRight = mk('ArrowRight', <>{p('M5 12h14')}{p('m12 5 7 7-7 7')}</>);
export const ArrowUp = mk('ArrowUp', <>{p('m5 12 7-7 7 7')}{p('M12 19V5')}</>);
export const Check = mk('Check', p('M20 6 9 17l-5-5'));
export const CheckCircle2 = mk('CheckCircle2', <>{c(12,12,10)}{p('m9 12 2 2 4-4')}</>);
export const Columns = mk('Columns', <>{r(3,3,18,18,2)}{l(12,3,12,21)}</>);
export const Compass = mk('Compass', <>{c(12,12,10)}{p('m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z')}</>);
export const Copy = mk('Copy', <>{r(8,8,14,14,2)}{p('M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2')}</>);
export const Cpu = mk('Cpu', <>{r(4,4,16,16,2)}{r(9,9,6,6,1)}{p('M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2')}</>);
export const Crosshair = mk('Crosshair', <>{c(12,12,10)}{l(22,12,18,12)}{l(6,12,2,12)}{l(12,6,12,2)}{l(12,22,12,18)}</>);
export const Database = mk('Database', <><ellipse cx="12" cy="5" rx="9" ry="3" />{p('M3 5v14a9 3 0 0 0 18 0V5')}{p('M3 12a9 3 0 0 0 18 0')}</>);
export const Download = mk('Download', <>{p('M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4')}{p('m7 10 5 5 5-5')}{p('M12 15V3')}</>);
export const Edit3 = mk('Edit3', <>{p('M12 20h9')}{p('M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z')}</>);
export const Eye = mk('Eye', <>{p('M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z')}{c(12,12,3)}</>);
export const EyeOff = mk('EyeOff', <>{p('M9.88 9.88a3 3 0 1 0 4.24 4.24')}{p('M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68')}{p('M6.61 6.61A13.53 13.53 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61')}{l(2,2,22,22)}</>);
export const FileText = mk('FileText', <>{p('M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z')}{p('M14 2v4a2 2 0 0 0 2 2h4')}{p('M10 9H8')}{p('M16 13H8')}{p('M16 17H8')}</>);
export const FolderOpen = mk('FolderOpen', p('m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2'));
export const HardDrive = mk('HardDrive', <>{l(22,12,2,12)}{p('M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z')}{l(6,16,6.01,16)}{l(10,16,10.01,16)}</>);
export const Image = mk('Image', <>{r(3,3,18,18,2)}{c(9,9,2)}{p('m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21')}</>);
export const Layers = mk('Layers', <>{p('m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z')}{p('m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65')}{p('m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65')}</>);
export const Layout = mk('Layout', <>{r(3,3,18,18,2)}{l(3,9,21,9)}{l(9,21,9,9)}</>);
export const Lock = mk('Lock', <>{r(3,11,18,11,2)}{p('M7 11V7a5 5 0 0 1 10 0v4')}</>);
export const MapPin = mk('MapPin', <>{p('M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z')}{c(12,10,3)}</>);
export const Maximize2 = mk('Maximize2', <>{p('M15 3h6v6')}{p('m21 3-7 7')}{p('m3 21 7-7')}{p('M9 21H3v-6')}</>);
export const Minimize2 = mk('Minimize2', <>{p('m14 10 7-7')}{p('M20 10h-6V4')}{p('m3 21 7-7')}{p('M4 14h6v6')}</>);
export const Monitor = mk('Monitor', <>{r(2,3,20,14,2)}{l(8,21,16,21)}{l(12,17,12,21)}</>);
export const MousePointer = mk('MousePointer', <>{p('m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z')}{p('m13 13 6 6')}</>);
export const Move = mk('Move', <>{p('m5 9-3 3 3 3')}{p('m9 5 3-3 3 3')}{p('m15 19-3 3-3-3')}{p('m19 9 3 3-3 3')}{l(2,12,22,12)}{l(12,2,12,22)}</>);
export const Palette = mk('Palette', <>{c(13.5,6.5,.5)}{c(17.5,10.5,.5)}{c(8.5,7.5,.5)}{c(6.5,12.5,.5)}{p('M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.65-.75 1.65-1.69 0-.44-.17-.83-.44-1.12-.27-.29-.44-.68-.44-1.1a1.64 1.64 0 0 1 1.67-1.67H16c3.05 0 5.5-2.45 5.5-5.5C21.5 6 17.5 2 12 2z')}</>);
const panel = (name: string, line: [number,number,number,number], arrow: string) =>
  mk(name, <>{r(3,3,18,18,2)}{l(...line)}{p(arrow)}</>);
export const PanelLeftClose = panel('PanelLeftClose', [9,3,9,21], 'm16 15-3-3 3-3');
export const PanelLeftOpen = panel('PanelLeftOpen', [9,3,9,21], 'm14 9 3 3-3 3');
export const PanelRightClose = panel('PanelRightClose', [15,3,15,21], 'm8 9 3 3-3 3');
export const PanelRightOpen = panel('PanelRightOpen', [15,3,15,21], 'm10 15-3-3 3-3');
export const Play = mk('Play', <polygon points="6 3 20 12 6 21 6 3" />);
export const Plus = mk('Plus', <>{p('M5 12h14')}{p('M12 5v14')}</>);
export const Presentation = mk('Presentation', <>{p('M2 3h20')}{p('M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3')}{p('m7 21 5-5 5 5')}</>);
export const Redo2 = mk('Redo2', <>{p('m15 14 5-5-5-5')}{p('M20 9H9.5A5.5 5.5 0 0 0 4 14.5 5.5 5.5 0 0 0 9.5 20H13')}</>);
export const Undo2 = mk('Undo2', <>{p('M9 14 4 9l5-5')}{p('M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5 5.5 5.5 0 0 1-5.5 5.5H11')}</>);
export const RotateCcw = mk('RotateCcw', <>{p('M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8')}{p('M3 3v5h5')}</>);
export const RotateCw = mk('RotateCw', <>{p('M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8')}{p('M21 3v5h-5')}</>);
export const Ruler = mk('Ruler', <>{p('M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z')}{p('m14.5 12.5 2-2')}{p('m11.5 9.5 2-2')}{p('m8.5 6.5 2-2')}{p('m17.5 15.5 2-2')}</>);
export const Scissors = mk('Scissors', <>{c(6,6,3)}{c(6,18,3)}{l(20,4,8.12,15.88)}{l(14.47,14.48,20,20)}{l(8.12,8.12,12,12)}</>);
export const Search = mk('Search', <>{c(11,11,8)}{p('m21 21-4.3-4.3')}</>);
export const ShieldAlert = mk('ShieldAlert', <>{p('M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z')}{l(12,8,12,12)}{l(12,16,12.01,16)}</>);
export const Slash = mk('Slash', p('M22 2 2 22'));
export const Sliders = mk('Sliders', <>{l(4,21,4,14)}{l(4,10,4,3)}{l(12,21,12,12)}{l(12,8,12,3)}{l(20,21,20,16)}{l(20,12,20,3)}{l(2,14,6,14)}{l(10,8,14,8)}{l(18,16,22,16)}</>);
export const Smartphone = mk('Smartphone', <>{r(5,2,14,20,2)}{l(12,18,12.01,18)}</>);
export const Sparkles = mk('Sparkles', <>{p('M9.94 14.06 8 20l-1.94-5.94L0 12l6.06-2.06L8 4l1.94 5.94L16 12z')}{p('M20 3v4M22 5h-4')}{p('M20 17v4M22 19h-4')}</>);
export const Sun = mk('Sun', <>{c(12,12,4)}{p('M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41')}</>);
export const Tag = mk('Tag', <>{p('M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z')}{c(7.5,7.5,.5)}</>);
export const Trash2 = mk('Trash2', <>{p('M3 6h18')}{p('M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6')}{p('M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2')}{l(10,11,10,17)}{l(14,11,14,17)}</>);
export const Unlock = mk('Unlock', <>{r(3,11,18,11,2)}{p('M7 11V7a5 5 0 0 1 9.9-1')}</>);
export const Upload = mk('Upload', <>{p('M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4')}{p('m17 8-5-5-5 5')}{p('M12 3v12')}</>);
export const Wifi = mk('Wifi', <>{p('M12 20h.01')}{p('M2 8.82a15 15 0 0 1 20 0')}{p('M5 12.859a10 10 0 0 1 14 0')}{p('M8.5 16.429a5 5 0 0 1 7 0')}</>);
export const WifiOff = mk('WifiOff', <>{p('M12 20h.01')}{p('M8.5 16.429a5 5 0 0 1 7 0')}{p('M5 12.859a10 10 0 0 1 5.17-2.69')}{p('M19 12.859a10 10 0 0 0-2.007-1.523')}{p('M2 8.82a15 15 0 0 1 4.177-2.643')}{p('M22 8.82a15 15 0 0 0-11.288-3.764')}{l(2,2,22,22)}</>);
export const X = mk('X', <>{p('M18 6 6 18')}{p('m6 6 12 12')}</>);
export const ZoomIn = mk('ZoomIn', <>{c(11,11,8)}{l(21,21,16.65,16.65)}{l(11,8,11,14)}{l(8,11,14,11)}</>);
export const ZoomOut = mk('ZoomOut', <>{c(11,11,8)}{l(21,21,16.65,16.65)}{l(8,11,14,11)}</>);

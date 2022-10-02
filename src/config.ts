import { SCALE_PIXELS } from '@collboard/modules-sdk';
import { Vector } from 'xyzt';
import { IFrameConfig } from './interfaces/IFrameConfig';

/**
 * Configuration of all frames - paper sizes, screen sizes,...
 *
 * Note: Not scaling one paper size, because papers are not rounded exactly
 */
export const FRAMES: Array<IFrameConfig> = [
    {
        icon: '📄',
        name: 'paper-a2',
        title: { en: 'A2', cs: 'A2' },
        description: { en: 'Paper A2', cs: 'Papír A2' },
        size: new Vector(42.0, 59.4).scale(SCALE_PIXELS.centimeter),
    },
    {
        icon: '📄',
        name: 'paper-a3',
        title: { en: 'A3', cs: 'A3' },
        description: { en: 'Paper A3', cs: 'Papír A3' },
        size: new Vector(29.7, 42.0).scale(SCALE_PIXELS.centimeter),
    },
    {
        icon: '📄',
        name: 'paper-a4',
        title: { en: 'A4', cs: 'A4' },
        description: { en: 'Paper A4', cs: 'Papír A4' },
        size: new Vector(21, 29.7).scale(SCALE_PIXELS.centimeter),
    },
    {
        icon: '📄',
        name: 'paper-a5',
        title: { en: 'A5', cs: 'A5' },
        description: { en: 'Paper A5', cs: 'Papír A5' },
        size: new Vector(14.8, 21.0).scale(SCALE_PIXELS.centimeter),
    },
    {
        icon: '🖥️',
        name: 'screen-fullhd',
        title: { en: 'FullHD', cs: 'Full HD' },
        description: { en: 'FullHD Obrazovka', cs: 'FullHD Obrazovka' },
        size: new Vector(1920, 1080),
    },

    // TODO: Add screen sizes + american papers
];

/**
 * TODO: American paper sizes
 * TODO: Presentation slides
 * TODO: Maybe include (sub)cathegories like papers(/a)(/b)(/eu)(/american), screens,...
 * TODO: Generate automatically all from the table:
 *       @see https://cs.wikipedia.org/wiki/Form%C3%A1t_pap%C3%ADru
 */

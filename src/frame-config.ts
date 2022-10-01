import { Vector } from 'xyzt';
import { SCALE_PIXELS } from '../../../config';
import { IPaperConfig } from './interfaces/IPaperConfig';

// Note: I am not scaling one paper size, because papers are rounded exactly
// @see https://cs.wikipedia.org/wiki/Form%C3%A1t_pap%C3%ADru
// TODO: Generate automatically all from the table
export const PAPERS: Array<IPaperConfig> = [
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

    // American paper sizes

    {
        icon: '🖥️',
        name: 'screen-fullhd',
        title: { en: 'FullHD', cs: 'Full HD' },
        description: { en: 'FullHD Obrazovka', cs: 'FullHD Obrazovka' },
        size: new Vector(1920, 1080),
    },

    // TODO: Add screen sizes + american papers
];

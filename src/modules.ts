import { Authors, declareModule, FrameArt } from '@collboard/modules-sdk';
import { Vector } from 'xyzt';
import { name as packageName } from '../package.json';
import { FRAMES } from './config';

for (const { name: paperName, title, description, icon, size } of FRAMES) {
    declareModule({
        manifest: {
            // collboard/background-frames
            name: `${packageName}/${paperName}`,
            deprecatedNames: [`Paper${name}Module`, `@collboard/frame-${name}`],
            title,
            description,
            categories: ['Template', 'Art', 'Productivity'],
            icon,
            author: Authors.hejny,
        },
        /* eslint-disable no-loop-func */
        async setup(systems) {
            const { translationsSystem, virtualArtVersioningSystem } = await systems.request(
                'translationsSystem',
                'virtualArtVersioningSystem',
            );

            return virtualArtVersioningSystem
                .createPrimaryOperation()
                .newArts(
                    new FrameArt(size, translationsSystem.pickStringMessage(title)).setShift(
                        new Vector(size).half().scale(-1),
                    ),
                )
                .persist(/* Note: This is a virtual operation but we want still to keep same API. */);
        },
    });
}

/**
 * TODO: Also make movable frames (not as a virtualArt module BUT as a tool module which creates materialArts) this should working together with current virtual one made from same FRAMES configuration
 * TODO: Maybe a maker for this - makeFrameModule (same in all @collboard/background-* repositories)
 */

import { Vector } from 'xyzt';
import { Authors } from '../../../50-systems/ModuleStore/Authors';
import { internalModules } from '../../../50-systems/ModuleStore/internalModules';
import { FrameArt } from '../../../71-arts/50-FrameArt';
import { PAPERS } from './frame-config';

for (const { name, title, description, icon, size } of PAPERS) {
    internalModules.declareModule({
        manifest: {
            name: `@collboard/frame-${name}`,
            deprecatedNames: `Paper${name}Module`,
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
 * TODO: !! Move to external repo https://github.com/collboard/frames
 */

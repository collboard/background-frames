import { IStringMessage, string_char_emoji, string_url_image } from '@collboard/modules-sdk';
import { IVectorData } from 'xyzt';

export interface IFrameConfig {
    /**
     * Unique name of the paper used in a module name
     */
    name: string;

    /**
     * Title to display in the UI and module store
     */
    title: IStringMessage;

    /**
     * Description to display in the module store
     */
    description: IStringMessage;

    icon: string_url_image | string_char_emoji;

    /**
     * Size in pixels
     * Note: If you want to use different units like centimeters, you need to scale it
     */
    size: IVectorData;
}

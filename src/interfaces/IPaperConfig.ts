import { IVectorData } from 'xyzt';
import { string_char_emoji } from '../../../../40-utils/typeAliasEmoji';
import { string_url_image } from '../../../../40-utils/typeAliases';
import { IStringMessage } from '../../../../50-systems/TranslationsSystem/interfaces/IMessage';

export interface IPaperConfig {
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
